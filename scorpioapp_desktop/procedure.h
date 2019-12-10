#pragma once

#include <Windows.h>
#include <commdlg.h>
#include <string.h>

#ifndef _PROCEDURE_H
#define _PROCEDURE_H

// Message handler.
INT_PTR CALLBACK About(STD_PARAM_PROC)
{
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		WinDrawText(GetVersionInfo(), hWnd, RGBBLACK, 15, FONT_STD_REG, 345, 315, 40, 40, TRUE, DT_NOCLIP | DT_SINGLELINE);
		WinDrawText(
			"Scorp.io is an application developed by Alfian Badrul Isnan\n"
			"and Idham Ramadito in the project of advanced program-\n"
			"ming subject, Computer Engineering, Engineering Faculty\nof Universitas Indonesia.\n\n"
			"Scorp.io was formed with the idea of Internet of Things\n"
			"based on the development of industry 4.0. The application\n"
			"provides clients on the Android platform and web base,\n"
			"User can download from our website.\n\n"
			"Scorp.io uses Firebase's Real-Time Database by Google,\n"
			"application development on the Android and Web plat-\n"
			"forms uses Google's Flutter.\n\n"
			"This application is suitable for forming large group con-\n"
			"figurations, making beautifu land uniformly controlled\n"
			"formations in a desktop server with Real-Time database.\n\n"
			"do not hesitate to give feedback on us so that our apps\n"
			"can develop better."
			, hWnd, RGBBLACK, 13, FONT_STD_REG, 218, 20, 40, 40, TRUE, DT_LEFT | DT_NOCLIP);
	}
		 return (INT_PTR)TRUE;
	case WM_INITDIALOG: {

		return (INT_PTR)TRUE;
	}
	case WM_COMMAND:
		if (LOWORD(wParam) == IDCANCEL)
		{
			EndDialog(hWnd, LOWORD(wParam));
			return (INT_PTR)TRUE;
		}
		break;
	}
	return (INT_PTR)FALSE;
}

INT_PTR CALLBACK Proc_Loading(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {

		return (INT_PTR)TRUE;
	}
	case WM_LOADING_DESTROY: {
		EndDialog(hWnd, LOWORD(wParam));
		return (INT_PTR)TRUE;
	}
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

int ping_delay = 0;
int ping_delay_dump = 0;
INT_PTR CALLBACK Proc_Const(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {
		if (http_thUpdate == NULL) http_thUpdate = makeHTTP(GET, DB_DOMAIN, FCH("/ServerID/%d/User.json", hServ.server_id), PORT_HTTPS);
		else updateHTTP(http_thUpdate, GET, FCH("/ServerID/%d/User.json", hServ.server_id));
		SendMessageA(GetDlgItem(hWnd, IDC_SLIDER_PING), TBM_SETRANGEMIN, FALSE, 0);
		SendMessageA(GetDlgItem(hWnd, IDC_SLIDER_PING), TBM_SETRANGEMAX, FALSE, 10);
		return (INT_PTR)TRUE;
	}
	case WM_SHOWWINDOW: {
		hThread[HTH_CONST] = CreateThread(0, 0, thUpdateConst, 0, 0, 0);
		if(ping_delay==0) SetDlgItemTextA(hWnd, IDC_PING, "async");
		else SetDlgItemTextA(hWnd, IDC_PING, FCH("%d s", ping_delay));
		SendMessageA(GetDlgItem(hWnd, IDC_SLIDER_PING), TBM_SETPOS, TRUE, ping_delay);
		return (INT_PTR)TRUE;
	}
	case WM_HSCROLL: {
		ping_delay_dump = SendMessageA(GetDlgItem(hWnd, IDC_SLIDER_PING), TBM_GETPOS, 0, 0);
		if (ping_delay_dump != ping_delay) {
			ping_delay = ping_delay_dump;
			if (ping_delay == 0) SetDlgItemTextA(hWnd, IDC_PING, "async");
			else SetDlgItemTextA(hWnd, IDC_PING, FCH("%d s", ping_delay));
		}
		break;
	}
	case WM_COMMAND:
		switch (LOWORD(wParam)) {
		case IDC_BUTTON1: {
			EndDialog(hWnd, LOWORD(wParam));
			break;
		}
		case IDC_FREE: {
			pokeHTTP(PUT, DB_DOMAIN, FCH("/ServerID/%d/User.json", hServ.server_id), PORT_HTTPS,"null");
			break;
		}
		case IDC_COLOR: {
			CHOOSECOLOR cc;
			// array of custom colors 
			ZeroMemory(&cc, sizeof(cc));
			cc.lStructSize = sizeof(cc);
			cc.hwndOwner = hWnd;
			cc.lpCustColors = (LPDWORD)acrCustClr;
			cc.rgbResult = acrCustClr[0];
			cc.Flags = CC_FULLOPEN | CC_RGBINIT;
			ChooseColor(&cc);
			for (int a = 14; a >= 0; a--) acrCustClr[a + 1] = acrCustClr[a];
			acrCustClr[0] = cc.rgbResult;
			_setColor(cc, ping_delay);
			break;
		}
		case IDC_TORCH: {
			torch = (torch == TRUE) ? FALSE : TRUE;
			SetDlgItemTextA(hWnd, IDC_TORCH, (torch==TRUE)?"Turn Off Torch":"Turn On Torch");
			_setTorch(torch, ping_delay);
			break;
		}
		case IDC_START: {
			hServ.state = !hServ.state;
			if (hServ.state == TRUE) {
				SwitchDBState(TRUE);
				SetDlgItemTextA(hWnd, IDC_START, "Stop");
			}
			else if (hServ.state == FALSE) {
				SwitchDBState(FALSE);
				SetDlgItemTextA(hWnd, IDC_START, "Start");
			}
			break;
		}
		}
		return (INT_PTR)TRUE;
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

INT_PTR CALLBACK Proc_CServ(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_CREATE: {
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {
		return (INT_PTR)TRUE;
	}
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_SHOWWINDOW:{
		hWndGlobal[IDW_COMBO_SERVER] = GetDlgItem(hWnd, IDC_COMBO2);
		SendMessage(hWndGlobal[IDW_COMBO_SERVER], CB_ADDSTRING, 0, (LPARAM)L"Static Constellation (0D)");
		SendMessage(hWndGlobal[IDW_COMBO_SERVER], CB_ADDSTRING, 0, (LPARAM)L"Linear Constellation (1D)");
		SendMessage(hWndGlobal[IDW_COMBO_SERVER], CB_ADDSTRING, 0, (LPARAM)L"Square Constellation (2D)");
		SendMessage(hWndGlobal[IDW_COMBO_SERVER], CB_SETCURSEL, (WPARAM)0, 0);
		SetDlgItemTextA(hWnd, IDC_EDIT4, "0");
		SetDlgItemTextA(hWnd, IDC_EDIT3, FCH("%u",time(NULL)));
		return (INT_PTR)TRUE;
	}
	case WM_COMMAND:
		if (HIWORD(wParam) == BN_CLICKED) {
			if (LOWORD(wParam) == IDC_BUTTON2) //Cancel
			{
				EndDialog(hWnd, LOWORD(wParam));
				return (INT_PTR)TRUE;
			}
			else if (LOWORD(wParam) == IDC_BUTTON1) //Create
			{
#ifndef _DEBUG_FIREBASE
				LPWSTR buf = (LPWSTR)calloc(sizeof(LPWSTR),32);
				int out = GetDlgItemText(hWnd, IDC_EDIT3, buf, 32);
				if (out <= 0 || out >= 32) {
					MessageBox(hWnd, L"Please Input Server Name (Max 32 Character)", L"Error", MB_OK | MB_ICONERROR);
					return(INT_PTR)TRUE;
				}
				else hServ.server_name = buf;
				int type = SendMessage(hWndGlobal[IDW_COMBO_SERVER], CB_GETCURSEL, 0, 0);
				if (type < 0) {
					MessageBox(hWnd, L"Please Select Constellation Type", L"Error", MB_OK | MB_ICONERROR);
					return(INT_PTR)TRUE;
				}
				else {
					hServ.type = type;
				}
				bool bSuccess = FALSE;         // variable for checking success
				int num = GetDlgItemInt(hWnd, IDC_EDIT4, &bSuccess, FALSE); // Get the number from IDC_NUM1
				if (bSuccess == FALSE) {    // If couldn't get value....
					MessageBox(hWnd, L"Please Input Maximum Client Value!", L"Error", MB_OK | MB_ICONERROR);
					return (INT_PTR)TRUE;
				}
				else if (bSuccess == TRUE) {
					hServ.max_client = num;
				}
#endif			
				if (hSessionCheck(hWnd)) {
					int x = inetCheck(hWnd);
					if (x == TRUE) {
						EndDialog(hWnd, LOWORD(wParam));
						if (IsWindowVisible(hWndGlobal[IDW_WIZ]) == TRUE) {
							ShowWindow(hWndGlobal[IDW_WIZ], SW_HIDE);
							PostMessage(hWndGlobal[IDW_MAINW], WM_SYSCOMMAND, SC_MAXIMIZE, 0);
						}
					}
				}else EndDialog(hWnd, LOWORD(wParam));
				return (INT_PTR)TRUE;
			}
		}
		if (LOWORD(wParam) == IDC_COMBO2) {
			if (HIWORD(wParam) == CBN_SELENDOK) {
			}
		}
		return (INT_PTR)TRUE;
	}
	return (INT_PTR)FALSE;
}

HWND* lastActiveWindow = 0;

int LastLoopCount = 3;
int LastDelay = 2500;
int LastDelayType = 0;
int LastFormation = 4;
int LastTransition = 0;


INT_PTR CALLBACK Proc_FormBars(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {
		HWND combox = GetDlgItem(hWnd, IDC_COMBO1);
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"Horizontal");
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"Vertical");
		SendMessage(combox, CB_SETCURSEL, (WPARAM)0, 0);
		return (INT_PTR)TRUE;
	}
	case WM_SHOWWINDOW: {
		
		return (INT_PTR)TRUE;
	}
	case WM_LOADING_DESTROY: {
		EndDialog(hWnd, LOWORD(wParam));
		return (INT_PTR)TRUE;
	}
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

INT_PTR CALLBACK Proc_FormImage(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {

		return (INT_PTR)TRUE;
	}
	case WM_SHOWWINDOW: {
		return (INT_PTR)TRUE;
	}
	case WM_LOADING_DESTROY: {
		EndDialog(hWnd, LOWORD(wParam));
		return (INT_PTR)TRUE;
	}
	case WM_COMMAND: {
		switch (LOWORD(wParam)) {//BUTTON
		case IDC_OPEN: {
			LPWSTR in = WinFileDialog(OPEN_BITMAP);
			if (in[0]!='\0') SetDlgItemTextW(hWnd, IDC_NAME, in);
		}
		}
		return (INT_PTR)TRUE;
	}
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

INT_PTR CALLBACK Proc_TransWipe(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {
		HWND combox = GetDlgItem(hWnd, IDC_COMBO1);
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"From Inside");
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"From Outside");
		SendMessage(combox, CB_SETCURSEL, (WPARAM)0, 0);
		combox = GetDlgItem(hWnd, IDC_COMBO3);
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"Horizontal");
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"Vertical");
		SendMessage(combox, CB_SETCURSEL, (WPARAM)0, 0);
		return (INT_PTR)TRUE;
	}
	case WM_SHOWWINDOW: {

		return (INT_PTR)TRUE;
	}
	case WM_LOADING_DESTROY: {
		EndDialog(hWnd, LOWORD(wParam));
		return (INT_PTR)TRUE;
	}
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

INT_PTR CALLBACK Proc_TransSplit(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {
		HWND combox = GetDlgItem(hWnd, IDC_COMBO1);
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"From Left");
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"From Right");
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"From Top/Back");
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"From Bottom/Front");
		SendMessage(combox, CB_SETCURSEL, (WPARAM)0, 0);
		return (INT_PTR)TRUE;
	}
	case WM_SHOWWINDOW: {

		return (INT_PTR)TRUE;
	}
	case WM_LOADING_DESTROY: {
		EndDialog(hWnd, LOWORD(wParam));
		return (INT_PTR)TRUE;
	}
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

INT_PTR CALLBACK Proc_CMD_Loop(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {
		SetDlgItemTextA(hWnd, IDC_EDIT5, FINTCH(LastLoopCount));
		return (INT_PTR)TRUE;
	}
	case WM_SHOWWINDOW: {
		SetDlgItemTextA(hWnd, IDC_EDIT3, FINTCH(GetRandomRange(1000, 9999)));
		return (INT_PTR)TRUE;
	}
	case WM_LOADING_DESTROY: {
		EndDialog(hWnd, LOWORD(wParam));
		return (INT_PTR)TRUE;
	}
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

INT_PTR CALLBACK Proc_CMD_Delay(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {
		HWND combox = GetDlgItem(hWnd, IDC_COMBO1);
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"ms");
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"s");
		return (INT_PTR)TRUE;
	}
	case WM_SHOWWINDOW:{
		HWND combox = GetDlgItem(hWnd, IDC_COMBO1);
		SendMessage(combox, CB_SETCURSEL, (WPARAM)LastDelayType, 0);
		SetDlgItemTextA(hWnd, IDC_EDIT3, FINTCH(LastDelay));
		return (INT_PTR)TRUE;
	}
	case WM_LOADING_DESTROY: {
		EndDialog(hWnd, LOWORD(wParam));
		return (INT_PTR)TRUE;
	}
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

INT_PTR CALLBACK Proc_CMD_Flash(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {
		hWndGlobal[IDW_FORM_BARS] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_FORM_IMAGE), hWnd, Proc_FormBars);
		hWndGlobal[IDW_TRANS_SPLIT2] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_TRANS_SPLIT), hWnd, Proc_TransSplit);
		hWndGlobal[IDW_TRANS_WIPE2] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_TRANS_WIPE), hWnd, Proc_TransWipe);
		HWND combox = GetDlgItem(hWnd, IDC_COMBO4);
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"ms");
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"s");
		combox = GetDlgItem(hWnd, IDC_COMBO1);
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Fill");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Bars");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Blink");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Checkboard");
		combox = GetDlgItem(hWnd, IDC_COMBO3);
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Cut");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Split");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Wipe");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Fade");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Random Points");
		return (INT_PTR)TRUE;
	}
	case WM_SHOWWINDOW:{
		if (LastFormation > 4) LastFormation--;
		HWND combox = GetDlgItem(hWnd, IDC_COMBO4);
		SendMessage(combox, CB_SETCURSEL, (WPARAM)LastDelayType, 0);
		combox = GetDlgItem(hWnd, IDC_COMBO1);
		SendMessage(combox, CB_SETCURSEL, (WPARAM)1, 0);
		combox = GetDlgItem(hWnd, IDC_COMBO3);
		SendMessage(combox, CB_SETCURSEL, (WPARAM)LastTransition, 0);
		SetDlgItemTextA(hWnd, IDC_EDIT1, FINTCH(LastDelay));
		if (LastFormation < 1) ShowWindow(hWndGlobal[IDW_FORM_BARS + LastFormation], SW_SHOW);
		combox = GetDlgItem(hWnd, IDC_COMBO3);
		SendMessage(combox, CB_SETCURSEL, (WPARAM)LastTransition, 0);
		if (LastTransition >= 3) ShowWindow(hWndGlobal[IDW_TRANS_SPLIT2 + (LastTransition - 3)], SW_SHOW);
		else if (LastTransition == 0) {
			EnableWindow(GetDlgItem(hWnd, IDC_EDIT1), FALSE);
			EnableWindow(GetDlgItem(hWnd, IDC_COMBO4), FALSE);
			EnableWindow(GetDlgItem(hWnd, IDC_SEQ), FALSE);
		}
		return (INT_PTR)TRUE;
	}
	case WM_LOADING_DESTROY: {
		EndDialog(hWnd, LOWORD(wParam));
		return (INT_PTR)TRUE;
	}
	case WM_COMMAND:
		if (HIWORD(wParam) == CBN_SELCHANGE)
		{
			int in = SendMessage((HWND)lParam, (UINT)CB_GETCURSEL, (WPARAM)0, (LPARAM)0);
			if ((HWND)lParam == GetDlgItem(hWnd, IDC_COMBO1)) {
				if (LastFormation < 1) ShowWindow(hWndGlobal[IDW_FORM_BARS + LastFormation], SW_HIDE);
				if (in < 1) ShowWindow(hWndGlobal[IDW_FORM_BARS + in], SW_SHOW);
				LastFormation = in;
			}
			else if ((HWND)lParam == GetDlgItem(hWnd, IDC_COMBO3)) {
				if (LastTransition >= 3) ShowWindow(hWndGlobal[IDW_TRANS_SPLIT2 + (LastTransition - 3)], SW_HIDE);
				if (in >= 3) ShowWindow(hWndGlobal[IDW_TRANS_SPLIT2 + (in - 3)], SW_SHOW);
				LastTransition = in;
				if (in == 0) {
					EnableWindow(GetDlgItem(hWnd, IDC_EDIT1), FALSE);
					EnableWindow(GetDlgItem(hWnd, IDC_COMBO4), FALSE);
					EnableWindow(GetDlgItem(hWnd, IDC_SEQ), FALSE);
				}
				else if (in != 0) {
					EnableWindow(GetDlgItem(hWnd, IDC_EDIT1), TRUE);
					EnableWindow(GetDlgItem(hWnd, IDC_COMBO4), TRUE);
					EnableWindow(GetDlgItem(hWnd, IDC_SEQ), TRUE);
				}
			}
		}
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

INT_PTR CALLBACK Proc_CMD_Screen(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {
		hWndGlobal[IDW_FORM_BARS1] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_FORM_IMAGE), hWnd, Proc_FormBars);
		hWndGlobal[IDW_FORM_IMAGE1] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_FORM_BARS), hWnd, Proc_FormImage);
		hWndGlobal[IDW_TRANS_SPLIT1] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_TRANS_SPLIT), hWnd, Proc_TransSplit);
		hWndGlobal[IDW_TRANS_WIPE1] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_TRANS_WIPE), hWnd, Proc_TransWipe);
		HWND combox = GetDlgItem(hWnd, IDC_COMBO4);
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"ms");
		SendMessage(combox, CB_ADDSTRING, 0, (LPARAM)L"s");
		combox = GetDlgItem(hWnd, IDC_COMBO1);
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Fill");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Bars");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Bitmap Image");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Blink");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Checkboard");
		combox = GetDlgItem(hWnd, IDC_COMBO3);
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Cut");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Split");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Wipe");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Fade");
		SendMessageW(combox, CB_ADDSTRING, 0, (LPARAM)L"Random Points");
		return (INT_PTR)TRUE;
	}
	case WM_SHOWWINDOW: {
		HWND combox = GetDlgItem(hWnd, IDC_COMBO4);
		SendMessage(combox, CB_SETCURSEL, (WPARAM)LastDelayType, 0);
		combox = GetDlgItem(hWnd, IDC_COMBO1);
		SendMessage(combox, CB_SETCURSEL, (WPARAM)LastFormation, 0);
		if (LastFormation < 2) ShowWindow(hWndGlobal[IDW_FORM_BARS1+LastFormation], SW_SHOW);
		combox = GetDlgItem(hWnd, IDC_COMBO3);
		SendMessage(combox, CB_SETCURSEL, (WPARAM)LastTransition, 0);
		if (LastTransition >= 3 ) ShowWindow(hWndGlobal[IDW_TRANS_SPLIT1 + (LastTransition-3)], SW_SHOW);
		SetDlgItemTextA(hWnd, IDC_EDIT1, FINTCH(LastDelay));
		SetDlgItemText(hWnd, IDC_EDIT2, LFCH("#%02x%02x%02x", GetRValue(acrCustClr[0]), GetGValue(acrCustClr[0]), GetBValue(acrCustClr[0])));
		if (LastTransition == 0) {
			EnableWindow(GetDlgItem(hWnd, IDC_EDIT1), FALSE);
			EnableWindow(GetDlgItem(hWnd, IDC_COMBO4), FALSE);
			EnableWindow(GetDlgItem(hWnd, IDC_SEQ), FALSE);
		}
		break;
		return (INT_PTR)TRUE;
	}
	case WM_COMMAND:
		switch (LOWORD(wParam)) {
		case IDC_COLORS: {
			CHOOSECOLOR cc;
			// array of custom colors 
			ZeroMemory(&cc, sizeof(cc));
			cc.lStructSize = sizeof(cc);
			cc.hwndOwner = hWnd;
			cc.lpCustColors = (LPDWORD)acrCustClr;
			cc.rgbResult = acrCustClr[0];
			cc.Flags = CC_FULLOPEN | CC_RGBINIT;
			ChooseColor(&cc);
			for (int a = 14; a >= 0; a--) acrCustClr[a + 1] = acrCustClr[a];
			acrCustClr[0] = cc.rgbResult;
			SetDlgItemText(hWnd, IDC_EDIT2, LFCH("#%02x%02x%02x", GetRValue(cc.rgbResult), GetGValue(cc.rgbResult), GetBValue(cc.rgbResult)));
			break;
		}
		}
		if (HIWORD(wParam) == CBN_SELCHANGE)
		{
			int in = SendMessage((HWND)lParam, (UINT)CB_GETCURSEL, (WPARAM)0, (LPARAM)0);
			if ((HWND)lParam == GetDlgItem(hWnd, IDC_COMBO1)) {
				if (in == 1) {
					EnableWindow(GetDlgItem(hWnd, IDC_STATIC), FALSE);
					EnableWindow(GetDlgItem(hWnd, IDC_EDIT2), FALSE);
					EnableWindow(GetDlgItem(hWnd, IDC_COLORS), FALSE);
				}
				else if(in!=1){
					EnableWindow(GetDlgItem(hWnd, IDC_STATIC), TRUE);
					EnableWindow(GetDlgItem(hWnd, IDC_EDIT2), TRUE);
					EnableWindow(GetDlgItem(hWnd, IDC_COLORS), TRUE);
				}
				if (LastFormation < 2) ShowWindow(hWndGlobal[IDW_FORM_BARS1 + LastFormation], SW_HIDE);
				if (in < 2) ShowWindow(hWndGlobal[IDW_FORM_BARS1 + in], SW_SHOW);
				LastFormation = in;
			}
			else if ((HWND)lParam == GetDlgItem(hWnd, IDC_COMBO3)) {
				if (in == 0) {
					EnableWindow(GetDlgItem(hWnd, IDC_EDIT1), FALSE);
					EnableWindow(GetDlgItem(hWnd, IDC_COMBO4), FALSE);
					EnableWindow(GetDlgItem(hWnd, IDC_SEQ), FALSE);
				}
				else if (in != 0) {
					EnableWindow(GetDlgItem(hWnd, IDC_EDIT1), TRUE);
					EnableWindow(GetDlgItem(hWnd, IDC_COMBO4), TRUE);
					EnableWindow(GetDlgItem(hWnd, IDC_SEQ), TRUE);
				}
				if (LastTransition >=3 ) ShowWindow(hWndGlobal[IDW_TRANS_SPLIT1 + (LastTransition-3)], SW_HIDE);
				if (in >= 3) ShowWindow(hWndGlobal[IDW_TRANS_SPLIT1 + (in-3)], SW_SHOW);
				LastTransition = in;
			}
		}
		return (INT_PTR)TRUE;
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

INT_PTR CALLBACK Proc_CMD_Parent(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_DROPFILES: {
		HDROP dDrop = (HDROP)wParam;
		wchar_t* path = malloc(sizeof(wchar_t)*128);
		char* ext = malloc(sizeof(char) * 128);
		DragQueryFile(dDrop, (UINT)0, path, (UINT)128);
		wcstombs(ext, path, 128);
		char* in = strstr(ext,".bmp");
		DragFinish(dDrop);
		if (in) {//is BMP
			if (lastActiveWindow == &hWndGlobal[IDW_CMD_SCREEN]) {
				HWND combox = GetDlgItem(hWndGlobal[IDW_CMD_SCREEN], IDC_COMBO1);
				int in = SendMessage(combox, CB_GETCURSEL, (WPARAM)0, 0);
				if (in != 1) {
					ShowWindow(hWndGlobal[IDW_FORM_BARS1 + in], SW_HIDE);
					SendMessage(combox, CB_SETCURSEL, (WPARAM)1, 0);
					ShowWindow(hWndGlobal[IDW_FORM_IMAGE1], SW_SHOW);
				}
				LastFormation = 1;
				SetDlgItemText(hWndGlobal[IDW_FORM_IMAGE1], IDC_NAME, path);
			}
			else {
				if(lastActiveWindow) ShowWindow(*lastActiveWindow, SW_HIDE);
				lastActiveWindow = &hWndGlobal[IDW_CMD_SCREEN];
				LastFormation = 1;
				HWND combox = GetDlgItem(hWndGlobal[IDW_CMD_PAR], IDC_COMBO2);
				SendMessage(combox, CB_SETCURSEL, (WPARAM)3, 0);
				ShowWindow(*lastActiveWindow, SW_SHOW);
				SetDlgItemText(hWndGlobal[IDW_FORM_IMAGE1], IDC_NAME, path);
			}
		}
		else {
			MessageBox(hWnd, L"The file type must be Bitmap Image (.bmp)", L"Wrong File Type", MB_OK | MB_ICONERROR);
		}
		free(path);
		free(ext);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {
		hWndGlobal[IDW_CMD_DLY] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_ADD_CMD_DELAY), hWnd, Proc_CMD_Delay);
		hWndGlobal[IDW_CMD_DLY+1] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_ADD_CMD_FLASH), hWnd, Proc_CMD_Flash);
		hWndGlobal[IDW_CMD_DLY+2] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_ADD_CMD_LOOP), hWnd, Proc_CMD_Loop);
		hWndGlobal[IDW_CMD_DLY+3] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_ADD_CMD_SCREEN), hWnd, Proc_CMD_Screen);
		return (INT_PTR)TRUE;
	}
	case WM_COMMAND:
		switch (LOWORD(wParam)) {
		case IDC_CANCEL: {
			EndDialog(hWnd, LOWORD(wParam));
			break;
		}
		case IDC_OK: {
		ENTERKEY:;
			HWND combox = GetDlgItem(hWnd, IDC_COMBO2);
			int in = SendMessage(combox, CB_GETCURSEL, 0, 0);
			switch (in)
			{
			case 0: {//Delay
				bool bSuccess = FALSE;
				int num = GetDlgItemInt(hWndGlobal[IDW_CMD_DLY], IDC_EDIT3, &bSuccess, FALSE);
				if (bSuccess == FALSE) {
					MessageBox(hWnd, L"Please input an integer value on delay box", L"Error", MB_OK | MB_ICONERROR);
					break;
				}
				if (SendMessage(GetDlgItem(hWndGlobal[IDW_CMD_DLY], IDC_COMBO1), CB_GETCURSEL, 0, 0) == 1) num *= 1000;
				AddSeqFile(SEQTYPE_DELAY, num, EOVA);
				dienub(hWndGlobal[IDW_SEQUENCER]);
				EndDialog(hWnd, LOWORD(wParam));
				break;
			}
			case 1: {//Flash
				bool bSuccess = FALSE;
				int transdly = GetDlgItemInt(hWndGlobal[IDW_CMD_FLASH], IDC_EDIT1, &bSuccess, FALSE);
				if (bSuccess == FALSE) {
					MessageBox(hWnd, L"Please input an integer value on delay box", L"Error", MB_OK | MB_ICONERROR);
					break;
				}
				if (SendMessage(GetDlgItem(hWndGlobal[IDW_CMD_FLASH], IDC_COMBO4), CB_GETCURSEL, 0, 0) == 1) transdly *= 1000;
				int type = SEQTYPE_FLASH;
				int form = SendMessage(GetDlgItem(hWndGlobal[IDW_CMD_FLASH], IDC_COMBO1), CB_GETCURSEL, 0, 0);
				int formprop = 0;
				if (form == 0) formprop = SendMessage(GetDlgItem(hWndGlobal[IDW_FORM_BARS], IDC_COMBO1), CB_GETCURSEL, 0, 0);
				int transition = SendMessage(GetDlgItem(hWndGlobal[IDW_CMD_FLASH], IDC_COMBO3), CB_GETCURSEL, 0, 0);
				int transprop1 = 0;
				int transprop2 = 0;
				if (transition == 3) {
					transprop1 = SendMessage(GetDlgItem(hWndGlobal[IDW_TRANS_SPLIT2], IDC_COMBO1), CB_GETCURSEL, 0, 0);
					transprop2 = SendMessage(GetDlgItem(hWndGlobal[IDW_TRANS_SPLIT2], IDC_COMBO3), CB_GETCURSEL, 0, 0);
				}
				else if (transition == 4) {
					transprop1 = SendMessage(GetDlgItem(hWndGlobal[IDW_TRANS_WIPE2], IDC_COMBO1), CB_GETCURSEL, 0, 0);
				}
				AddSeqFile(type, form, formprop, transition, transdly, transprop1, transprop2, EOVA);
				dienub(hWndGlobal[IDW_SEQUENCER]);
				EndDialog(hWnd, LOWORD(wParam));
				break;
			}
			case 2: {//Loop
				bool bSuccess = FALSE;
				int loopid = GetDlgItemInt(hWndGlobal[IDW_CMD_LOOP], IDC_EDIT3, &bSuccess, FALSE);
				if (bSuccess == FALSE) {
					MessageBox(hWnd, L"Please input an integer value on Loop ID box", L"Error", MB_OK | MB_ICONERROR);
					break;
				}
				bSuccess = FALSE;
				int count = GetDlgItemInt(hWndGlobal[IDW_CMD_LOOP], IDC_EDIT5, &bSuccess, FALSE);
				if (bSuccess == FALSE) {
					MessageBox(hWnd, L"Please input an integer value on Count box", L"Error", MB_OK | MB_ICONERROR);
					break;
				}
				AddSeqFile(SEQTYPE_LOOP, loopid, count, EOVA);
				dienub(hWndGlobal[IDW_SEQUENCER]);
				EndDialog(hWnd, LOWORD(wParam));
				break;
			}
			case 3: {//ScreenColor
				bool bSuccess = FALSE;
				int transdly = GetDlgItemInt(hWndGlobal[IDW_CMD_SCREEN], IDC_EDIT1, &bSuccess, FALSE);
				if (bSuccess == FALSE) {
					MessageBox(hWnd, L"Please input an integer value on delay box", L"Error", MB_OK | MB_ICONERROR);
					break;
				}
				if (SendMessage(GetDlgItem(hWndGlobal[IDW_CMD_SCREEN], IDC_COMBO4), CB_GETCURSEL, 0, 0) == 1) transdly *= 1000;
				int form = SendMessage(GetDlgItem(hWndGlobal[IDW_CMD_SCREEN], IDC_COMBO1), CB_GETCURSEL, 0, 0);
				int formprop = 0;
				int transition = SendMessage(GetDlgItem(hWndGlobal[IDW_CMD_SCREEN], IDC_COMBO3), CB_GETCURSEL, 0, 0);
				int transprop1 = 0;
				int transprop2 = 0;
				if (transition == 3) {
					transprop1 = SendMessage(GetDlgItem(hWndGlobal[IDW_TRANS_SPLIT1], IDC_COMBO1), CB_GETCURSEL, 0, 0);
					transprop2 = SendMessage(GetDlgItem(hWndGlobal[IDW_TRANS_SPLIT1], IDC_COMBO3), CB_GETCURSEL, 0, 0);
				}
				else if (transition == 4) {
					transprop1 = SendMessage(GetDlgItem(hWndGlobal[IDW_TRANS_WIPE1], IDC_COMBO1), CB_GETCURSEL, 0, 0);
				}
				else if (transition == 0) transdly = 0;
				if (form == 0) {
					formprop = SendMessage(GetDlgItem(hWndGlobal[IDW_FORM_BARS], IDC_COMBO1), CB_GETCURSEL, 0, 0);
					char* path = malloc(sizeof(char) * 16);
					GetDlgItemTextA(hWndGlobal[IDW_CMD_SCREEN], IDC_EDIT2, path, 16);
					AddSeqFile(SEQTYPE_SCREEN, form, formprop, transition, transdly, transprop1, transprop2, SEQTYPE_SCREEN_COLOR, path, EOVA);
					free(path);
				}
				else if (form == 1) {
					char* path = malloc(sizeof(char) * 516);
					int size = GetDlgItemTextA(hWndGlobal[IDW_FORM_IMAGE1], IDC_NAME, path, 516);
					path = (char*)realloc(path, sizeof(char) * size);
					AddSeqFile(SEQTYPE_SCREEN, form, formprop, transition, transdly, transprop1, transprop2, SEQTYPE_SCREEN_IMAGE, path, EOVA);
					free(path);
				}
				else {
					char* path = malloc(sizeof(char) * 8);
					GetDlgItemTextA(hWndGlobal[IDW_CMD_SCREEN], IDC_EDIT2, path, 8);
					AddSeqFile(SEQTYPE_SCREEN, form, formprop, transition, transdly, transprop1, transprop2, SEQTYPE_SCREEN_COLOR, path, EOVA);
					free(path);
				}
				dienub(hWndGlobal[IDW_SEQUENCER]);
				EndDialog(hWnd, LOWORD(wParam));
				break;
			}
			default:
				break;
			}
		}
		}
		if (HIWORD(wParam) == CBN_SELCHANGE)
		{
			int in = SendMessage((HWND)lParam, (UINT)CB_GETCURSEL, (WPARAM)0, (LPARAM)0);
			if(lastActiveWindow) ShowWindow(*lastActiveWindow, SW_HIDE);
			ShowWindow(hWndGlobal[IDW_CMD_DLY + in], SW_SHOW);
			lastActiveWindow = &hWndGlobal[IDW_CMD_DLY + in];
		}
		return (INT_PTR)TRUE;
	case WM_LOADING_DESTROY: {
		EndDialog(hWnd, LOWORD(wParam));
		return (INT_PTR)TRUE;
	}
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

INT_PTR CALLBACK Proc_Sequencer(STD_PARAM_PROC) {
	//BOOKMARK EDIT BUTTON
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_SHOWWINDOW: {
		if (IsWindowVisible(hWndGlobal[IDW_WIZ])) ShowWindow(hWndGlobal[IDW_WIZ], SW_HIDE);
		dienub(hWnd);
		return (INT_PTR)TRUE;
	}
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {
#ifndef DEBUG
		ShowWindow(GetDlgItem(hWnd, IDC_CHECK), SW_HIDE);
#endif // !DEBUG

		hWndGlobal[IDW_CMD_PAR] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_ADD_CMD_PARENT), hWnd, Proc_CMD_Parent);
		hWndGlobal[IDW_COMBO_SEQ1] = GetDlgItem(hWndGlobal[IDW_CMD_PAR], IDC_COMBO2);
		SendMessage(hWndGlobal[IDW_COMBO_SEQ1], CB_ADDSTRING, 0, (LPARAM)L"Loop");
		SendMessage(hWndGlobal[IDW_COMBO_SEQ1], CB_ADDSTRING, 0, (LPARAM)L"Delay");
		SendMessage(hWndGlobal[IDW_COMBO_SEQ1], CB_ADDSTRING, 0, (LPARAM)L"Flashlight Formation");
		SendMessage(hWndGlobal[IDW_COMBO_SEQ1], CB_ADDSTRING, 0, (LPARAM)L"Screen Color");
		return (INT_PTR)TRUE;
	}
//BOOKMARK Buat WM_COmmand penyusunan list
	case WM_COMMAND:
		switch (LOWORD(wParam)) {
		case IDC_MU: {//UP BUTTON PRESSED
			SeqMoveUp(hWnd);
			break;
		}
		case IDC_MD: {//DOWN BUTTON PRESSED
			SeqMoveDown(hWnd);
			break;
		}
#ifdef DEBUG
		case IDC_CHECK: {
			HSEQ* rec = GetSeqFromIndex(SendMessageA(GetDlgItem(hWnd, IDC_LIST), LB_GETCURSEL, 0, 0));
			if (rec == NULL) d("No HSEQ Record");
			else {
				d(FCH("Prev\t: %s\nThis\t: %s\nNext\t: %s", (rec->prev == NULL) ? "NULL" : seqch(rec->prev), seqch(rec), (rec->next == NULL) ? "NULL" : seqch(rec->next)));
			}
			break;
		}
#endif
		case IDC_CLOSE: {
			if(IsWindowVisible(hWndGlobal[IDW_CMD_PAR]))ShowWindow(hWndGlobal[IDW_CMD_PAR], SW_HIDE);
			EndDialog(hWnd, LOWORD(wParam));
			break;
		}
		case IDC_NEW: {
			if (AskForSave(hWnd)) SEQ.Head = NULL;
			break;
		}
		case IDC_SAVE: {
			if (SEQ.Count == 0) {
				e(hWnd,"Nothing can be save");
				break;
			}
			if (SEQ.FileName == NULL) {
				LPWSTR out = WinFileDialog(SAVE_SSF);
				if (out[0] >= '0' && out[0] <= '~') {
					char* dir = malloc(sizeof(char) * (lstrlenW(out) + 5));
					wcstombs(dir, out, lstrlenW(out));
					int lendir = strlen(dir);
					if (dir[lendir - 4] != '.' && dir[lendir - 3] != 's' && dir[lendir - 2] != 's' && dir[lendir - 1] != 'f') {
						d("Masuk");
						strcat(dir, ".ssf");
					}
					SEQ.FileName = dir;
					if (!SaveSeqFile(dir)) e(hWnd, "Save Failed");
					break;
				}
			}
			else {
				if(!SaveSeqFile(SEQ.FileName)) e(hWnd, "Save Failed");
				break;
			}
			break;
		}
		case IDC_ADD: {
			hWndGlobal[IDW_SEQUENCER] = hWnd;
			if (IsWindowVisible(hWndGlobal[IDW_CMD_PAR]))ShowWindow(hWndGlobal[IDW_CMD_PAR], SW_HIDE);
			else ShowWindow(hWndGlobal[IDW_CMD_PAR], SW_SHOW);
			break;
		}
		case IDC_CLEAR: {
			if (SEQ.Count == 0) {
				MessageBoxA(hWndGlobal[IDW_MAINW], "Nothing can be delete", "Error", MB_ICONERROR | MB_OK);
				break;
			}
			while (SEQ.Count != 0) {
				DeleteSeqFile(SEQ.Head);
				LIST_DELETE(0);
			}
			dienub(hWnd);
			break;
		}
		case IDC_DELETE: {
			int index = LIST_CURSEL;
			if (index == -1 || SEQ.Count == 0) {
				e(hWnd, "Nothing can be delete");
				break;
			}
			HSEQ* cur = GetSeqFromIndex(index);
			if (cur == NULL) {
				e(hWnd, "No HSEQ File, please contact the developer");
			}
			else {
				d(seqch(cur));
				if (cur->data[0] == SEQTYPE_LOOP || cur->data[0] == SEQTYPE_LOOPEND) {
					if (cur->data[0] == SEQTYPE_LOOP) d("Loop Start");
					else d("Loop End");
					int loopindex = index;
					HSEQ* loop = GetLoopFriend(cur,&loopindex);
					d(FCH("%d", loopindex));
					if (index > loopindex) {
						DeleteSeqFile(cur);
						LIST_DELETE(index);
						DeleteSeqFile(loop);
						LIST_DELETE(loopindex);
					}
					else {
						DeleteSeqFile(loop);
						LIST_DELETE(loopindex);
						DeleteSeqFile(cur);
						LIST_DELETE(index);
					}
				}
				else {
					if (DeleteSeqFile(cur)) {
						LIST_DELETE(index);
						d("Delete Success");
					}
					else {
						e(hWnd, "Cannot Delete HSEQ File, please contact the developer");
					}
				}
				dienub(hWnd);
			}
			break;
		}
		}
		switch (HIWORD(wParam)) {
		case LBN_SELCHANGE: {
			dienub(hWnd);
		}
		}
		return (INT_PTR)TRUE;
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

INT_PTR CALLBACK Proc_Wiz(STD_PARAM_PROC) {
	UNREFERENCED_PARAMETER(lParam);
	switch (message)
	{
	case WM_PAINT: {
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
		return (INT_PTR)TRUE;
	}
	case WM_INITDIALOG: {

		return (INT_PTR)TRUE;
	}
	case WM_COMMAND:
		switch (LOWORD(wParam)) {
		case IDC_SERVER: {
			hWndGlobal[IDW_CSERV] = DialogBox(hInst, MAKEINTRESOURCE(IDD_CREATE_SERVER), hWnd, Proc_CServ);			
			break;
		}
		case IDC_SEQ: {
			ShowWindow(hWndGlobal[IDW_SEQUENCER], SW_SHOW);
			PostMessage(hWndGlobal[IDW_MAINW], WM_SYSCOMMAND, SC_MAXIMIZE, 0);
			break;
		}
		}
		return (INT_PTR)TRUE;
	default:
		return (INT_PTR)FALSE;
	}
	return (INT_PTR)TRUE;
}

#define SHOW_QR 0xF260
LRESULT CALLBACK Proc_QR(STD_PARAM_PROC) {
	HBITMAP g_hbmBall = 0;
	switch (message) {
	case WM_COMMAND:
		break;
	case WM_CREATE: {
		
	}
	break;
	case WM_PAINT:
	{
		RECT rect;
		GetWindowRect(hWnd, &rect);
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hWnd, &ps);
		EndPaint(hWnd, &ps);
	}
	break;
	case WM_DESTROY:
		ShowWindow(hWnd, SW_HIDE);
		hWndGlobal[IDW_QRVIEWER] = NULL;
		break;
	default:
		return DefWindowProc(hWnd, message, wParam, lParam);
	}
	return 0;

}

LRESULT CALLBACK Proc_TextViewer(STD_PARAM_PROC) {
	switch (message) {
	case WM_CREATE:{

	}
	case WM_PAINT:{

	}
	case WM_DESTROY: {
		ShowWindow(hWnd, SW_HIDE);
		hWndGlobal[IDW_TEXTVIEWER] = NULL;
		break;
	}
	case WM_SIZING: {

		break;
	}
	default:
		return DefWindowProc(hWnd, message, wParam, lParam);
	}
	return 0;
}

//  PURPOSE: Processes messages for the main window.
LRESULT CALLBACK WndProc(STD_PARAM_PROC){
	HBITMAP g_hbmBall = 0;
	switch (message)
	{
	case WM_CREATE: {
		hWndGlobal[IDW_WIZ] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_FORMVIEW), hWnd, Proc_Wiz);
		hWndGlobal[IDW_SEQUENCER] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_SEQUENCER), hWnd, Proc_Sequencer);
		UpdateWindow(hWndGlobal[IDW_WIZ]);
		break;
	}
	case WM_SIZE: {
		UpdateWindow(hWndGlobal[IDW_WIZ]);
	}
	case WM_COMMAND:
	{
		int wmId = LOWORD(wParam);
		// Parse the menu selections:
		switch (wmId)
		{
		case ID_SEQUENCE_OPEN: {
			LPWSTR out = WinFileDialog(OPEN_SSF);
			if (out[0] >= '0' && out[0] <= '~') {
				if (!AskForSave(hWnd)) break;
				char* dir = malloc(sizeof(char) * lstrlenW(out));
				wcstombs(dir, out, lstrlenW(out));
				ReadSeqFile(dir, hWnd);
				SEQ.FileName = dir;
			}
			break;
		}
		case ID_SEQUENCE_NEW: {
			if(AskForSave(hWnd)) SEQ.Head = NULL;
			break;
		}
		case ID_SEQUENCER_SAVEAS: {
			if (SEQ.Count == 0) {
				e(hWnd, "Nothing can be save");
				break;
			}
			LPWSTR out = WinFileDialog(SAVE_SSF);
			if (out[0] >= '0' && out[0] <= '~') {
				char* dir = malloc(sizeof(char) * (lstrlenW(out) + 5));
				wcstombs(dir, out, lstrlenW(out));
				int lendir = strlen(dir);
				if (dir[lendir - 4] != '.' && dir[lendir - 3] != 's' && dir[lendir - 2] != 's' && dir[lendir - 1] != 'f') {
					d("Masuk");
					strcat(dir, ".ssf");
				}
				SEQ.FileName = dir;
				if (!SaveSeqFile(dir)) e(hWnd, "Save Failed");
				break;
			}
			break;
		}
		case ID_SEQUENCE_SAVE: {
			if (SEQ.Count == 0) {
				e(hWnd, "Nothing can be save");
				break;
			}
			if (SEQ.FileName == NULL) {
				LPWSTR out = WinFileDialog(SAVE_SSF);
				if (out[0] >= '0' && out[0] <= '~') {
					char* dir = malloc(sizeof(char) * (lstrlenW(out) + 5));
					wcstombs(dir, out, lstrlenW(out));
					int lendir = strlen(dir);
					if (dir[lendir - 4] != '.' && dir[lendir - 3] != 's' && dir[lendir - 2] != 's' && dir[lendir - 1] != 'f') {
						d("Masuk");
						strcat(dir, ".ssf");
					}
					SEQ.FileName = dir;
					if (!SaveSeqFile(dir)) e(hWnd, "Save Failed");
					break;
				}
			}
			else {
				if (!SaveSeqFile(SEQ.FileName)) e(hWnd, "Save Failed");
				break;
			}
			break;
		}
		case IDM_ABOUT:
			DialogBox(hInst, MAKEINTRESOURCE(IDD_ABOUTBOX), hWnd, About);
			break;
		case IDM_RST:
			break;
		case ID_SERVERID_QRCODE:
			if (hWndGlobal[IDW_QRVIEWER] == NULL) {
				qr_G = MakeBitmapQR(FCH("https://%s/join/%d", STD_LINK2, hServ.server_id), 10);
				hWndGlobal[IDW_QRVIEWER] = CreateWindowEx(
					WS_EX_TOPMOST ,                              // Optional window styles.
					CLASS_STD_WND,                     // Window class
					L"QR Viewer",    // Window text
					WS_OVERLAPPED | WS_SYSMENU | WS_THICKFRAME ,            // Window style

					// Size and position
					CW_USEDEFAULT, CW_USEDEFAULT, qr_G.RealSize + 75, qr_G.RealSize + 98,

					NULL,       // Parent window    
					NULL,       // Menu
					hInst,  // Instance handle
					NULL        // Additional application data
				);
				qr_G.hWnd = CreateWindow(L"STATIC", NULL, WS_VISIBLE | WS_CHILD | SS_BITMAP, 30, 30, 300, 300, hWndGlobal[IDW_QRVIEWER], 0, 0, 0);
				SendMessageW(qr_G.hWnd, STM_SETIMAGE, IMAGE_BITMAP, (LPARAM)qr_G.ptrQR);
				ShowWindow(hWndGlobal[IDW_QRVIEWER], SW_SHOW);
				UpdateWindow(hWndGlobal[IDW_QRVIEWER]);
			}
			else {
				ShowWindow(hWndGlobal[IDW_QRVIEWER], SW_ERASE);
				hWndGlobal[IDW_QRVIEWER] = NULL;
			}
			break;
		case ID_SEQED: {
			ShowWindow(hWndGlobal[IDW_SEQUENCER], IsWindowVisible(hWndGlobal[IDW_SEQUENCER])?SW_HIDE : SW_SHOW);
			break;
		}
		case ID_SERVERID_TEXT:
		{
			ClipboardCopy(FCH("%s/join/%d", STD_LINK, hServ.server_id));
			MessageBox(hWnd, LFCH("Link : \"%s/join/%d\" has copied to clipboard.", STD_LINK, hServ.server_id), L"Link Copied", MB_OK);
			if (hWndGlobal[IDW_TEXTVIEWER] == NULL) {
				hWndGlobal[IDW_TEXTVIEWER] = CreateWindowEx(
					WS_EX_TOPMOST,                              // Optional window styles.
					CLASS_STD_WND,                     // Window class
					L"Server ID Viewer",    // Window text
					WS_OVERLAPPED | WS_SYSMENU | WS_CAPTION | WS_VISIBLE,            // Window style

					// Size and position
					CW_USEDEFAULT, CW_USEDEFAULT, 600 + STD_X, 250 + STD_Y,

					NULL,       // Parent window    
					NULL,       // Menu
					hInst,  // Instance handle
					NULL        // Additional application data
				);
				WinDrawText(FINTCH(hServ.server_id), hWndGlobal[IDW_TEXTVIEWER], RGBBLACK, 200, FONT_STD_BOLD, 0, 0, 600 , 200, TRUE, DT_SINGLELINE | DT_CENTER | DT_VCENTER);
				WinDrawText("Or Join by URL Link bellow", hWndGlobal[IDW_TEXTVIEWER], RGBBLACK, 20, FONT_STD_BOLD, 0, 180, 600, 30, TRUE, DT_SINGLELINE | DT_CENTER | DT_VCENTER);
				WinDrawText(FCH("%s/join/%d",STD_LINK,hServ.server_id), hWndGlobal[IDW_TEXTVIEWER], RGBBLACK, 30, FONT_STD_BOLD, 0, 200, 600 , 30, TRUE, DT_SINGLELINE | DT_CENTER | DT_VCENTER);
			}
			else {
				ShowWindow(hWndGlobal[IDW_TEXTVIEWER], SW_ERASE);
				hWndGlobal[IDW_TEXTVIEWER] = NULL;
			}
			break;
		}
		case ID_FILE_RESET:
		case ID_FILE_CREATESERVER: {
			//if (!hWndGlobal[IDW_CSERV]) {
				hWndGlobal[IDW_CSERV] = DialogBox(hInst, MAKEINTRESOURCE(IDD_CREATE_SERVER), hWnd, Proc_CServ);
			//}else ShowWindow(hWndGlobal[IDW_CSERV], SW_SHOW);
			break;
		}
		case ID_CONSTED: {
			BOOL x = IsWindowVisible(hWndGlobal[IDW_CONSTELLATION]);
			ShowWindow(hWndGlobal[IDW_CONSTELLATION], (x==FALSE)?SW_SHOW:SW_HIDE);
			break;
		}
		case ID_DCLIENT: system(FCH("start https://%s", STD_LINK));
			break;
		case IDM_EXIT:
			dispose();
			Sleep(1000);
			PostQuitMessage(0);
			break;
		default:
			return DefWindowProc(hWnd, message, wParam, lParam);
		}
	}
	break;
	case WM_PAINT:
	{
			PAINTSTRUCT ps;
			HDC hdc = BeginPaint(hWnd, &ps);
			EndPaint(hWnd, &ps);
	}
	break;
	case WM_DESTROY:
		dispose();
		Sleep(1000);
		PostQuitMessage(0);
		break;
	default:
		return DefWindowProc(hWnd, message, wParam, lParam);
	}
	return 0;
}

LRESULT CALLBACK SplashWndProc(STD_PARAM_PROC)
{
	switch (message)
	{
	case WM_PAINT: {
		BitBlt(hSplashDC, 0, 0, BitmapWidth, BitmapHeight, hMemoryDC, 0, 0, SRCCOPY);
		WinDrawText(GetVersionInfo(), hWnd, RGBWHITE, 15, FONT_STD_ITALIC, 570, 325, 40, 40, TRUE, DT_NOCLIP | DT_SINGLELINE);
	}
	default:
		return (DefWindowProc(hWnd, message, wParam, lParam));
	}
	return 0;
}

LRESULT CALLBACK MyStaticWndProc(HWND hwnd, UINT Message, WPARAM wparam, LPARAM lparam)
{
	if (Message == WM_PAINT)
	{
		int a = 0;
		for (a = 0; a < 128; a++) {
			if (hText_G[a].hTWnd == hwnd) break;
		}
		LPCWSTR str = hText_G[a].text;
		RECT rc;
		PAINTSTRUCT ps;
		HDC hdc = BeginPaint(hwnd, &ps);
		GetClientRect(hwnd, &rc);
		if (hText_G[a].ts == TRUE) SetBkMode(hdc, TRANSPARENT);
		SetTextColor(hdc, hText_G[a].c);
		HFONT hFont, hOldFont;
		hFont = CreateFont(hText_G[a].fSze, 0, 0, 0, FW_DONTCARE, FALSE, FALSE, FALSE, ANSI_CHARSET, OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, DEFAULT_QUALITY, DEFAULT_PITCH | FF_SWISS, hText_G[a].fName);
		if (hOldFont = (HFONT)SelectObject(hdc, hFont))
		{
			DrawText(hdc, str , wcslen(str), &rc, hText_G[a].Uformat);
			SelectObject(hdc, hOldFont);
		}
		DeleteDC(hdc);
		EndPaint(hwnd, &ps);
		return 0;
	}
	else if (Message == TEXT_SET_STRING) {

	}

	//v2 StaticWndProc(hwnd, Message, wparam, lparam);
	return CallWindowProc(StaticWndProc, hwnd, Message, wparam, lparam); //v2
}

#endif // !1



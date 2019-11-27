#pragma once

#include <Windows.h>
#include <stdio.h>
#ifdef _WINDOW_CONSOLE_DEBUG
#include <io.h>
#include <fcntl.h>
#endif

#ifndef _BACKEND_H
#define _BACKEND_H

//DEFINE HERE
INT_PTR CALLBACK Proc_Loading(STD_PARAM_PROC);
INT_PTR CALLBACK Proc_CServ(STD_PARAM_PROC);
INT_PTR CALLBACK Proc_Const(STD_PARAM_PROC);

typedef enum {
	OPEN_SSF,
	SAVE_SSF,
	OPEN_BITMAP
}OnDdatae;

wchar_t* L(const char* charArray)
{
	wchar_t* wString = malloc(4096);
	MultiByteToWideChar(CP_ACP, 0, charArray, -1, wString, 4096);
	return wString;
}

char* FCH(const char * format, ...)
//FORMAT CHAR
{
	char* str = (char*)calloc(sizeof(char), 128);
	va_list argptr;
	va_start(argptr, format);
	int ret = vsprintf(str, format, argptr);
	str[ret] = '\0';
	va_end(argptr);
	char* buf = (char*)calloc(sizeof(char), ret + 1);
	buf[ret] = '\0';
	for (int a = 0; a < ret; a++) {
		buf[a] = str[a];
	}
	free(str);
	return buf;
} // FORMAT CHAR

char* FINTCH(int x) {
	return FCH("%d", x);
}

LPCWSTR LFCH(const char* format, ...)
{
	char* str = (char*)calloc(sizeof(char), 128);
	va_list argptr;
	va_start(argptr, format);
	int ret = vsprintf(str, format, argptr);
	str[ret] = '\0';
	va_end(argptr);
	char* buf = (char*)calloc(sizeof(char), ret);
	buf[ret] = '\0';
	for (int a = 0; a < ret; a++) {
		buf[a] = str[a];
	}
	free(str);
	return L(buf);
} // LONG FORMAT CHAR

LPSTR reqHTTP(int state, const char* domain, const char* subdomain, const char* data) {

	LPSTR pszOutBuffer;
	BOOL  bResults = FALSE;
	DWORD dwSize = 0;
	DWORD dwBytesWritten = 0;
	DWORD dwDownloaded = 0;
	char * st = calloc(sizeof(char*),8);
	if (state == GET) strcpy(st, "GET");
	else if (state == PUT || state == DEL) strcpy(st, "PUT");

	// Specify an HTTP server.
	if (hSession) hConnect = WinHttpConnect(hSession, L(domain), WinHTTPFlag2);
	else {
#ifndef _NO_INET_ERROR 
		MessageBox(0, L"Error WinHttpConnect", L"Error", MB_OK | MB_ICONWARNING);
#endif
		free(st);
		return 0;
	}
	// Create an HTTP request handle.
	if (hConnect) hRequest = WinHttpOpenRequest(hConnect, L(st), L(subdomain), WinHTTPFlag3);
	else {
#ifndef _NO_INET_ERROR 
		MessageBox(0, L"Error WinHttpOpenRequest", L"Error", MB_OK | MB_ICONWARNING);
#endif
		free(st);
		return 0;
	}
	if (hRequest) bResults = WinHttpSendRequest(hRequest, WINHTTP_NO_ADDITIONAL_HEADERS, 0, WINHTTP_NO_REQUEST_DATA, 0, (state == GET) ? 0 : (DWORD)strlen(data), 0);
	else {
#ifndef _NO_INET_ERROR 
		MessageBox(0, L"Error WinHttpSendRequest", L"Error", MB_OK | MB_ICONWARNING);
#endif
		free(st);
		return 0;
	}
	if (bResults && state == PUT) bResults = WinHttpWriteData(hRequest, data, (DWORD)strlen(data), &dwBytesWritten);
	else if (bResults && state == DEL) bResults = WinHttpWriteData(hRequest, NULL, NULL, NULL);
	// End the request.
	if (bResults) bResults = WinHttpReceiveResponse(hRequest, NULL);

	// Keep checking for data until there is nothing left.
	if (bResults)
	{
		do
		{
			// Check for available data.
			dwSize = 0;
			if (!WinHttpQueryDataAvailable(hRequest, &dwSize))
			{
#ifndef _NO_INET_ERROR 
				MessageBox(0, L"Error WinHttpQueryDataAvailable", L"Error", MB_OK | MB_ICONWARNING);
#endif
				free(st);
				return 0;
			}

			// Allocate space for the buffer.
			pszOutBuffer = (LPSTR)malloc(dwSize + 1);
			if (!pszOutBuffer)
			{
#ifndef _NO_INET_ERROR 
				MessageBox(0, L"Out of Memmory", L"Error", MB_OK | MB_ICONWARNING);
#endif
				free(st);
				return 0;
			}
			else
			{
				// Read the data.
				ZeroMemory(pszOutBuffer, dwSize + 1);

				if (!WinHttpReadData(hRequest, (LPVOID)pszOutBuffer,
					dwSize, &dwDownloaded)) {
#ifndef _NO_INET_ERROR 
					MessageBox(0, LFCH("Error %u in WinHttpReadData", GetLastError()), L"Error", MB_OK | MB_ICONWARNING);
#endif
					return 0;
				}
				else {
					free(st);
					return pszOutBuffer;
				}

				// Free the memory allocated to the buffer.
				free(pszOutBuffer);
			}
		} while (dwSize > 0);
	}


	// Report any errors.
#ifndef _NO_INET_ERROR 
	if (!bResults) MessageBox(0, LFCH("Error %u has Occured", GetLastError()), L"Error", MB_OK | MB_ICONWARNING);
#endif
	free(st);
	return 0;
}

LPCWSTR WinFileDialog(int state) {
	OPENFILENAME ofn;
	char szFile[100];
	ZeroMemory(&ofn, sizeof(ofn));
	ofn.lStructSize = sizeof(ofn);
	ofn.hwndOwner = NULL;
	ofn.lpstrFile = (LPWSTR)szFile;
	ofn.lpstrFile[0] = '\0';
	ofn.nMaxFile = sizeof(szFile);
	if(state == OPEN_SSF || state == SAVE_SSF) ofn.lpstrFilter = L"Scorp.io Sequence File (.*ssf)\0*.ssf*\0All Files\0*.*\0";
	else if(state == OPEN_BITMAP) ofn.lpstrFilter = L"Bitmap File (.*bmp)\0*.bmp*\0All Files\0*.*\0";
	ofn.nFilterIndex = 1;
	ofn.lpstrFileTitle = NULL;
	ofn.nMaxFileTitle = 0;
	ofn.lpstrInitialDir = NULL;
	ofn.Flags = OFN_PATHMUSTEXIST | OFN_FILEMUSTEXIST;
	if(state == OPEN_SSF || state == OPEN_BITMAP) GetOpenFileName(&ofn);
	else if(state == SAVE_SSF) GetSaveFileName(&ofn);
	//MessageBox(0, ofn.lpstrFile, L"File Name", MB_OK);
	return ofn.lpstrFile;
}

DWORD WINAPI thUpdateConst() {
	while (IsWindowVisible(hWndGlobal[IDW_CONSTELLATION])) {
		Sleep(10);
		char* r = reqHTTP(GET, DB_DOMAIN, FCH("/ServerID/%d/User.json", hServ.server_id), 0);
		SetWindowText(GetDlgItem(hWndGlobal[IDW_CONSTELLATION], IDC_EDIT1), L(r));
		free(r);
	}
	return;
}

void FreeSession() {
	torch = FALSE;
	if (IsWindowVisible(hWndGlobal[IDW_CONSTELLATION])) {
		ShowWindow(hWndGlobal[IDW_CONSTELLATION], SW_HIDE);
	}
	if (IsWindowVisible(hWndGlobal[IDW_QRVIEWER])) {
		ShowWindow(hWndGlobal[IDW_QRVIEWER], SW_ERASE);
		hWndGlobal[IDW_QRVIEWER] = NULL;
	}
	if (IsWindowVisible(hWndGlobal[IDW_TEXTVIEWER])) {
		TerminateThread(hThread[HTH_CONST], 0);
		ShowWindow(hWndGlobal[IDW_TEXTVIEWER], SW_ERASE);
		hWndGlobal[IDW_TEXTVIEWER] = NULL;
	}
	if (hSession) {
		reqHTTP(PUT, DB_DOMAIN, FCH("/ServerID/%d.json", hServ.server_id), "null");
		WinHttpCloseHandle(hRequest);
		WinHttpCloseHandle(hConnect);
		WinHttpCloseHandle(hSession);
		hSession = NULL;
	}
}

BOOL hSessionCheck(HWND h) {
	if (hSession != NULL) {
		int r = MessageBox(h, L"Server is Running, Do You Want to Reset Server?", L"Alert", MB_OKCANCEL | MB_ICONWARNING);
		if (r == IDOK) {
			FreeSession();
			return TRUE;
		}
		else{
			return FALSE;
		}
	}
	else return TRUE;
}

BOOL inetCheck(HWND h) {
	HMENU hMenu = GetMenu(hWndGlobal[IDW_MAINW]);
	HWND dlg = CreateDialog(hInst, MAKEINTRESOURCE(IDD_LOADING), h, Proc_Loading);
	while (1) {
		while (!hSession) hSession = WinHttpOpen(STD_WINHTTP_FLAG);
		if (!hSession) {
			ShowWindow(dlg, SW_HIDE);
			int r = MessageBox(h, L"Please Connect To The Internet Properly", L"No Connection", MB_RETRYCANCEL | MB_ICONWARNING);
			if (r == IDRETRY)
			{
				continue;
			}
			else if (r == IDCANCEL || IDM_EXIT) {
				return FALSE;
			}
		}
		else {
			int a = 0;
			for (a = 0; a < 10; a++) {
				int ServerID = GetRandomRange(1000, 9999);
				//int ServerID = 9530;
				time_t rawtime;
				struct tm* info;
				time(&rawtime);
				info = localtime(&rawtime);
				char* r = reqHTTP(GET, DB_DOMAIN, FCH("/ServerID/%d/Date.json", ServerID), 0);
				int val = strcmp(FINTCH(info->tm_mday), r);
				if (val != 0){ // ZERO SERVER ID
					hServ.state = FALSE;
					char* send = FCH("{\"Date\":%d,"
						"\"ServerName\":\"%ls\","
						"\"Type\":%d,"
						"\"MaxC\":%d,"
						"\"Global\":{\"State\":false,"
							"\"Torch\":false,"
							"\"TestColor\":\"#000000\"}}",
						info->tm_mday, hServ.server_name, hServ.type, hServ.max_client);
					r = reqHTTP(PUT, DB_DOMAIN, FCH("/ServerID/%d.json", ServerID), send);
					ShowWindow(dlg, SW_HIDE);
					MessageBox(h, LFCH("Server Created with ID : %d\nTo Show QR Code or Text, click Window Menu, ServerID", ServerID, hServ.server_name), L"Server Created", MB_OK);
					hServ.server_id = ServerID;
					EnableMenuItem(hMenu, ID_SERVERID_QRCODE, MF_ENABLED);
					EnableMenuItem(hMenu, ID_SERVERID_TEXT, MF_ENABLED);
					EnableMenuItem(hMenu, ID_FILE_CREATESERVER, MF_DISABLED);
					EnableMenuItem(hMenu, ID_FILE_RESET, MF_ENABLED);
					torch = FALSE;
					if (!hWndGlobal[IDW_CONSTELLATION]) {
						hWndGlobal[IDW_CONSTELLATION] = CreateDialog(hInst, MAKEINTRESOURCE(IDD_CONSTELLATION), hWndGlobal[IDW_MAINW], Proc_Const);
						EnableMenuItem(hMenu, ID_CONSTED, MF_ENABLED);
						ShowWindow(hWndGlobal[IDW_CONSTELLATION], SW_SHOW);
					}
					break;
				}
				free(r);
			}
			if (a >= 8) {
				ShowWindow(dlg, SW_HIDE);
				MessageBox(h, L"Can't Create The Server, Please Check Your Connection or Restart Scorp.io", L"Error", MB_ICONERROR | MB_OK);
				hSession = NULL;
			}
			return (a < 8) ? TRUE : FALSE;
		}
	}
	return FALSE;
}

void SwitchDBState() {
	hServ.state = !hServ.state;
	char* ret = reqHTTP(PUT, DB_DOMAIN, FCH("/ServerID/%d/Global/State.json", hServ.server_id), (hServ.state) ? "true" : "false");
	return;
}

LRESULT CALLBACK MyStaticWndProc(HWND hwnd, UINT Message, WPARAM wparam, LPARAM lparam);
HWND WinDrawText(char * text, HWND WindowParent, COLORREF color, int FontSize, LPCSTR FontFamily, int x, int y, int nWidth, int nHeight, BOOL transparentState, UINT format) {
	HTEXT hText;
	HWND hWndStatic = CreateWindowEx(0, L"STATIC", NULL, WS_CHILD | WS_VISIBLE | SS_LEFT, x, y, nWidth, nHeight, WindowParent, NULL, hInst, NULL); //v2 deleted HWND
	if (hText_Count> 30) {
		hText_Count = 0;
	}
	hText.fSze = FontSize;
	hText.fName = FontFamily;
	hText.ts = transparentState;
	hText.c = color;
	hText.pos.X = x;
	hText.pos.Y = y;
	hText.Uformat = format;
	hText.text = L(text);
	hText.hTWnd = hWndStatic;
	hText_G[hText_Count] = hText;
	hText_Count++;
	StaticWndProc = (WNDPROC)SetWindowLong(hWndStatic, GWL_WNDPROC, (LPARAM)MyStaticWndProc);
	return hWndStatic;
}

char* GetVersionInfo()
{
	char *str = malloc(sizeof(char)*32);
	GetVersionInfoEx(L"Scorpio.exe", str);
	return str; 
}

BOOL GetVersionInfoEx(LPCTSTR filename, char* str)
{
	DWORD   verBufferSize;
	char    verBuffer[2048];

	//  Get the size of the version info block in the file
	verBufferSize = GetFileVersionInfoSize(filename, NULL);
	if (verBufferSize > 0 && verBufferSize <= sizeof(verBuffer))
	{
		//  get the version block from the file
		if (TRUE == GetFileVersionInfo(filename, NULL, verBufferSize, verBuffer))
		{
			UINT length;
			VS_FIXEDFILEINFO* verInfo = NULL;

			//  Query the version information for neutral language
			if (TRUE == VerQueryValue(
				verBuffer,
				_T("\\"),
				(LPVOID*)&verInfo,&length))
			{
				//  Pull the version values.
				sprintf(str, "Ver : %d.%d (Bulid %d.%d)",
					HIWORD(verInfo->dwProductVersionMS),
					LOWORD(verInfo->dwProductVersionMS),
					HIWORD(verInfo->dwProductVersionLS),
					LOWORD(verInfo->dwProductVersionLS));
				return TRUE;
			}
		}
	}

	return FALSE;
}

HBITMAP MakeBitMapTransparent(HBITMAP hbmSrc, HWND ParenthWnd, HWND ChildhWnd)
{
	HDC hdcSrc, hdcDst;
	HBITMAP hbmOld, hbmNew = 0;
	BITMAP bm;
	COLORREF clrTP, clrBK;
	HDC hdcW = GetDC(ChildhWnd);
	if ((hdcSrc = CreateCompatibleDC(NULL)) != NULL) {
		if ((hdcDst = CreateCompatibleDC(NULL)) != NULL) {
			GetObject(hbmSrc, sizeof(bm), &bm);
			hbmOld = (HBITMAP)SelectObject(hdcSrc, hbmSrc);
			hbmNew = CreateBitmap(bm.bmWidth, bm.bmHeight, bm.bmPlanes, bm.bmBitsPixel, NULL);
			SelectObject(hdcDst, hbmNew);
			BitBlt(hdcDst, 0, 0, bm.bmWidth, bm.bmHeight, hdcSrc, 0, 0, SRCCOPY);
			clrTP = GetPixel(hdcDst, 0, 0);// Get color of first pixel at 0,0
			for (int nRow = 0; nRow < bm.bmHeight; nRow++)// work our way through all the pixels changing their color
				for (int nCol = 0; nCol < bm.bmWidth; nCol++) {// when we hit our set transparency color.
					if (GetPixel(hdcDst, nCol, nRow) == clrTP)
						SetPixel(hdcDst, nCol, nRow, GetPixel(hdcW, nCol, nRow));
				}
			DeleteDC(hdcDst);
			DeleteDC(hdcW);
		}
		DeleteDC(hdcSrc);
	}
	return hbmNew;// return our transformed bitmap.
}

HBITMAP LoadBitmapTransparent(LPCWSTR id, DWORD cBack) {
	HBITMAP hbmSrc = LoadBitmap(hInst, id);
	HDC hdcSrc, hdcDst;
	HBITMAP hbmOld, hbmNew = 0;
	BITMAP bm;
	COLORREF clrTP, clrBK;
	if ((hdcSrc = CreateCompatibleDC(NULL)) != NULL) {
		if ((hdcDst = CreateCompatibleDC(NULL)) != NULL) {
			GetObject(hbmSrc, sizeof(bm), &bm);
			hbmOld = (HBITMAP)SelectObject(hdcSrc, hbmSrc);
			hbmNew = CreateBitmap(bm.bmWidth, bm.bmHeight, bm.bmPlanes, bm.bmBitsPixel, NULL);
			SelectObject(hdcDst, hbmNew);
			BitBlt(hdcDst, 0, 0, bm.bmWidth, bm.bmHeight, hdcSrc, 0, 0, SRCCOPY);
			clrTP = GetPixel(hdcDst, 0, 0);// Get color of first pixel at 0,0
			for (int nRow = 0; nRow < bm.bmHeight; nRow++)// work our way through all the pixels changing their color
				for (int nCol = 0; nCol < bm.bmWidth; nCol++) {// when we hit our set transparency color.
					if (GetPixel(hdcDst, nCol, nRow) == clrTP)
						SetPixel(hdcDst, nCol, nRow, cBack);
				}
			DeleteDC(hdcDst);
		}
		DeleteDC(hdcSrc);
	}
	return hbmNew;
}

typedef struct hQR {
	uint8_t qrcode[qrcodegen_BUFFER_LEN_MAX];
	HBITMAP ptrQR;
	int Size;
	int RealSize;
	int xSize;
	HWND hWnd;
	HDC hdc;
}HQR;

HQR qr_G;

HQR DrawQR(HQR qr, int szeSquare) {
	HDC hdcDst;
	HBITMAP hbmNew = 0;
	BITMAP bm;
	HBITMAP hbmSrc = qr.ptrQR;
	if ((hdcDst = CreateCompatibleDC(NULL)) != NULL) {
		GetObject(hbmSrc, sizeof(bm), &bm);
		hbmNew = CreateBitmap(qr.Size * szeSquare, qr.Size * szeSquare, bm.bmPlanes, bm.bmBitsPixel, NULL);
		SelectObject(hdcDst, hbmNew);
		for (int locA = 0; locA < qr.Size; locA++)
			for (int locB = 0; locB < qr.Size; locB++)
				for (int a = 0; a < szeSquare; a++)
					for (int b = 0; b < szeSquare; b++)
						SetPixel(hdcDst, a + (szeSquare * locA), b + (szeSquare * locB), (qrcodegen_getModule(qr.qrcode, locA, locB) == true) ? RGBBLACK : RGBWHITE);
		qr.hdc = hdcDst;
		DeleteDC(hdcDst);
	}
	qr.ptrQR = hbmNew;
	qr.RealSize = qr.Size * szeSquare;
	qr.xSize = szeSquare;
	return qr;
}

HQR MakeBitmapQR(const char* str, int szeSquare) {
	HQR qr = { 0 };
	uint8_t tempBuffer[qrcodegen_BUFFER_LEN_MAX];
	enum qrcodegen_Ecc errCorLvl = qrcodegen_Ecc_LOW;

	bool ok = qrcodegen_encodeText(str, tempBuffer, qr.qrcode, errCorLvl, qrcodegen_VERSION_MIN, qrcodegen_VERSION_MAX, qrcodegen_Mask_AUTO, true);
	qr.Size = qrcodegen_getSize(qr.qrcode);
	qr.ptrQR = LoadBitmap(hInst, MAKEINTRESOURCE(ID_QR));;
	return DrawQR(qr, szeSquare);
}

int GetRandomRange(int lower, int upper)
{
	int i;
	int out;
	int num = (rand() % (upper - lower + 1)) + lower;
	return num;
}

void ClipboardCopy(const char* output) {
	const size_t len = strlen(output) + 1;
	HGLOBAL hMem = GlobalAlloc(GMEM_MOVEABLE, len);
	memcpy(GlobalLock(hMem), output, len);
	GlobalUnlock(hMem);
	OpenClipboard(0);
	EmptyClipboard();
	SetClipboardData(CF_TEXT, hMem);
	CloseClipboard();
	return;
}

VOID CenterWindow(HWND hwnd, HWND hwndParent, int Width, int Height)
{

	/* Variables */
	RECT rc;

	/* If Parent Window Is Set As Null, Get The Desktop Window */
	if (hwndParent == NULL)
	{

		hwndParent = GetDesktopWindow();

	}

	/* Get Parent Client Area Measurements */
	GetClientRect(hwndParent, &rc);

	/* Center The Window */
	MoveWindow(
		hwnd,
		(rc.right - rc.left - Width) / 2,
		(rc.bottom - rc.top - Height) / 2,
		Width,
		Height,
		TRUE
	);

	return;

}

void InitAllMenu(HWND hWnd) {
	DWORD c = GetSysColor(COLOR_MENU);
	HMENU h = GetMenu(hWnd);
	HBITMAP icon = LoadBitmapTransparent(MAKEINTRESOURCE(IDB_BITMAP3), c);
	SetMenuItemBitmaps(h, IDM_ABOUT, 0, icon, icon);
	icon = LoadBitmapTransparent(MAKEINTRESOURCE(IDB_BITMAP4), c);
	SetMenuItemBitmaps(h, ID_FILE_RESET, 0, icon, icon);
	icon = LoadBitmapTransparent(MAKEINTRESOURCE(IDB_BITMAP5), c);
	SetMenuItemBitmaps(h, ID_FILE_CREATESERVER, 0, icon, icon);
	icon = LoadBitmapTransparent(MAKEINTRESOURCE(IDB_BITMAP6), c);
	SetMenuItemBitmaps(h, ID_WINDOW_CONSTELLATIONEDITOR, 0, icon, icon);
	icon = LoadBitmapTransparent(MAKEINTRESOURCE(IDB_BITMAP7), c);
	SetMenuItemBitmaps(h, IDM_EXIT, 0, icon, icon);
	icon = LoadBitmapTransparent(MAKEINTRESOURCE(IDB_BITMAP8), c);
	SetMenuItemBitmaps(h, ID_HELP_TUTORIAL, 0, icon, icon);
	icon = LoadBitmapTransparent(MAKEINTRESOURCE(IDB_BITMAP9), c);
	SetMenuItemBitmaps(h, ID_DCLIENT, 0, icon, icon);
	icon = LoadBitmapTransparent(MAKEINTRESOURCE(IDB_BITMAP10), c);
	SetMenuItemBitmaps(h, ID_SEQED, 0, icon, icon);
	icon = LoadBitmapTransparent(MAKEINTRESOURCE(IDB_BITMAP11), c);
	SetMenuItemBitmaps(h, ID_CONSTED, 0, icon, icon);
	icon = LoadBitmapTransparent(MAKEINTRESOURCE(IDB_BITMAP12), c);
	SetMenuItemBitmaps(h, ID_SERVERID_QRCODE, 0, icon, icon);
	icon = LoadBitmapTransparent(MAKEINTRESOURCE(IDB_BITMAP13), c);
	SetMenuItemBitmaps(h, ID_SERVERID_TEXT, 0, icon, icon);
	icon = LoadBitmapTransparent(MAKEINTRESOURCE(IDB_BITMAP14), c);
	SetMenuItemBitmaps(h, ID_FILE_CLOSESERVER, 0, icon, icon);

	EnableMenuItem(h, ID_CONSTED, MF_DISABLED);
	EnableMenuItem(h, ID_FILE_CLOSESERVER, MF_DISABLED);
	EnableMenuItem(h, ID_SERVERID_QRCODE, MF_DISABLED);
	EnableMenuItem(h, ID_SERVERID_TEXT, MF_DISABLED);
	EnableMenuItem(h, ID_FILE_RESET, MF_DISABLED);
}

#define SEQTYPE_DELAY 0
#define SEQTYPE_LOOP 1
#define SEQTYPE_FLASH 2
#define SEQTYPE_SCREEN 3
#define SEQTYPE_SCREEN_COLOR -1
#define SEQTYPE_SCREEN_IMAGE -2
#define FSEQ SeqFile[SeqFile_Count-1]
int ListIndex = 0;
int AddSeqFile(int type,...) {
	SeqFile_Count++;
	va_list vl;
	HSEQ* val = malloc(sizeof(HSEQ));
	//SeqFile_Count++;
	//SeqFile = (HSEQ*)realloc(SeqFile, sizeof(HSEQ) * SeqFile_Count);
	val->data[0] = type;
	va_start(vl, type);
	int a = 0;
	while (a<9) {
		int in = va_arg(vl, int);
		if (in == -1) {
			//FSEQ.color = va_arg(vl, char*);
			val->color = va_arg(vl, char*);
		}
		else if (in == -2) {
			//FSEQ.bitmapptr = va_arg(vl, char*);
			val->bitmapptr = va_arg(vl, char*);
		}
		else if (in > 0) {
			//FSEQ.data[a] = in;
			val->data[a] = in;
			a++;
		}
		else if(in == NULL) break;
	}
	va_end(vl);
	//SeqFile = (HSEQ**)realloc(SeqFile, sizeof(HSEQ*) * SeqFile_Count);
	HWND hlist = GetDlgItem(hWndGlobal[IDW_SEQUENCER] , IDC_LIST);
	int pos = (int)SendMessage(hlist, LB_ADDSTRING, 0, (LPARAM)TEXT(FCH("Type : %d | Count : %d",type,SeqFile_Count)));
	SendMessage(hlist, LB_SETITEMDATA, pos, ListIndex);
	ListIndex++;
	//FSEQ = val;
	return SeqFile_Count;
}

#endif // !_BACKEND_H


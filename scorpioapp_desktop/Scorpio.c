// Scorpio.cpp : Defines the entry point for the application.
//

#define APSTUDIO_READONLY_SYMBOLS
#define _CRT_SECURE_NO_WARNINGS
#define _WINSOCK_DEPRECATED_NO_WARNINGS
//#define _NO_WND_SPLASH
#define _NO_INET_ERROR
//#define _DEBUG_FIREBASE


#include "framework.h"
#include "resource.h"

#ifdef APSTUDIO_INVOKED
#ifndef APSTUDIO_READONLY_SYMBOLS
#define _APS_NEXT_RESOURCE_VALUE        101
#define _APS_NEXT_COMMAND_VALUE         40001
#define _APS_NEXT_CONTROL_VALUE         1001
#define _APS_NEXT_SYMED_VALUE           101
#endif
#endif

#include <Windows.h>
#include <commdlg.h>
#include <time.h>
#include <shellapi.h>
#include <tchar.h>
//#include <WinInet.h>
//#include <WinSock2.h>
#include <winhttp.h>

#include "global.h"
#include "backend.h"
#include "procedure.h"
#include "WinClass.h"

#pragma comment(linker,"\"/manifestdependency:type='win32' \
name='Microsoft.Windows.Common-Controls' version='6.0.0.0' \
processorArchitecture='*' publicKeyToken='6595b64144ccf1df' language='*'\"")

//   PURPOSE: Saves instance handle and creates main window
BOOL InitInstance(HINSTANCE hInstance, int nCmdShow)
{
	srand(time(0));
	ZeroMemory(hWndGlobal, sizeof(hWndGlobal));
	hInst = hInstance; // Store instance handle in our global variable
	HWND hWnd = CreateWindowW(szWindowClass, L"Scorp.io", WS_OVERLAPPEDWINDOW,CW_USEDEFAULT, CW_USEDEFAULT, 530, 280, NULL, NULL, hInstance, NULL);
	CenterWindow(hWnd, 0, 530, 280);
	hWndGlobal[IDW_MAINW] = hWnd;

	InitAllMenu(hWnd);
	InitAllWinClass(hInstance);

	#ifndef  _NO_WND_SPLASH
	hSplashBMP = LoadBitmap(hInstance, MAKEINTRESOURCE(IDB_BITMAP2));
	RECT DesktopRect;
	GetWindowRect(GetDesktopWindow(), &DesktopRect);
	BITMAP Bitmap;
	GetObject(hSplashBMP, sizeof(BITMAP), &Bitmap);
	BitmapWidth = Bitmap.bmWidth;
	BitmapHeight = Bitmap.bmHeight;
	HWND hSplashWnd = CreateWindowEx( 0, 
		L"Splash Window Class",
		L"Welcome",
		WS_POPUP,
		(DesktopRect.right - BitmapWidth) / 2,
		(DesktopRect.bottom - BitmapHeight) / 2,
		Bitmap.bmWidth,
		Bitmap.bmHeight,
		NULL,
		NULL,
		hInstance,
		NULL);
	if (!hSplashWnd)
	{
		MessageBox(NULL, L"Splash Window Creation Failed.", L"Error", MB_OK | MB_ICONERROR);
		return 0;
	}

	hSplashDC = GetDC(hSplashWnd);
	hMemoryDC = CreateCompatibleDC(hSplashDC);
	SelectObject(hMemoryDC, (HGDIOBJ)hSplashBMP);
	ShowWindow(hSplashWnd, SW_SHOW);
	UpdateWindow(hSplashWnd);
	SetForegroundWindow(hSplashWnd);
	UpdateWindow(hSplashWnd);
	Sleep(1000);
	DestroyWindow(hSplashWnd);
	#endif
	if (!hWnd)
	{
		return FALSE;
	}

	ShowWindow(hWnd, nCmdShow);
	UpdateWindow(hWnd);
	SetForegroundWindow(hWnd);

	return TRUE;
}

int APIENTRY wWinMain(_In_ HINSTANCE hInstance, _In_opt_ HINSTANCE hPrevInstance, _In_ LPWSTR lpCmdLine, _In_ int nCmdShow)
{
#ifdef _WINDOW_CONSOLE_DEBUG

	InitConsole();
#endif // DEBUG
	SEQ.Head = NULL;
	SEQ.Tail = NULL;
	SEQ.Count = 0;

	hWndGlobal = (HWND*)calloc(sizeof(HWND), (int)IDW_MAX);
    UNREFERENCED_PARAMETER(hPrevInstance);
    UNREFERENCED_PARAMETER(lpCmdLine);

    // Initialize global strings
    LoadStringW(hInstance, IDS_APP_TITLE, szTitle, MAX_LOADSTRING);
    LoadStringW(hInstance, IDC_SCORPIO, szWindowClass, MAX_LOADSTRING);
    MyRegisterClass(hInstance);
	ClassSplash(hInstance);

    // Perform application initialization:
    if (!InitInstance (hInstance, nCmdShow))
    {
        return FALSE;
    }

    HACCEL hAccelTable = LoadAccelerators(hInstance, MAKEINTRESOURCE(IDC_SCORPIO));

    MSG msg;

    // Main message loop:
    while (GetMessage(&msg, NULL, 0, 0))
    {
        if (!TranslateAccelerator(msg.hwnd, hAccelTable, &msg))
        {
            TranslateMessage(&msg);
            DispatchMessage(&msg);
        }
    }

    return (int) msg.wParam;
}
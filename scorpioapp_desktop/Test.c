// Win32 Tutorial (Splash Screen)

// Alan Baylis 2004



#include <windows.h>
#include "resource.h"

const char ClassName[] = "MainWindowClass";
const char SplashClassName[] = "SplashWindowClass";

HWND hMainWnd;
HBITMAP hSplashBMP;
HDC hSplashDC;
HDC hMemoryDC;
LONG BitmapWidth, BitmapHeight;

LRESULT CALLBACK WndProc(HWND    hWnd,
	UINT    Msg,
	WPARAM  wParam,
	LPARAM  lParam)
{
	switch (Msg)
	{
	case WM_CLOSE:
		DestroyWindow(hWnd);
		break;
	case WM_DESTROY:
		PostQuitMessage(0);
		break;
	default:
		return (DefWindowProc(hWnd, Msg, wParam, lParam));
	}
	return 0;
}

LRESULT CALLBACK SplashWndProc(HWND    hWnd,
	UINT    Msg,
	WPARAM  wParam,
	LPARAM  lParam)
{
	switch (Msg)
	{
	case WM_ERASEBKGND:
		BitBlt((HDC)wParam, 0, 0, BitmapWidth, BitmapHeight, hMemoryDC, 0, 0, SRCCOPY);
		break;
	case WM_CHAR:
	case WM_KILLFOCUS:
	case WM_LBUTTONDOWN:
	case WM_RBUTTONDOWN:
	case WM_MBUTTONDOWN:
		DeleteObject(hSplashBMP);
		ReleaseDC(hWnd, hSplashDC);
		ReleaseDC(hWnd, hMemoryDC);
		DestroyWindow(hWnd);
		ShowWindow(hMainWnd, SW_SHOW);
		UpdateWindow(hMainWnd);
		SetForegroundWindow(hMainWnd);
		break;
	default:
		return (DefWindowProc(hWnd, Msg, wParam, lParam));
	}
	return 0;
}

INT WINAPI WinMain(HINSTANCE  hInstance,
	HINSTANCE  hPrevInstance,
	LPSTR      lpCmdLine,
	INT        nCmdShow)
{
	WNDCLASSEX    wc;
	wc.cbSize = sizeof(WNDCLASSEX);
	wc.style = 0;
	wc.lpfnWndProc = (WNDPROC)WndProc;
	wc.cbClsExtra = 0;
	wc.cbWndExtra = 0;
	wc.hInstance = hInstance;
	wc.hIcon = LoadIcon(hInstance, MAKEINTRESOURCE(IDI_ICON1));
	wc.hIconSm = LoadIcon(hInstance, MAKEINTRESOURCE(IDI_ICON1));
	wc.hCursor = LoadCursor(NULL, IDC_ARROW);
	wc.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
	wc.lpszMenuName = NULL;
	wc.lpszClassName = ClassName;
	if (!RegisterClassEx(&wc))
	{
		MessageBox(NULL, L"Failed To Register The Window Class.", L"Error", MB_OK | MB_ICONERROR);
		return 0;
	}
	WNDCLASSEX    splashwc;
	splashwc.cbSize = sizeof(WNDCLASSEX);
	splashwc.style = 0;
	splashwc.lpfnWndProc = (WNDPROC)SplashWndProc;
	splashwc.cbClsExtra = 0;
	splashwc.cbWndExtra = 0;
	splashwc.hInstance = hInstance;
	splashwc.hIcon = NULL;
	splashwc.hIconSm = NULL;
	splashwc.hCursor = LoadCursor(NULL, IDC_ARROW);
	splashwc.hbrBackground = NULL;
	splashwc.lpszMenuName = NULL;
	splashwc.lpszClassName = SplashClassName;
	if (!RegisterClassEx(&splashwc))
	{
		MessageBox(NULL, L"Failed To Register The Splash Window Class.", L"Error", MB_OK | MB_ICONERROR);
		return 0;
	}
	RECT DesktopRect;
	GetWindowRect(GetDesktopWindow(), &DesktopRect);
	hMainWnd = CreateWindowEx(
		WS_EX_CLIENTEDGE,
		ClassName,
		L"Splash Screen",
		WS_OVERLAPPEDWINDOW,
		(DesktopRect.right - 340) / 2,
		(DesktopRect.bottom - 200) / 2,
		340,
		200,
		NULL,
		NULL,
		hInstance,
		NULL);
	if (!hMainWnd)
	{
		MessageBox(NULL, L"Window Creation Failed.", L"Error", MB_OK | MB_ICONERROR);
		return 0;
	}
	hSplashBMP = LoadBitmap(hInstance, MAKEINTRESOURCE(IDB_BITMAP1));
	if (!hSplashBMP)
	{
		MessageBox(NULL, L"Failed To Load Bitmap", L"Error", MB_OK | MB_ICONERROR);
		return 0;
	}
	BITMAP Bitmap;
	GetObject(hSplashBMP, sizeof(BITMAP), &Bitmap);
	BitmapWidth = Bitmap.bmWidth;
	BitmapHeight = Bitmap.bmHeight;
	HWND hSplashWnd = CreateWindowEx(
		0,
		SplashClassName,
		L"Splash Screen",
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
	MSG    Msg;
	while (GetMessage(&Msg, NULL, 0, 0))
	{
		TranslateMessage(&Msg);
		DispatchMessage(&Msg);
	}
	return Msg.wParam;
}
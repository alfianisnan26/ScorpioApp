#pragma once

#ifndef _WINCLASS_H
#define _WINCLASS_H

//REGISTERING GLOBAL WINDOW CLASS
ATOM Class_STD_Win(HINSTANCE hInstance, WNDPROC Proc) {
	WNDCLASS wc = { 0 };
	wc.lpfnWndProc = Proc;
	wc.hInstance = hInstance;
	wc.lpszClassName = CLASS_STD_WND;
	wc.hIcon = STD_ICON;
	wc.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
	wc.cbClsExtra = 0;
	wc.cbWndExtra = 0;
	wc.hCursor = LoadCursor(NULL, IDC_ARROW);
	wc.lpszMenuName = NULL;
	wc.style = CS_VREDRAW | CS_HREDRAW;
	RegisterClass(&wc);
}

ATOM MyRegisterClass(HINSTANCE hInstance)
{
	WNDCLASSEXW wcex;
	wcex.cbSize = sizeof(WNDCLASSEX);
	wcex.style = CS_HREDRAW | CS_VREDRAW;
	wcex.lpfnWndProc = WndProc;
	wcex.cbClsExtra = 0;
	wcex.cbWndExtra = 0;
	wcex.hInstance = hInstance;
	wcex.hIcon = STD_ICON;
	wcex.hCursor = LoadCursor(NULL, IDC_ARROW);
	wcex.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
	wcex.lpszMenuName = MAKEINTRESOURCEW(IDC_SCORPIO);
	wcex.lpszClassName = szWindowClass;
	wcex.hIconSm = LoadIcon(wcex.hInstance, MAKEINTRESOURCE(IDI_ICON1));
	return RegisterClassExW(&wcex);
}

ATOM ClassSplash(HINSTANCE hInstance) {
	WNDCLASSEX    splashwc;
	splashwc.cbSize = sizeof(WNDCLASSEX);
	splashwc.style = 0;
	splashwc.lpfnWndProc = (WNDPROC)SplashWndProc;
	splashwc.cbClsExtra = 0;
	splashwc.cbWndExtra = 0;
	splashwc.hInstance = hInstance;
	splashwc.hIcon = STD_ICON;
	splashwc.hIconSm = LoadIcon(splashwc.hInstance, MAKEINTRESOURCE(IDI_ICON1));
	splashwc.hCursor = LoadCursor(NULL, IDC_ARROW);
	splashwc.hbrBackground = NULL;
	splashwc.lpszMenuName = NULL;
	splashwc.lpszClassName = L"Splash Window Class";
	return RegisterClassExW(&splashwc);
}

void InitAllWinClass(HINSTANCE hInstance) {
	Class_STD_Win(hInstance, Proc_QR);
	Class_STD_Win(hInstance, Proc_TextViewer);
	return;
}

#endif
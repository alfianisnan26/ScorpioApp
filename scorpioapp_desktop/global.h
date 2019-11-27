#pragma once

#include <Windows.h>	
#include <commdlg.h>
#include <CommCtrl.h>
#include "qrcodegen.h"
#include <math.h>

#pragma comment(lib, "version.lib")
#pragma comment(lib, "winhttp.lib")

//#pragma comment(lib, "wininet.lib")
//#pragma comment(lib, "Ws2_32.lib")


#ifndef _GLOBAL_H
#define _GLOBAL_H

#define MAX_LOADSTRING 100

// Global Variables:
HINSTANCE hInst;                                // current instance
WCHAR szTitle[MAX_LOADSTRING];                  // The title bar text
WCHAR szWindowClass[MAX_LOADSTRING];            // the main window class name
HWND * hWndGlobal;
HANDLE hThread[32];
BOOL torch;

HBITMAP hSplashBMP;
HDC hSplashDC;
HDC hMemoryDC;
LONG BitmapWidth, BitmapHeight;

COLORREF acrCustClr[16];
WNDPROC StaticWndProc = NULL;
HINTERNET  hSession = NULL,
hConnect = NULL,
hRequest = NULL;

//Sequence Struct:
typedef struct seqfile {
	int data[9];
	char* bitmapptr;
	char* color;
}HSEQ;

//HSEQ** SeqFile = 0;
int SeqFile_Count = 0;

//MACROS
//COLOR
#define RGBWHITE	RGB(0xFF, 0xFF, 0xFF)
#define RGBBLACK	RGB(0x00, 0x00, 0x00)

//FONT
#define FONT_STD_REG L"Product Sans"
#define FONT_STD_ITALIC L"Product Sans Italic"
#define FONT_STD_BOLD L"Product Sans Bold"
#define FONT_STD_BOTLC L"Product Sans Bold Italic"

//STD
#define STD_PARAM_PROC HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam
#define STD_ICON LoadIcon(hInstance, MAKEINTRESOURCE(IDI_ICON1))
#define STD_X 25
#define STD_Y 35
#define STD_DOMAIN "scorp-io"
#define STD_LINK STD_DOMAIN ".web.app"
#define STD_LINK2 STD_DOMAIN ".firebaseapp.com"
#define STD_WINHTTP_FLAG 0, WINHTTP_ACCESS_TYPE_DEFAULT_PROXY, WINHTTP_NO_PROXY_NAME, WINHTTP_NO_PROXY_BYPASS, 0

//DB PREFIX
#define DB_DOMAIN "scorp-io.firebaseio.com"
#define DB_SERVERID "ServerID"

//OTHER MACROS
#define TEXT_SET_STRING 1
#define GET 1
#define PUT 2
#define DEL 3
#define WinHTTPFlag2 INTERNET_DEFAULT_HTTPS_PORT, 0
#define WinHTTPFlag3 NULL, WINHTTP_NO_REFERER, WINHTTP_DEFAULT_ACCEPT_TYPES, WINHTTP_FLAG_SECURE
#define WM_LOADING_DESTROY 0xF2F6

//WINDOW GLOBAL ID
typedef enum {
	IDW_MAINW,
	IDW_QRVIEWER,
	IDW_TEXTVIEWER,
	IDW_WIZ,
	IDW_LOADINGBOX,
	IDW_CSERV,
	IDW_COMBO_SERVER,
	IDW_COMBO_SEQ1,
	IDW_CONSTELLATION,
	IDW_SEQUENCER,
	IDW_CMD_PAR,
	IDW_CMD_DLY,
	IDW_CMD_FLASH,
	IDW_CMD_LOOP,
	IDW_CMD_SCREEN,
	IDW_TRANS_SPLIT1,
	IDW_TRANS_WIPE1,
	IDW_FORM_BARS1,
	IDW_FORM_IMAGE1,
	IDW_TRANS_SPLIT2,
	IDW_TRANS_WIPE2,
	IDW_FORM_BARS,
	IDW_MAX
}WindHandle;

typedef enum {
	HTH_CONST
}ThrHandle;

//CLASS_NAME
#define CLASS_STD_WND L"STD_WND"

typedef struct server_data {
	int server_id;
	int type;
	int max_client;
	BOOL state;
	LPWSTR server_name;
}HSERVER;

typedef struct h_text {
	int fSze;
	LPCSTR fName;
	LPCWSTR text;
	BOOL ts;
	COLORREF c;
	COORD pos;
	UINT  Uformat;
	HWND hTWnd;
}HTEXT;

HTEXT hText_G[32] = { 0 };
int hText_Count = 0;

HSERVER hServ;


#endif // !1


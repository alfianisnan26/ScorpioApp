
#include "Build_increment.h"

#define STRINGIZE2(s) #s
#define STRINGIZE(s) STRINGIZE2(s)

#define VERSION_MAJOR            MAJOR_VERSION
#define VERSION_MINOR            MINOR_VERSION
#define VERSION_REVISION         BUILD_DATE
#define VERSION_BUILD            BUILD_INCREMENT

#define VER_FILE_VERSION         VERSION_MAJOR, VERSION_MINOR, VERSION_REVISION, VERSION_BUILD
#define VER_FILE_VERSION_STR     STRINGIZE(VERSION_MAJOR)     \
                                    "." STRINGIZE(VERSION_MINOR) \
                                    "." STRINGIZE(VERSION_REVISION) \
                                    "." STRINGIZE(VERSION_BUILD) \

#define VER_PRODUCT_VERSION      VER_FILE_VERSION
#define VER_PRODUCT_VERSION_STR  VER_FILE_VERSION_STR

#ifdef _DEBUG
#define VER_VER_DEBUG          VS_FF_DEBUG
#else
#define VER_VER_DEBUG          0
#endif

#define VER_FILEOS               VOS_NT_WINDOWS32
#define VER_FILEFLAGS            VER_VER_DEBUG
#define VER_FILETYPE             VFT_APP

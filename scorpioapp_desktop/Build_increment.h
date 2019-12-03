#ifndef _SVN_VERSION_H_
#define _SVN_VERSION_H_

#define SVN_LOCAL_MODIFICATIONS $WCMODS?1:0$  // 1 if there are modifications to the local working copy, 0 otherwise
#define SVN_REVISION            $WCREV$       // Highest committed revision number in the working copy
#define SVN_TIME_NOW            $WCNOW$       // Current system date &amp; time

#define BUILD_INCREMENT 1308
#define BUILD_DATE 3

#define MAJOR_VERSION 2
#define MINOR_VERSION 27

#endif

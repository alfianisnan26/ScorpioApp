# [Scorp.io](https://scorp-io.web.app) - Create your own constellation
Proyek Akhir Proglan UTS
- Nama Proyek	: Scorp.io
- Jurusan   	: Teknik Komputer
- Instansi  	: Universitas Indonesia
- Dibuat    	: Bulan November - Desember 2019
- Kelompok  	:
	- Alfian Badrul Isnan | 1806148643
	- Idham Ramadito | 1806200293
## Deskripsi
Scorp.io merupakan aplikasi multiplatform berbasis Windows untuk server, Android dan Progressive Web Application (PWA) untuk client.
Fungsi utama dari dibentuknya aplikasi ini adalah untuk membentuk sebuah rangkaian “konstelasi” dari perangkat seluler untuk membentuk sebuah formasi tertentu yang ditunjukan oleh warna pada layar dan lampu flash (khusus aplikasi android) yang dikontrol melalui satu sumber server.
Nama Scorp.io merupakan kata yang diambil dari nama konstelasi bintang yang merepresentasikan hubungan antar bintang sehingga terbentuk konstelasi.
Sistem kerja dari aplikasi ini sedikit mirip dengan kahoot.com
## Quick Start
- Masuk ke laman scorp-io.web.app
- Download aplikasi Scorp-io di salah satu komputer anda sebagai server
- Gunakan HP atau perangkat Android lain dan ke laman scorp-io.web.app dan download aplikasi Android sebagai user (dianjurkan mendownload Android Bundle)
- Setelah di download, buka aplikasi Scorp.io di komputer dan tekan Create Server. Isi nama server sesuai keinginan.
- Untuk di perangkat Android, buka aplikasi Scorp.io yang sudah di download dan masukkan server id dari server atau scan barcode.
- Gunakan server untuk mengontrol tampilan user sehingga membentuk formasi yang diinginkan.
## Sistem Kerja
Server akan membuat Server ID yang dapat dipakai User untuk terhubung melalui Cloud Server RDB Firebase dengan melakukan HTTP Request. Setelah Server dan User terhubung, Server dapat memanipulasi data yang berada di RDB sehingga User yang membaca RDB dengan Server ID tersebut dapat memperbarui keadaannya (Warna Layar dan Lampu Torch).
### Pembentukan Konstelasi
Konstelasi dapat terbuat dalam mode 1D/2D, untuk membuat konstelasi setiap User harus menginput UserID disekitarnya. Dengan menginput UserID disekitarnya server dapat menentukan posisi setiap client sehingga konstelasi dapat terbuat.
### Data Sequential

### Struktur data Non-SQL

## Pros & Cons
### Pros
- File Sequencer dapat disimpan sehingga user dapat menggunakannya kembali.
- Cocok digunakan untuk membuat formasi besar seperti supporteran.
- Multiplatform, dapat diakses melalui browser dimanapun dan kapanpun.
- Untuk aplikasi android, telah support torch control sehingga membuat aplikasi ini semakin menarik.
- Untuk aplikasi mobile, mudah dikembangkan karena telah menggunakan Flutter API.
- Aplikasi Desktop menggunakan bahasa C sehingga penggunaan memori dapat terus diefisiensikan.
- Belum ditemukan aplikasi serupa, sehingga dapat dikembangkan lebih lanjut.
### Cons
- Sulitnya membentuk dan mencari data pada LinkedList untuk menentukan posisi user secara efisien.
- Masih menggunakan tampilan Win32 (keterbatasan bahasa C).
Server Hosting dan Real-Time Database dari Firebase Terbatas dikarenakan menggunakan langganan gratis.
- Masih banyak bug dan perlu di optimasi agar penggunaan memori lebih efisien.
## Screenshot

## Fitur
## Source
Program ini di buat dan di compile menggunakan IDE (Integrated Developement Environtment) [Visual Studio Community 2019](https://visualstudio.microsoft.com/vs/).
### API
#### Flutter
Flutter digunakan untuk mengembangkan aplikasi multiplatform pada Android dan PWA dalam bahasa Dart.
#### Windows API
Windows API (Win32) digunakan untuk mengembangkan tampilan pada aplikasi desktop server dalam bahasa C.
#### Firebase
Firebase merupakan API yang digunakan untuk host

2.
-kalau file html biasa, bisa langsung dibaca browser sementara file jsx tidak bisa,perubahan harus dibaca ulang sama browsernya  

-menggunakan html biasa:
<h1>hello word</h1>
//muncul seperti biasa 
-menggunakan jsx:
const sapa = "world"
<h1>hello, {sapa}</h1>
//bisa diubah sesuai kebutuhan

3.virtual DOM itu sama seperti DOM, yang membedakannya adalah kalau di DOM ada perubahan maka browser akan merender ulang semuanya termasuk bagian yang tidak dirubah, sementara VDOM hanya merender bagian yang diubah tanpa merender ulang semuanya

4.
SPA (Single Page Application)
Aplikasi web yang cuma punya 1 halaman utama (index.html). Navigasi antar "halaman" dilakukan di sisi JavaScript tanpa reload penuh.

MPA (Multi Page Application)
Aplikasi web tradisional, tiap kali pindah halaman → browser request halaman baru dari server, lalu reload seluruh halaman.

kelebihan SPA:
navigasi antar halaman menjadi instan
gampang maintain dan scale

kekurangan SPA:
load awal agak berat
keamanannya kurang

kelebihan MPA:
lebih sederhana tidak butuh framework frontend berat
aman, karena logika ada seerver utama

kekurangan MPA:
navigasi lambat
server load berat

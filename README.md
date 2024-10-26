# cmlabs-frontend-internship-test

## Deskripsi
Proyek ini adalah aplikasi frontend yang dibangun dengan React dan Vite sebagai bagian dari tes untuk **Frontend Internship di cmlabs**. Aplikasi ini bertujuan untuk pretest frontend-internship

## Persyaratan
Pastikan Anda telah menginstal perangkat berikut di sistem Anda:
- [Node.js](https://nodejs.org/) (disarankan versi 14 ke atas)
- [Git](https://git-scm.com/) (untuk mengelola versi)

## Instalasi

1. Clone repositori ini ke komputer Anda:
   ```
   git clone https://github.com/dafacahya/cmlabs-frontend-internship-test.git
   ```
2. Masuk ke direktori proyek:
   ```
   cd cmlabs-frontend-internship-test
   ```
3. Install dependencies menggunakan npm atau yarn:
   ```
   npm instal
   ```
   atau jika menggunakan yarn:
   ```
   yarn
   ```

## Menjalankan Proyek

Untuk menjalankan proyek dalam mode pengembangan, gunakan perintah berikut:
```
npm run dev
```
atau jika menggunakan yarn:
```
yarn dev
```

Setelah perintah ini dijalankan, aplikasi akan berjalan di `http://localhost:5173` secara default. Anda bisa mengaksesnya di browser Anda.

## Build untuk Produksi

Untuk membuat build produksi dari aplikasi, gunakan:
```
npm run build
```
atau jika menggunakan yarn:
```
yarn build
```

Build hasilnya akan disimpan di folder `dist`. Anda dapat menggunakan file ini untuk di-deploy ke server produksi.

## Menjalankan Preview Build

Setelah build, Anda bisa memeriksa hasilnya dengan menjalankan:
```
npm run preview
```
atau jika menggunakan yarn:
```
yarn preview
```


## Struktur Direktori

Berikut adalah struktur direktori dasar untuk proyek ini:
```
cmlabs-frontend-internship-test/
├── src/                # Direktori utama untuk kode sumber aplikasi
│   ├── assets/         # Folder untuk aset statis (gambar, ikon, dll)
│   ├── components/     # Komponen React
|   ├── pages/		# Pages utama
│   ├── App.jsx         # Komponen utama aplikasi
│   └── main.jsx        # Entry point aplikasi
├── public/             # Folder untuk file publik
├── .gitignore          # File untuk mengabaikan file tertentu di git
├── package.json        # Berisi dependencies dan script
└── vite.config.js      # Konfigurasi untuk Vite
```
## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).

# Binar Academy Bootcamp - FSW - Chapter 8 - Challenge

Ini adalah repository RESTful API yang menjadi basis untuk teman-teman berkreasi di challenge chapter 8. Ikuti petunjuk di bawah dengan seksama untuk memastikan teman-teman dapat menjalankan RESTful API.

## Prasyarat

Sebelum memulai menyentuh repository, pastikan komputer teman-teman memenuhi prasyarat berikut:

- sudah install Node.js & NPM
- sudah install PostgreSQL
- sudah install git

## Setup Project

1. Fork repository ini. Ada tombol 'fork' di kanan atas atau klik https://github.com/berbinarbinar/binar-challenge-chapter-8.git. Lalu fork dan nanti akan muncul repository yang sama persis di akun teman-teman.
2. Clone repository teman-teman yang sudah di fork

```
$ git clone https://github.com/[username_kalian]/binar-challenge-chapter-8.git
```

3. Pindah ke folder repository yang udah di clone dgn perintah
   `cd backend`
4. Install dependencies dgn command `npm install`
5. Pastikan sudah membuat database sesuai konfigurasi di `/config/config.js` jika belum jalankan saja `npx sequelize db:create` dan juga pastikan kita harus berada pada directory `server` kalau belum `cd server`
6. Lanjutkan dengan menjalankan migrasi, sebelumnya kita harus masuk pada directory `server` dulu ya, `npx sequelize db:migrate`
7. Kamu juga bisa jalankan file seed yang sudah dibuat dengan cara `npx sequelize db:seed:all`

### Run Backend

Pastikan kamu sudah berada di folder `backend`. <br />
Jika sudah, jalankan perintah berikut

```
$ npm run start
```

### Run Frontend

Change directory ke folder `app`, lalu jalankan

```
$ npm run start
```

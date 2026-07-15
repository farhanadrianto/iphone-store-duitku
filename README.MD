# 📱 iPhone Store

iPhone Store adalah aplikasi web e-commerce sederhana yang dibangun menggunakan **HTML**, **CSS**, **JavaScript**, dan **Node.js**. Project ini dibuat sebagai media pembelajaran untuk memahami alur transaksi online serta implementasi **Duitku Payment Gateway** menggunakan backend Node.js.

---

## ✨ Fitur

- Menampilkan daftar produk iPhone
- Tampilan detail produk
- Keranjang belanja menggunakan LocalStorage
- Checkout melalui backend Node.js
- Integrasi Duitku Payment Gateway (Sandbox)
- Generate MD5 Signature untuk autentikasi API
- Tampilan responsif untuk desktop dan mobile

---

## 🛠 Teknologi

- HTML5
- CSS3
- JavaScript
- Node.js
- Axios
- Crypto (MD5)
- Duitku Payment Gateway API
- Vercel

---

## 📂 Struktur Project

```text
iphone-store/
│
├── api/
│   └── checkout.js        # Endpoint checkout
│
├── public/
│   ├── index.html         # Halaman utama
│   ├── style.css          # Styling aplikasi
│   ├── script.js          # Logika frontend
│   └── ip13.jpg           # Gambar produk
│
├── .env                   # Konfigurasi Merchant Duitku
├── package.json           # Dependency project
├── vercel.json            # Konfigurasi deployment
└── .gitignore
```

---

## 💳 Alur Checkout

1. Pengguna memilih produk iPhone.
2. Produk ditambahkan ke keranjang belanja.
3. Data keranjang disimpan menggunakan **LocalStorage**.
4. Frontend mengirim total pembayaran ke backend Node.js.
5. Backend membuat **MD5 Signature** menggunakan Merchant Code, Order ID, Total Pembayaran, dan API Key.
6. Backend mengirim request ke **Duitku Sandbox API** menggunakan Axios.
7. Duitku mengembalikan informasi pembayaran.
8. Pengguna menyelesaikan proses pembayaran melalui Duitku.

---

## 🚀 Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/farhanadrianto/iphone-store-duitku.git
```

### 2. Masuk ke Folder Project

```bash
cd iphone-store
```

### 3. Install Dependency

```bash
npm install
```

### 4. Buat File `.env`

Isi file `.env` dengan Merchant Code dan API Key dari akun Duitku Sandbox.

```env
DUITKU_MERCHANT_CODE=YOUR_MERCHANT_CODE
DUITKU_API_KEY=YOUR_API_KEY
```

### 5. Jalankan Project

Menggunakan Vercel:

```bash
vercel dev
```

atau

```bash
npm start
```

Setelah server berjalan, buka browser dan akses:

```
http://localhost:3000
```

---

## 📝 Catatan

Project ini dibuat sebagai media pembelajaran dan portfolio.

Beberapa keterbatasan project:

- Keranjang belanja menggunakan **LocalStorage**.
- Menggunakan **Duitku Sandbox** untuk simulasi pembayaran.
- Belum menggunakan database.
- Belum memiliki sistem login pengguna.
- Riwayat transaksi belum disimpan secara permanen.
- Fokus utama project adalah mempelajari integrasi Payment Gateway menggunakan Node.js.

---

## 🎯 Hal yang Dipelajari

Melalui project ini saya mempelajari:

- Membangun antarmuka e-commerce menggunakan HTML, CSS, dan JavaScript.
- Membuat endpoint backend menggunakan Node.js.
- Mengintegrasikan Duitku Payment Gateway.
- Menghasilkan MD5 Signature menggunakan Crypto.
- Mengirim HTTP Request menggunakan Axios.
- Memahami komunikasi antara frontend dan backend.
- Deployment menggunakan Vercel.

---

## 📄 Lisensi

Project ini dibuat untuk keperluan pembelajaran dan portfolio.
# Website Anniversary 10 Tahun — “Sepuluh Tahun, Tetap Mekar”

Website album kenangan dan surat cinta digital perayaan anniversary 10 tahun, dirancang intim, hangat, elegan, dan mobile-first dengan motif bunga lily.

## Musik pengiring

Pemutar YouTube menampilkan lagu `Ic458P8NMew`, mencoba autoplay dengan volume 30%, dan mengulang lagu yang sama. Jika browser memblokir autoplay, tekan tombol putar pada pemutar atau tombol “Buka cerita kita”. Video YouTube disembunyikan; tombol kecil putar/jeda tetap tersedia di sudut halaman. Musik membutuhkan koneksi internet dan izin penyematan dari pemilik video; jika gagal, tersedia tautan langsung ke YouTube. ID lagu dan volume dapat diubah melalui `music` di `src/config/content.js`.

---

## 🌸 Struktur Fitur & Halaman

1. **Pembuka (Hero)**: Judul *"10 Tahun Bersamamu"*, sub-judul puitis, foto utama HD dengan rasio asli tanpa crop wajah, dan tombol *"Buka cerita kita"*.
2. **Sepotong Momen Kita**: Pemutar video photobooth dalam bingkai lavender dengan kontrol play, pause, volume/mute, progress scrub, dan layar penuh (audio tidak autoplay).
3. **Dua Buket, Satu Cerita**: Komparasi 2 buket bunga (dariku & darimu) berdampingan di desktop dan berurutan di HP. Dilengkapi modal zoom untuk membaca tulisan asli pada kartu bunga.
4. **Kenangan yang Kita Simpan**: Galeri foto photobooth (photostrip & candid spontan) lengkap dengan filter kategori, lazy loading, dan lightbox modal interaktif (navigasi tombol & keyboard panah/ESC).
5. **Surat Untukmu**: Desain kertas surat bertekstur halus dengan ornamen garis lily dan draf surat anniversary tulus berbahasa Indonesia.
6. **Untuk Tahun-Tahun Berikutnya**: Kutipan penutup *"Masih kamu, dan semoga selalu kamu"*, serta tombol interaktif *"Satu pesan lagi"* yang membuka pesan rahasia manis.

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Pastikan Anda berada di direktori proyek:
```bash
cd "/Users/mac/Pictures/with ayangg/photobooth with ayangg 02-11-2026/anniversary-10-tahun"
```

### 1. Mode Development (Live Preview)
```bash
npm run dev
```
Buka browser di alamat yang tampil di terminal (biasanya `http://localhost:5173`).

### 2. Membangun Proyek (Build Produksi)
```bash
npm run build
```

### 3. Menjalankan Preview Hasil Build
```bash
npm run preview
```
Buka browser di `http://localhost:4173`.

---

## ✍️ Cara Mengubah Konten & Teks

Semua data teks, nama panggilan, surat cinta, tanggal, dan pesan diatur terpusat di satu berkas:
👉 **[`src/config/content.js`](src/config/content.js)**

### Contoh Pengaturan:
- **Nama Panggilan / Pasangan**:
  Ubah `meta.partnerName` (misal `"Ulfa"`) dan `meta.yourName`. Jika dibiarkan `null`, sistem otomatis menyembunyikan tag nama tanpa meninggalkan teks kosong.
- **Tanggal Anniversary**:
  Ubah `meta.anniversaryDate` (misal `"6 November"`).
- **Isi Surat Cinta**:
  Ubah paragraf pada `letter.paragraphs`.
- **Pesan Rahasia Penutup**:
  Ubah teks pada `future.secretMessage.revealedText`.

---

## 📁 Pengelolaan Aset
- Aset web tersimpan rapi dan teroptimasi di [`public/assets/`](public/assets/):
  - `hero/`: Foto pembuka HD WebP & PNG asli.
  - `video/`: Video MP4 (H.264 web-compatible) & poster video.
  - `flowers/`: Foto kedua buket bunga & kartu asli.
  - `gallery/`: 15 foto photostrip & candid web-ready.
- Semua berkas asli di folder induk tetap aman dan tidak pernah ditimpa/dihapus.

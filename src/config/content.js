/**
 * Konfigurasi Terpusat Konten Website Anniversary 10 Tahun
 * "Sepuluh Tahun, Tetap Mekar"
 * 
 * Reza Eka Febrian & Ulfatul Mutthoimah, S.Farm
 */

export const siteConfig = {
  music: {
    youtubeId: 'Ic458P8NMew',
    volume: 30,
    label: 'Lagu untuk kita',
  },
  // Informasi Pasangan
  meta: {
    partnerName: "Ulfa",
    partnerFullName: "Ulfatul Mutthoimah, S.Farm",
    yourName: "Reza",
    yourFullName: "Reza Eka Febrian",
    coupleTitle: "Reza & Ulfa",
    anniversaryDate: null,
    badgeSubtitle: "Reza & Ulfa • 10 Tahun Bersama",
  },

  // Bagian 1: Pembuka (Hero)
  hero: {
    title: "10 Tahun Bersamamu",
    subtitle: "Sepuluh tahun, ribuan cerita, dan aku masih memilih kamu.",
    note: "Setiap senyuman, tawa kecil, dan tatapan yang tak pernah pudar.",
    buttonText: "Buka cerita kita",
    image: {
      src: `${import.meta.env.BASE_URL}assets/hero/hero-foto-hd.webp`,
      fallback: `${import.meta.env.BASE_URL}assets/hero/hero-foto-hd.png`,
      alt: "Foto photobooth kenangan manis Reza & Ulfa",
      caption: "Momen berharga yang selalu kita jaga",
    }
  },

  // Bagian 2: Sepotong Momen Kita (Video Photobooth)
  momentVideo: {
    sectionTag: "Rekaman Spontan",
    title: "Sepotong Momen Kita",
    subtitle: "Di balik setiap bidikan foto, selalu ada tawa lepas dan kehangatan yang tak pernah berubah.",
    video: {
      mp4Src: `${import.meta.env.BASE_URL}assets/video/photobooth-video.mp4`,
      poster: `${import.meta.env.BASE_URL}assets/video/photobooth-poster.webp`,
      posterFallback: `${import.meta.env.BASE_URL}assets/video/photobooth-poster.jpg`,
    },
    caption: "Tawa kecil di sela hitungan detik — hangat, jujur, dan apa adanya."
  },

  // Bagian 3: Dua Buket, Satu Cerita (Bunga & Kartu Ucapan)
  bouquets: {
    sectionTag: "Kisah Kasih & Bunga",
    title: "Dua Buket, Satu Cerita",
    subtitle: "Dua rangkaian bunga yang saling bertukar rasa. Bunga lily yang mekar anggun, pita yang terikat manis, dan doa yang saling bersambut.",
    items: [
      {
        id: "dariku",
        label: "Dariku, untukmu",
        colorTheme: "lavender",
        accentColor: "#C8AFE3",
        pillBg: "bg-primary-light/40 text-typography-dark border-primary/30",
        borderClass: "border-primary/40 hover:border-primary shadow-soft",
        src: `${import.meta.env.BASE_URL}assets/flowers/buket-dariku.webp`,
        fallback: `${import.meta.env.BASE_URL}assets/flowers/buket-dariku.jpg`,
        alt: "Buket bunga ungu dan pink dari Reza untuk Ulfa",
        description: "Buket bernuansa ungu lembut dan pink, berhias lily putih dan pita manis bermotif kotak.",
        hintText: "Ketuk untuk melihat foto & membaca tulisan kartu",
      },
      {
        id: "darimu",
        label: "Darimu, untukku",
        colorTheme: "blue",
        accentColor: "#A9D9EE",
        pillBg: "bg-accent-blueLight text-typography-dark border-accent-blue/40",
        borderClass: "border-accent-blue/40 hover:border-accent-blue shadow-soft",
        src: `${import.meta.env.BASE_URL}assets/flowers/buket-darimu.webp`,
        fallback: `${import.meta.env.BASE_URL}assets/flowers/buket-darimu.jpg`,
        alt: "Buket bunga biru dan putih dari Ulfa untuk Reza",
        description: "Buket bernuansa biru segar dan putih, berbalut pembungkus elegan dengan pita biru.",
        hintText: "Ketuk untuk melihat foto & membaca tulisan kartu",
      }
    ]
  },

  // Bagian 4: Kenangan Yang Kita Simpan (Galeri Photobooth)
  gallery: {
    sectionTag: "Lembar Kenangan",
    title: "Kenangan yang Kita Simpan",
    subtitle: "Kumpulan potongan cerita dari photobooth. Dari pose lucu, tawa lepas, hingga tatapan hangat yang selalu menenangkan.",
    filterAll: "Semua Momen",
    categories: ["Semua Momen", "Koleksi Strip", "Momen Spontan"]
  },

  // Bagian 5: Surat Untukmu
  letter: {
    sectionTag: "Sepucuk Surat",
    title: "Surat Untukmu",
    dateGreeting: "Untuk orang yang paling istimewa,",
    paragraphs: [
      "Melihat kembali perjalanan ini, rasanya sepuluh tahun berlalu begitu cepat, namun di saat yang sama terasa begitu kaya akan makna. Kita telah melewati banyak musim, berbagi ribuan percakapan sederhana, dan belajar memahami satu sama lain dalam setiap langkah.",
      "Terima kasih telah menjadi rumah tempatku selalu ingin kembali. Terima kasih untuk kesabaranmu yang tak pernah habis, tawa manismu yang selalu menyegarkan hari, dan kehangatanmu yang membuat duniaku terasa begitu cukup.",
      "Hubungan ini bukan tentang menemukan kesempurnaan, melainkan tentang dua orang yang dengan sepenuh hati terus memilih untuk bertahan, bertumbuh bersama, dan saling menjaga mimpi masing-masing.",
      "Bunga lily yang kita pilih hari ini menjadi lambang doa yang selalu kupanjatkan: semoga cinta kita tetap mekar indah, tulus, dan harum melewati waktu."
    ],
    closing: "Dengan segenap rasa sayang,",
    signature: "Reza Eka Febrian"
  },

  // Bagian 6: Untuk Tahun-Tahun Berikutnya & Penutup
  future: {
    sectionTag: "Melangkah Ke Depan",
    title: "Untuk Tahun-Tahun Berikutnya",
    message: "Kita sudah berjalan sejauh ini, dan aku tidak sabar untuk menapaki babak-babak baru bersamamu. Terus saling menggenggam tangan, saling mengingatkan dalam kebaikan, dan merawat apa yang sudah kita bangun dengan penuh cinta.",
    closingQuote: "Masih kamu, dan semoga selalu kamu.",
    
    // Interaksi Tombol "Satu pesan lagi"
    secretMessage: {
      buttonText: "Satu pesan lagi",
      revealedTitle: "Sebuah Doa & Janji Kecil",
      revealedText: "Terima kasih untuk sepuluh tahun yang luar biasa, Ulfa. Di setiap hembusan napas dan setiap langkah di masa depan, semoga jalan kita senantiasa dilapangkan dan dimudahkan menuju satu atap yang penuh berkah. Aku mencintaimu, hari ini, esok, dan selamanya.",
      heartNote: "Terus mekar bersama, selamanya."
    }
  }
};

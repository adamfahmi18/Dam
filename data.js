/* Semua isi yang sering berubah ada di sini.
   Tambah project baru: salin satu blok di `projects`, ubah isinya.
   img (opsional): path screenshot, mis. 'img/kue.webp'. Kosong = cover berwarna. */
const LP = ['Landing page 1 halaman', 'Domain + hosting 1 tahun', 'Desain modern dan responsif', 'Optimasi SEO', 'Terhubung ke WhatsApp'];
window.SITE = {
  wa: '6285111466885',
  waText: 'Halo Dam, saya tertarik untuk membuat website.',
  email: 'damzfhmi@gmail.com',
  github: 'https://github.com/adamfahmi18',
  projects: [
    { t: 'Landing Page Kue', d: 'Landing page toko kue dengan galeri produk.', tag: 'Landing page', c: '#b8693d', img: '',
      url: 'https://kokuelandingpage.vercel.app/#gallery' },
    { t: 'Landing Page Travel', d: 'Landing page agen perjalanan dengan visual luas.', tag: 'Landing page', c: '#1f6f78', img: '',
      url: 'https://infinitytravel-gamma.vercel.app/' },
    { t: 'Landing Page Restoran', d: 'Landing page restoran dengan menu dan suasana tempat.', tag: 'Landing page', c: '#93392b', img: '',
      url: 'https://infinityrasa.vercel.app/' },
    { t: 'Sistem Absensi', d: 'Absensi dengan verifikasi lokasi dan pengenalan wajah.', tag: 'Aplikasi web', c: '#3a48a8', img: '',
      url: 'https://absensidemobydam.lovable.app' }
  ],
  cats: [
    { k: 'Landing Page', d: 'Untuk promosi produk, campaign marketing, atau peluncuran bisnis baru.', tiers: [
      { n: 'Starter', p: 'Rp 500.000', d: 'Cocok untuk kebutuhan promosi cepat dengan budget terbatas.',
        f: [...LP, 'Revisi 1x', 'Garansi dan support 2 minggu'],
        x: ['Integrasi Google Analytics', 'Multiple CTA section', 'Formulir kontak', 'CMS untuk update konten sendiri'] },
      { n: 'Growth', p: 'Rp 750.000', d: 'Untuk campaign yang butuh sentuhan konten dan tracking performa.',
        f: [...LP, 'Integrasi Google Analytics', 'Multiple CTA section', 'Revisi 2x', 'Garansi dan support 3 minggu'],
        x: ['Formulir kontak', 'CMS untuk update konten sendiri'] },
      { n: 'Conversion Pro', p: 'Rp 1.000.000', hot: true, d: 'Landing page premium untuk campaign yang mengejar konversi maksimal.',
        f: [...LP, 'Integrasi Google Analytics', 'Multiple CTA section', 'Formulir kontak', 'CMS untuk update konten sendiri', 'Revisi 3x', 'Garansi dan support 1 bulan'] }
    ] },
    { k: 'Company Profile', d: 'Untuk bisnis yang ingin membangun kehadiran online yang kredibel.', tiers: [
      { n: 'Starter', p: 'Rp 1.000.000', d: 'Cocok untuk bisnis yang baru memulai kehadiran online.',
        f: ['Website company profile (5 halaman)', 'Desain responsif (mobile-friendly)', 'Google Analytics', 'Formulir kontak', 'Integrasi Google Maps', 'Optimasi SEO', 'Revisi 3x', 'Garansi dan support 2 minggu'],
        x: ['CMS untuk kelola konten sendiri', 'Blog / artikel', 'Integrasi WhatsApp dan media sosial', 'Galeri dan portofolio dinamis', 'Domain + hosting 1 tahun', 'Dukungan multi-bahasa (ID/EN)', 'Halaman karir dan lowongan kerja'] },
      { n: 'Professional', p: 'Rp 3.000.000', hot: true, d: 'Solusi lengkap untuk bisnis yang ingin tampil lebih meyakinkan.',
        f: ['Website 15+ halaman dengan struktur menu kompleks', 'Desain responsif (mobile-friendly)', 'CMS untuk kelola konten sendiri', 'Blog / artikel', 'Integrasi Google Maps', 'Google Analytics', 'Integrasi WhatsApp dan media sosial', 'Formulir kontak lanjutan', 'Galeri dan portofolio dinamis', 'Dukungan multi-bahasa (ID/EN)', 'Halaman karir dan lowongan kerja', 'SEO lanjutan (schema markup)', 'Domain, hosting, dan email bisnis', 'Revisi tanpa batas (selama masa support)', 'Garansi dan support 2 bulan'] }
    ] },
    { k: 'Web App', d: 'Untuk kebutuhan aplikasi web, dashboard, dan sistem internal bisnis.', tiers: [
      { n: 'Basic', p: 'Rp 1.500.000', d: 'Sistem sederhana untuk mengelola satu proses bisnis utama.',
        f: ['1 modul CRUD utama (data produk/anggota/inventaris, dll)', 'Autentikasi login admin', '1 dashboard admin', 'Setup database dan hosting awal', 'Dokumentasi penggunaan dasar', 'Revisi 2x', 'Garansi dan support 1 bulan'],
        x: ['Multi-role dan manajemen hak akses', 'Laporan dan export data (PDF/Excel)', 'Integrasi API pihak ketiga'] },
      { n: 'Advanced', p: 'Rp 5.000.000', hot: true, d: 'Untuk sistem dengan beberapa modul yang saling terintegrasi.',
        f: ['Hingga 3 modul terintegrasi (data produk/anggota/inventaris, dll)', 'Autentikasi login admin', '1 dashboard admin', 'Multi-role dan manajemen hak akses', 'Laporan dan export data (PDF/Excel)', 'Setup database dan hosting awal', 'Dokumentasi penggunaan dasar', 'Revisi 3x', 'Garansi dan support 2 bulan'],
        x: ['Integrasi API pihak ketiga'] },
      { n: 'Enterprise', p: 'Rp 10.000.000', d: 'Untuk sistem dengan modul lebih banyak dan kebutuhan integrasi dasar.',
        f: ['Hingga 6 modul terintegrasi', 'Autentikasi login admin', '1 dashboard admin', 'Multi-role dan manajemen hak akses', '1 integrasi API pihak ketiga', 'Laporan dan analitik lanjutan (export PDF/Excel)', 'Setup database dan hosting awal', 'Dokumentasi penggunaan dasar', 'Revisi 5x', 'Garansi dan support 3 bulan'] }
    ] },
    { k: 'Custom', d: 'Solusi khusus untuk kebutuhan yang tidak tercakup paket mana pun.',
      custom: { n: 'Website Custom', d: 'Untuk kebutuhan integrasi kompleks, sistem skala besar, atau requirement unik yang belum tercakup di paket mana pun. Ayo diskusikan kebutuhan bisnismu.',
        f: ['Modul dan integrasi tanpa batas', 'Integrasi API pihak ketiga tanpa batas', 'Integrasi AI', 'Integrasi payment gateway', 'Maintenance bulanan', 'Apa pun yang tidak ada di paket lain'] } }
  ],
  note: 'Harga dapat berbeda sesuai kompleksitas proyek. Konsultasikan kebutuhanmu untuk mendapatkan penawaran terbaik.'
};

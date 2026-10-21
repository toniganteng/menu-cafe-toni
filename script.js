// 1. Daftar Data Menu
const daftarMenu = [
  {
    id: 1,
    nama: "Kopi Susu Gula Aren",
    kategori: "minuman",
    harga: 18000,
    status: "Tersedia",
    foto: "https://unsplash.com"
  },
  {
    id: 2,
    nama: "Croissant Cokelat",
    kategori: "makanan",
    harga: 25000,
    status: "Tersedia",
    foto: "https://unsplash.com"
  },
  {
    id: 3,
    nama: "Matcha Latte",
    kategori: "minuman",
    harga: 22000,
    status: "Habis",
    foto: "https://unsplash.com"
  },
  {
    id: 4,
    nama: "Kentang Goreng Keju",
    kategori: "makanan",
    harga: 15000,
    status: "Tersedia",
    foto: "https://unsplash.com"
  }
];

// 2. Fungsi Menampilkan Menu ke HTML
function tampilkanMenu(menuYangDipilih) {
  const tempatMenu = document.getElementById("kontainer-menu");
  
  if (!tempatMenu) return; // Pengaman jika elemen HTML belum siap
  
  tempatMenu.innerHTML = "";

  menuYangDipilih.forEach(item => {
    const warnaStatus = item.status === "Tersedia" ? "hijau" : "merah";

    const kartuMenu = `
      <div class="kartu">
        <img src="${item.foto}" alt="${item.nama}" class="foto-menu">
        <div class="info-menu">
          <h3>${item.nama}</h3>
          <p class="harga">Rp ${item.harga.toLocaleString('id-ID')}</p>
          <span class="status ${warnaStatus}">${item.status}</span>
        </div>
      </div>
    `;
    
    tempatMenu.innerHTML += kartuMenu;
  });
}

// 3. Fungsi Filter Kategori yang Baru (Lebih Aman & Anti-Error)
function filterMenu(kategori, tombol) {
  // Menghapus kelas 'aktif' dari semua tombol filter
  const semuaTombol = document.querySelectorAll('.btn-filter');
  semuaTombol.forEach(btn => btn.classList.remove('aktif'));
  
  // Menambahkan kelas 'aktif' ke tombol yang sedang diklik jika ada
  if (tombol) {
    tombol.classList.add('aktif');
  }

  // Menyaring data menu
  if (kategori === 'semua') {
    tampilkanMenu(daftarMenu);
  } else {
    const menuDisaring = daftarMenu.filter(item => item.kategori === kategori);
    tampilkanMenu(menuDisaring);
  }
}

// 4. Memastikan HTML selesai loading baru memunculkan menu
document.addEventListener("DOMContentLoaded", () => {
  tampilkanMenu(daftarMenu);
});

// Tambahkan fungsi ini di baris paling bawah file script.js kamu
function filterMenu(kategori) {
  // Ganti status tombol aktif agar warnanya berubah
  const tombols = document.querySelectorAll('.btn-filter');
  tombols.forEach(btn => btn.classList.remove('aktif'));
  event.target.classList.add('aktif');

  if (kategori === 'semua') {
    tampilkanMenu(daftarMenu);
  } else {
    // Menyaring daftar menu berdasarkan kategori yang diklik
    const menuDisaring = daftarMenu.filter(item => item.kategori === kategori);
    tampilkanMenu(menuDisaring);
  }
}

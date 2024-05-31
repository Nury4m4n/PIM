const { jsPDF } = window.jspdf;

const printButton = document.querySelector('#print');

printButton.addEventListener('click', () => {
  const doc = new jsPDF();

  doc.text('Dilantiknya Ketua BEM 2024/2025', 10, 20);
  doc.text(`Telah dipilih sebagai Ketua Badan Eksekutif Mahasiswa (BEM) saudara Faisal untuk masa bakti mendatang, yang
    akan bersama-sama ditemani oleh sosok yang sama-sama luar biasa, Flora, sebagai Wakil Ketua. Tidak hanya
    sekedar pemimpin, mereka adalah representasi dari harapan dan aspirasi mahasiswa seluruhnya, yang
    mempercayakan mereka untuk memimpin dengan integritas, dedikasi, dan keberanian.`, 10, 30);

  doc.save("informasi.pdf");
});

const navbar = document.querySelector('.navbar-nav');
const burger = document.querySelector('#hamburger-menu')

burger.addEventListener('click', () => navbar.classList.toggle('active'));

document.addEventListener('click', (e) => {
  if (!burger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active')
  }
});

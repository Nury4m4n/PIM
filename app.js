const navbar = document.querySelector('.navbar-nav');
const burger = document.querySelector('#hamburger-menu')

burger.addEventListener('click', () => navbar.classList.toggle('active'));

document.addEventListener('click', (e) => {
  if (!burger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active')
  }
});

function generatePDF() {
  const element = document.querySelector('.informasi');
  const opt = {
    margin: 1,
    filename: 'informasi.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter' }
  };

  html2pdf().set(opt).from(element).save();
}

// .
document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('registerForm');

  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nrp = document.getElementById('regNrp').value;
      const password = document.getElementById('regPassword').value;

      if (localStorage.getItem(nrp)) {
        document.getElementById('registerMessage').textContent = 'NRP already registered.';
      } else {
        localStorage.setItem(nrp, password);
        document.getElementById('registerMessage').textContent = 'Registration successful!';
        setTimeout(function () {
          window.location.href = 'login.html';
        }, 1000);
      }
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nrp = document.getElementById('loginNrp').value;
      const password = document.getElementById('loginPassword').value;

      const storedPassword = localStorage.getItem(nrp);
      if (storedPassword) {
        if (password === storedPassword) {
          document.getElementById('loginMessage').textContent = 'Login successful!';
        } else {
          document.getElementById('loginMessage').textContent = 'Incorrect password.';
        }
      } else {
        document.getElementById('loginMessage').textContent = 'NRP not registered.';
      }
    });
  }
});

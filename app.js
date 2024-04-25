// Togel class active

const navbar = document.querySelector('.navbar-nav');
const burger = document.querySelector('#hamburger-menu')

burger.addEventListener('click', () => navbar.classList.toggle('active'));

document.addEventListener('click', (e) => {
  if (!burger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active')
  }
});






document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menu');
  const nav = document.getElementById('navbar');

  if (menu) {
    menu.addEventListener('click', () => {
      nav.classList.toggle('active');
      console.log('Menu clicked');
    });
  }
});


const menu = document.getElementById('menu');
const toggleMenu = document.getElementById('toggle-menu');
// Kiểm tra xem có null không

toggleMenu.addEventListener('click', () => {// In ra lớp hiện tại của menu
   menu.classList.toggle('hidden');
   menu.classList.toggle('menu-expanded');
});
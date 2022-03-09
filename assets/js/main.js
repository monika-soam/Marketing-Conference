const hamburger = document.getElementsByClassName('hamburger')[0];
const closeMenu = document.getElementsByClassName('closebtn')[0];

function openNav() {
  document.getElementById('mySidenav').style.width = '100%';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}
closeMenu.addEventListener('click', () => {
  closeNav();
});
hamburger.addEventListener('click', () => {
  openNav();
});
const hamburger = document.getElementsByClassName('hamburger')[0].childNodes[0];
console.log(hamburger);

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
var openMenuEl = document.querySelector(".nav-menu");
var menuBtnOpen = document.querySelector(".menuBtn")
var menuBtnClose = document.querySelector(".hamburger-icon-close")

// console.log(openMenu);

function openMenu() {
  openMenuEl.classList.add("nav-menu-open");
}

function closeMenu() {
  openMenuEl.classList.remove("nav-menu-open");
}


menuBtnOpen.addEventListener("click", openMenu);
menuBtnClose.addEventListener("click", closeMenu);


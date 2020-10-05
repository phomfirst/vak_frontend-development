// Hamburger Menu
var openMenuEl = document.querySelector(".nav-menu");
var menuBtnOpen = document.querySelector(".menuBtn")
var menuBtnClose = document.querySelector(".hamburger-icon-close")

function openMenu() {
  openMenuEl.classList.add("nav-menu-open");
}
function closeMenu() {
  openMenuEl.classList.remove("nav-menu-open");
}

menuBtnOpen.addEventListener("click", openMenu);
menuBtnClose.addEventListener("click", closeMenu);


// Home Main Menu
var menuEat = document.querySelector("#menu-eat");
var menuDrink = document.querySelector("#menu-drink");
var menuVisit = document.querySelector("#menu-visit");
var HomeBody = document.querySelector("#home-body");

function BgFood() {
  HomeBody.style.backgroundImage = "url(../images/food.jpg)"
}
function BgStrd() {
  HomeBody.style.backgroundImage = "url(../images/home-background.jpg)"
}

function BgDrink() {
  HomeBody.style.backgroundImage = "url(../images/drinks.jpg)"
}
function BgStrd() {
  HomeBody.style.backgroundImage = "url(../images/home-background.jpg)"
}

menuEat.addEventListener("mouseover", BgFood);
menuEat.addEventListener("mouseout", BgStrd);

menuDrink.addEventListener("mouseover", BgDrink);
menuDrink.addEventListener("mouseout", BgStrd);

menuEat.addEventListener("mouseover", BgFood);
menuEat.addEventListener("mouseout", BgStrd);
// console.log(mainMenuLinkBtn, HomeBody);
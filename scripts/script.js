// JavaScript Document

var navBtn = document.querySelector('.menu-btn');

function navBar() {
    var x = document.querySelector('.nav-menu');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

navBtn.addEventListener('click', navBar);
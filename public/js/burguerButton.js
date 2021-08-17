'use strict'
console.log("ready");
window.addEventListener("load", () => {
    let barMenu = document.getElementsByClassName("burger-menu");
    let nav = document.getElementsByClassName("main-navbar");
    window.innerWidth <= 577?(nav[0].style.display = "none"): (nav[0].style.display = "block");
  
    barMenu[0].addEventListener("mousedown", () => {
      let control = 0;
      nav[0].style.display != "none"
        ? (nav[0].style.display = "none")
        : (nav[0].style.display = "block");
    });
  
    window.addEventListener("resize", () => {
      window.innerWidth >= 576
        ? (nav[0].style.display = "block")
        : (nav[0].style.display = "none");
    });
  });
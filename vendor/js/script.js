"use strict";
// banner height
// const banner = document.querySelector(".banner");
// const headerHeight = document
//   .querySelector("header")
//   .getBoundingClientRect()
//   .height.toFixed(1);
// banner.style.height = `${100 - (headerHeight / window.innerHeight) * 100}vh`;
// menu button
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  navLinks.style.display = "flex";
  setTimeout(() => {
    navLinks.style.opacity = 1;
  }, 0);
});
navLinks.addEventListener("click", () => {
  navLinks.style.opacity = 0;
  setTimeout(() => {
    navLinks.style.display = "none";
  }, 500);
});

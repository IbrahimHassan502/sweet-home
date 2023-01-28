"use strict";
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
// gallery
const gallery = document.querySelector(".gallery");
const galleryNav = document.querySelector(".gallery-nav");
galleryNav.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    let button = e.target;
    // selecting active nav button
    const galleryList = document.querySelectorAll(".gallery-nav li");
    galleryList.forEach((li) => li.classList.remove("active"));
    button.parentElement.classList.toggle("active");
    // shuffling images
    gallery.setAttribute("data-category", button.dataset.category);
  }
});

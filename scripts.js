// Script function - Use onclick inline on .toggle-btn

// function myHamburger() {
//   let hamburger = document.getElementById("navbar");
//   hamburger.classList.toggle("show");
// }

let hamburger = document.querySelector(".toggle-btn");

hamburger.addEventListener("click", function () {
  navbar.classList.toggle("show");
});

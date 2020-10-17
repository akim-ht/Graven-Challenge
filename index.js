const scrollElt = document.querySelector(".scroll");
const hamburgerContainerElt = document.querySelector(".hamburger-container");
const hamburgerElt = document.querySelector(".hamburger");
const navItems = document.querySelector(".navItems");

hamburgerContainerElt.addEventListener("click", (e) => {
  hamburgerElt.classList.toggle("active");
  navItems.classList.toggle("active");
});

scrollElt.addEventListener("click", (e) => {
  document.getElementById("features").scrollIntoView();
});

const scrollElt = document.querySelector(".scroll");
const hamburgerElt = document.querySelector(".hamburger");

console.log(hamburgerElt);

hamburgerElt.addEventListener("click", (e) => {
  hamburgerElt.classList.toggle("active");
  console.log("clicked");
});

scrollElt.addEventListener("click", (e) => {
  document.getElementById("features").scrollIntoView();
});

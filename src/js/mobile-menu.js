const menuButton = document.getElementById("mobile-menu");
const headerlist = document.querySelector("header > ul");

function toggleMenu() {
  headerlist.classList.toggle("flex");
  headerlist.classList.toggle("hidden");
}

menuButton.addEventListener("click", toggleMenu);

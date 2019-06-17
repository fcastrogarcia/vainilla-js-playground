const menuButton = document.querySelector(".toggle-container");
const bars = document.querySelectorAll(".bar");

function toggleMenu() {
  bars.forEach(bar => bar.classList.toggle("toggle"));
}

menuButton.addEventListener("click", toggleMenu);

const menu_button = document.querySelector(".toggle-container");
const bars = document.querySelectorAll(".bar");
const menu = document.querySelector(".menu");
const menu_options = document.querySelectorAll(".modal span");
const sections = document.querySelectorAll(".section");
let selected = "1";

function toggleMenu() {
  bars.forEach(bar => bar.classList.toggle("toggle"));
  menu.classList.toggle("toggle");
}
function selectOption(e) {
  sections.forEach(section =>
    section.classList.contains("selected-option")
      ? section.classList.remove("selected-option")
      : null
  );
  selected = e.target.dataset.option;
  sections[selected - 1].classList.add("selected-option");
  toggleMenu();
}
//listeners
menu_button.addEventListener("click", toggleMenu);
menu_options.forEach(button => button.addEventListener("click", selectOption));

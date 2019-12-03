import formatting from "./formatting";
formatting();

const cvv = document.querySelector("#cvv");
const frontFields = document.querySelectorAll(".front");
const cardInner = document.querySelector(".card__inner");
const formInputs = document.querySelectorAll(".form__field input");

//focus handlers
function handleCVVFocus(e) {
  cardInner.classList.add("--flip");
}
function handleFrontFields(e) {
  cardInner.classList.remove("--flip");
}
//input handlers
function handleInputs(e) {
  document.getElementById(`card-${e.target.id}`).innerHTML = e.target.value;
}
//listeners
cvv.addEventListener("focus", handleCVVFocus);
frontFields.forEach(field =>
  field.addEventListener("focus", handleFrontFields)
);
formInputs.forEach(input => input.addEventListener("input", handleInputs));

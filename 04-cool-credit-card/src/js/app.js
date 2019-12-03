import formatting from "./formatting";
formatting();

const cvv = document.querySelector("#cvv");
const frontFields = document.querySelectorAll(".front");
const cardInner = document.querySelector(".card__inner");
const formInputs = document.querySelectorAll(".form__field input");
const signature = document.querySelector(".card__signature");

//focus handlers
function handleCVVFocus(e) {
  cardInner.classList.add("--flip");
}
function handleFrontFields(e) {
  cardInner.classList.remove("--flip");
}
//input handlers
function handleInputs(e) {
  const { value, id } = e.target;
  document.getElementById(`card-${id}`).innerHTML = value;
  if (value === "" && id === "name") {
    document.getElementById(`card-name`).innerHTML = "john doe";
  }
  if (id === "name") {
    signature.innerHTML = value;
  }
}
//listeners
cvv.addEventListener("focus", handleCVVFocus);
frontFields.forEach(field =>
  field.addEventListener("focus", handleFrontFields)
);
formInputs.forEach(input => input.addEventListener("input", handleInputs));

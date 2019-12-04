import formatting from "./formatting";
formatting();

const card = document.querySelector(".card");
const cvv = document.querySelector("#cvv");
const frontFields = document.querySelectorAll(".front");
const cardInner = document.querySelector(".card__inner");
const formInputs = document.querySelectorAll(".form__field input");
const signature = document.querySelector(".card__signature");
const cardname = document.getElementById(`card-name`);
const cardnumber = document.getElementById(`card-cardnumber`);

//focus handlers
function handleCVVFocus() {
  cardInner.classList.add("--flip");
}
function handleFrontFieldsFocus() {
  cardInner.classList.remove("--flip");
}
function handleCardClick() {
  cardInner.classList.toggle("--flip");
}
//input handlers
function handleInputs(e) {
  const { value, id } = e.target;

  if (id === "cardnumber") {
    let numbersToUnveil, whitespaceAtIndex, text;
    whitespaceAtIndex = [4, 9, 14];
    numbersToUnveil = 19 - value.length;
    text = value + "*".repeat(numbersToUnveil);
    text = text.split("");
    whitespaceAtIndex.forEach(index => text.splice(index, 1, " "));
    cardnumber.innerHTML = text.join("");
  } else {
    document.getElementById(`card-${id}`).innerHTML = value;
  }
  if (value === "" && id === "name") {
    cardname.innerHTML = "john doe";
  }
  if (id === "name") {
    signature.innerHTML = value;
  }
}
//listeners
cvv.addEventListener("focus", handleCVVFocus);
frontFields.forEach(field =>
  field.addEventListener("focus", handleFrontFieldsFocus)
);
formInputs.forEach(input => input.addEventListener("input", handleInputs));
card.addEventListener("click", handleCardClick);

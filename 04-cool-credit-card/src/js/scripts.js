import Cleave from "cleave.js";

const cvv = document.querySelector("#cvv");
const frontFields = document.querySelectorAll(".front");
const cardInner = document.querySelector(".card-inner");

// card number formatting
new Cleave("#cardnumber", {
  creditCard: true,
  onCreditCardTypeChanged: function(type) {
    console.log(type);
  }
});
//date formatting
new Cleave("#expiration", {
  date: true,
  datePattern: ["m", "y"]
});

//focus handlers
function handleCVVFocus(e) {
  cardInner.classList.add("flip");
}
function handleFrontFields(e) {
  cardInner.classList.remove("flip");
}

//listeners
cvv.addEventListener("focus", handleCVVFocus);
frontFields.forEach(field =>
  field.addEventListener("focus", handleFrontFields)
);

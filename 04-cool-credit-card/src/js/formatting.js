import Cleave from "cleave.js";
import { visa, mastercard, maestro, diners, amex } from "./cardIcons";

export default () => {
  const logo = document.getElementById("logo");

  // card number formatting
  new Cleave("#cardnumber", {
    creditCard: true,
    onCreditCardTypeChanged: function(type) {
      switch (type) {
        case "visa":
          logo.innerHTML = visa;
          break;
        case "mastercard":
          logo.innerHTML = mastercard;
          break;
        case "maestro":
          logo.innerHTML = maestro;
          break;
        case "diners":
          logo.innerHTML = diners;
          break;
        case "amex":
          logo.innerHTML = amex;
          break;
        default:
          logo.innerHTML = "";
      }
    }
  });
  //date formatting
  new Cleave("#expiration", {
    date: true,
    datePattern: ["m", "y"]
  });
};

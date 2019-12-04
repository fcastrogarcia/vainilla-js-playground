import Cleave from "cleave.js";
import { singleIcons, monoIcons } from "./cardIcons";

export default () => {
  const logo = document.getElementById("logo");
  const backLogo = document.querySelector(".card__field.--back-logo");

  const { visa, mastercard, maestro, diners, amex } = singleIcons;
  // card number formatting
  new Cleave("#cardnumber", {
    creditCard: true,
    onCreditCardTypeChanged: function(type) {
      switch (type) {
        case "visa":
          logo.innerHTML = visa;
          backLogo.innerHTML = monoIcons.visa;
          break;
        case "mastercard":
          logo.innerHTML = mastercard;
          backLogo.innerHTML = monoIcons.mastercard;
          break;
        case "maestro":
          logo.innerHTML = maestro;
          backLogo.innerHTML = monoIcons.maestro;
          break;
        case "diners":
          logo.innerHTML = diners;
          backLogo.innerHTML = monoIcons.diners;
          break;
        case "amex":
          logo.innerHTML = amex;
          backLogo.innerHTML = monoIcons.amex;
          break;
        default:
          logo.innerHTML = "";
          backLogo.innerHTML = "";
      }
    }
  });
  //date formatting
  new Cleave("#expiration", {
    date: true,
    datePattern: ["m", "y"]
  });
};

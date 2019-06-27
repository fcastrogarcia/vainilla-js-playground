import "../scss/main.scss";

const right_button = document.querySelector("[data-action='slide-right']");
const left_button = document.querySelector("[data-action='slide-left']");
const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
const container = document.querySelector(".container");

const total_cards = cards.length;
//se restan las 3 cards que se muestran de entrada
let cards_left = total_cards - 3;
let offset = 0;
const { width: carousel_width } = carousel.getBoundingClientRect();
const { width: card_width } = cards[0].getBoundingClientRect();

const handleButtons = () => {
  offset !== 0
    ? (left_button.style.display = "block")
    : (left_button.style.display = "none");

  cards_left !== 0
    ? (right_button.style.display = "block")
    : (right_button.style.display = "none");
};

const handleMouseOut = () => {
  left_button.style.display = "none";
  right_button.style.display = "none";
};

function slideRight() {
  //si quedan más de 3 cards se da una vuelta entera de carousel
  if (cards_left >= 3) {
    offset += carousel_width;
    carousel.style.transform = `translateX(-${offset}px)`;
  }
  //si quedan menos de 3 cards se suma la width y margen de las cards que queden(1 o 2)
  if (cards_left < 3 && cards_left > 0) {
    offset += cards_left * card_width + cards_left * 8 * 2; //8 son los pixeles del right y left margin
    carousel.style.transform = `translateX(-${offset}px)`;
  }
  //se descuentan las cards que pasaron o se resetea la variable si ya no hay más
  cards_left > 3 ? (cards_left -= 3) : (cards_left = 0);
  handleButtons();
}

function slideLeft() {
  //esta variable indica las cards que quedan pero volviendo desde el final del carousel
  let cards_backwards = total_cards - cards_left - 3;
  if (offset === 0) {
    return;
    //si quedan menos de 3 cards se resetea el offset y vuelve al principio
  } else if (cards_backwards <= 3) {
    offset = 0;
    carousel.style.transform = `translateX(-${offset})`;
    //si quedan más de 3 cards se le da una vuelta entera al carousel
  } else {
    offset -= carousel_width;
    carousel.style.transform = `translateX(-${offset}px)`;
  }
  //mientras queden más de 3 cards, se actualizan las cards que van quedando del otro lado
  // sumando 3. Si quedan menos de 3 es que ya se acaban entonces se resetean las cards_left..
  cards_backwards > 3 ? (cards_left += 3) : (cards_left = total_cards - 3);
  handleButtons();
}

//listeners
right_button.addEventListener("click", slideRight);
left_button.addEventListener("click", slideLeft);
container.addEventListener("mouseover", handleButtons);
container.addEventListener("mouseout", handleMouseOut);

import "bootstrap";
import "./style.css";

/* 
♠ &#9824; Picas (Spades)
♥ &#9829; Corazones (Hearts)
♦ &#9830; Diamantes (Diamonds)
♣ &#9827; Tréboles (Clubs)
*/

window.onload = function () {
  const generateNumber = (maxLength) => {
    return Math.floor(Math.random() * (maxLength - 1));
  };


  const changeCard = (cardNumber, suit, color) => {
    document.querySelector(".text-start").innerHTML = suit;
    document.querySelector(".text-center").innerHTML = cardNumber;
    document.querySelector(".text-end").innerHTML = suit;
    document.querySelector(".card").style.color = color;
  };


  const cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K', 'A'];
  const suits = {
    spade: "&#9824",
    heart: "&#9829",
    diamond: "&#9830",
    club: "&#9827"
  };
  const suitsEntries = Object.entries(suits);


  let cardNumber = generateNumber(cardNumbers.length);
  let suit = generateNumber(suitsEntries.length);
  let color = (
    suitsEntries[suit][0] == 'spade' ||
    suitsEntries[suit][0] == 'club'
  ) ? '#000' : '#d00'; /* Black or Red */

  changeCard(cardNumbers[cardNumber], suitsEntries[suit][1], color);
};

import "bootstrap";
import "./style.css";

/* 
♠ &#9824; Picas (Spades)
♥ &#9829; Corazones (Hearts)
♦ &#9830; Diamantes (Diamonds)
♣ &#9827; Tréboles (Clubs)
*/

/* Global Variables */
const cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K', 'A'];
const suits = {
  spade: "&#9824",
  heart: "&#9829",
  diamond: "&#9830",
  club: "&#9827"
};
const suitsEntries = Object.entries(suits);

/* Variables para el timer */
let count = 10;
let timer;


const resetTimer = () => {
  count = 10;
  document.getElementById('timer').textContent = count; // Actualiza el contador en la interfaz
  clearInterval(timer); // Detiene el contador actual
  startTimer(); // Reinicia el contador
};


const startTimer = () => {
  timer = setInterval(function() {
    document.getElementById('timer').textContent = count;
    if (count === 0) {
      renderCard();
      resetTimer();
    } else {
      count--;
    }
  }, 1000);
};


const generateNumber = (maxLength) => {
  return Math.floor(Math.random() * (maxLength - 1));
};


const renderCard = () => {
  let cardNumber = generateNumber(cardNumbers.length);
  let suit = generateNumber(suitsEntries.length);
  let color = (
    suitsEntries[suit][0] == 'spade' ||
    suitsEntries[suit][0] == 'club'
  ) ? '#000' : '#d00'; /* Black or Red */

  document.querySelector(".text-start").innerHTML = suitsEntries[suit][1];
  document.querySelector(".text-center").innerHTML = cardNumbers[cardNumber];
  document.querySelector(".text-end").innerHTML = suitsEntries[suit][1];
  document.querySelector(".card").style.color = color;
};


window.onload = function () {
  /* Renderiza la primera carta y activa el timer */
  renderCard();
  startTimer();

  // Event listener para el botón Resize
  const resizeButton = document.querySelector('.btn');

  resizeButton.addEventListener('click', () => {
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const cardElement = document.querySelector('.card');

    const width = parseInt(widthInput.value, 10);
    const height = parseInt(heightInput.value, 10);

    if (!isNaN(width) && !isNaN(height)) {
      // Cambia el tamaño de la carta
      cardElement.style.width = `${width}px`;
      cardElement.style.height = `${height}px`;

      // Actualiza el margen derecho de 'settings'
      document.getElementById('settings').style.marginRight = `calc(50% - ${width/2}px - 3rem - 450px)`;
      
      // Resetea el contador a 10
      resetTimer();
    } else {
      alert("Please, type correct values for Width and Height.");
    }
  });
};

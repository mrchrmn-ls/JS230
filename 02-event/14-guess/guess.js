/* eslint-disable max-lines-per-function */
function getRandomInteger(low, high) {
  let range = high - low + 1;
  return Math.floor(range * Math.random()) + low;
}

let LOW = 1;
let HIGH = 100;

let INITIAL_MESSAGE = `Guess a number between ${LOW} and ${HIGH}`;

document.addEventListener("DOMContentLoaded", () => {
  let answer = getRandomInteger(LOW, HIGH);
  let guesses = 0;

  let response = document.querySelector("p");
  let guess = document.getElementById("guess");

  response.textContent = INITIAL_MESSAGE;

  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    let number = Number(guess.value);
    let message;
    if (number > answer) {
      message = `My number is lower than ${number}`;
      guesses += 1;
      guess.select();
    } else if (number < answer) {
      message = `My number is greater than ${number}`;
      guesses += 1;
      guess.select();
    } else if (number === answer) {
      message = `You guessed it! It took you ${guesses} attempts.`;
      document.querySelector("[type=submit]").disables = true;
    }
    response.textContent = message;
  });

  document.querySelector("a").addEventListener("click", event => {
    event.preventDefault();
    guesses = 0;
    answer = getRandomInteger(LOW, HIGH);
    response.textContent = INITIAL_MESSAGE;
    guess.value = "";
  });

});
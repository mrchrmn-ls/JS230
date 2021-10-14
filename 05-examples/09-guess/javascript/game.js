document.addEventListener("DOMContentLoaded", () => {
  class Display {
    static MESSAGE = document.getElementById("message");
    static REPLAY = document.getElementById("replay");
    static SPACES = document.getElementById("spaces");
    static GUESSES = document.getElementById("guesses");
    static APPLES = document.getElementById("apples");
 

    static renderMessage(text) {
      Display.MESSAGE.textContent = text;
    }
    

    static renderSpaces(letters) {
      Display.renderLetters(letters, Display.SPACES);
    }


    static renderGuesses(letters) {
      Display.renderLetters(letters, Display.GUESSES);
    }


    static renderLetters(letters, element) {
      [...element.querySelectorAll("span")].forEach(span => span.remove());

      letters.forEach(letter => {
        element.insertAdjacentHTML("beforeend", `<span>${letter}</span>`);
      });
    }


    static renderApples(wrongGuesses) {
      Display.APPLES.className = `guess_${wrongGuesses}`;
    }

    // "this" refers to game instance
    static handleKeydown(event) {
      if (!(event.key.length === 1) || !(event.key.match(/[a-zA-Z]/))) return null;
      if (this.incorrect < Game.MAX_WRONG) this.updateGame(event.key); 
    }

  }
  

  class Game {
    static MAX_WRONG = 6;
  

    constructor(word) {
      if (word) { 
        this.word = word.split("");
        this.solution = new Array(word.length).fill(" ");
        this.incorrect = 0;
        this.guessedLetters = [];
      } else {
        this.outOfWords();
      }

      Display.renderSpaces(this.solution);
    }
  

    outOfWords() {
      Display.renderMessage("We've run out of words to guess.")
    }


    updateGame(letter) {
      if (!(this.guessedLetters.includes(letter))) this.guessedLetters.push(letter);
      Display.renderGuesses(this.guessedLetters);

      if (this.word.includes(letter)) {
        this.updateSolution(letter);
      } else {
        this.incorrect += 1;
        Display.renderApples(this.incorrect);
      }

      this.checkGameEnd();
    }


    updateSolution(key) {
      this.word.forEach((letter, index) => {
        if (letter === key) this.solution[index] = key;
      });

      Display.renderSpaces(this.solution);
    }


    checkGameEnd() {
      if (!(this.solution.includes(" ")) && this.incorrect < Game.MAX_WRONG) {
        Display.renderMessage("You win!");
      
      } else if (this.incorrect > Game.MAX_WRONG) {
        Display.renderMessage("Out of guesses!");
      }
    }


    newGame() {

    }
  }


  let randomWord = (function() {
    let words = ['apple', 'banana', 'orange', 'pear'];
  
    return function() {
      let index = Math.floor(Math.random() * words.length);
      return words.splice(index, 1).toString() || undefined;
    };
  })();
  
  let game = new Game(randomWord());

  document.addEventListener("keydown", Display.handleKeydown.bind(game));

  // document.getElementById("replay").addEventListener("click", game.handleReplayClick.bind(game));
  
});
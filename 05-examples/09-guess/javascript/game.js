document.addEventListener("DOMContentLoaded", () => {

  class UI {
    static MESSAGE = document.getElementById("message");
    static REPLAY = document.getElementById("replay");
    static SPACES = document.getElementById("spaces");
    static GUESSES = document.getElementById("guesses");
    static APPLES = document.getElementById("apples");

    static reset() {
      UI.renderApples(0);
      UI.renderMessage("");
      UI.renderGuesses([]);
      UI.renderSpaces([]);
      UI.toggleReplay();
    }

    static renderMessage(text) {
      UI.MESSAGE.textContent = text;
    }
    
    static renderSpaces(letters) {
      UI.renderLetters(letters, UI.SPACES);
    }

    static renderGuesses(letters) {
      UI.renderLetters(letters, UI.GUESSES);
    }

    static renderLetters(letters, element) {
      [...element.querySelectorAll("span")].forEach(span => span.remove());

      letters.forEach(letter => {
        element.insertAdjacentHTML("beforeend", `<span>${letter}</span>`);
      });
    }

    static renderApples(wrongGuesses) {
      UI.APPLES.className = `guess_${wrongGuesses}`;
    }


    static toggleReplay() {
      UI.REPLAY.classList.toggle("hidden");
    }

    // "this" refers to game instance
    static keydown(event) {
      if (!(event.key.length === 1) || !(event.key.match(/[a-zA-Z]/))) return null;
      if (this.incorrect < Game.MAX_WRONG) this.updateLetters(event.key); 
    }

    static replayClick(event) {
      event.preventDefault();
      keydownListener = UI.keydown.bind(new Game(randomWord()));
      document.addEventListener("keydown", keydownListener);
    }
  }
  

  class Game {
    static MAX_WRONG = 6;
  
    constructor(word) {
      this.incorrect = 0;
      this.guessedLetters = [];
      UI.reset();

      if (word) { 
        this.word = word.split("");
        this.solution = new Array(word.length).fill(" ");
        UI.renderSpaces(this.solution);
      } else {
        setTimeout(this.outOfWords, 1);        
      }
    }
  
    updateLetters(letter) {
      if (!(this.guessedLetters.includes(letter))) {
        this.guessedLetters.push(letter);
        UI.renderGuesses(this.guessedLetters);

        if (this.word.includes(letter)) {
          this.updateSolution(letter);
        } else {
          this.incorrect += 1;
          UI.renderApples(this.incorrect);
        }
      }

      this.checkGameEnd();
    }

    updateSolution(key) {
      this.word.forEach((letter, index) => {
        if (letter === key) this.solution[index] = key;
      });

      UI.renderSpaces(this.solution);
    }

    checkGameEnd() {
      if (!(this.solution.includes(" ")) && this.incorrect < Game.MAX_WRONG) {
        UI.renderMessage("You win!");
        this.endGame();
      } else if (this.incorrect === Game.MAX_WRONG) {
        UI.renderMessage("Out of guesses!");
        this.endGame();
      }
    }

    endGame() {
      this.unbindKeydown();
      UI.toggleReplay();
    }

    outOfWords() {
      this.unbindKeydown();
      UI.renderMessage("We've run out of words to guess.")
    }

    unbindKeydown() {
      document.removeEventListener("keydown", keydownListener);
    }
  }

  let randomWord = (function() {
    let words = ['apple', 'banana', 'orange', 'pear'];
  
    return function() {
      let index = Math.floor(Math.random() * words.length);
      return words.splice(index, 1).toString() || undefined;
    };
  })();
  
  let keydownListener = UI.keydown.bind(new Game(randomWord()));

  document.addEventListener("keydown", keydownListener);
  document.getElementById("replay").addEventListener("click", UI.replayClick);
});
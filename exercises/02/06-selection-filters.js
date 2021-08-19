/* eslint-disable max-lines-per-function */
const CLASSES = {
  "Vertebrate": ["Bear", "Turtle", "Whale", "Salmon", "Ostrich"],
  "Warm-blooded": ["Bear", "Whale", "Ostrich"],
  "Cold-blooded": ["Salmon", "Turtle"],
  "Mammal": ["Bear", "Whale"],
  "Bird": ["Ostrich"]
};

const ANIMALS = {
  Bear: ["Vertebrate", "Warm-blooded", "Mammal"],
  Turtle: ["Vertebrate", "Cold-blooded"],
  Whale: ["Vertebrate", "Warm-blooded", "Mammal"],
  Salmon: ["Vertebrate", "Cold-blooded"],
  Ostrich: ["Vertebrate", "Warm-blooded", "Bird"]
};

function clearOptions(select) {
  select.options.length = 0;
}

function optionsFromArray(select, array) {
  array.forEach(item => {
    select.add(new Option(item, item));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let classesMenu = document.querySelector("#animal-classifications");
  let animalsMenu = document.querySelector("#animals");
  let clear = document.querySelector("#clear");

  classesMenu.addEventListener("change", event => {
    let selection = event.target.value;
    clearOptions(event.currentTarget);
    optionsFromArray(animalsMenu, CLASSES[selection]);
  });

  animalsMenu.addEventListener("change", event => {
    let selection = event.target.value;
    clearOptions(event.currentTarget);
    optionsFromArray(classesMenu, ANIMALS[selection]);
  });

  clear.addEventListener("click", event => {
    event.preventDefault();

    clearOptions(classesMenu);
    optionsFromArray(classesMenu, Object.keys(CLASSES));
    classesMenu.add(new Option("Classifications", "Classifications"));

    clearOptions(animalsMenu);
    optionsFromArray(animalsMenu, Object.keys(ANIMALS));
    animalsMenu.add(new Option("Animals", "Animals"));
  });
});
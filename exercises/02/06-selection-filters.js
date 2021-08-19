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
  clearOptions(select);
  array.forEach(item => {
    select.add(new Option(item, item));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let classesMenu = document.querySelector("#animal-classifications");
  let animalsMenu = document.querySelector("#animals");

  classesMenu.addEventListener("change", event => {
    let selection = classesMenu.options[classesMenu.selectedIndex].value;
    let animals = CLASSES[selection];
    optionsFromArray(animalsMenu, animals);
  });

  animalsMenu.addEventListener("change", event => {
    let selection = animalsMenu.options[animalsMenu.selectedIndex].value;
    let classes = ANIMALS[selection];
    optionsFromArray(classesMenu, classes);
  });
});
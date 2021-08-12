function walk(element, callback) {
  callback(element);
  [...element.children].forEach(child => {
    walk(child, callback);
  });
}

function getGeneration(element) {
  let generation = 0;
  let currentElement = element;
  while (currentElement !== document.body) {
    generation += 1;
    currentElement = currentElement.parentElement;
  }
  return generation;
}

function colourGeneration(generation) {
  walk(document.body, element => {
    if (getGeneration(element) === generation) element.classList.add("generation-color");
  });
}

colourGeneration(3);
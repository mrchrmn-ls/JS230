/* eslint-disable max-lines-per-function */
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let html = document.childNodes[1]; // skip doctype
  let body = html.lastChild;         // skip head and text nodes
  let heading = body.childNodes[1];  // skip text node

  heading.style.color = 'red';
  heading.style.fontSize = '48px';

  let pCount = 0;
  let firstWords = [];

  walk(body, node => {
    if (node.tagName === "P") {
      if (pCount > 0) node.classList.add("stanza");

      let text = node.firstChild.data.trim();
      firstWords.push(text.split(" ")[0]);

      pCount += 1;
    }
  });

  console.log("Paragraphs: " + pCount);
  console.log("First Words: " + firstWords);

});


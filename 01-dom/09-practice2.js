/* eslint-disable max-lines-per-function */
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

document.addEventListener("DOMContentLoaded", () => {

  let imgCount = 0;
  let pngCount = 0;

  walk(document, node => {
    if (node.tagName === "IMG") {
      imgCount += 1;
      if (node.getAttribute("src").toLowerCase().includes(".png")) {
        pngCount += 1;
      }
    }
  });

  console.log("IMG: " + imgCount);
  console.log("PNG: " + pngCount);

  walk(document, node => {
    if (node.tagName === "A") node.style.color = "red";
  });

});

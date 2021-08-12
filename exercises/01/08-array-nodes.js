document.addEventListener("DOMContentLoaded", () => {
  function arrayToNodes(array, parent = document) {
    let newElement;
    let [ newName, children ] = array;

    if (newName !== "BODY") {
      newElement = document.createElement(newName);
      parent.appendChild(newElement);
    } else {
      newElement = document.body;
    }

    children.forEach(subArray => arrayToNodes(subArray, newElement));
  }

  const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
  arrayToNodes(nodes);
});
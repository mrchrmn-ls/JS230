function nodeSwap(id1, id2) {
  let element1 = document.getElementById(id1);
  let element2 = document.getElementById(id2);

  if ((!element1 || !element2) ||
      element1.contains(element2) ||
      element2.contains(element1)) return undefined;

  let temp = document.createElement("div");
  element1.insertAdjacentElement("afterend",temp);
  element2.insertAdjacentElement("afterend", element1);
  temp.insertAdjacentElement("afterend", element2);
  temp.remove();

  return true;
}

console.log(nodeSwap(3, 1));
console.log(nodeSwap(7, 9));
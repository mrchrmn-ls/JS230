/*

Initialize result array.

For a given node:
 - find siblings and their node names to sibling array.
 - push sibling array to node array.

If current node has ID of 1 => stop.
Else move to parent node and repeat.

*/

function getSiblingsArray(node) {
  return [...node.parentElement.children].reduce((acc, child) => {
    acc.push(child.nodeName);
    return acc;
  }, []);
}

function backTracer(node, array) {
  array.push(getSiblingsArray(node));

  if (node.getAttribute("id") !== "1") backTracer(node.parentElement, array);

  return array;
}

function domTreeTracer(id) {
  return backTracer(document.getElementById(id), []);
}

console.log(domTreeTracer(1));
console.log(domTreeTracer(2));
console.log(domTreeTracer(22));
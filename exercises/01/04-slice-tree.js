/*

Guard clauses:
- Return undefined if
  - ancestor of first id is not body.
  - second id is not descendant of first id

}

*/

// function walkDown(node, callback) {
//   callback(node);
//   [...node.children].forEach(child => {
//     walkDown(child, callback);
//   });
// }

function walkUp(node, callback) {
  callback(node);
  if (node.parentElement !== document.body) {
    walkUp(node.parentElement, callback);
  }
}

function sliceTree (startId, endId) {
  let startNode = document.getElementById(startId);
  let endNode = document.getElementById(endId);

  if (!startNode || !endNode) return undefined;
  if (!startNode.contains(endNode) ||
      !document.body.contains(startNode)) return undefined;

  let result = [];
  walkUp(endNode, node => {
    if (!node.contains(startNode.parentElement)) result.unshift(node.nodeName);
  });
  return result;
}

console.log(sliceTree(1, 4)); // = ["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76)); // = undefined
console.log(sliceTree(2, 5)); // = undefined
console.log(sliceTree(5, 4)); // = undefined
console.log(sliceTree(1, 23)); // = ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22)); // = ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19)); // = ["SECTION", "P", "SPAN", "STRONG", "A"]
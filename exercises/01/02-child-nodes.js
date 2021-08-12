function walk(node, callback) {
  callback(node);
  [...node.childNodes].forEach(child => {
    walk(child, callback);
  });
}

function childNodes(id) {
  let parent = document.getElementById(String(id));
  let children = 0;

  walk(parent, node => {
    children += node.childNodes.length;
  });

  let direct = parent.childNodes.length;
  let indirect = children - direct;

  return [direct, indirect];
}

console.log(childNodes(1));
console.log(childNodes(4));
console.log(childNodes(9));
document.addEventListener("DOMContentLoaded", () => {
  function nodesToArr(element = document.body) {
    return [element.nodeName, [...element.children].map(nodesToArr)];
  }

  console.log(nodesToArr());

});


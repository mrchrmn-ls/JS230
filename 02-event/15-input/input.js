/* eslint-disable max-lines-per-function */
document.addEventListener("DOMContentLoaded", () => {
  let cursorBlink;
  let focus;

  textField.addEventListener("click", event => {
    event.stopPropagation();
    let textField = document.querySelector(".text-field");
    textField.classList.add("focused");
    focus = textField;
    cursorBlink = cursorBlink || setInterval(() => textField.classList.toggle("cursor"), 500);
  });

  document.addEventListener("keydown", event => {
    if (focus) {
      let content = focus.querySelector(".content");
      if (event.key === "Backspace") {
        content.textContent = content.textContent.slice(0, -1);
      } else {
        content.textContent += event.key;
      }
    }
  });

  document.addEventListener("click", event => {
    if (focus) {
      clearInterval(cursorBlink);
      textField.classList.remove("cursor");
      textField.classList.remove("focused");
      focus = null;
      cursorBlink = null;
    }
  });
});
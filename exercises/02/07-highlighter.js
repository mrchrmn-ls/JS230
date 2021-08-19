/* eslint-disable max-lines-per-function */
document.addEventListener("DOMContentLoaded", () => {
  function clearHighlight() {
    if (document.querySelector(".highlight")) {
      document.querySelector(".highlight").classList.remove("highlight");
    }
  }

  document.querySelector("header ul").addEventListener("click", event => {
    event.stopPropagation();
    let id = event.target.getAttribute("href");
    clearHighlight();
    document.querySelector(id).classList.add("highlight");
  });

  [...document.querySelectorAll("article")].forEach(element => element.addEventListener("click", event => {
    event.stopPropagation();
    clearHighlight();
    event.currentTarget.classList.add("highlight");
  }));

  document.body.addEventListener("click", () => {
    clearHighlight();
    document.querySelector("main").classList.add("highlight");
  });
});
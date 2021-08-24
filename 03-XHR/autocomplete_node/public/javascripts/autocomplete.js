const Autocomplete = {
  init() {
    this.input = document.querySelector("input");
    this.url = "/countries?matching=";

    this.listUI = null;
    this.overlay = null;

    this.wrapInput();
    this.createUI();
  },

  wrapInput() {
    let wrapper = document.createElement("div");
    wrapper.classList.add("autocomlete-wrapper");
    this.input.parentNode.appendChild(wrapper);
    wrapper.appendChild(this.input);
  },

  createUI() {
    let listUI = document.createElement("ul");
    listUI.classList.add("autocomlete-ui");
    this.input.parentNode.appendChild(listUI);
    this.listUI = listUI;

    let overlay = document.createElement("div");
    overlay.classList.add("autocomplete-overlay");
    overlay.style.width = `${this.input.clientWidth}px`;
    this.input.parentNode.appendChild(overlay);
    this.overlay = overlay;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Autocomplete.init();
});
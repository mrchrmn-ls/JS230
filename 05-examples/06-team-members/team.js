function toggleModal(from, to) {
  let modalLayer = document.getElementById("modal-layer");
  modalLayer.classList.replace(from, to);

  let modal = document.getElementById("modal");
  modal.classList.replace(from, to);
}

function showModal(event) {
  event.preventDefault();

  let linkImg = this.querySelector("img");

  let modalImg = document.querySelector("#modal img");
  let modalH3 = document.querySelector("#modal h3");
  let modalP = document.querySelector("#modal p");

  modalImg.src = linkImg.src;
  modalH3.innerHTML = linkImg.alt;
  modalP.innerHTML = this.dataset.memberinfo;

  toggleModal("hide", "show");
}

function hideModal(event) {
  event.preventDefault();
  toggleModal("show", "hide");
}

document.addEventListener("DOMContentLoaded", () => {
  let teamLinks = document.querySelectorAll("#team ul li a");

  [...teamLinks].forEach(item => {
    item.addEventListener("click", showModal);
  });

  let closeModalLink = document.querySelector("#modal .close");
  closeModalLink.addEventListener("click", hideModal);
});
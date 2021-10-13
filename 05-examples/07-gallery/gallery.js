function imageClickHandler() {
  document.querySelector(".active").classList.remove("active");
  setMainImage(this);
}

function setMainImage(image) {
  let img = document.querySelector("figure img");
  let caption = document.querySelector("figure figcaption");

  img.src = image.src;
  caption.innerHTML = image.title;
  image.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  let thumbnails = document.querySelectorAll("main ul img");

  [...thumbnails].forEach(image => {
    image.addEventListener("click", imageClickHandler);
  });

  setMainImage(thumbnails[0]);
});
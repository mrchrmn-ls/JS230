let header = document.querySelector("body > header");
document.body.insertAdjacentElement("afterbegin", header);
header.insertAdjacentElement("afterbegin", document.querySelector("h1"));

let article = document.querySelector("article");
article.insertAdjacentElement("beforeend", document.querySelectorAll("figure")[1]);
article.insertAdjacentElement("beforeend", document.querySelectorAll("figure")[1]);

let captions = document.querySelectorAll("figcaption");
[ captions[0].textContent, captions[1].textContent ] = [ captions[1].textContent, captions[0].textContent ];
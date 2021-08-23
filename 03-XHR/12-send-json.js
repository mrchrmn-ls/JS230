/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', () => {
  let store = document.getElementById('store');

  let newProductData = {
    name: "Marc's Pen",
    sku: "MP3000",
    price: 350
  };

  let json = JSON.stringify(newProductData);

  let request = new XMLHttpRequest();
  request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
  request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  request.setRequestHeader("Authentication", "token AUTH_TOKEN");
  request.addEventListener('load', () => {
    store.innerHTML = request.response;
  });
  request.send(json);

  store.addEventListener('click', event =>  {
    let target = event.target;
    if (target.tagName !== 'A') {
      return;
    }

    event.preventDefault();

    let request = new XMLHttpRequest();

    request.open('GET', `https://ls-230-web-store-demo.herokuapp.com${target.getAttribute('href')}`);

    request.addEventListener('load', () => {
      store.innerHTML = request.response;
    });
    request.send();
  });

  store.addEventListener("submit", event => {
    event.preventDefault();

    let form = event.target;
    let data = new FormData(form);
    let request = new XMLHttpRequest();

    request.open("POST", `https://ls-230-web-store-demo.herokuapp.com${form.getAttribute('action')}`);
    request.setRequestHeader("Authorization", "token AUTH_TOKEN");
    request.addEventListener("load", () => {
      store.innerHTML = request.response;
    });
    request.send(data);
  });
});
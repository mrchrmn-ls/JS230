class GroceryList {
  constructor(ul) {
    this.listElement = ul;
    this.list = [];
  }

  addItem(name, quantity) {
    this.list.push({name, quantity});
  }

  render() {
    this.listElement.innerHTML = "";
    this.list.forEach(item => {
      let li = document.createElement("LI");
      li.innerHTML = `${item.quantity} ${item.name}`;
      this.listElement.append(li);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let groceryList = new GroceryList(document.getElementById("grocery-list"));

  form.addEventListener("submit", event => {
    event.preventDefault();
    let data = new FormData(form);

    groceryList.addItem(data.get("name"), data.get("quantity") || 1);
    groceryList.render();
  });
});
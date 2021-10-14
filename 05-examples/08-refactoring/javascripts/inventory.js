let inventory = (function() {
  let lastId = 0;
  let collection = [];

  return {

    setDate() {
      let date = new Date();
      document.querySelector("#order_date").textContent = date.toUTCString();
    },

    cacheTemplate() {
      let iTmpl = document.querySelector("#inventory_item");
      this.template = Handlebars.compile(iTmpl.innerHTML);
      iTmpl.remove();
    },

    add() {
      lastId += 1;
      let item = {
        id: lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      collection.push(item);

      return item;
    },

    remove(id) {
      collection = collection.filter(function(item) {
        return item.id !== id;
      });
    },

    get(id) {
      let found_item;

      collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },

    update(itemRow) {
      let id = this.findID(itemRow);
      let item = this.get(id);

      item.name = itemRow.querySelector("[name^=item_name]").value;
      item.stock_number = itemRow.querySelector("[name^=item_stock_number]").value;
      item.quantity = itemRow.querySelector("[name^=item_quantity]").value;
    },

    newItem(e) {
      console.log("New Item");
      e.preventDefault();
      let item = this.add();
      document.querySelector("#inventory")
              .insertAdjacentHTML("beforeend", this.template({id: item.id}));
    },

    findParent(e) {
      return e.target.closest("tr");
    },

    findID: function(item) {
      return +item.querySelector("input[type=hidden]").value;
    },

    deleteItem(e) {
      e.preventDefault();
      if (e.target.classList.contains("delete")) {
        let item = this.findParent(e);
        this.remove(this.findID(item));
        item.remove();
      }
    },

    updateItem(e) {
      if (e.target.tagName === "INPUT") {
        let item = this.findParent(e);
        this.update(item);
      }
    },

    bindEvents() {
      document.querySelector("#add_item").addEventListener("click", this.newItem.bind(this));
      document.querySelector("#inventory").addEventListener("click", this.deleteItem.bind(this));
      document.querySelector("#inventory").addEventListener("focusout", this.updateItem.bind(this));
    },

    init() {
      console.log("Init");
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener("DOMContentLoaded", inventory.init.bind(inventory));
document.addEventListener("DOMContentLoaded", () => {
  let formElement = document.querySelector("form");

  formElement.addEventListener("submit", event => {
    event.preventDefault();
    let data = new FormData(formElement);

    let num = Number(data.get("first-number"));
    let operator = data.get("operator");
    let num2 = Number(data.get("second-number"));

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = calculateResult(num, operator, num2);
  });
});

function calculateResult(num, operator, num2) {
  switch (operator) {
    case "+":
      return num + num2;
    case "-":
      return num - num2;
    case "*":
      return num * num2;
    case "/":
      return num / num2;
    default:
      return null;
  }
}
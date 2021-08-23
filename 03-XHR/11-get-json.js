let request = new XMLHttpRequest();

request.open("GET", "https://api.github.com/repos/rails/rails");
request.responseType = "json";

request.addEventListener("load", () => {
  let data = request.response;

  if (String(request.status)[0] !== "2") {
    console.log(request.status);
    console.log("The request could not be completed.");
    return;
  }

  console.log(request.status);
  console.log(data.open_issues);
});

request.send();
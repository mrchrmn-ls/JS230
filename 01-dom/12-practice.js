/* eslint-disable max-lines-per-function */
document.addEventListener("DOMContentLoaded", () => {

  function wordCount(string) {
    return string.trim().split(" ").length;
  }

  let h2s = [...document.querySelectorAll("h2")];
  let h2Counts = h2s.map(h2 => wordCount(h2.textContent));

  console.log(h2Counts);

  let toc1 = document.querySelector("#toc");
  let toc2 = document.getElementsByClassName("toc")[0];
  let toc3 = document.getElementById("toc");
  let toc4 = document.querySelectorAll(".toc")[0];

  console.log(toc1, toc2, toc3, toc4);

  let tocLinks = [...document.querySelectorAll("#toc ul a")];

  tocLinks.forEach((link, index) => {
    if (index % 2 === 0) link.style.color = "green";
  });

  let captions = [...document.querySelectorAll(".thumbcaption")].map(element => element.textContent.trim());

  console.log(captions);

  let bioDataRows = [...document.querySelectorAll(".biota tr")];
  let classificationRows = bioDataRows.filter(row => row.textContent.includes(":"));
  let classification = {};

  classificationRows.forEach(row => {
    let rank = row.textContent.split(":")[0].trim();
    let group = row.textContent.split(":")[1].trim();
    classification[rank] = group;
  });

  console.log(classification);

});
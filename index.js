let button = document.getElementById("color-btn");
let colorTxt = document.getElementById("new-color");
let heading = document.getElementById("heading");
let body = document.getElementById("body");
let valuesArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let colorGenerated = "#";

function getColor() {
  colorGenerated = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * valuesArray.length);
    colorGenerated += valuesArray[index];
    console.log(`index: ${index} colorsGenerated: ${colorGenerated}`);
  }
  colorTxt.textContent = `Color: ${colorGenerated}`;
  colorTxt.style.borderColor = colorGenerated;
  heading.style.color = colorGenerated;
  body.style.background = colorGenerated;
}

button.addEventListener("click", getColor);

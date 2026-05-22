let display = document.getElementById("display");
display.innerText = "0";

function clearDisplay() {
  display.innerText = "0";
}
function backspace() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText == "") {
    display.innerText = "0";
  }
}
function updateDisplay(val) {
  if (display.innerText == "0") {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}
function equal() {
  display.innerText = eval(display.innerText);
}

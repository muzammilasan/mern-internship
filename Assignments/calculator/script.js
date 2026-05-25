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
let frac = 0;
function updateDisplay(val) {
  if (display.innerText == "0") {
    display.innerText = val;
  } else {
    if ("+-*/.".includes(display.innerText.slice(-1))) {
      if (!"+-*/.".includes(val)) {
        display.innerText += val;
      }
    } else {
      display.innerText += val;
    }
  }
  if (display.innerText.includes("/")) {
    frac = 1;
  }
}
function equal() {
  if (frac) {
    display.innerText = eval(display.innerText).toFixed(3);
  } else {
    display.innerText = eval(display.innerText);
  }
}

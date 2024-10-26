let first_value = "";
let second_value = "";
let operator = "";
let finish = false;
let result = "";

let display = document.querySelector(".display");

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let action = ["+", "-", "*", "/", "=", ".", "%", "+/-"];

function clearAll() {
  first_value = "";
  second_value = "";
  finish = false;
  operator = "";
  display.textContent = 0;
  document.getElementById("sum").style.backgroundColor = "#ff9500";
  document.getElementById("sum").style.color = "#fff";
  document.getElementById("subtract").style.backgroundColor = "#ff9500";
  document.getElementById("subtract").style.color = "#fff";
  document.getElementById("multiply").style.backgroundColor = "#ff9500";
  document.getElementById("multiply").style.color = "#fff";
  document.getElementById("division").style.backgroundColor = "#ff9500";
  document.getElementById("division").style.color = "#fff";
}

document.getElementById("clear_btn").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("button")) return;

  let index = event.target.textContent;

  if (numbers.includes(index)) {
    if (second_value === "" && operator === "") {
      first_value += index;
      display.textContent = first_value;
    } else {
      second_value += index;
      display.textContent = second_value;
    }
  }

  if (action.includes(index)) {
    switch (index) {
      case "=":
        document.getElementById("sum").style.backgroundColor = "#ff9500";
        document.getElementById("sum").style.color = "#fff";
        document.getElementById("subtract").style.backgroundColor = "#ff9500";
        document.getElementById("subtract").style.color = "#fff";
        document.getElementById("multiply").style.backgroundColor = "#ff9500";
        document.getElementById("multiply").style.color = "#fff";
        document.getElementById("division").style.backgroundColor = "#ff9500";
        document.getElementById("division").style.color = "#fff";
        break;
      case "+":
        document.getElementById("sum").style.backgroundColor = "#fff";
        document.getElementById("sum").style.color = "#ff9500";
        document.getElementById("subtract").style.backgroundColor = "#ff9500";
        document.getElementById("subtract").style.color = "#fff";
        document.getElementById("multiply").style.backgroundColor = "#ff9500";
        document.getElementById("multiply").style.color = "#fff";
        document.getElementById("division").style.backgroundColor = "#ff9500";
        document.getElementById("division").style.color = "#fff";
        break;
      case "-":
        document.getElementById("subtract").style.backgroundColor = "#fff";
        document.getElementById("subtract").style.color = "#ff9500";
        document.getElementById("sum").style.backgroundColor = "#ff9500";
        document.getElementById("sum").style.color = "#fff";
        document.getElementById("multiply").style.backgroundColor = "#ff9500";
        document.getElementById("multiply").style.color = "#fff";
        document.getElementById("division").style.backgroundColor = "#ff9500";
        document.getElementById("division").style.color = "#fff";
        break;
      case "*":
        document.getElementById("multiply").style.backgroundColor = "#fff";
        document.getElementById("multiply").style.color = "#ff9500";
        document.getElementById("sum").style.backgroundColor = "#ff9500";
        document.getElementById("sum").style.color = "#fff";
        document.getElementById("subtract").style.backgroundColor = "#ff9500";
        document.getElementById("subtract").style.color = "#fff";
        document.getElementById("division").style.backgroundColor = "#ff9500";
        document.getElementById("division").style.color = "#fff";
        break;
      case "/":
        document.getElementById("division").style.backgroundColor = "#fff";
        document.getElementById("division").style.color = "#ff9500";
        document.getElementById("sum").style.backgroundColor = "#ff9500";
        document.getElementById("sum").style.color = "#fff";
        document.getElementById("subtract").style.backgroundColor = "#ff9500";
        document.getElementById("subtract").style.color = "#fff";
        document.getElementById("multiply").style.backgroundColor = "#ff9500";
        document.getElementById("multiply").style.color = "#fff";
        break;
      case "%":
        let passedText = (display.innerText = display.innerText / 100);
        first_value = passedText;
        break;
      default:
        return;
    }

    if (action.includes(index)) {
      if (index === "=") {
        result = resultValue();
        display.textContent = result;
      } else {
        operator = index;
      }
    }
  }
};

function resultValue() {
  switch (operator) {
    case "+":
      return parseFloat(first_value) + parseFloat(second_value);
    case "-":
      return parseFloat(first_value) - parseFloat(second_value);
    case "*":
      return parseFloat(first_value) * parseFloat(second_value);
    case "/":
      return parseFloat(first_value) / parseFloat(second_value);
    default:
      return;
  }
}

/*
TODO:
    Limit number input
    Disallow . from being entered multiple times
    Clean up structure
*/

"use strict";

// Shortcuts
const el = (selector) =>
  selector.startsWith("#")
    ? document.querySelector(selector)
    : document.querySelectorAll(selector);

// Elements
const viewer = el("#viewer");
const equals = el("#equals");
const nums = el(".num");
const ops = el(".ops");

// State
let theNum = "";
let oldNum = "";
let resultNum = "";
let operator = "";

// Number button clicked
const setNum = function () {
  const value = this.dataset.num;

  if (resultNum !== "") {
    theNum = value;
    resultNum = "";
  } else {
    theNum += value;
  }

  viewer.textContent = theNum;
};

// Operator button clicked
const moveNum = function () {
  oldNum = theNum;
  theNum = "";
  operator = this.dataset.ops;

  equals.dataset.result = "";
};

// Equals button clicked
const displayNum = () => {
  const first = parseFloat(oldNum);
  const second = parseFloat(theNum);

  switch (operator) {
    case "plus":
      resultNum = first + second;
      break;

    case "minus":
      resultNum = first - second;
      break;

    case "times":
      resultNum = first * second;
      break;

    case "divided by":
      resultNum = first / second;
      break;

    default:
      resultNum = second;
  }

  // Handle invalid results
  if (!Number.isFinite(resultNum)) {
    if (Number.isNaN(resultNum)) {
      resultNum = "You broke it!";
    } else {
      resultNum = "Look at what you've done";

      el("#calculator").classList.add("broken");
      el("#reset").classList.add("show");
    }
  }

  viewer.textContent = resultNum;
  equals.dataset.result = resultNum;

  oldNum = "";
  theNum = resultNum.toString();
};

// Clear everything
const clearAll = () => {
  oldNum = "";
  theNum = "";
  resultNum = "";

  viewer.textContent = "0";
  equals.dataset.result = "";
};

// Event listeners
nums.forEach((num) => num.addEventListener("click", setNum));

ops.forEach((op) => op.addEventListener("click", moveNum));

equals.addEventListener("click", displayNum);

el("#clear").addEventListener("click", clearAll);
let firstN;
let secodN;
let operator;
let resultat;

const screen = document.getElementById("screen");
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");

function addition(a, b) {
  return a + b;
}
const Multipy = function (a, b) {
  return (resultat = a * b);
};
const subtract = function (a, b) {
  return (resultat = a - b);
};
const divide = function (a, b) {
  return (resultat = a / b);
};

function operate() {
  if (operator == "+") {
    addition(firstN, secodN);
  } else if (operator == "-") {
    subtract(firstN, secodN);
  } else if (operator == "*") {
    Multipy(firstN, secodN);
  } else {
    divide(firstN, secodN);
  }
}

console.log(addition(5, 6));
console.log(Multipy(10, 6));
console.log(subtract(10, 6));
console.log(divide(10, 2));

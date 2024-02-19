let operator = "";
let previousValue = "";
let currentValue = "";

let numbers = document.querySelectorAll(`.number`);
let operators = document.querySelectorAll(`.operator`);

let equal = document.getElementById("equal");
let clear = document.getElementById("clear");

let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");

//fonction qui renvoie l'input(chiffre nmérique de l'utilsateur
numbers.forEach((numbers) =>
  numbers.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  })
);

//fonction pour selectionner les operateur et la seconde valeur
operators.forEach((operators) =>
  operators.addEventListener("click", function value2(e) {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
  })
);
//cette fonction permet de nettoyer l'écran
clear.addEventListener("click", function () {
  previousValue = "";
  currentValue = "";
  operator = "";
  previousScreen.textContent = "";
  currentScreen.textContent = "";
});
//fonction pour entrer la valeur du  nombre courents
function handleNumber(num) {
  if (currentValue.length <= 8) {
    currentValue += num;
  }
}
//cette fonction permet d'afficher l'operateur , puis de mettre la valeur de currentvalue dans previousvalue;
function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}
equal.addEventListener("click", function () {
  calculate();
  previousScreen.textContent = "";
  currentScreen.textContent = previousValue;
});

function calculate() {
  //transformer des string en number
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "*") {
    previousValue *= currentValue;
  } else previousValue /= currentValue;

  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}

function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}

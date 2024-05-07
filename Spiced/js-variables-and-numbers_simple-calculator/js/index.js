console.clear();

const operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
});

const sum = operand1 + operand2;
console.log("Result of Addition:", sum);

subtractButton.addEventListener("click", () => {
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
});

const difference = operand1 - operand2;
console.log("Difference of Substraction:", difference);

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
});

const product = operand1 * operand2;
console.log("Product of Multiplication:", product);

divideButton.addEventListener("click", () => {
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
});

const quotient = operand1 / operand2;
console.log("Quotient of Division:", quotient);

exponentButton.addEventListener("click", () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
});

const exponent1 = operand1 ** operand2;
console.log("Exponent:", exponent1);

moduloButton.addEventListener("click", () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
});

const modulo1 = operand1 % operand2;
console.log("Modulo of Operands:", modulo1);

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);

const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);

const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);

const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);

const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);

const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});
const addByOne = operand1 + 1;
console.log("+1:", addByOne);

increaseByFiveButton.addEventListener("click", () => {
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

const addByFive = operand1 + 5;
console.log("+5:", addByFive);

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});

const rem1 = operand1 - 1;
console.log("-1:", rem1);

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

const rem5 = operand1 - 5;
console.log("-5:", rem5);

multiplyByTwoButton.addEventListener("click", () => {
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

const x2 = operand1 * 2;
console.log("x2:", x2);

divideByTwoButton.addEventListener("click", () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});

const half = operand1 / 2;
console.log("/2:", half);

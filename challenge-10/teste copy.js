
/** Funções Matemáticas */
var operation = {
  '+': function (num1, num2) {
    return num1 + num2;
  },
  '-': function (num1, num2) {
    return num1 - num2;
  },
  '*': function (num1, num2) {
    return num1 * num2;
  },
  '/': function (num1, num2) {
    return num1 / num2;
  },
  '%': function (num1, num2) {
    return num1 % num2;
  },
};

console.log( operation['+'](1, 1))

function calculator(operator) {
  number1 = 10
  number2 = 10
  return operation[operator](number1, number2);
}

console.log( calculator( '*' ))

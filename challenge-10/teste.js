
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

/** Verifica se o operador é válido */
function isOperatorValid(operator) {
  return !!operation[operator];
}

/** Validação operador e números + cálculo matemático */
function calculator(operator) {
  if (!isOperatorValid(operator)) {
    return false;
  }
  return function (num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return false;
    }
    return operation[operator](num1, num2);
  }
}

/** Mostra resultado da operação matemática */
function showOperationMessage(operator, num1, num2) {
  return 'A operação ' + num1 + ' ' + operator + ' ' + num2 + ' =';
}

/** Mostra mensagem de erro - Operador inválido */
function showErrorMessage(operator) {
  return 'Operação ' + operator + ' não permitida!';
}

var number1 = 0;
var number2 = 0;
var operationSignal;

operationSignal = '+';
var sum = calculator( operationSignal );

if ( sum ) {
  number1 = 10;
  number2 = 10;
  console.log(showOperationMessage(operationSignal, number1, number2), sum(number1, number2))
}
else {
  console.log(showErrorMessage(operationSignal));
}

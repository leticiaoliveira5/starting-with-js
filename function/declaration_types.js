console.log(sum(3,4)) 
// o js carrega todas as funções 
// no formato _function declaration_
// antes de rodar o arquivo

// function declaration
function sum(x,y) {
  return x + y
}

// function expression
const subtract = function (x,y) {
  return x - y
}

// named function expression
const multiply = function multiply(x,y) {
  return x * y
}
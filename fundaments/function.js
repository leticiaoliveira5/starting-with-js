function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(1, 2) // 3

function soma(a, b = 0) {
  return a + b
} // b = 0, quando b não for definido o valor é automaticamente zero

console.log(soma(5)) // 5
console.log(soma(5,3)) // 8

// função armazenada em variável

const imprimeSoma = function (a, b) {
  console.log(a + b)
}

imprimeSoma(1, 2) // 3

// função arrow em variável

const Soma = (a, b) => {
  console.log(a + b)
}

Soma(1, 3) // 4

// retorno implícito

const subtracao = (a, b) => a - b

console.log(subtracao(5, 3)) // 2

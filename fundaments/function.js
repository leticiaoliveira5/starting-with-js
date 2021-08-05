function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(1, 2) // 3

function soma(a, b = 0) {
  return a + b
} // b = 0, quando b não for definido o valor é automaticamente zero

console.log(soma(5)) // 5
console.log(soma(5,3)) // 8

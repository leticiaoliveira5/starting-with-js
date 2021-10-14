// toda função tem o array arguments disponível
// você pode passar quantos parâmetros você queira

function soma() {
  let soma = 0
  for (i in arguments) {
    soma += arguments[i]
  }
  return soma
}

console.log(soma(2, 2))
console.log(soma(1))
console.log(soma(1.5, 1.5))
console.log(soma())
console.log(soma('teste'))
console.log(soma('a', 'b', 'c'))

// estratégia 1

function soma1(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}

console.log('soma1 =', soma1(1, 1, 1)) // 3
console.log('soma1 =', soma1(0, 0, 0)) // 3
// 0 retorna falso e é substituído

// estratégia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
  a = a !== undefined ? a : 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c // estratégia mais segura
  return a + b + c
}

console.log('soma2 =', soma2(1, 1, 1)) // 3
console.log('soma2 =', soma2(0, 0, 0)) // 0

// novo recurso (2015): parâmetro padrão

function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log('soma3 =', soma3(1, 1, 1)) // 3
console.log('soma3 =', soma3(0, 0, 0)) // 0
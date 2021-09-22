// array em javascript é heterogênio (tipagem fraca)
// não tem tamanho fixo

const valores = [7, 5, 2.1, 4.2]

console.log(valores[0], valores[1])
console.log(valores[4])

valores[4] = 10 // adiciona 10 na quarta posição do array
console.log(valores) 
console.log(valores.length) // quantos elementos tem no array

valores.push(false, null, 'coringa')
console.log(valores)

console.log(valores.pop()) // exclui o último valor do array

delete valores[0]
console.log(valores)
// [ <1 empty item>, 5, 2.1, 4.2, 10, false, null ]

console.log(typeof valores) // object
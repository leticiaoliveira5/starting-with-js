const notas = [5.5, 6.5, 7.8, 8.5]

for (i in notas) {
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Pessoa',
  idade: 45,
  peso: 52
}

for(atributo in pessoa) {
  console.log(`${atributo}: ${pessoa[atributo]}`)
}
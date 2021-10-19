// funções callback

//////// forEach

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante) )

//////// filter

const notas = [5.5, 6.4, 7.5, 8.5, 3.2, 9.1]
// sem callback
let notasBaixas = []
for(i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}
console.log(notasBaixas)

// com callback
notasBaixasc = notas.filter(nota => nota < 7)
console.log(notasBaixasc)

function aReal(nota) {
  if(nota >= 7) {
    console.log('Aprovado com ' + nota)
  } else {
    console.log('Reprovado com ' + nota)
  }
}

console.log(aReal(8.1))
console.log(aReal(6.1))

function teste(nota) {
  if(nota >= 7)
    console.log('Aprovado')
    console.log('Fora do If')
}
// sem as chaves no 'if', ele apenas executa 
// a primeira linha se a condição for verdadeira
// as outras linhas sempre serão executadas

console.log(teste(6))
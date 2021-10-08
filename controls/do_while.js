const imprimirInteiroAleatorioEntre = function(min,max) {
  const valor = Math.random() * (max-min) + min
  return Math.floor(valor)
}

let opcao // não é necessário atribuir um valor inicial para a variável opcao,
// garante que a estrutura vai rodar pelo menos uma vez

do {
  opcao = imprimirInteiroAleatorioEntre(-1,10)
  console.log(`A opção escolhida foi ${opcao}`)
} while (opcao != -1)

// só faz o teste depois de executar a primeira repetição
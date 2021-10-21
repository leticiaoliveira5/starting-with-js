// funções factory
// função que retorna um objeto

function criarPessoa(nome, sobrenome) {
  return {
    nome: nome,
    sobrenome: sobrenome
  }
}

console.log(criarPessoa('Letícia', 'Oliveira'))
// { nome: 'Letícia', sobrenome: 'Oliveira' }

function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto('Boneca', 15.99))
console.log(criarProduto('Livro', 21.99))
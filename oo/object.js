const produto = new Object
produto.nome = 'Pomada'
console.log(produto)

const carro = {
  modelo: 'Fox',
  valor: 89000,
  proprietario: {
    nome: 'Edson',
    endereco: {
      logradouro: 'Av. Chopin',
      numero: 5600
    }
  },
  condutores: [
    { nome: 'Junior' },
    { nome: 'Edson' }
  ],
  calcularValorSeguro: function() {
    //
  }
}

console.log(carro)

carro.proprietario.endereco.numero = 1000

carro['proprietario']['endereco']['logradouro'] = 'Av. Chopin'

delete carro.condutores // exclui os condutores
delete carro.proprietario.endereco

console.log(carro)
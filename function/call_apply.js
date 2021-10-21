// função "call"

function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
  nome: 'notebook',
  preco: 2500,
  desc: 0.1,
  getPreco
}
console.log(produto.getPreco())

// CALL & APPLY

const carro = { preco: 15000, desc: 0.1 }

console.log(getPreco.call(carro)) 
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.12, '$'))
// call passa cada um dos parâmetros separados por vírgula

console.log(getPreco.apply(carro,[0.12, '$']))
 //apply espera que os parâmetros da função estejam dentro de um array

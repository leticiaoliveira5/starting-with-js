function Produto(nome, preco, desconto) {
  this.nome = nome
  this.preco = preco
  this.getPrecoComDesconto = () => {
    return (preco - desconto)
  }
}

p1 = new Produto('Pomada', 9.99, 1)
console.log(p1)
console.log(p1.getPrecoComDesconto())


// factory function

function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase/30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('Joao', 2900, 4)
console.log(f1.getSalario())


// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// JSON.parse

const frontJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(frontJSON)
// Função 'bind' // .bind(object)

const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // undefined ~ 'this' não está mais apontando para o parametro correto
// colocar falar dentro de uma constante mudou o contexto

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // bom dia
// o bind amarra com o objeto passado, então this se manterá como a saudação

function Pessoa() {
  this.idade = 0

  setInterval(function() {
    this.idade++
    console.log(this.idade)
  }/*.bind(this)*/, 1000)
}

new Pessoa

// também pode ser feito assim::

function PessoaDois() {
  this.idade = 0
  const self = this
  setInterval(function() {
    self.idade++
    console.log(self.idade)
  }, 1000)
}

new PessoaDois

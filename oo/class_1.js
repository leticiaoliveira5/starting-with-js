class Lancamento {
  constructor(nome = 'Genérico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class cicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this. lancamentos = []
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamento('salario', 45000)
const contaLuz = new Lancamento('luz', -500)

const contas = new cicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaLuz)
console.log(contas)
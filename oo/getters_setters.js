// get é uma função para acessar valores

const sequencia = {
  _valor: 1, // convenção - variável acessada apenas internamente
  get valor() { return this._valor++ },
  set valor(valor) { 
    if(valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia)
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
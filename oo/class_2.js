class Grandfather {
  constructor(sobrenome) {
    this. sobrenome = sobrenome
  }
}

class Father extends Grandfather {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome)
    this.profissao = profissao
  }
}

class Son extends Father {
  constructor() {
    super('Silva')
  }
}

const son = new Son
console.log(son)
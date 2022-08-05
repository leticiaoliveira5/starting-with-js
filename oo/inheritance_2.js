const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMas(delta) {
    if(this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`
  }
}

const ferrari = {
  modelo: 'F48',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200,
  status() {
    return `${this.modelo} : ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMas(300)
console.log(volvo.status())

ferrari.aceleraMas(50)
console.log(ferrari.status())
const father = { name: 'PETER', hairColor: 'black' }
const daughter = Object.create(father) // objeto protóttipo é passado como parâmetro
daughter.name = 'Shania'
console.log(daughter.hairColor)

const son = Object.create(father, {
  name: { value: 'Shane', writable: false, enumerable: true }
})

console.log(son)
console.log(Object.keys(son))
console.log(Object.keys(daughter))
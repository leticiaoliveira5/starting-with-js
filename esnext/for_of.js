// != for in
// for of
// permite iterar objeto, array, map, set, string

for (let letra of 'Cod3r') {
  console.log(letra)
}

const table = [ 'leg', 'sit' ]

for (let part of table) {
  console.log(part)
}

const bla = new Map([
  ['Map', { abordado: true}],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false}]
])

for (let valor of bla.values()) {
  console.log(valor)
}

for (let valor of bla.entries()) {
  console.log(valor)
}

const s = new Set(['a', 'b', 'c'])

for (letra of s) {
  console.log(letra)
}
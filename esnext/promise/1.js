let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(['Ana', 'Julia'])
})

p.then(valor => console.log(valor)) //then recebe um função

// o resultado de um método then é passado para o próximo método then...
p.then(primeiro => primeiro[0])
 .then(valor => valor.toLowerCase())
 .then(console.log)


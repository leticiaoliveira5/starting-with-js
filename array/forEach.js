const array = ['Aldo','Agatba','Raquel']

array.forEach(function(nome,indice){
  console.log(`${indice + 1} ${nome}`)
})

array.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

array.forEach(exibirAprovados)
// let em loop

for (let i = 0; i < 10; i++) {
  console.log(i)
}

// variavel i está visivel apenas dentro do bloco



const arr = []

for (let i = 0; i < 10; i++) {
  arr.push(function() {
    console.log(i)
  })
}

arr[2]() // 2
arr[8]() // 8

// let tem memoria do array criado no loop
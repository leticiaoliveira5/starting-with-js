// var em loop

for (var i = 0; i < 10; i++) {
  console.log(i)
}

console.log('i=', i)
// 10

// erro histórico de var: //
//var não tem escopo de função

var arr = []

for (var i = 0; i < 10; i++) {
  arr.push(function() {
    console.log(i)
  })
}

arr[2]() // continua 10
arr[8]() // continua 10
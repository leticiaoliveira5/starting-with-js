const fs = require('fs') // requere o modulo filesystem do node

const product = {
  name: 'Disk',
  price: 8.59,
  discount: 0.15
}

fs.writeFile(__dirname + '/generated_file.json', JSON.stringify(product), err => {
  console.log(err || 'File saved correctly')
})

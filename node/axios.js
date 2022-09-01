const url = 'https://api.pi.delivery/v1/pi?start=0&numberOfDigits=1000'
const axios = require('axios')

axios.get(url).then( response => { 
  const data = response.data['content']
  console.log(data) 
})

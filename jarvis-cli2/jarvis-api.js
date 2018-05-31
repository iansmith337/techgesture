let express = require('express')
let app = express()
//let Marvel = require('./avengers')

app.get('/', function(request,response) {
 // let marvel = new Marvel()
 // avengrs.assemble();
  response.send('Hello from Jarvis API!')
})

app.listen('4000', function(){
  console.log('running on port 3000')
})

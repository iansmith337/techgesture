let express = require('express')
let app = express()
let Marvel  = require('./avengers')
app.use(function(req,res,next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept")
	next()
})
app.get('/', function(request,response) {
 var avengers = new Marvel({
 
  publicKey:'22f03f42632a73c32194deff6c8c788d',
  privateKey:'bd691b3f871f5c1399182a8995895586dc1a237a'
})
  
 avengers.assemble(function(avengers){
  response.send(avengers)
})
	//response.send('Hello from Jarvis API!')
})

app.listen('4000', function(){
  console.log('running on port 4000')
})

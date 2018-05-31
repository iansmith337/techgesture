var express = require('express')
var app = express()

app.get('/', fucntion (req, res) {
  res.sendFile(path.join(_dirname,'index.html'))
})

app.listen('3000', function() {
  console.log('running on port 3000')
})

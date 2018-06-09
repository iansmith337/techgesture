var express = require('express'),
    path =require('path')

var APP_DIR = path.join(__dirname, "app"),
	PORT = 3000,
	app = express();

app.use(express.static(APP_DIR));

app.get('/#', function (req, res) {

 //res.send('hello for Jarvis-Web-Project')	
 res.sendFile(path.join(APP_DIR,"index.html"));

});

app.listen(PORT, function() {
  console.log('listening on port '+ PORT)
})

var createCard = require('./card-components.js')
var getAvengers = function(options){
  var req = new XMLHttpRequest()
  req.onreadystatechange = function(){
    if(this.readyState == 4){
      // if (options.all == true) { 
	createCard(JSON.parse(this.responseText))
//	}	   
    }
   
  }     
  req.open('Get', 'http://localhost:4000')
  req.send()
}
module.exports = getAvengers

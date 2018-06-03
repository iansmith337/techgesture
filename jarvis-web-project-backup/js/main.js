//we need a button 
////we need afunction to go and hit jarvis-api - using XMLHttpRequest
//



var getAvengers = function(){
  var req = new XMLHttpRequest()
  req.onreadystatechange = function(){
    if(this.readyState == 4){
      console.log(JSON.parse(this.responseText))
    }
  }
  req.open('Get', 'http://localhost:4000')
  req.send()
}
//HTTP Verbs GET = Read Data, POST = Give You some Data (Write Data), PUT = Update Data, DELETE = Deletes Data
var content = document.getElementById('content')
var button = document. createElement('button')
button.onclick = getAvengers

let h1 = document.createElement('h2')
button.innerHTML = 'Avengers Assemble'
content.append(h1)
content.append(button)


var root = 'http:///localhost:3000'/#;
var useHash = true; // Defaults to: false
var hash = '#'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);
var HomePage  = require('/web-pages/home-page.js')
router
  .on(function () {
      HomePage()// show home page here

  })
.on({
      'Avengers': function () {
              var content = document.getElementById('content')
    content.innerHTML('Hello');
            },
      'products': function () {
              setContent('About');
            },
      '*': function () {
              setContent('Home')
            }
    })
  .resolve();

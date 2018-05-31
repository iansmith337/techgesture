var api = require('marvel-api')
var Profile = require('./avengerProfile')

class Avengers {
  constructor(config) {
  this.marvel = api.createClient({
    publicKey: config.publicKey,
    privateKey:config.privateKey
  })
}

getSpiderMan(){
  this.marvel.characters.FindByName('spider-man')
  .then(function(res){
    console.log(res.data[0].name)
    console.log(res.data[0].description)
  })
}
}

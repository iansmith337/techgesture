var api = require('marvel-api')
var Profile = require('./avengersProfile')

class Avengers {
  constructor(config) {
  this.marvel = api.createClient({
    publicKey: config.publicKey,
    privateKey:config.privateKey
  });
}
  assemble(cb){
    Promise.all([
      this.marvel.characters.findByName('spider-man'),
      this.marvel.characters.findByName('Hulk'),
      this.marvel.characters.findByName('wolverine'),
      this.marvel.characters.findByName('daredevil'),
      this.marvel.characters.findByName('iron man')])
    .then((responses) => {
      let avengers = []
      responses.forEach((character) => {
      let profile = new Profile({name:character.data[0].name,description: character.data[0].description})
      avengers.push(profile.createProfile())
   })
      console.log('Avengers Assemble')
      console.log(avengers)
	cb(avengers)
  })
}
}
module.exports = Avengers

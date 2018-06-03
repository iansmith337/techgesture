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
      let heroProfiles = []
      responses.forEach((character) => {
      let profile = new Profile({name:character.data[0].name,description: character.data[0].description})
      heroProfiles.push(profile.createProfile())
   })
      console.log('Avengers Assemble')
      cb(JSON.stringify(heroProfiles))
  })
}
}
module.exports = Avengers

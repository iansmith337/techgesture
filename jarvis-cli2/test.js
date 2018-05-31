var api = require('marvel-api')


var marvel = api.createClient({
    publicKey:'22f03f42632a73c32194deff6c8c788d',
    privateKey:'bd691b3f871f5c1399182a8995895586dc1a237a'
})
 
  
marvel.characters.findByName('Avengers')
    .then(console.log)
  .fail(console.error)
  .done();

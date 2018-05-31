var api = require('marvel-api')



var marvel = api.createClient({
    publicKey:'22f03f42632a73c32194deff6c8c788d',
    privateKey:'bd691b3f871f5c1399182a8995895586dc1a237a'
});

class Marvel{
  constructor(){

  }

getFirst100(){ 
   
  marvel.characters.findByName('Avengers')

    .then(function(res){
     for(var index = 0; index < res.data.length; index++) { 
      console.log((index + 1)+' '+ res.data[index].name)
       console.log(res.data[index].name)
     }
    })
    .fail(console.error)
    .done();
    }
}
module.exports = Marvel

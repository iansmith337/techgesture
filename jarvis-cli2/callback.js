let sayHi = function() {
  console.log('hi')
}
let walkAway = function() {
  console.log('...')
}

let sayBye = function(callback){
setTimeout(function(){
  console.log('bye')
  callback()
  }, 2000)
}

sayHi()
sayBye(function(){
 console.log('...') 
})

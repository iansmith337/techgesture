let sayHi = function(){
  console.log('hi')
}
let walkAway = function() {
console.log('...')
}

let sayBye = function(callback){
  setTimeout(function(){
  console.log('bye')
},2000)
  callback()
}

sayHi()
sayBye(function(){
  console.log('...')
})

//walkAway()

//Synchronous and Asynchronous

//Synchronous - means follows steps
//Callback Functions - HIgher Order Functions - Function that is passed to another function as a parameter, and then executed within that function. Are functions that are called after the execution of a specific process.

//Promises



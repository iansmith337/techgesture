//Object Oriented Programming using Javascript
class Person  {
  constructor(personality){
    this.personality = personality
  }
  sayHi(){
   if (this.personality.type == 'outgoing'){
    
    console.log('Hi! How are you!')
   }
    if(this.personality.type =='introverted'){
      console.log('HI..')
  }
   // console.log(this.personality)
}
}
module.exports = Person
//Gerald.sayHi()

//Objects

let Gerald = {
  name : 'Gerald Yerden',
  height: 'May Something',
  weight: '400',
  eyeColor: 'blueish'
}
let Dell = {
  name : 'Dell #ganggang',
  height: 'taller',
  weight: '400',
  eyeColor: 'blueish'
}
let Cory = {
  name : 'Corey Pinkney',
  height: '5 foot 10',
  weight: '400',
  eyeColor: 'blueish'
}

let array = [Gerald,Dell,Cory]

for(var index = 0; index < array.length; index++){
  console.log(array[index].name)
}

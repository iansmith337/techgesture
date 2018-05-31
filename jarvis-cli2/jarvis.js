#!/usr/bin/env node
var colors = require('colors')
var program =require ('commander')
var Marvel = require('./marvel.js')

program
  .version('0.1.0')
  .option('-ga, --getAvengers', 'Give me first 100 marvel charater')
  .option('-gs, --getSpiderman', 'Get Spiderman
  .parse(process.argv);

if(program.getSpiderman){
 var spiderman = new Avengers()
}
  avenegers.getSpiderman(function(avengers) {
    console.log(avengers)
  })
if(program.getAvengers){
 var avengers = new Avengers()
}
  avenegers.assemble(function(avengers) {
    console.log(avengers)
  })
  
 /* 
  var marvel = new Marvel()
  marvel.getFirst100()
*/

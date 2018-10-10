const Hero = require('./hero.js')

class Assasin extends Hero{
   constructor( name, job, health, mana, defense, money, items){
        super(name, job, health, mana, defense, money, items)
   }

   skill(){
       return `Ciat..! Serangan tanpa bayangan..`
   }
}

module.exports = Assasin
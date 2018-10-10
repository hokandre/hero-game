const Hero = require('./hero.js')

class Knight extends Hero{
   constructor( name, job, health, mana, defense, money, items){
        super(name, job, health, mana, defense, money, items)
   }

   skill(){
       return `Lemparan Perisai Suci`
   }
}

module.exports = Knight
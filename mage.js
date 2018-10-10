const Hero = require('./hero.js')

class Mage extends Hero{
   constructor( name, job, health, mana, defense, money, items){
        super(name, job, health, mana, defense, money, items)
   }

   skill(){
       return `Terimalah serangan sihir ini..`
   }
}

module.exports = Mage
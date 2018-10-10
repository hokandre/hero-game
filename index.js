const Knight = require('./knight')
const Mage = require('./mage')
const Assasin = require('./assasin')
const Monster = require('./monster')
const Item = require('./item')
//1. Name: Rikimaru, Job: Assassin, Health: 1200, Mana: 543, Defense: 431, Money: 1200
// 2. Name: Leonidas, Job: Knight, Health: 3213, Mana: 126, Defense: 431, Money: 1700
// 3. Name: Gandalf, Job: Mage, Health: 1130, Mana: 603, Defense: 231, Money: 2500
// 4. Name: Ezio, Job: Assassin, Health: 1250, Mana: 523, Defense: 431, Money: 2100

let rikimaru = new Assasin('Rikimaru','Assasin',1200,543,100,1200)
let leonidas = new Knight('Leonidas','Knight',3213,126,100,1700)
let Gandalf = new Mage('Gandalf','Mage',1130,603,231,2500)
let ezio = new Assasin('Ezio','Assasin',1250,523,431,2100)

//item
//nama, job, detail, healthpoint, manapoint, defensepoint, price
let tameng = new Item('Tameng','Knight','AAAAAA',20,50,25,1000)
let topi = new Item('Topi','Mage','BBBBBBB',100000000,50,100,1000)

//monster 
//name, health, attack, weakness
leonidas.buyItem(tameng)
console.log(leonidas)
let sniper = new Monster('Sniper',500,250,'Assasin')
let dugeon = new Monster('Dugeon',2000,500,'Mage')

leonidas.attackMonster(sniper)


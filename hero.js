class Hero {
    
    constructor(name, job, health, mana, attack, money,items){
        this.name = name
        this.job = job
        this.health = health
        this.mana= mana
        this.attack = attack
        this.money = money
        this.items = items || []
    }

    buyItem(item){

        if(this.job === item.job){
            if(this.money >= item.price){
                this.items.push(item)
                this.health += item.healthpoint
                this.mana += item.manapoint
                this.attack += item.attackpoint
                this.money -= item.price
                return `Berhasil membeli item ${item.nama}`
            }else{
                return 'Item Tidak Dapat Dibeli karena money tidak cukup!'
            }
        }else{
            return 'Item Tidak Dapat Dibeli karena tidak sesuai dengan role hero!'
        }
    }

    sellItem(itemSelled){
        // - kurangkan status health karakter berdasarkan healthpoint item
        // - kurangkan status mana karakter berdasarkan manapoint item
        // - kurangkan status defense karakter berdasarkan defensepoint item
        // - tambahkan uang karakter berdasarkan 50% dari harga item.
        // - kurangkan object item dari properti items
        for(let item in this.items){
            if(this.items[item].nama === itemSelled.nama ){
                this.health -= itemSelled.healthpoint
                this.mana -= itemSelled.manapoint
                this.attack -= itemSelled.attackpoint
                let harga = Math.round((itemSelled.price*0.5))
                this.money += harga
                this.items.splice(item,1)
                return `Item ${itemSelled.nama}berhasil di jual seharga ${harga}`
            }else{
                return `Item Tidak Dimiliki!`
            }
        }
    }

    attackMonster(monster){
        let turn = 0
        while(this.health > 0 && monster.health > 0 ){
            let attack = 0
            attack = this.attack
            if(monster.weakness === this.job){
                attack += Math.round(attack*0.5)
            }
            
            //play
            if(turn === 0){
                monster.health -= attack
            }else{
                this.health -= monster.attack
            }

            if(turn === 1){
                console.log(`**Kamu Berhasil Menyerang [${monster.name}]
                 dengan jumlah serangan [${attack}] Darah kamu terisaa [${this.health}] 
                jadi barhati-hatilah**'`)
                turn = 0
            }else{  
                turn++
            }
        }

        if(this.health > 0){
            console.log(`**Kamu berhasil membunuh monster [${monster.name}]. 
            dan sisa darah kamu adalah [${this.health}]**`)
        }else{
            console.log(`**Kamu kalah sebaiknya pulang ke kota dan beli item lagi**`)
        }
    }
}

module.exports = Hero
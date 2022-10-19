import Item from "./item.js"

class Weapon extends Item {
    constructor(ATK, opis, isCursed=false){
        super(isCursed)
        this.ATK=ATK;
        this.opis=opis;
    }
}

export default Weapon;
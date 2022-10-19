import { air } from "../content/Weapons.js";
import Weapon from "./weapon.js";
import Entity from "./entity.js";

class Player extends Entity {
    constructor(ATK, DEF, HP, MOC, Item){
        super(0, 0);
        this.ATK = ATK;
        this.DEF = DEF;
        this.HP = HP;
        this.MOC = MOC;
        if(typeof(Item)!=Weapon){
            this.Item = air;
        } else {
            this.Item = Item;
        }
    }
}

export default Player;
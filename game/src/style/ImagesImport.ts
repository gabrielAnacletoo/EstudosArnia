import Archer1 from "../assets/caracters/archer1.jfif"
import Archer2 from "../assets/caracters/archer2.jfif"
import Berseker1 from "../assets/caracters/berseker1.jfif"
import Berseker2 from "../assets/caracters/berseker2.jfif"
import Berseker3 from "../assets/caracters/berseker3.png"
import Mago1 from "../assets/caracters/mago1.jfif"
import Mago2 from "../assets/caracters/mago2.jfif"
import Thief from "../assets/caracters/thief.jfif"
import Thief2 from "../assets/caracters/thief2.jfif"
import Thief3 from "../assets/caracters/thief3.jfif"
import Bee from "../assets/monsters/bee.png"
import Rats from "../assets/monsters/rats.png"
import Spyder from "../assets/monsters/spyder.png"
import Ghost from "../assets/monsters/ghost.png"
import Zombiee from "../assets/monsters/miner.png"
import Snake from "../assets/monsters/snake.png"



export const ImgMonsters = {
    Bee,
    Rats,
    Spyder
}
export const ImgMonstersCave = {
    Ghost,
    Zombiee,
    Snake 
}
export const MonstersStats = [
    {id: 1, name: 'Monster Bee', img: Bee, LVL:1, ATQ: 12, DEF: 15,DEFMAG: 10, HP: 100, DEX: 2}, 
    {id: 2, name: 'Monster Rats', img: Rats,LVL:3, ATQ: 13, DEF: 16,DEFMAG: 12, HP: 115, DEX: 3}, 
    {id: 3, name: 'Monster Spyder', img: Spyder,LVL:5, ATQ: 13, DEF: 20,DEFMAG: 15, HP: 130, DEX: 4}, 
]
export const MonsterStatsCave = [
    {id:1, name: 'Ghost', img: Ghost, LVL:1, ATQ:14, DEF: 21,HP:140},
    {id:2, name: 'Miner Zoombiee',img: Zombiee, LVL: 1, ATQ: 17, DEF: 25, HP: 160},
    {id:3, name: 'Deep Serpent',img: Snake, LVL: 1, ATQ: 25, DEF: 35, HP: 200}
]
export const imgCarcters = {
    Archer1,
    Archer2,
    Berseker1,
    Berseker2,
    Berseker3,
    Mago1,
    Mago2,
    Thief,
    Thief2,
    Thief3
}



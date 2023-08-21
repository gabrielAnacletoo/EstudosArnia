import Inventory from "../assets/Inventory.png"
import Backpack from "../assets/backpack.png"
import BackBtn from "../assets/backButton.png"
import ForestHunter from "./ForestHunter"
import CaveHunter from "./CaveHunter"
import News from "./News"
import DungeonHunter from "./DungeonHunter"
import { NavContainer, ForestContent, CaveContent, DungeonContent, NewsContent } from "../style/styles"
import { useState } from "react"
import BoxTop from "../assets/tb/box-top.gif"
import BoxDown from "../assets/tb/box-bottom.gif"
import {ChainSide , ChainSideRight, ChainSideIventoriLeft, ChainSideIventoriRight} from "../style/ChainSide"
import GoldCoin from "../assets/buttons/goldcoin.png"


interface Props {
    coins: string | null;
}
const NavSide = ({coins}: Props) => {
    const [mochila, setMochila] = useState<boolean>(false)
    const handleClickBack = () => {setMochila(!mochila)}

    const [forest, setForest] = useState<boolean>(false)
    const handleClickForest = () => {setForest(!forest); setCave(false); setDungeon(false)}

    const [cave, setCave] = useState<boolean>(false)
    const handleClickCave = () => {setCave(!cave); setForest(false); setDungeon(false)}

    const [dungeon, setDungeon] = useState<boolean>(false)
    const handleClickDungeon = () => {setDungeon(!dungeon); setCave(false); setForest(false)}

    const [showNews, setShowNews] = useState<boolean>(true)

    const handleShowNews = () => {
        setShowNews(true)
        setForest(false)
        setCave(false)
        setDungeon(false)
    }

    return (
        <>
            <NavContainer>
                <img src={BoxTop} className="superiormenu" />
                <ChainSide/>
                <ul>
                    <li><button onClick={handleClickForest}>🌲 Explore Forest</button></li>
                    <li><button onClick={handleClickCave}>⛰️ Explore Cave</button></li>
                    <li><button onClick={handleClickDungeon}>⚔️ Explore Dungeon</button></li>
                    <li><button onClick={handleShowNews}>🍺 Tavern</button></li>
                 
                    
                </ul>
                <img src={BoxDown} className="superiormenu boxtopper"/>
                <ChainSideRight/>
                <img src={BoxTop} className="inferiorInvent"/>
                <ChainSideIventoriLeft/>
                <img src={Inventory} className="inven"/>
                <button onClick={handleClickBack}><img src={BackBtn} className="item-down" /></button>
                <ChainSideIventoriRight/>
                <img src={BoxDown} className="inferiorInvent"/>
                {mochila && <img src={Backpack} alt="Backpack" className="Mochila"/>}
                <p><img src={GoldCoin}  className="coins"/> {coins}</p>
            </NavContainer>
            {showNews && !forest && !cave && !dungeon && <NewsContent><News/></NewsContent>}
            {forest && <ForestContent><ForestHunter/></ForestContent>}
            {cave && <CaveContent><CaveHunter/></CaveContent>}
            {dungeon && <DungeonContent><DungeonHunter/></DungeonContent>}
        </>
    )
}

export default NavSide

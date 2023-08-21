import { useState, useEffect } from "react";
import { MapHunterForest } from "../style/styles";
import { ImgMonsters, MonstersStats } from "../style/ImagesImport";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { DataBaseApp } from "../Firebase/Firebaseconfig";

const auth = getAuth();

const ForestHunter = () => {
  const [hunterForest, setHunterForest] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [encounterMessage, setEncounterMessage] = useState<string>("");
  const [battleMessage, setBattleMessage] = useState<string>("");
  const [userData, setUserData] = useState<any>(null);
  const [monster, setMonster] = useState<any>(null);
  const [showHuntButton, setShowHuntButton] = useState(false);
  const [originalHP, setOriginalHP] = useState(0); // Novo estado para armazenar o HP original
  const [showBattleButtons, setShowBattleButtons] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(
          doc(DataBaseApp, "usuarios", auth.currentUser.uid)
        );
        if (userDoc.exists()) {
          const characterData = userDoc.data().character;
          // console.log("Character Data:", characterData);
          setUserData(characterData);
          setOriginalHP(characterData.HP); // Atualiza o HP original
        }
      }
    };

    fetchUserData();
  }, []);

  
  const handleHunt = () => {
    if (selectedImage === "") {
      setShowHuntButton(false);
      setShowHuntButton(false);
    }
  
    const randomImage = getRandomImage();
    setSelectedImage(randomImage);
    setEncounterMessage(getEncounterMessage(randomImage));
    setBattleMessage("");
    setHunterForest(true);
    setMonster(getMonsterByImage(randomImage));
    setShowBattleButtons(true);
    setShowHuntButton(false); // Esconde o botão "Hunt Again"
  
    resetPlayerHP(); // Restaura o HP do jogador para o valor original
  };
  


  const handleBattle = async () => {
    const playerDamage = calculatePlayerDamage();
    const monsterDamage = calculateMonsterDamage();
  
    // Atualiza o HP do jogador e do monstro
    const updatedPlayerHP = userData.HP - monsterDamage;
    const updatedMonsterHP = monster.HP - playerDamage;
  
    if (updatedPlayerHP <= 0) {
      // O jogador perdeu a batalha
      setBattleMessage("You were defeated!");
      resetPlayerHP();
      setShowHuntButton(true);
      setShowBattleButtons(false);
    } else if (updatedMonsterHP <= 0) {
      // O jogador venceu a batalha
      resetPlayerHP(); // Restaura o HP do jogador para o valor original
      setBattleMessage("You defeated the monster! Congratulations!");
      setShowHuntButton(true);
      setShowBattleButtons(false);
  
    // Incrementa o valor do EXP no Firebase
if (auth.currentUser) {
  const userDocRef = doc(DataBaseApp, "usuarios", auth.currentUser.uid);
  const userDocSnapshot = await getDoc(userDocRef);

  if (userDocSnapshot.exists()) {
    const userDataFromFirestore = userDocSnapshot.data().character;
    let updatedExp = userDataFromFirestore.EXP + 1; // Incrementa o EXP em 1
    const GoldCoin = userDataFromFirestore.GoldCoin +1;

    if (updatedExp >= userDataFromFirestore.EXPNEXTLVL) {
      const updatedLevel = userDataFromFirestore.nivelCaracter + 1;
      const updatedEXPNEXTLVL = userDataFromFirestore.EXPNEXTLVL * 2;
      const updatedATQ = userDataFromFirestore.ATQ + 1;
      const updatedDEF = userDataFromFirestore.DEF + 1;
      const updatedHP = userDataFromFirestore.HP + 1;
      updatedExp = 0;

      // Atualiza os dados no Firestore
      await updateDoc(userDocRef, {
        "character.EXP": updatedExp,
        "character.EXPNEXTLVL": updatedEXPNEXTLVL,
        "character.nivelCaracter": updatedLevel,
        "character.ATQ": updatedATQ,
        "character.DEF": updatedDEF,
        "character.HP": updatedHP,
      })

      setUserData((prevUserData: any) => ({
        ...prevUserData,
        EXP: updatedExp, // Atualiza o valor de EXP
      }))
    } else {
      // Atualiza apenas o valor de EXP
      await updateDoc(userDocRef, {
        "character.GoldCoin": GoldCoin,
        "character.EXP": updatedExp,
      })

      setUserData((prevUserData: any) => ({
        ...prevUserData,
        GoldCoin:GoldCoin,
        EXP: updatedExp, // Atualiza o valor de EXP
      }))
    }
  }
      }
    } else {
      // A batalha continua
      setBattleMessage(
        `You dealt ${playerDamage} damage to the monster. The monster dealt ${monsterDamage} damage to you.`
      )
    }
  
    setUserData((prevUserData: any) => ({
      ...prevUserData,
      HP: updatedPlayerHP,
    }))
  
    setMonster((prevMonster: any) => ({
      ...prevMonster,
      HP: updatedMonsterHP,
    }))
  }
  
  
  
  
  
  
  
  const resetPlayerHP = () => {
    setUserData((prevUserData: any) => ({
      ...prevUserData,
      HP: originalHP, // Restaura o HP do jogador para o valor original
    }))
  }
  

  const getRandomImage = () => {
    const monsterImages = Object.values(ImgMonsters);
    const randomIndex = Math.floor(Math.random() * monsterImages.length);
    return monsterImages[randomIndex];
  };

  const getEncounterMessage = (image: string) => {
    if (image === ImgMonsters.Bee) {
      return "You found a bee!";
    } else if (image === ImgMonsters.Rats) {
      return "You found a mouse!";
    } else if (image === ImgMonsters.Spyder) {
      return "You found a spider!";
    } else {
      return "You didn't find anything!";
    }
  }

  const getMonsterByImage = (image: string) => {
    return MonstersStats.find((monster) => monster.img === image);
  }

  const calculatePlayerDamage = () => {
    const baseDamage = userData.ATQ;
    const minDamage = baseDamage + 1;
    const maxDamage = baseDamage + 5;
    const damage = getRandomNumber(minDamage, maxDamage);

    return damage;
  }

  const calculateMonsterDamage = () => {
    const baseDamage = monster.ATQ;
    const minDamage = baseDamage + 1;
    const maxDamage = baseDamage + 5;
    const damage = getRandomNumber(minDamage, maxDamage);

    return damage;
  }

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="content">
      {!hunterForest && (
        <>
          <p>
            (user🧙🏻‍♂️) You are in the Forest of <b>Lothlórien!</b>🌲⚔️
          </p>
          <p>Here, there are some monsters to hunt and increase your level!</p>
          <p>
            Like Killer Bees 🐝, Infected Rats 🐀, Insidious Spiders 🕷️, and
            'maybe' a <b>Boss</b> 🐲!!!
          </p>
          <br />
          <small>
            <i>
              Note: Bosses only appear at certain times, drop the best items,
              but they are the most dangerous monsters...<br />
              See more in <a href="#info">Information and Tips.</a>
            </i>
          </small>
          <br />
          <br />
          <br />
          <p>
            So Adventurer... Want to <button onClick={handleHunt}>Hunt ⚔️</button> ?
          </p>
        </>
      )}
      {hunterForest && userData && (
        <MapHunterForest>
          {selectedImage !== "" && (
            <>
              <img src={selectedImage} className="mobs" alt="Monster" />
              <div className="hp">
                Your HP: {userData.HP}/{userData?.HP} &nbsp;&nbsp;
                Monster HP: {monster?.HP}/{monster?.HP}
                <br />
              </div>
              <div className="dialogbattle">
                {encounterMessage}
                {battleMessage !== "" && (
                  <div className="message">{battleMessage}</div>
                )}
              </div>

              {showHuntButton && (
                <button onClick={handleHunt} className="hunt-again">
                  Hunt Again ⚔️
                </button>
              )}

              {showBattleButtons && (
                <>
                  <button className="atq" onClick={handleBattle}>
                    Battle ⚔️
                  </button>
                  <button onClick={handleHunt} className="escape">
                    Escape 🏃
                  </button>
                </>
              )}
            </>
          )}
        </MapHunterForest>
      )}
    </div>
  );
};

export default ForestHunter;

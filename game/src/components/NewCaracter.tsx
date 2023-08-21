import { imgCarcters } from "../style/ImagesImport";
import { useState } from "react";
import { Auth, DataBaseApp } from "../Firebase/Firebaseconfig";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import App from "../App";
import OldMan from "../assets/dialog/old.png"

const NewCaracter = () => {
  const [showModal, setShowModal] = useState(true);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [currentScreen, setCurrentScreen] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showApp, setShowApp] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value.slice(0, 10);
    setName(newName);
  }

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  }

  const handleNextScreen = () => {
    if (currentScreen === 1 && name.trim() !== "") {
      setCurrentScreen(2);
    } else if (currentScreen === 2 && gender !== "") {
      setCurrentScreen(3);
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleFinish = async () => {
    if (name.trim() !== "" && gender !== "") {
      const user = Auth.currentUser;
  
      if (!user) {
        console.error("User not authenticated.");
        return;
      }
  
      try {
        const userDocRef = doc(DataBaseApp, "usuarios", user.uid);
        const userDocSnap = await getDoc(userDocRef);
  
        if (userDocSnap.exists()) {
          const userData = {
            character: {
              nome: name,
              sexo: gender,
              nivelCaracter: 1,
              
              imagem:
                selectedImage === 0
                  ? "Archer1"
                  : selectedImage === 1
                  ? "Berseker3"
                  : selectedImage === 2
                  ? "Mago2"
                  : selectedImage === 3
                  ? "Thief3"
                  : "",
              HP: 0,
              ATQ: 0,
              DEF: 0,
              EXP: 0,
              EXPNEXTLVL: 1,
              GoldCoin: 0
            },
          };
  
          if (selectedImage === 0) {
            // Archer
            userData.character.HP = 100;
            userData.character.ATQ = 22;
            userData.character.DEF = 60;
            userData.character.GoldCoin = 0;
          } else if (selectedImage === 1) {
            // Berseker
            userData.character.HP = 120;
            userData.character.ATQ = 160;
            userData.character.DEF = 90;
            userData.character.GoldCoin = 0;
          } else if (selectedImage === 2) {
            // Mago
            userData.character.HP = 80;
            userData.character.ATQ = 25;
            userData.character.DEF = 30;
            userData.character.GoldCoin = 0;
          } else if (selectedImage === 3) {
            // Thief
            userData.character.HP = 90;
            userData.character.ATQ = 25;
            userData.character.DEF = 40;
            userData.character.GoldCoin = 0;
          }
  
          await updateDoc(userDocRef, userData);
          console.log("Dados do personagem atualizados com sucesso.");
        } else {
          const userData = {
            character: {
              nome: name,
              sexo: gender,
              nivelCaracter: 1,
              imagem:
                selectedImage === 0
                  ? "Archer1"
                  : selectedImage === 1
                  ? "Berseker3"
                  : selectedImage === 2
                  ? "Mago2"
                  : selectedImage === 3
                  ? "Thief3"
                  : "",
              HP: 0,
              ATQ: 0,
              DEF: 0,
              EXP: 0,
              EXPNEXTLVL: 1,
              GoldCoin: 0
            },
          };
  
          if (selectedImage === 0) {
            // Archer
            userData.character.HP = 120;
            userData.character.ATQ = 100;
            userData.character.DEF = 60;
            userData.character.GoldCoin = 0;
          } else if (selectedImage === 1) {
            // Berseker
            userData.character.HP = 250;
            userData.character.ATQ = 160;
            userData.character.DEF = 90;
            userData.character.GoldCoin = 0;
          } else if (selectedImage === 2) {
            // Mago
            userData.character.HP = 100;
            userData.character.ATQ = 10;
            userData.character.DEF = 30;
            userData.character.GoldCoin = 0;
          } else if (selectedImage === 3) {
            // Thief
            userData.character.HP = 90;
            userData.character.ATQ = 160;
            userData.character.DEF = 40;
            userData.character.GoldCoin = 0;
          }
  
          await setDoc(userDocRef, userData);
          console.log("Dados do personagem adicionados com sucesso.");
        }
      } catch (error) {
        console.error(
          "Erro ao adicionar/atualizar os dados do personagem:",
          error
        );
      }
  
      setShowModal(false);
      setShowApp(true);
    }
  }

  return (
    <div>
      {showModal && !showApp && (
        <div className="modal">
          <div className="modal-content">
            {currentScreen === 1 && (
              <>
              <img src={OldMan} className="old" />
                <span>Welcome adventurer!</span><br/>
                <label htmlFor="NameOfCaracter">First Enter your Name: </label>
                <input
                  type="text"
                  name="NameOfCaracter"
                  value={name}
                  onChange={handleNameChange}
                />
              </>
            )}

            {currentScreen === 2 && name.trim() !== "" && (
              <>
              <img src={OldMan} className="old" /><br/>
                <label htmlFor="GenderOfCaracter">
                  Now Choose your gender:
                </label><br/>
                <select
                  name="GenderOfCaracter"
                  value={gender}
                  onChange={handleGenderChange}
                  className="select-menu"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </>
            )}

            {currentScreen === 3 && gender !== "" && (
              <>
                <label htmlFor="ClassOfCaracter">Choose your Class:</label>
                <div className="image-container">
                  <img
                    src={imgCarcters.Archer1}
                    className={`imgsChoose ${
                      selectedImage === 0 ? "selected" : ""
                    }`}
                    onClick={() => handleImageClick(0)}
                  title="Archer"
                  />
                  <img
                    src={imgCarcters.Berseker3}
                    className={`imgsChoose ${
                      selectedImage === 1 ? "selected" : ""
                    }`}
                    onClick={() => handleImageClick(1)}
                    title="Berseker"
                  />
                  <img
                    src={imgCarcters.Mago2}
                    className={`imgsChoose ${
                      selectedImage === 2 ? "selected" : ""
                    }`}
                    onClick={() => handleImageClick(2)}
                    title="Mage"
                  />
                  <img
                    src={imgCarcters.Thief3}
                    className={`imgsChoose ${
                      selectedImage === 3 ? "selected" : ""
                    }`}
                    onClick={() => handleImageClick(3)}
                    title="Thief"
                  />
                </div>
              </>
            )}

            {currentScreen < 3 && (
              <button onClick={handleNextScreen} className="btnnext">Next</button>
            )}

            {currentScreen === 3 && (
              <button onClick={handleFinish} className="finishbtn">Finish</button>
            )}
          </div>
        </div>
      )}

      {showApp && <App />}
    </div>
  );
};

export default NewCaracter;

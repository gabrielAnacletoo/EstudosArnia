import NavCaracter from "./components/NavCaracter";
import Perfil from "./components/Perfil";
import NavTp from "./components/NavTp";
import { Auth } from "./Firebase/Firebaseconfig";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Container, BtnLogout } from "./style/styles";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import NewCaracter from "./components/NewCaracter";
import PlayNow from "./assets/buttons/play.png"

const db = getFirestore();

const App = () => {
  const [user] = useAuthState(Auth);
  const [hasCharacter, setHasCharacter] = useState(false);
  const [userDataLoaded, setUserDataLoaded] = useState(false);
  const [characterImage, setCharacterImage] = useState(null);
  const [characterName, setCharacterName] = useState(null);
  const [goldCoins, setGoldCoins] = useState(null)


  useEffect(() => {
    const checkCharacter = async () => {
      if (user) {
        const userDoc = doc(db, "usuarios", user.uid);
        const userSnapshot = await getDoc(userDoc);
        const userData = userSnapshot.data();
        setHasCharacter(!!userData?.character);
        setUserDataLoaded(true);

        if (userData?.character && userData.character.imagem) {
          setCharacterImage(userData.character.imagem);
          setCharacterName(userData.character.nome);
          setGoldCoins(userData.character.GoldCoin);
        }
      }
    };

    checkCharacter();
  }, [user]);

  useEffect(() => {
    if (user && userDataLoaded && !hasCharacter) {
      const userDocRef = doc(db, "usuarios", user.uid);

      // Verificar se o documento do usuário já existe antes de criar ou atualizar
      getDoc(userDocRef)
        .then((docSnapshot) => {
          if (!docSnapshot.exists()) {
            const userData = {
              nome: user.displayName,
              email: user.email,
              fotoPerfil: user.photoURL,
              character: null,
            };

            // Criar o documento do usuário com todos os dados
            setDoc(userDocRef, userData)
              .then(() => {
                console.log("Dados do usuário salvos com sucesso no banco de dados.");
              })
              .catch((error) => {
                console.error("Erro ao salvar os dados do usuário:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Erro ao verificar o documento do usuário:", error);
        });
    }
  }, [user, userDataLoaded, hasCharacter]);

  return (
    <Container>
      {user ? (
        <>
          {!hasCharacter ? (
            <NewCaracter />
          ) : (
            <>
              <NavTp />
              <Perfil imagem={characterImage} nome={characterName}  />
              <NavCaracter  coins={goldCoins}/>
            </>
          )}
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
    </Container>
  );
};

export const SignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(Auth);
  return (
    <>
    <img src={PlayNow} onClick={() => signInWithGoogle()} className="imgPlay"/>
    </>
  )
}

export const SignOut = () => {
  return Auth.currentUser && <BtnLogout onClick={() => Auth.signOut()}>Sair</BtnLogout>;
};

export default App;

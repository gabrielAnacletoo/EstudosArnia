import { GlobalStyle } from "./styled/GlobalStyle";
import Nav from "./components/Navbar/Nav"
import { Auth, DataBaseApp } from "../Firebase/Firebaseconfig"
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth"

export const App = () => {
  const [user] = useAuthState(Auth)
  return (
    <div className="App">
      <header>
        <h1>teste</h1>
        <SignOut/>
      </header>
      <section>{user ?   
  <GlobalStyle> <Nav/> </GlobalStyle> : <SignIn/> }</section>
    </div>
    )
}







export const SignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(Auth)
  return (
      <button onClick={() => signInWithGoogle()} className="sign-in">Logar com Google</button>
    )
}

export const SignOut = () => {
  return (
    Auth.currentUser && <button onClick={() => Auth.signOut()}>Sair</button>
    )
}

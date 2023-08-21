
import { addDoc, collection, limit, orderBy, query, serverTimestamp } from "firebase/firestore"
import { Auth, DataBaseApp } from "./services/firebaseconfig"
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { useState } from "react";


export const App = () => {
  const [user] = useAuthState(Auth)
  return (
    <div className="App">
      <header>
        <h1>ChatLive (firebase e React)</h1>
        <SignOut/>
      </header>
      <section>{user ? <ChatRoom/> : <SignIn/> }</section>
    </div>
    )
}



export const ChatRoom = () => {
  const messagesRef = collection(DataBaseApp, 'messages');
  const QueryMessages = query(messagesRef, orderBy('createdAt'), limit(25));
  const [messages] = useCollectionData(QueryMessages, { idField: 'id' });

  const [formValue, setFormValue] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emoji) => {
    setFormValue(formValue + emoji);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prevState) => !prevState);
  };

  const emojis = ['😃', '🙏', '🤙', '👏', '👀', '🤓', '😂', '😍', '🤷‍♂️', '👨‍💻', '🌍','❤️','🤦‍♂️','🚀']

  const sendMessage = async (e) => {
    e.preventDefault();

      // Verificar se o campo está vazio
  if (formValue.trim() === '') {
    return; // Retorna sem enviar a mensagem
  }
    const { photoURL, uid } = Auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      uid,
      photoURL,
      createdAt: serverTimestamp(),
    });

    setFormValue('');
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg, index) => <Chatmessage key={index} message={msg} />)}
      </main>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <div className="emoji-picker-container">
          <button type="button" onClick={toggleEmojiPicker} className="emoji-button">
            😃
          </button>
          {showEmojiPicker && (
            <div className="emoji-picker">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => handleEmojiClick(emoji)}
                  className="emoji-button"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </div>
        <button type="submit" className="EnviarBtn">Enviar</button>
      </form>
    </>
  );
};


export const Chatmessage = (props) => {
  const {text, photoURL, uid } = props.message
  const messageClass = uid === Auth.currentUser.uid ? 'sent' : 'received'
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL}/>
      <p>{text}</p>
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
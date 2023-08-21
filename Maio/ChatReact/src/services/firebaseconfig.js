
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBuuQ_8NL7NZJAqYRTQL-npsRWH_wqyxyc",
  authDomain: "chatarnia.firebaseapp.com",
  projectId: "chatarnia",
  storageBucket: "chatarnia.appspot.com",
  messagingSenderId: "493599447872",
  appId: "1:493599447872:web:99528cfc574ffa154c38a5",
  measurementId: "G-FJ465PEN84"
};

// Initialize Firebase
export const App = initializeApp(firebaseConfig);
export const Auth = getAuth(App)
export const DataBaseApp = getFirestore(App)


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCLDlywfwT7N3DnasNGCDnEpReiVIJUYC0",
    authDomain: "hunterquest-58b7f.firebaseapp.com",
    projectId: "hunterquest-58b7f",
    storageBucket: "hunterquest-58b7f.appspot.com",
    messagingSenderId: "496551102338",
    appId: "1:496551102338:web:0feda2cee13b91098f719b",
    measurementId: "G-SVSJE2P3VN"
};

// Initialize Firebase
export const App = initializeApp(firebaseConfig);
export const Auth = getAuth(App)
export const DataBaseApp = getFirestore(App)

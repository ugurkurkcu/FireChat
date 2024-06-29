// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi1r0OhjSGNFTpXH7_FimtNXaS-DGFkfA",
  authDomain: "chat-app-885cc.firebaseapp.com",
  projectId: "chat-app-885cc",
  storageBucket: "chat-app-885cc.appspot.com",
  messagingSenderId: "838388731443",
  appId: "1:838388731443:web:ff468e5c561ef9cc445d46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

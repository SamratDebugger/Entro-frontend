// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWqVm8RLdvl6q_e78zYNLhBAQJnGwdhj0",
  authDomain: "entro-9b2ff.firebaseapp.com",
  projectId: "entro-9b2ff",
  storageBucket: "entro-9b2ff.firebasestorage.app",
  messagingSenderId: "67818481194",
  appId: "1:67818481194:web:112232cce0915bcbe20553",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

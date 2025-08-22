// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

 const firebaseConfig = {
    apiKey: "AIzaSyA3cMFa1o9L81Nh7oamFdCnBE3tBAOhVKY",
    authDomain: "risko-cb2d9.firebaseapp.com",
    projectId: "risko-cb2d9",
    storageBucket: "risko-cb2d9.firebasestorage.app",
    messagingSenderId: "680137496973",
    appId: "1:680137496973:web:579ceb068525a6790885c4",
    measurementId: "G-XC25WHKS7J"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();

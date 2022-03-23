// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPjtCp8oGCxLdR-TSSmVd7Fb66WqRJ5fc",
  authDomain: "fingspell.firebaseapp.com",
  projectId: "fingspell",
  storageBucket: "fingspell.appspot.com",
  messagingSenderId: "911959735477",
  appId: "1:911959735477:web:276809882d30d5e642d2fc",
  measurementId: "G-2SND3P2PWJ"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export default db;
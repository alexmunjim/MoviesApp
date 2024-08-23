// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdpcjm7Nj4wrUAPbTWBNuNdwAy1TV7dWw",
  authDomain: "react-login-d266f.firebaseapp.com",
  projectId: "react-login-d266f",
  storageBucket: "react-login-d266f.appspot.com",
  messagingSenderId: "344974353180",
  appId: "1:344974353180:web:a0df179896ec3c22d890d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = new getFirestore(app);

export { app, auth, googleProvider, db };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ebc2f.firebaseapp.com",
  projectId: "mern-estate-ebc2f",
  storageBucket: "mern-estate-ebc2f.appspot.com",
  messagingSenderId: "985827252276",
  appId: "1:985827252276:web:67ea47ea134b70bc75d261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
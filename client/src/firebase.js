// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-44375.firebaseapp.com",
  projectId: "mern-estate-44375",
  storageBucket: "mern-estate-44375.appspot.com",
  messagingSenderId: "865022269838",
  appId: "1:865022269838:web:4cdde96c06a33373686cdf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
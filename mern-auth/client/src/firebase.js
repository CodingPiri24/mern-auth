// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env,VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-app-dfdb1.firebaseapp.com",
  projectId: "mern-auth-app-dfdb1",
  storageBucket: "mern-auth-app-dfdb1.appspot.com",
  messagingSenderId: "361305488139",
  appId: "1:361305488139:web:6572282cb4e8cac535c00e",
  measurementId: "G-9YKJXW42P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
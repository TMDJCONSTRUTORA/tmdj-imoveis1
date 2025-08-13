// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyuPy8CMUu7haCa-7t-aFGyQfETJ689us",
  authDomain: "tmdj-imoveis.firebaseapp.com",
  projectId: "tmdj-imoveis",
  storageBucket: "tmdj-imoveis.firebasestorage.app",
  messagingSenderId: "88800336166",
  appId: "1:88800336166:web:7564d2cf329f3e375649e7",
  measurementId: "G-M6S28BXP0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

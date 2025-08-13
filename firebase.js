<<<<<<< HEAD
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
=======

// Importa os módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCy_-ie6F-5hvBvr6rICMv9jVpnX9fZhFw",
  authDomain: "tmdj-site13.firebaseapp.com",
  projectId: "tmdj-site13",
  storageBucket: "tmdj-site13.appspot.com",
  messagingSenderId: "143287265354",
  appId: "1:143287265354:web:e9c176d3620461acd9deb3",
  measurementId: "G-H9K0P81ZKX"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
>>>>>>> 40d93b71ba54c8a56ac43e91f0b4ac72c7882908

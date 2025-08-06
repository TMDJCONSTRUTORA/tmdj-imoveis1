import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyuPy8CMUu7haCa-7t-aFGyQfETJ689us",
  authDomain: "tmdj-imoveis.firebaseapp.com",
  projectId: "tmdj-imoveis",
  storageBucket: "tmdj-imoveis.appspot.com",
  messagingSenderId: "88800336166",
  appId: "1:88800336166:web:7564d2cf329f3e375649e7",
  measurementId: "G-M6S28BXP0X"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
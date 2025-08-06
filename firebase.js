
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

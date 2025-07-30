import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyuPy8CMUu7haCa-7t-aFGyQfETJ689us",
  authDomain: "tmdj-imoveis.firebaseapp.com",
  projectId: "tmdj-imoveis",
  storageBucket: "tmdj-imoveis.appspot.com",
  messagingSenderId: "88800336166",
  appId: "1:88800336166:web:7564d2cf329f3e375649e7",
  measurementId: "G-M6S28BXP0X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function carregarImoveis() {
  const lista = document.querySelector(".grid-imoveis");
  lista.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "imoveis"));
  querySnapshot.forEach((doc) => {
    const imovel = doc.data();
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${imovel.foto}" alt="${imovel.titulo}" />
      <h3>${imovel.titulo}</h3>
      <p><strong>Bairro:</strong> ${imovel.bairro}</p>
      <p><strong>Preço:</strong> ${imovel.preco}</p>
    `;
    lista.appendChild(card);
  });
}

carregarImoveis();


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyUp8VGCMU7haCa-7t-aFGyQETj689us",
  authDomain: "tmdj-imoveis.firebaseapp.com",
  projectId: "tmdj-imoveis",
  storageBucket: "tmdj-imoveis.appspot.com",
  messagingSenderId: "8880033166",
  appId: "1:8880033166:web:7564d2cf329f3e375649e7",
  measurementId: "G-M6S28BXPQX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function carregarImoveis() {
  const lista = document.querySelector("#lista-imoveis");
  lista.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "imoveis"));
  querySnapshot.forEach((doc) => {
    const imovel = doc.data();
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${imovel.foto}" alt="${imovel.titulo}" class="card-img"/>
      <div class="card-info">
        <h3>${imovel.titulo}</h3>
        <p><strong>Bairro:</strong> ${imovel.bairro}</p>
        <p><strong>Preço:</strong> ${imovel.preco}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      window.location.href = `detalhe.html?id=${doc.id}`;
    });

    lista.appendChild(card);
  });
}

carregarImoveis();
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

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
  const lista = document.getElementById("lista-imoveis");
  lista.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "imoveis"));
  querySnapshot.forEach((doc) => {
    const dados = doc.data();
    const card = document.createElement("div");
    card.className = "imovel";

    card.innerHTML = `
      <a href="detalhe-imovel.html?id=${doc.id}">
        <img src="${dados.foto}" alt="${dados.titulo}" />
      </a>
      <h3>${dados.titulo} - ${dados.bairro}</h3>
      <p><strong>${dados.preco}</strong></p>
      <p>${dados.descricaoCurta || ""}</p>
      <a href="detalhe-imovel.html?id=${doc.id}" class="botao">Ver mais</a>
    `;

    // Forçar abertura em nova aba
    const links = card.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(link.href, '_blank');
      });
    });

    lista.appendChild(card);
  });
}

carregarImoveis();
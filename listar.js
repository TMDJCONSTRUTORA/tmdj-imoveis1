import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCyuPy8CMUu7haCa-7t-aFGyQfETJ689us",
  authDomain: "tmdj-imoveis.firebaseapp.com",
  projectId: "tmdj-imoveis",
  storageBucket: "tmdj-imoveis.appspot.com",
  messagingSenderId: "88800336166",
  appId: "1:88800336166:web:7564d2cf329f3e375649e7",
  measurementId: "G-M6S28BXP0X"
};

// Inicializa
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function carregarImoveis() {
  const container = document.querySelector(".imoveis");
  container.innerHTML = "<p>Carregando imóveis...</p>";

  try {
    const snapshot = await getDocs(collection(db, "imoveis"));
    if (snapshot.empty) {
      container.innerHTML = "<p>Nenhum imóvel cadastrado ainda.</p>";
      return;
    }

    let html = "<h2>Imóveis à Venda</h2><div class='imoveis-grid'>";
    snapshot.forEach(doc => {
      const imovel = doc.data();
      html += `
        <div class="card">
          <img src="${imovel.foto}" alt="Foto do imóvel" />
          <h3>${imovel.titulo} | ${imovel.bairro}</h3>
          <p class="preco">${imovel.preco}</p>
          <p class="tipo">${imovel.tipo}</p>
        </div>
      `;
    });
    html += "</div>";
    container.innerHTML = html;
  } catch (e) {
    container.innerHTML = "<p>Erro ao carregar imóveis.</p>";
    console.error(e);
  }
}

document.addEventListener("DOMContentLoaded", carregarImoveis);
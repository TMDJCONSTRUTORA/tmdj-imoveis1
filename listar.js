// listar.js

// Importando módulos Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Configuração Firebase (mesmo do firebase.js)
const firebaseConfig = {
  apiKey: "AIzaSyCy_-ie6F-5hvBvr6rICMv9jVpnX9fZhFw",
  authDomain: "tmdj-site13.firebaseapp.com",
  projectId: "tmdj-site13",
  storageBucket: "tmdj-site13.firebasestorage.app",
  messagingSenderId: "143287265354",
  appId: "1:143287265354:web:e9c176d3620461acd9deb3",
  measurementId: "G-H9K0P81ZKX"
};

// Inicializando Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Elemento onde os imóveis serão listados
const listaImoveis = document.getElementById("lista-imoveis");

// Função para carregar imóveis
async function carregarImoveis() {
  listaImoveis.innerHTML = "<p>Carregando imóveis...</p>";

  try {
    const querySnapshot = await getDocs(collection(db, "imoveis"));

    if (querySnapshot.empty) {
      listaImoveis.innerHTML = "<p>Nenhum imóvel encontrado.</p>";
      return;
    }

    listaImoveis.innerHTML = ""; // limpa antes de exibir

    querySnapshot.forEach((doc) => {
      const imovel = doc.data();
      const id = doc.id;

      // Card de cada imóvel
      const card = document.createElement("div");
      card.classList.add("card-imovel");
      card.innerHTML = `
        <img src="${imovel.capa || 'img/placeholder.jpg'}" alt="${imovel.titulo}" class="img-capa">
        <h3>${imovel.titulo || 'Sem título'}</h3>
        <p class="preco">${imovel.preco ? `R$ ${imovel.preco}` : 'Preço sob consulta'}</p>
        <a href="detalhe.html?id=${id}" class="btn-ver">Ver Detalhes</a>
      `;

      listaImoveis.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao carregar imóveis:", error);
    listaImoveis.innerHTML = "<p>Erro ao carregar imóveis.</p>";
  }
}

// Chama a função
carregarImoveis();
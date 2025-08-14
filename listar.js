// listar.js
import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const listaImoveis = document.getElementById("lista-imoveis");

async function carregarImoveis() {
  listaImoveis.innerHTML = "<p>Carregando imóveis...</p>";

  try {
    const snapshot = await getDocs(collection(db, "imoveis"));

    if (snapshot.empty) {
      listaImoveis.innerHTML = "<p>Nenhum imóvel encontrado.</p>";
      return;
    }

    listaImoveis.innerHTML = "";

    snapshot.forEach(doc => {
      const imovel = doc.data();
      const id = doc.id;

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

carregarImoveis();
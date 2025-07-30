
import app from "./firebase-config.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

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
      <a href="detalhe.html?id=${doc.id}" class="card-link">
        <img src="${imovel.foto}" alt="${imovel.titulo}" />
        <h3>${imovel.titulo}</h3>
        <p><strong>Bairro:</strong> ${imovel.bairro}</p>
        <p><strong>Preço:</strong> ${imovel.preco || "Não informado"}</p>
      </a>
    `;

    lista.appendChild(card);
  });
}

carregarImoveis();

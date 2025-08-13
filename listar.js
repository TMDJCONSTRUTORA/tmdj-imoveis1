<<<<<<< HEAD
// placeholder listar.js
=======
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { db } from "./firebase-config.js";

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
      window.location.href = \`detalhe.html?id=${doc.id}\`;
    });

    lista.appendChild(card);
  });
}

carregarImoveis();
>>>>>>> 40d93b71ba54c8a56ac43e91f0b4ac72c7882908

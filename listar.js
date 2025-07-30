
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { app } from "./firebase-config.js";

const db = getFirestore(app);

async function carregarImoveis() {
  const lista = document.querySelector(".grid-imoveis");
  lista.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "imoveis"));
  querySnapshot.forEach((doc) => {
    const imovel = doc.data();
    const id = doc.id;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="\${imovel.foto}" alt="\${imovel.titulo}">
      <h3>\${imovel.titulo}</h3>
      <p><strong>Bairro:</strong> \${imovel.bairro}</p>
      <p><strong>Preço:</strong> \${imovel.preco}</p>
    `;
    card.onclick = () => {
      window.location.href = \`detalhe.html?id=\${id}\`;
    };
    lista.appendChild(card);
  });
}

carregarImoveis();

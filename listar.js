import { db } from './firebase-config.js';
import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const container = document.getElementById('lista-imoveis');
container.innerHTML = "";

const q = query(collection(db, "imoveis"), orderBy("criadoEm", "desc"));
const snap = await getDocs(q);

if (snap.empty) {
  container.innerHTML = "<p>Nenhum imóvel cadastrado ainda.</p>";
}

snap.forEach(doc => {
  const { titulo, bairro, preco, tipo, imageUrl } = doc.data();

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${imageUrl}" alt="${titulo}">
    <div class="card-body">
      <h3>${titulo}</h3>
      <p><strong>Bairro:</strong> ${bairro}</p>
      <p><strong>Tipo:</strong> ${tipo}</p>
      <p><strong>Preço:</strong> ${preco}</p>
    </div>
  `;
  container.appendChild(card);
});
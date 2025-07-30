import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { app } from "./firebase-config.js";

const db = getFirestore(app);

async function carregarDetalhe() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;

  const docRef = doc(db, "imoveis", id);
  const docSnap = await getDoc(docRef);

  const container = document.getElementById("detalhe-imovel");

  if (docSnap.exists()) {
    const imovel = docSnap.data();
    container.innerHTML = `
      <img src="${imovel.foto}" alt="${imovel.titulo}" class="detalhe-imagem">
      <h2>${imovel.titulo}</h2>
      <p><strong>Bairro:</strong> ${imovel.bairro}</p>
      <p><strong>Preço:</strong> ${imovel.preco}</p>
      <p><strong>Descrição:</strong> ${imovel.descricao || "Sem descrição."}</p>
    `;
  } else {
    container.innerHTML = "<p>Imóvel não encontrado.</p>";
  }
}

carregarDetalhe();
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

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

// Pega o ID da URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const container = document.getElementById("detalhe-imovel");

async function carregarDetalhes() {
  if (!id) {
    container.innerHTML = "<p>ID do imóvel não fornecido.</p>";
    return;
  }

  const docRef = doc(db, "imoveis", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const imovel = docSnap.data();
    container.innerHTML = `
      <div class="detalhe-card">
        <img src="${imovel.foto}" alt="${imovel.titulo}" />
        <h2>${imovel.titulo}</h2>
        <p><strong>Bairro:</strong> ${imovel.bairro}</p>
        <p><strong>Tipo:</strong> ${imovel.tipo}</p>
        <p><strong>Preço:</strong> ${imovel.preco}</p>
        <p><strong>Descrição:</strong> ${imovel.descricao || 'Sem descrição disponível.'}</p>
        <a class="botao" href="https://wa.me/5511989027982?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20imóvel:%20${encodeURIComponent(imovel.titulo)}" target="_blank">Falar no WhatsApp</a>
      </div>
    `;
  } else {
    container.innerHTML = "<p>Imóvel não encontrado.</p>";
  }
}

carregarDetalhes();
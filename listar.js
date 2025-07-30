import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc
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
  const detalhes = document.getElementById("detalhe-imovel");
  lista.innerHTML = "";
  detalhes.style.display = "none";

  const querySnapshot = await getDocs(collection(db, "imoveis"));
  querySnapshot.forEach((docSnap) => {
    const dados = docSnap.data();
    const card = document.createElement("div");
    card.className = "imovel";

    card.innerHTML = `
      <img src="${dados.foto}" alt="${dados.titulo}" style="cursor: pointer;" />
      <h3>${dados.titulo} - ${dados.bairro}</h3>
      <p><strong>${dados.preco}</strong></p>
      <p>${dados.descricaoCurta || ""}</p>
      <button class="botao" data-id="${docSnap.id}">Ver mais</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      mostrarDetalhes(docSnap.id);
    });

    lista.appendChild(card);
  });
}

async function mostrarDetalhes(id) {
  const lista = document.getElementById("lista-imoveis");
  const detalhes = document.getElementById("detalhe-imovel");

  const docRef = doc(db, "imoveis", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    detalhes.innerHTML = `
      <h2>${data.titulo}</h2>
      <p><strong>Bairro:</strong> ${data.bairro}</p>
      <p><strong>Tipo:</strong> ${data.tipo}</p>
      <p><strong>Preço:</strong> ${data.preco}</p>
      <p><strong>Descrição:</strong> ${data.descricaoCompleta || ""}</p>
      <div class="galeria">
        ${
          Array.isArray(data.fotos)
            ? data.fotos.map(url => `<img src="${url}" style="max-width: 100%; margin-bottom: 10px;" />`).join("")
            : data.foto ? `<img src="${data.foto}" style="max-width: 100%;" />` : ""
        }
      </div>
      <br>
      <button onclick="voltarParaLista()">← Voltar para lista</button>
    `;
    lista.style.display = "none";
    detalhes.style.display = "block";
    window.scrollTo(0, 0);
  } else {
    alert("Imóvel não encontrado.");
  }
}

window.voltarParaLista = function () {
  document.getElementById("detalhe-imovel").style.display = "none";
  document.getElementById("lista-imoveis").style.display = "grid";
};

carregarImoveis();
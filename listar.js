// listar.js
import { db } from './firebase.js';
import { collection, getDocs, orderBy, query } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

async function listarImoveis() {
    const lista = document.getElementById('lista-imoveis');
    const q = query(collection(db, 'imoveis'));
    const snapshot = await getDocs(q);

    lista.innerHTML = ''; // limpa a lista antes de adicionar

    snapshot.forEach(doc => {
        const imovel = doc.data();
        const card = document.createElement('div');
        card.classList.add('card-imovel');

        card.innerHTML = `
            <img src="${imovel.capa}" alt="${imovel.titulo}" class="img-card">
            <h3>${imovel.titulo}</h3>
            <p>${imovel.cidade}</p>
            <p>R$ ${imovel.preco.toLocaleString()}</p>
        `;

        lista.appendChild(card);
    });
}

listarImoveis();

import { storage, db } from './firebase-config.js';
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

document.getElementById('imovelForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const bairro = document.getElementById('bairro').value;
  const preco = document.getElementById('preco').value;
  const tipo = document.getElementById('tipo').value;
  const foto = document.getElementById('foto').files[0];

  if (!foto) return alert("Selecione uma imagem!");

  try {
    const fotoRef = ref(storage, `imoveis/${Date.now()}_${foto.name}`);
    await uploadBytes(fotoRef, foto);
    const imageUrl = await getDownloadURL(fotoRef);

    await addDoc(collection(db, "imoveis"), {
      titulo, bairro, preco, tipo, imageUrl,
      criadoEm: serverTimestamp()
    });

    alert("Imóvel cadastrado com sucesso!");
    e.target.reset();
  } catch (err) {
    console.error(err);
    alert("Erro ao salvar imóvel.");
  }
});
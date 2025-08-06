
import { db, storage } from './firebase.js';
import { collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js';

document.getElementById('form-imovel').addEventListener('submit', async (e) => {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const cidade = document.getElementById('cidade').value;
  const preco = parseFloat(document.getElementById('preco').value);
  const descricao = document.getElementById('descricao').value;
  const capaFile = document.getElementById('capa').files[0];
  const galeriaFiles = document.getElementById('galeria').files;

  if (!capaFile || galeriaFiles.length > 15) {
    alert("Adicione uma imagem de capa e no máximo 15 fotos na galeria.");
    return;
  }

  try {
    // Upload da imagem de capa
    const capaRef = ref(storage, 'imoveis/' + Date.now() + '_capa_' + capaFile.name);
    await uploadBytes(capaRef, capaFile);
    const capaURL = await getDownloadURL(capaRef);

    // Upload das imagens da galeria
    const galeriaURLs = [];
    for (let i = 0; i < galeriaFiles.length; i++) {
      const img = galeriaFiles[i];
      const imgRef = ref(storage, 'imoveis/' + Date.now() + '_galeria_' + img.name);
      await uploadBytes(imgRef, img);
      const url = await getDownloadURL(imgRef);
      galeriaURLs.push(url);
    }

    // Salvar no Firestore
    await addDoc(collection(db, 'imoveis'), {
      titulo,
      cidade,
      preco,
      descricao,
      capa: capaURL,
      galeria: galeriaURLs,
      criadoEm: serverTimestamp()
    });

    alert("Imóvel cadastrado com sucesso!");
    document.getElementById('form-imovel').reset();

  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    alert("Erro ao cadastrar imóvel. Veja o console.");
  }
});

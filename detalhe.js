// js/detalhe.js
import { db } from './firebase.js';
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function createEl(tag, attrs = {}, html = "") {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  if (html) el.innerHTML = html;
  return el;
}

async function carregarDetalhe() {
  const id = getParam("id");
  const cont = document.getElementById("detalhe");
  if (!cont) return;

  if (!id) {
    cont.innerHTML = "<p>ID do imóvel não informado.</p>";
    return;
  }

  try {
    const ref = doc(db, "imoveis", id);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      cont.innerHTML = "<p>Imóvel não encontrado.</p>";
      return;
    }

    const imovel = snap.data() || {};
    const titulo = imovel.titulo || "Sem título";
    const precoTxt = (typeof imovel.preco === "number")
      ? `R$ ${imovel.preco.toLocaleString('pt-BR')}`
      : "Preço não informado";
    const capa = imovel.imagem || "img/placeholder.png";
    const descricao = imovel.descricao || "";
    const fotos = Array.isArray(imovel.fotos) ? imovel.fotos.filter(Boolean) : [];

    // Layout
    const galeria = createEl("div", { class: "detalhe-galeria" });
    const imgPrincipal = createEl("img", { src: capa, alt: titulo, id: "foto-principal", loading: "eager" });
    galeria.appendChild(imgPrincipal);

    if (fotos.length) {
      const thumbs = createEl("div", { class: "thumb-lista" });
      [capa, ...fotos].forEach((src) => {
        const t = createEl("img", { src, alt: "Foto do imóvel", loading: "lazy" });
        t.addEventListener("click", () => {
          imgPrincipal.src = src;
        });
        thumbs.appendChild(t);
      });
      galeria.appendChild(thumbs);
    }

    const info = createEl("div", { class: "detalhe-info" });
    info.innerHTML = `
      <h2>${titulo}</h2>
      <div class="detalhe-preco">${precoTxt}</div>
      <div class="detalhe-desc">${descricao ? descricao.replace(/\n/g, "<br>") : ""}</div>
      <div style="margin-top:12px">
        <a class="btn" href="index.html">← Voltar</a>
      </div>
    `;

    cont.innerHTML = "";
    cont.appendChild(galeria);
    cont.appendChild(info);
  } catch (err) {
    console.error("Erro ao carregar detalhe:", err);
    cont.innerHTML = "<p>Erro ao carregar detalhe do imóvel.</p>";
  }
}

document.addEventListener("DOMContentLoaded", carregarDetalhe);

// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCy_-ie6F-5hvBvr6rICMv9jVpnX9fZhFw",
  authDomain: "tmdj-site13.firebaseapp.com",
  projectId: "tmdj-site13",
  storageBucket: "tmdj-site13.firebasestorage.app",
  messagingSenderId: "143287265354",
  appId: "1:143287265354:web:e9c176d3620461acd9deb3",
  measurementId: "G-H9K0P81ZKX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
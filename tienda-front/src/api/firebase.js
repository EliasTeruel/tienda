// src/api/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxTFDygZ5hefZRC-8d1z4RFtVsxN2_pyk",
  authDomain: "fimuvintage.firebaseapp.com",
  projectId: "fimuvintage",
  storageBucket: "fimuvintage.firebasestorage.app",
  messagingSenderId: "969473356973",
  appId: "1:969473356973:web:c413693b5e8f828a078224",
  measurementId: "G-V9TH7S0TLD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

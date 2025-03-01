// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Ajout correct pour Realtime Database
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-izNccg_Uy1dbSoQhw6nKkvBzPxvOwY4",
  authDomain: "learnreactgpt.firebaseapp.com",
  projectId: "learnreactgpt",
  storageBucket: "learnreactgpt.firebasestorage.app",
  messagingSenderId: "252272900810",
  appId: "1:252272900810:web:3aaad6708a138d36859233",
  measurementId: "G-FH3J5G2NGS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

// export default app;

// Realtime Database
const database = getDatabase(app);
// Firestore
const firestore = getFirestore(app);

export const auth = getAuth(app);

export { database, firestore };

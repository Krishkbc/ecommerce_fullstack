// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh-ZuhCeil2NejcEnt2q4mdAxb96mN8sU",
  authDomain: "clicon-73a6d.firebaseapp.com",
  projectId: "clicon-73a6d",
  storageBucket: "clicon-73a6d.firebasestorage.app",
  messagingSenderId: "28500525967",
  appId: "1:28500525967:web:33ca2d16a139c920f881fa",
  measurementId: "G-EV566C6KRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);


export default app
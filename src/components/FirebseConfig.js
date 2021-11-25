import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// import { collection, setDoc, query, where, onSnapshot } from "firebase/firestore"; 
// export { collection, setDoc, query, where, onSnapshot };
const firebaseConfig = {
  apiKey: "AIzaSyCzapNsg5bisSbZyEtKChhEq0D1BRDyisY",
  authDomain: "teamreporter-smit-23613.firebaseapp.com",
  projectId: "teamreporter-smit-23613",
  storageBucket: "teamreporter-smit-23613.appspot.com",
  messagingSenderId: "546447518880",
  appId: "1:546447518880:web:4dc5e67532227f0b602dc5",
  measurementId: "G-FW83JP4PEM"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db }






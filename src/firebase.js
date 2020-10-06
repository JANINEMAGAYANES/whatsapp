import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBcMgPL82qjmJbaOlrFLqiumKuDy7wUc18",
  authDomain: "whatsapp-10f9d.firebaseapp.com",
  databaseURL: "https://whatsapp-10f9d.firebaseio.com",
  projectId: "whatsapp-10f9d",
  storageBucket: "whatsapp-10f9d.appspot.com",
  messagingSenderId: "597505599284",
  appId: "1:597505599284:web:3a213e539ece4d5417a761",
  measurementId: "G-6QPM59Q6GC",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

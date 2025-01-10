// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt8DZaM30X6uVhhhCUiMPX6Fxcinj92a8",
  authDomain: "dreamhouse-acc4c.firebaseapp.com",
  projectId: "dreamhouse-acc4c",
  storageBucket: "dreamhouse-acc4c.firebasestorage.app",
  messagingSenderId: "793823311865",
  appId: "1:793823311865:web:f93c68d41cee5567e96f28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
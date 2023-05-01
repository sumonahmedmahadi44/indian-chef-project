// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmk1fXkb0K202yI5RWnr5FfYK0tcCo-ks",
  authDomain: "indian-chef-project.firebaseapp.com",
  projectId: "indian-chef-project",
  storageBucket: "indian-chef-project.appspot.com",
  messagingSenderId: "569276886430",
  appId: "1:569276886430:web:2def8a1771bf1e3caf7a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
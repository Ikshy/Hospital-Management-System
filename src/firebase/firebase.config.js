// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAQYAonr1kGarrUvWJhppMm_fJj8sljcw",
  authDomain: "haven-care.firebaseapp.com",
  projectId: "haven-care",
  storageBucket: "haven-care.appspot.com",
  messagingSenderId: "241518807284",
  appId: "1:241518807284:web:5068266e9eba90fc84f6a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d15f5.firebaseapp.com",
  projectId: "mern-blog-d15f5",
  storageBucket: "mern-blog-d15f5.appspot.com",
  messagingSenderId: "947046362674",
  appId: "1:947046362674:web:5618283b2736a24204562b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

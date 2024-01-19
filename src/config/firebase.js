// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAeWRarM4oQYY86xpPDItewTp1ZT_xLDE",
  authDomain: "vite-contact-283eb.firebaseapp.com",
  projectId: "vite-contact-283eb",
  storageBucket: "vite-contact-283eb.appspot.com",
  messagingSenderId: "791199714044",
  appId: "1:791199714044:web:4f8b8e7d6648ca82ab6579"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
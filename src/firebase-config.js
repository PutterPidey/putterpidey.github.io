// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `HtKoZo44aUwgmk854AjeTXWbepXFqloNUiN8pC-EtoM`,
  authDomain: "personal-website-5f5eb.firebaseapp.com",
  projectId: "personal-website-5f5eb",
  storageBucket: "personal-website-5f5eb.appspot.com",
  messagingSenderId: "665595047464",
  appId: "1:665595047464:web:074263ea086c8497650f1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

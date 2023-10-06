// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMXOgIBRf438zXgp1ChHMAJiAFvL2G8Q4",
  authDomain: "socicore.firebaseapp.com",
  projectId: "socicore",
  storageBucket: "socicore.appspot.com",
  messagingSenderId: "668905214666",
  appId: "1:668905214666:web:f4c64837c2dc71c8a59a33",
  measurementId: "G-LE9FQRGR6P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db=getFirestore()
// const analytics = getAnalytics(app);
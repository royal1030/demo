// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARBHhfBX6mJ4u1ZRuf_ifhOraqd3sxiSU",
  authDomain: "argcollab-3c286.firebaseapp.com",
  projectId: "argcollab-3c286",
  storageBucket: "argcollab-3c286.appspot.com",
  messagingSenderId: "533298535973",
  appId: "1:533298535973:web:5c635e901fcf8defbbe9cc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

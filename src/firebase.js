import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDYwh3V269S7Bh3m1gS13UDwL_16Rb5PjE",
    authDomain: "react-chat-85b26.firebaseapp.com",
    projectId: "react-chat-85b26",
    storageBucket: "react-chat-85b26.appspot.com",
    messagingSenderId: "366701908226",
    appId: "1:366701908226:web:1ab97ecf80fda8d526721b",
    measurementId: "G-D93KZC1FEJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);

// Create a root reference
export const storage = getStorage();
export const db = getFirestore()
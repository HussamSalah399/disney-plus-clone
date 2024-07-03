import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// firebase config data
const firebaseConfig = {
    apiKey: "AIzaSyBhqnsjsmnQ1NiD1JGO4EzeZsxaqvH09M0",
    authDomain: "disneyplus-clone-82710.firebaseapp.com",
    projectId: "disneyplus-clone-82710",
    storageBucket: "disneyplus-clone-82710.appspot.com",
    messagingSenderId: "421102952325",
    appId: "1:421102952325:web:ab4cb2ecd4e6441f2d6eec",
    measurementId: "G-FED4MPDVH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default db;
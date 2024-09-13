// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate11.firebaseapp.com",
  projectId: "real-estate11",
  storageBucket: "real-estate11.appspot.com",
  messagingSenderId: "911235069032",
  appId: "1:911235069032:web:8eed79609bfbcc05f337dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
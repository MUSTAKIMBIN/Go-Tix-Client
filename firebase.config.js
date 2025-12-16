// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYZJEWy4D_VY7dM-3poBpvuKR2_AGbWzo",
  authDomain: "gotix-add7a.firebaseapp.com",
  projectId: "gotix-add7a",
  storageBucket: "gotix-add7a.firebasestorage.app",
  messagingSenderId: "10700628402",
  appId: "1:10700628402:web:dfba9ebc3fce8c4a6184ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

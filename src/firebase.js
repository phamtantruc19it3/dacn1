// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJhx0lE5FdXYpZjIWaFUIIOAgVRFPEkl0",
  authDomain: "chat2-6079d.firebaseapp.com",
  projectId: "chat2-6079d",
  storageBucket: "chat2-6079d.appspot.com",
  messagingSenderId: "44230393605",
  appId: "1:44230393605:web:d4e828e3d0e420cea4416c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
 




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQEtf8bSHUNcRT1KpWAaJp4UGc4nFp3Lg",
  authDomain: "olx-clone-711bf.firebaseapp.com",
  projectId: "olx-clone-711bf",
  storageBucket: "olx-clone-711bf.appspot.com",
  messagingSenderId: "202581379612",
  appId: "1:202581379612:web:f8bd3195f98e4790a82dd9"
};
  
  // Use firebaseConfig in your Firebase initialization code
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

import firebase from 'firebase/compat/app';
 import "firebase/compat/auth";
import "firebase/compat/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgzKMmBEbvrQSD2g2sRZnNymb0p0UWH4g",
  authDomain: "auth-f2e67.firebaseapp.com",
  projectId: "auth-f2e67",
  storageBucket: "auth-f2e67.appspot.com",
  messagingSenderId: "936605761225",
  appId: "1:936605761225:web:deefb93035a22ca2c79718"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const db=firebase.firestore()
const auth=firebase.auth()

export {auth};
export default db;
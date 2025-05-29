// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1DVEfk9jkrrrHwaQY0z_DgwtVwpyTy6E",
  authDomain: "poshu-bazar.firebaseapp.com",
  projectId: "poshu-bazar",
  storageBucket: "poshu-bazar.firebasestorage.app",
  messagingSenderId: "675916708612",
  appId: "1:675916708612:web:c5bb6017d531ac56c1ee51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeXLsIQRLw9ASutxPH4eJz2RnPIAtvNVI",
    authDomain: "ecommerce-app-3a913.firebaseapp.com",
    projectId: "ecommerce-app-3a913",
    storageBucket: "ecommerce-app-3a913.appspot.com",
    messagingSenderId: "108260432268",
    appId: "1:108260432268:web:e04578feb1b662f6615ea9",
    measurementId: "G-1JTM3MKSM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider

const auth = getAuth()


export { auth, provider };

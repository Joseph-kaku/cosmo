// Import the functions you need from the SDKs you nee
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCupEunGyA0_LhiFGZJciiBFDa03RZfnog",
  authDomain: "cosmo-5f40d.firebaseapp.com",
  projectId: "cosmo-5f40d",
  storageBucket: "cosmo-5f40d.appspot.com",
  messagingSenderId: "558053168806",
  appId: "1:558053168806:web:4a006ab0f127611d368667",
  measurementId: "G-HXFHYM5R6R"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
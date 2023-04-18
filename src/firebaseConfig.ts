// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAHnKS61CoZBeUHz392VyBsbZGWkr0dsU",
    authDomain: "usecasetool.firebaseapp.com",
    projectId: "usecasetool",
    storageBucket: "usecasetool.appspot.com",
    messagingSenderId: "792042608355",
    appId: "1:792042608355:web:059757be1882d8cb70d7d6",
    measurementId: "G-L134DCD6F7"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
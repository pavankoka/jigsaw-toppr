// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQu609KUFcaLDS6FZoM44HP-OoYjF8jp0",
    authDomain: "jigsaw-test-a434d.firebaseapp.com",
    projectId: "jigsaw-test-a434d",
    storageBucket: "jigsaw-test-a434d.appspot.com",
    messagingSenderId: "1062594589720",
    appId: "1:1062594589720:web:8002f89df98a52d7b7ff6d",
    measurementId: "G-Q0YRFSXXBV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQu609KUFcaLDS6FZoM44HP-OoYjF8jp0",
    authDomain: "jigsaw-test-a434d.firebaseapp.com",
    databaseURL: "https://jigsaw-test-a434d-default-rtdb.firebaseio.com",
    projectId: "jigsaw-test-a434d",
    storageBucket: "jigsaw-test-a434d.appspot.com",
    messagingSenderId: "1062594589720",
    appId: "1:1062594589720:web:8002f89df98a52d7b7ff6d",
    measurementId: "G-Q0YRFSXXBV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database };

// import * as firebase from "firebase/app";
// import "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyAQu609KUFcaLDS6FZoM44HP-OoYjF8jp0",
//     authDomain: "jigsaw-test-a434d.firebaseapp.com",
//     projectId: "jigsaw-test-a434d",
//     storageBucket: "jigsaw-test-a434d.appspot.com",
//     messagingSenderId: "1062594589720",
//     appId: "1:1062594589720:web:8002f89df98a52d7b7ff6d",
//     measurementId: "G-Q0YRFSXXBV",
// };

// firebase.initializeApp(firebaseConfig);

// const databaseRef = firebase.database().ref();
// export const puzzleRef = databaseRef.child("puzzle");
// export default firebase;

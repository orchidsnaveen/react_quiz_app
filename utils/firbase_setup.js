// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPa2czEOdNyvgLIHthd5fbGNeoeuqIch8",
  authDomain: "testing-22a5d.firebaseapp.com",
  projectId: "testing-22a5d",
  storageBucket: "testing-22a5d.appspot.com",
  messagingSenderId: "513571343539",
  appId: "1:513571343539:web:7eeacf09adbc420fe9b4c6",
  measurementId: "G-M0TSR9ZH68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
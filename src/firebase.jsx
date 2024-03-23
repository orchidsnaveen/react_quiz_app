
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1ktR3m4BzW5TXNswRmBnyZJ1__MPKcH8",
  authDomain: "react-a4469.firebaseapp.com",
  projectId: "react-a4469",
  storageBucket: "react-a4469.appspot.com",
  messagingSenderId: "976888827987",
  appId: "1:976888827987:web:0359a5a90114d122a0b6a6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,app}
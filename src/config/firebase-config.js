// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDuRwH0OIbWyPiQKDp05tx85cFNNFiaIMU",
  authDomain: "keepsolved.firebaseapp.com",
  projectId: "keepsolved",
  storageBucket: "keepsolved.appspot.com",
  messagingSenderId: "525866651199",
  appId: "1:525866651199:web:86846394fbfeb887e2b28a",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
// const provider = new firebase.auth.GoogleAuthProvider();
export { auth };
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuRwH0OIbWyPiQKDp05tx85cFNNFiaIMU",
  authDomain: "keepsolved.firebaseapp.com",
  projectId: "keepsolved",
  storageBucket: "keepsolved.appspot.com",
  messagingSenderId: "525866651199",
  appId: "1:525866651199:web:86846394fbfeb887e2b28a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);*/

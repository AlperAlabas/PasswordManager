// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import "firebase/auth";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXCwt_U1fyVfvrChr-XBWsSXtjluG6nJ0",
  authDomain: "password-c10b0.firebaseapp.com",
  projectId: "password-c10b0",
  storageBucket: "password-c10b0.appspot.com",
  messagingSenderId: "80674036879",
  appId: "1:80674036879:web:00f0fbeb39f2a912efa4fa"
};


// Initialize Firebase
let app = initializeApp(firebaseConfig);


//const authent = Auth; 


export {app};
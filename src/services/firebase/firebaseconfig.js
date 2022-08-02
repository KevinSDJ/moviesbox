import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwdJm3UwDeM9eHxMZioFJxc-jppw7PPU8",
  authDomain: "cineplus-6eb7a.firebaseapp.com",
  projectId: "cineplus-6eb7a",
  storageBucket: "cineplus-6eb7a.appspot.com",
  messagingSenderId: "661889325746",
  appId: "1:661889325746:web:ce78589cdaa55f4354c7ab",
  measurementId: "G-3D2V65PRKH"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
getAuth(app)
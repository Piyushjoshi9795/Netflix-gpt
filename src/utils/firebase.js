// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnK9dzDvqOF3PJZ2ikr2Z0BJQ0xzQRWPA",
  authDomain: "netflixai-f14a2.firebaseapp.com",
  projectId: "netflixai-f14a2",
  storageBucket: "netflixai-f14a2.appspot.com",
  messagingSenderId: "610857034398",
  appId: "1:610857034398:web:6f4bcac51bf07c06bf918f",
  measurementId: "G-4D2Q0N14PH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth();
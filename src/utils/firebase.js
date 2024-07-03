import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Z__jDk0c37ZbWqqvSQ2lRyrgZprIWws",
  authDomain: "netfli-xx.firebaseapp.com",
  projectId: "netfli-xx",
  storageBucket: "netfli-xx.appspot.com",
  messagingSenderId: "292056340578",
  appId: "1:292056340578:web:6c6aa43a3c9a26b1f3d93b",
  measurementId: "G-RDY919Q5T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
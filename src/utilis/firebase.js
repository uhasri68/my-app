// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWnSthIk67D-OHhMNckUgB4djGgMSxeuQ",
  authDomain: "my-app-e0340.firebaseapp.com",
  projectId: "my-app-e0340",
  storageBucket: "my-app-e0340.appspot.com",
  messagingSenderId: "662042779576",
  appId: "1:662042779576:web:26e4d061621f2e6b38b94d",
  measurementId: "G-XQ6R2JMETS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

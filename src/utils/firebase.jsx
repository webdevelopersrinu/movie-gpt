// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKgqRTFSjn5KPuS_ChfzwepxldqktbVHE",
  authDomain: "netflixgpt-fdb10.firebaseapp.com",
  projectId: "netflixgpt-fdb10",
  storageBucket: "netflixgpt-fdb10.firebasestorage.app",
  messagingSenderId: "176654806096",
  appId: "1:176654806096:web:66997b6379b4b55b1cf555",
  measurementId: "G-4R76YGH41T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
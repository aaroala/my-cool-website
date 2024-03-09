// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD097VDSjjdjZbAHExxMKS0GOCLqHMmW5c",
  authDomain: "project-website-93450.firebaseapp.com",
  projectId: "project-website-93450",
  storageBucket: "project-website-93450.appspot.com",
  messagingSenderId: "1047613140472",
  appId: "1:1047613140472:web:abc578d54df564bff23a0d",
  measurementId: "G-V4K9NJK51R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl1EE-KpHicnX0xC9nfootOZUaSvHrFb4",
  authDomain: "class-demo-28b22.firebaseapp.com",
  projectId: "class-demo-28b22",
  storageBucket: "class-demo-28b22.appspot.com",
  messagingSenderId: "254813831663",
  appId: "1:254813831663:web:4825613e8a1fbed6a9f61a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
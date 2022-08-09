import { initializeApp } from "firebase/app";
import firebaseConfig from "./secrets";
import { GoogleAuthProvider } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
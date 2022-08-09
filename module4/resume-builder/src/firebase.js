import { initializeApp } from "firebase/app";
import firebaseConfig from "./secrets";
import { GoogleAuthProvider } from "firebase/auth";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
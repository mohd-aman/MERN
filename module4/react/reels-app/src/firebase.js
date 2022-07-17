// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import secret from "./secrets"
// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(secret);
export let auth = getAuth(app);
export const db = getFirestore(app);
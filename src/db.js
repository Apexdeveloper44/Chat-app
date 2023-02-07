import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { initializeApp } from "firebase/app";

const config = {
    apiKey: "AIzaSyCglfhQ8FoNaKr4Rkp7YtvT0QV_hhdRJU4",
  authDomain: "chatapp-1821f.firebaseapp.com",
  projectId: "chatapp-1821f",
  storageBucket: "chatapp-1821f.appspot.com",
  messagingSenderId: "374349832037",
  appId: "1:374349832037:web:966e1398ae992d6a9c8b8c"
    //API Keys
}

const db = firebase.initializeApp(config);
export default db;



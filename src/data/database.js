import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwXbpkJ3oLHUH5uoEUiz2I9mOefYdeeNs",
  authDomain: "webintercov.firebaseapp.com",
  projectId: "webintercov",
  storageBucket: "webintercov.appspot.com",
  messagingSenderId: "82044603295",
  appId: "1:82044603295:web:1b5d2e9f1a083ecf930baa",
  measurementId: "G-Y0F0M6ZJ21"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

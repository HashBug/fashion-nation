import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDLIVxKDIrfZfikTKcb1t5G7e0iMA6eWh8",
  authDomain: "fashion-nation-40eda.firebaseapp.com",
  projectId: "fashion-nation-40eda",
  storageBucket: "fashion-nation-40eda.appspot.com",
  messagingSenderId: "644884055902",
  appId: "1:644884055902:web:f96b02eb46c1c774c5b1cf",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

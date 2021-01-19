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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if not user authenticated, do nothing
  if (!userAuth) return;

  //find document for respective user
  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  //get snapshot
  const snapShot = await userRef.get();

  //if snapshot doesn't exist, create it
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("an error occurred ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

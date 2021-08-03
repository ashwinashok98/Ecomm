import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCgWuss0qzo0qxqLUMs4Q7U01zng00ZfrQ",
  authDomain: "ecomm-db-4566c.firebaseapp.com",
  projectId: "ecomm-db-4566c",
  storageBucket: "ecomm-db-4566c.appspot.com",
  messagingSenderId: "594940764766",
  appId: "1:594940764766:web:1ed7f20aba0ae586a0cacf",
  measurementId: "G-0PN0PYY25V",
};
firebase.initializeApp(config);
export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
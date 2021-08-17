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
export const createUserProfileDocument = async (userAuth,additionalData)=>{

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if(!snapShot.exists) { 
    const{displayName,email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
     console.log('Error createing user', error.message);
  }
     
  } 

  return userRef;
}

firebase.initializeApp(config);
export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
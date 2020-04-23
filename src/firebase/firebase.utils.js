import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATN20o1XDcZQ_dt4-VGZw88-E0G47L1B8",
  authDomain: "crwn-db-2db40.firebaseapp.com",
  databaseURL: "https://crwn-db-2db40.firebaseio.com",
  projectId: "crwn-db-2db40",
  storageBucket: "crwn-db-2db40.appspot.com",
  messagingSenderId: "252700060643",
  appId: "1:252700060643:web:277171aba310e909b94ed6",
  measurementId: "G-3YBJ2NSTJK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from "firebase/compat/app"
// auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh3BIneWCi9SmSVRIP1ctm6A8jnUQzntw",
  authDomain: "clone-2b0cf.firebaseapp.com",
  projectId: "clone-2b0cf",
  storageBucket: "clone-2b0cf.appspot.com",
  messagingSenderId: "245184363087",
  appId: "1:245184363087:web:0efc5c38c05976c13dc83a",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
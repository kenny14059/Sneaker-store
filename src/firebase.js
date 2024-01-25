import { initializeApp } from "firebase/app";
import {  getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom"
// import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyB54-UAMrlSS0bXPewdnO4WSMJBUorHpn8",
  authDomain: "new-sneaker-store.firebaseapp.com",
  projectId: "new-sneaker-store",
  storageBucket: "new-sneaker-store.appspot.com",
  messagingSenderId: "68480745575",
  appId: "1:68480745575:web:46da51db85372769f854c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//make auth and firestore referrrences
export const auth = getAuth(app);
//export const db = getFirestore(app);
//update firestore settings
// db.settings({ timestampsInSnapshots: true });
const provider = new GoogleAuthProvider();

// const currentUser = "";
// const navigate = useNavigate();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result)=> {
    console.log(result);

    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("profilePic",profilePic);
    //navigate to home
    //  navigate('/');

  })
  .catch((error)=> {
    console.log(error);
  })
};


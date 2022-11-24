// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: "trx-auth",
  storageBucket: "trx-auth.appspot.com",
  messagingSenderId: "104093916884",
  appId: "1:104093916884:web:69a52dde6b1b558eebe541",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore(app);

export async function signup(email, password, displayName ) {
  // we return so we can get the status if it succeded or failed in creating a new user
  const response = await createUserWithEmailAndPassword(auth, email, password)
const user = response.user 
console.log(user)
updateProfile(user, {displayName})
return response;
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function logout() {
  return signOut(auth);
}
// custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  // empty list beacuse we only want to run the code once when the component mount
  useEffect(() => {
    // use effect function to be called
    // and get the user
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    // then we return unsub to useffect
    //subscribe to listener everytime our hook is mounted
    // once it is unmounted unsub
    return unsub;
  }, []);

  return currentUser;
}

export const firestore = getFirestore(app);

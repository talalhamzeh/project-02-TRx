// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth , createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmVEP2--9J6KGUXiuT2pT6JEPeqtYaEcE",
  authDomain: "trx-auth.firebaseapp.com",
  projectId: "trx-auth",
  storageBucket: "trx-auth.appspot.com",
  messagingSenderId: "104093916884",
  appId: "1:104093916884:web:69a52dde6b1b558eebe541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export function signup(email, password){
    // we return so we can get the status if it succeded or failed in creating a new user 
    return createUserWithEmailAndPassword(auth, email, password);

}

export function login(email, password){

    return signInWithEmailAndPassword(auth, email, password);

}
export function logout(){
    return signOut(auth);

}
// custom Hook 
export function useAuth(){
    const [ currentUser, setCurrentUser]= useState ();
        // empty list beacuse we only want to run the code once when the component mount 
    useEffect(() => { 
        // use effect function to be called 
        // and get the user 
        const unsub = onAuthStateChanged(auth , user => setCurrentUser(user));
            // then we return unsub to useffect
            //subscribe to listener everytime our hook is mounted 
            // once it is unmounted unsub 
        return unsub; 
    }, [])

    return currentUser
}
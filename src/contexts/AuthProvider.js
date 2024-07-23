import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]=useState(true);

    // create an account
    const createUser = (email,password)=>{
      setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)
        

    };


    // sign up with gmail
    const signUpWithGmail=()=>{
      setLoading(true);
        return signInWithPopup(auth, googleProvider);

    };
    //login with email and password
    const login=(email,password)=>{
      //setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //signout
    const logout=()=>{
      
        return signOut(auth);
    };

    //update profile
    const updateUserProfile = (name,photoURL) =>{
      //setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
    };

    //check user signedin
    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           // if (currentUser) {
                setUser(currentUser);
                setLoading(false);
              
              //const uid = user.uid;
              // ...
            //} else {
              // User is signed out
              // ...

            //}
          });
          return()=>{
            return unsubscribe();
          }
          

    },[]);

    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logout,
        updateUserProfile,
        loading,
    };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

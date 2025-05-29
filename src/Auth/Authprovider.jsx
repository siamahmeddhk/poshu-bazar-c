import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const googlelogin = new GoogleAuthProvider()

const Authprovider = ({children}) => {

    const [users, setusers] = useState(null)

   const createuser =  (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
   }

   const google = () => {
    signInWithPopup(auth, googlelogin)
   }

   const logout = () => {
    return signOut(auth)
   }


    useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, currentuser =>{
            setusers(currentuser)
          });
          return () => {
            unsubscribe()
          }
    }, [])

    

    const user = {
        createuser,
        login,
        google,
        users,
        logout
    }



    return (
        <Authcontext value={user}>
            {children}
        </Authcontext>
    );
};

export default Authprovider;
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.init';
export const AuthContext=createContext(null)
 const Auth= getAuth(app);
const Proveider = ({children}) => {
    const [user,setuser]=useState(null)

    const ragester=(email,password)=>{
      return createUserWithEmailAndPassword(Auth,email,password)
    }

    const login=(email,password)=>{
      return signInWithEmailAndPassword(Auth,email,password)
    }

    const logout=()=>{
        signOut(Auth)
    }
    useEffect(()=>{
      const unsubcribe= onAuthStateChanged(Auth,(currentUser)=>{
            console.log('user',currentUser)
            setuser(currentUser)
        });
        return ()=>{
            unsubcribe();
        }
    }
        ,[])
    const  AuthInfo={user,ragester,login,logout}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Proveider;
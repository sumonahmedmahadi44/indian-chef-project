import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const Auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loader , setLoader] = useState(true)

    const createUser = (email,password)=>{
       setLoader(true)
        return createUserWithEmailAndPassword(Auth,email,password)
    };
    const loginUser = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(Auth,email,password);
    };
    const signInWithGoogle = () =>{
        setLoader(true)
        return signInWithPopup(Auth,googleProvider)
    };
    const signInWithGithub = () =>{
        setLoader(true)
         return signInWithPopup(Auth,githubProvider)
    }

    const loggedOut = ()=>{
        return signOut(Auth)
    }


    
        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(Auth,currentUser =>{
                setUser(currentUser);
                setLoader(false);
            });
            return ()=>{
                unsubscribe()
            }
            
        },[])
    
    
    
    const AuthInfo = {
        user,
        loader,
        createUser,
        loginUser,
        loggedOut,
        signInWithGoogle,
        signInWithGithub
    }
    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
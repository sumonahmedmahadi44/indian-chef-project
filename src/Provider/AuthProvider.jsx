import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const Auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] =useState({})
    return (
        <AuthContext.Provider value={user} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
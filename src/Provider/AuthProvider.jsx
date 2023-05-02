import React, { createContext, useState } from 'react';


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] =useState({})
    return (
        <AuthContext.Provider value={user} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
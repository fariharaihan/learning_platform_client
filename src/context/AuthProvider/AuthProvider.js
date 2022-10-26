import React from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)

    const providerLogin = (provider) => {
        signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user state change', currentUser)
            setuser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = { user, providerLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
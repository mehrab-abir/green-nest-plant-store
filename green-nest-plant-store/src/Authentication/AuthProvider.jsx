import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    //sign in with google
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const editProfile = (info)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,info);
    }
    const resetPassword = (email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        signInUser,
        signOutUser,
        googleSignIn,
        editProfile,
        resetPassword,
        user,
        setUser,
        loading,
        setLoading
    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const authProvider = createContext(null);
export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);

    const provider1 = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();

    // create user 
    const handleCreateUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleGoogleUserCreate = () => {
        setLoader(true)
        return signInWithPopup(auth, provider1);
    }

    const handleGitHubUserCreate = () => {
        setLoader(true)
        return signInWithPopup(auth, provider2);
    }

    // user sign in 
    const handleUserSignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign out user 
    const handleSignOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    // onAuthStateChanged user in the observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observer', currentUser);
            setUser(currentUser);
            setLoader(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        handleCreateUser,
        handleGoogleUserCreate,
        handleGitHubUserCreate,
        handleUserSignIn,
        handleSignOut,
        user,
        loader
    }
    return (
        <authProvider.Provider value={authInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthProvider;

import { useState, useEffect } from "react";
import initializeFirebase from "../Component/LoginForm/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, updatePassword, sendPasswordResetEmail, getIdToken } from "firebase/auth";
import { clearTheCart, removeFromDb } from "../fakeDB";


//Initialize Firebase App
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [newPass, setNewPass] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        // console.log(email, password);
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password, name,)
            .then((result) => {
                setAuthError('')
                const newUser = { email, displayName: name, };
                console.log(newUser);
                // Send name to firebase after creation

                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {

                }).catch((error) => {

                });
                history('/')
                setUser(newUser)
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            });

    }

    const loginUser = (email, password, history) => {
        console.log(email, password);
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setAuthError('')
                // const destination = location?.state?.from || '/';
                // console.log(destination);
                history('/')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            });

    }

    const passChange = (password) => {
        setIsLoading(true);
        const user = auth.currentUser;
        const newPassword = setNewPass('');
        //getASecureRandomPassword();


        updatePassword(user, newPassword,).then(() => {
            // Update successful.
        }).catch((error) => {
            // An error ocurred
            // ...
        })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const resetPassword = (email) => {
        setIsLoading(true);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    // Observe User State
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken))
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, [auth])


    const logOut = (history) => {
        setIsLoading(true)
        signOut(auth).then(() => {
            history('/')
            clearTheCart()
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        resetPassword,
        newPass,
        passChange
    }

}

export default useFirebase;
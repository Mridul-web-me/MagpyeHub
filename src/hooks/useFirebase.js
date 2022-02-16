import { useState, useEffect } from "react";
import initializeFirebase from "../Component/LoginForm/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, updatePassword, sendPasswordResetEmail, getIdToken } from "firebase/auth";
import { clearTheCart, removeFromDb } from "../fakeDB";


//Initialize Firebase App
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [newPass, setNewPass] = useState({})
    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [authRegError, setRegAuthError] = useState('');
    const [authLoginError, setLoginAuthError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        // console.log(email, password);
        setIsLoading1(true);
        createUserWithEmailAndPassword(auth, email, password, name,)
            .then((result) => {
                setRegAuthError('')
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
                setRegAuthError(error.message)
            })
            .finally(() => {
                setIsLoading1(false);
            });

    }

    const loginUser = (email, password, history) => {
        console.log(email, password);
        setIsLoading2(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setLoginAuthError('')
                // const destination = location?.state?.from || '/';
                // console.log(destination);
                history('/')
            })
            .catch((error) => {
                setLoginAuthError(error.message)
            })
            .finally(() => {
                setIsLoading2(false);
            });

    }

    const passChange = (password) => {
        setIsLoading1(true);
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
                setIsLoading1(false);
            });
    }

    const resetPassword = (email) => {
        setIsLoading1(true);
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
                setIsLoading1(false);
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
            setIsLoading2(false);
        });
        return () => unSubscribe;
    }, [auth])


    const logOut = (history) => {
        setIsLoading2(true)
        signOut(auth).then(() => {
            history('/')
            clearTheCart()
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsLoading2(false);
            });
    }

    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading1,
        isLoading2,
        authRegError,
        authLoginError,
        resetPassword,
        newPass,
        passChange
    }

}

export default useFirebase;
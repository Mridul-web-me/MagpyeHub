import { useState, useEffect } from "react";
import initializeFirebase from "../Component/LoginForm/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, updatePassword, sendPasswordResetEmail, getIdToken } from "firebase/auth";


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
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setAuthError('')
                const newUser = { email, display: name };
                setUser(newUser)
                // Send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history('/')
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
                const uid = user.uid;
                setUser(user)
                // console.log(uid);
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
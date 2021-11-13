import firebaseInitialization from "../../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialization();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState(false);
    const [admin, setAdmin] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const userLoginByGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            savedUser(user.email, user.displayName,'PUT')
            // ...
          }).catch((error) => {
            // Handle Errors here.
              setAuthError(error.message);
            
          });
    }

    //Email && Password
    const userRegisterByEmail = (name,email, password,history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('')
            const newUser = { email, displayName: name };
            setUser(newUser);

            //saved user to database
            savedUser(email, name, 'POST');

            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
            history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
        .finally(()=>setIsLoading(false))    
    }
    

    const userLoginByEmail = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
        
    }
    
    useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // sessionStorage.setItem("email", user.email);
            }
            else {
                setUser({})
        }
        setIsLoading(false)
    })
        return () => unsubscribe;
    },[])

    useEffect(() => {
        fetch(`https://enigmatic-hollows-08621.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))
    },[])


    const logOut = () => {
        setIsLoading(true)
        return signOut(auth)   
    }

    const savedUser = (email, displayName,method) => {
        const user = { email, displayName };
        fetch('https://enigmatic-hollows-08621.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }
    
    return {
        user,
        admin,
        userLoginByGoogle,
        logOut,
        userRegisterByEmail,
        userLoginByEmail,
        isLoading,
        authError
    }
}

export default useFirebase;
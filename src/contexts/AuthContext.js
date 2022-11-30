import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState() /* setting the current user to be actually set to the current user using firebase*/
    
    //we are going to use our auth module in firebase to login our user
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    useEffect(() =>{ //this function actually calls a method and when we call this method, it will unsubscribe onAuthStateChanged event.
        const unsubscribe  = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])
    const value ={
        currentUser,
        signup
    }

  return (
    <AuthContext.Provider value={value}> {/*now accessible anywhere in our application*/}
    </AuthContext.Provider>
  )
}
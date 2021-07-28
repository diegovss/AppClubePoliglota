import React, { createContext } from 'react';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';

export interface IAuth {
    user: string
    setUser: (user: string) => void;
    login: (email: string, password: string) => void;
    register: (email: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuth>(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        auth().signInWithEmailAndPassword(email, password)
                    } catch(e) {
                        console.log(e)
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                    } catch(e){
                        console.log(e)
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut()
                    } catch (e) {
                        console.log(e)
                    }
                }
            }}
        >

        </AuthContext.Provider>
    )
}
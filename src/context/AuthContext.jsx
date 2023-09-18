import { createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth, googleProvider } from "../config/firebase";
import { useState } from "react";
export const userContext = createContext(null);
import { db } from "../config/firebase";
import { doc, collection, addDoc, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

export const AuthContextProvider = ({ children }) => {
  const [newUser, setNewUser] = useState({});

  const usersCollectionRef = collection(db, "users");

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setNewUser(currentUser);
    });
    return () => {
      unSubcribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.log(e.message);
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  const addToFs = (name, email, password) => {
    return addDoc(usersCollectionRef, {
      username: name,
      email: email,
      password: password,
    });
  };

  return (
    <userContext.Provider
      value={{
        createUser,
        newUser,
        logout,
        signIn,
        signInWithGoogle,
        addToFs,
        usersCollectionRef,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

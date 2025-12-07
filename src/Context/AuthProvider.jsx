import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { AuthContext } from "./AuthContext";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign-up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // verify - Email
  const verifyEmail = (user) => {
    return sendEmailVerification("Verification email sent!", user.email)
      .then(() => {
        // console.log(user.email);
      })
      .catch(() => {});
  };

  // Sign-In
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign-With-Google
  const signWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (updateData) => {
    // console.log(updateData);

    return updateProfile(auth.currentUser, updateData);
  };

  // Sign-Out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Forget Password
  const forgetUserPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    verifyEmail,
    signInUser,
    signWithGoogle,
    signOutUser,
    forgetUserPass,
    updateUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

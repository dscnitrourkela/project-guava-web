import React, { useState, useEffect } from 'react';
import firebaseInit from './firebaseInit';
import UserAuth from './UserAuth';
import Dashboard from '../../views/Dashboard';

const Authenticate = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(true);
  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  };
  const clearInput = () => {
    setEmail('');
    setPassword('');
  };
  const handleLogin = () => {
    clearError();
    firebaseInit
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };
  const handleSignup = () => {
    clearError();
    firebaseInit
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/Invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };
  const handleLogout = () => {
    firebaseInit.auth().signOut();
  };
  const authListener = () => {
    firebaseInit.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        clearInput();
      } else {
        setUser('');
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  return (
    <>
      {user ? (
        <Dashboard handleLogout={handleLogout} />
      ) : (
        <UserAuth
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </>
  );
};

export default Authenticate;

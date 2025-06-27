import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login() {
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-box">
      <h2>Bienvenido a Risko</h2>
      <p>Inicia sesión para guardar tus configuraciones</p>
      <button onClick={loginWithGoogle} className="btn">Login con Google</button>
    </div>
  );
}

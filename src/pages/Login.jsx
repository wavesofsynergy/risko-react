// src/pages/Login.jsx
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

export default function Login() {
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <div className="login-box">
      <h2>Bienvenido a Risko</h2>
      <p>Inicia sesión para guardar tus configuraciones</p>
      <button className="btn" onClick={loginWithGoogle}>Login con Google</button>
    </div>
  );
}

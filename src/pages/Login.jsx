// src/pages/Login.jsx
import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Login() {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).catch((error) => {
      console.error('Error en login:', error);
    });
  };

  return (
    <div className="container">
      <h2>Bienvenido a Risko</h2>
      <p>Inicia sesión para guardar tus configuraciones</p>
      <button onClick={loginWithGoogle} className="btn">Abrir sesión</button>
    </div>
  );
}

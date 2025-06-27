// src/pages/Login.jsx
import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Login() {
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Inicia sesión para guardar tu historial</h3>
      <button className="btn" onClick={loginWithGoogle}>
        Iniciar sesión con Google
      </button>
    </div>
  );
}

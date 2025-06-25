import React from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function Login() {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-box">
      <h2>Iniciar sesión</h2>
      <button onClick={handleGoogleLogin} className="btn">Ingresar con Google</button>
    </div>
  );
}

import React, { useContext } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { LangContext } from '../App';

export default function Login() {
  const { strings } = useContext(LangContext);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = '/';
    } catch (e) {
      console.warn('Login error', e);
    }
  };

  return (
    <div className="container" style={{ paddingTop: 30 }}>
      <img src="/logo.svg" alt="Risko" className="logo" />
      <div className="form-box" style={{ textAlign:'center' }}>
        <h2 style={{ margin:0, marginBottom:6 }}>Risko</h2>
        <p style={{ opacity:.9, marginTop:0 }}>{strings.login}</p>
        <button className="btn" onClick={handleLogin}>{strings.login}</button>
      </div>
    </div>
  );
}

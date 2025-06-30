// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import '../App.css';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import Login from './Login';

export default function Home() {
  const [user, setUser] = useState(null);
  const [asset, setAsset] = useState('');
  const [balance, setBalance] = useState('');
  const [risk, setRisk] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [lotSize, setLotSize] = useState('0.000');
  const [profit, setProfit] = useState('0.00');
  const [rr, setRR] = useState('1:2');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const calcularLotaje = async () => {
    if (!asset || !balance || !risk || !stopLoss) return;
    const pipValues = {
      XAUUSD: 1, EURUSD: 10, USDJPY: 9.2, BTCUSD: 1, ETHUSD: 1, SPXUSD: 1, DJIUSD: 1
    };
    const pip = pipValues[asset] || 10;
    const lot = (balance * (risk / 100)) / (stopLoss * pip);
    const rrFactor = 2;
    const potentialProfit = (balance * (risk / 100)) * rrFactor;
    setLotSize(lot.toFixed(3));
    setProfit(potentialProfit.toFixed(2));
    setRR('1:2');

    if (user) {
      try {
        await addDoc(collection(db, 'lotajes'), {
          asset, balance, risk, stopLoss, lotSize: lot.toFixed(3), profit: potentialProfit.toFixed(2), user: user.email, date: new Date()
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  if (!user) return <Login />;

  return (
    <div className="app">
      <img src="/logo.svg" alt="Risko Logo" className="logo" />
      <div className="container">
        <div className="form-box">
          <select value={asset} onChange={e => setAsset(e.target.value)} className="input">
            <option value="">Select Asset</option>
            <option value="XAUUSD">XAUUSD</option>
            <option value="EURUSD">EURUSD</option>
            <option value="USDJPY">USDJPY</option>
            <option value="BTCUSD">BTCUSD</option>
            <option value="ETHUSD">ETHUSD</option>
          </select>
          <input type="number" className="input" placeholder="Balance USD" onChange={e => setBalance(e.target.value)} />
          <input type="number" className="input" placeholder="Riesgo %" onChange={e => setRisk(e.target.value)} />
          <input type="number" className="input" placeholder="Stop Loss (Pips)" onChange={e => setStopLoss(e.target.value)} />
          <button className="btn" onClick={calcularLotaje}>Ejecutar</button>
        </div>

        <div className="result">
          <p className="result-label"><strong>Lotaje</strong> Calculado</p>
          <p className="lotaje">{lotSize}</p>
          <div className="row-results">
            <div className="mini-result">
              <span className="mini-label">RR</span>
              <span className="mini-value">{rr}</span>
            </div>
            <div className="mini-result">
              <span className="mini-label">Profit</span>
              <span className="mini-value">${profit}</span>
            </div>
          </div>
        </div>

        <p className="disclaimer">
          Esta herramienta es solo de uso informativo y no representa asesoramiento financiero.
        </p>
        <p className="credit">By <strong>wos.ai</strong></p>
        <button className="btn">Donar</button>
        <button className="logout-btn" onClick={() => signOut(auth)}>Cerrar sesión</button>
      </div>
    </div>
  );
}

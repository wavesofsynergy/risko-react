import React, { useState, useEffect } from 'react';
import '../App.css';
import StatsPanel from './StatsPanel';
import Chart from '../components/Chart';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import Login from './Login';

const pipValues = {
  XAUUSD: 1, XAUCAD: 1, DJIUSD: 1, SPXUSD: 1, NXDUSD: 1,
  EURUSD: 10, EURAUD: 10, EURCAD: 10, GBPAUD: 10, GBPCAD: 10, USDJPY: 9.2, AUDCAD: 10,
  BTCUSD: 1, ETHUSD: 1, BNBUSD: 1, LTCUSD: 1, XRPUSD: 1, ADAUSD: 1, DOGEUSD: 1, SOLUSD: 1, DOTUSD: 1, LINKUSD: 1, UNIUSD: 1
};

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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const calcularLotaje = async () => {
    const pip = pipValues[asset];
    if (!pip || !balance || !risk || !stopLoss) return;

    const lot = (balance * (risk / 100)) / (stopLoss * pip);
    const rrFactor = 2;
    const potentialProfit = (balance * (risk / 100)) * rrFactor;

    setLotSize(lot.toFixed(3));
    setProfit(potentialProfit.toFixed(2));
    setRR('1:2');

    if (user) {
      try {
        await addDoc(collection(db, 'lotajes'), {
          asset, balance, risk, stopLoss, lotSize: lot.toFixed(3), profit: potentialProfit.toFixed(2),
          user: user.email, date: new Date()
        });
      } catch (e) {
        console.error('Error guardando datos en Firestore:', e);
      }
    }
  };

  return (
    <div className="app">
      <img src="/logo.svg" alt="Risko Logo" className="logo" />
      {!user ? (
        <Login />
      ) : (
        <div className="container">
          <div className="form-box">
            <select value={asset} onChange={(e) => setAsset(e.target.value)} className="input">
              <option value="">Seleccionar Par</option>
              {Object.keys(pipValues).map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
            <input type="number" className="input" placeholder="Balance USD" onChange={(e) => setBalance(e.target.value)} />
            <input type="number" className="input" placeholder="Riesgo %" onChange={(e) => setRisk(e.target.value)} />
            <input type="number" className="input" placeholder="Stop Loss (Pips)" onChange={(e) => setStopLoss(e.target.value)} />
            <button className="btn" onClick={calcularLotaje}>ejecutar</button>
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
          <button className="btn" onClick={() => window.location.href = "/donar"}>donar</button>
          <button className="btn logout" onClick={() => signOut(auth)}>cerrar sesión</button>
        </div>
      )}
    </div>
  );
}

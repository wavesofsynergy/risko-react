// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import '../App.css';
import StatsPanel from './StatsPanel';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Login from './Login';
import Chart from '../components/Chart';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

// Diccionario de valores por pip
const pipValues = {
  XAUUSD: 1, XAUCAD: 1, DJIUSD: 1, SPXUSD: 1, NXDUSD: 1,
  EURUSD: 10, EURAUD: 10, EURCAD: 10, GBPAUD: 10, GBPCAD: 10,
  USDJPY: 9.2, AUDCAD: 10,
  BTCUSD: 1, ETHUSD: 1, BNBUSD: 1, LTCUSD: 1, XRPUSD: 1,
  ADAUSD: 1, DOGEUSD: 1, SOLUSD: 1, DOTUSD: 1, LINKUSD: 1, UNIUSD: 1
};

// Diccionario de símbolos para TradingView
const tradingViewSymbols = {
  XAUUSD: "OANDA:XAUUSD", XAUCAD: "OANDA:XAUCAD", EURUSD: "OANDA:EURUSD", EURAUD: "OANDA:EURAUD",
  EURCAD: "OANDA:EURCAD", GBPUSD: "OANDA:GBPUSD", GBPAUD: "OANDA:GBPAUD", GBPCAD: "OANDA:GBPCAD",
  USDJPY: "OANDA:USDJPY", AUDCAD: "OANDA:AUDCAD", SPXUSD: "OANDA:SPX500USD",
  DJIUSD: "OANDA:US30USD", NXDUSD: "OANDA:NAS100USD",
  BTCUSD: "BINANCE:BTCUSDT", ETHUSD: "BINANCE:ETHUSDT", BNBUSD: "BINANCE:BNBUSDT",
  LTCUSD: "BINANCE:LTCUSDT", XRPUSD: "BINANCE:XRPUSDT", ADAUSD: "BINANCE:ADAUSDT",
  DOGEUSD: "BINANCE:DOGEUSDT", SOLUSD: "BINANCE:SOLUSDT", DOTUSD: "BINANCE:DOTUSDT",
  LINKUSD: "BINANCE:LINKUSDT", UNIUSD: "BINANCE:UNIUSDT"
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

  const calcularLotaje = () => {
    const pip = pipValues[asset];
    if (!pip || !balance || !risk || !stopLoss) {
      setLotSize('0.000');
      setProfit('0.00');
      setRR('1:2');
      return;
    }

    const lot = (balance * (risk / 100)) / (stopLoss * pip);
    setLotSize(lot.toFixed(3));

    const rrFactor = 2; // Representa un RR de 1:2
    const potentialProfit = (balance * (risk / 100)) * rrFactor;
    setProfit(potentialProfit.toFixed(2));
    setRR('1:2');

    if (user) {
  try {
    await addDoc(collection(db, 'lotajes'), {
      uid: user.uid,
      asset,
      balance: parseFloat(balance),
      risk: parseFloat(risk),
      stopLoss: parseFloat(stopLoss),
      lotSize: parseFloat(lot.toFixed(3)),
      rr: '1:2',
      profit: parseFloat(potentialProfit.toFixed(2)),
      timestamp: Timestamp.now()
    });
  } catch (e) {
    console.error("Error al guardar en Firestore", e);
  }
}
  };

  if (!user) return <Login />;

  return (
    <div className="app">
      <img src="/logo.svg" alt="Risko Logo" className="logo" />

      <div className="container">
        <p className="credit">Hola, {user.displayName}</p>
        <button className="btn" onClick={() => signOut(auth)}>Cerrar sesión</button>

        <div className="form-box">
          <select value={asset} onChange={(e) => setAsset(e.target.value)} className="input">
            <option value="">Select Asset</option>
            {Object.keys(pipValues).map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
          <input
            type="number"
            className="input"
            placeholder="Balance USD"
            onChange={(e) => setBalance(e.target.value)}
          />
          <input
            type="number"
            className="input"
            placeholder="Riesgo %"
            onChange={(e) => setRisk(e.target.value)}
          />
          <input
            type="number"
            className="input"
            placeholder="Stop Loss (Pips)"
            onChange={(e) => setStopLoss(e.target.value)}
          />
          <button className="btn" onClick={calcularLotaje}>execute</button>
        </div>

        <div className="result">
          <p className="result-label">Calculated <strong>Lot</strong></p>
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

        {asset && <Chart symbol={tradingViewSymbols[asset] || asset} />}

        <p className="disclaimer">
          Esta herramienta es solo de uso informativo y no representa asesoramiento financiero.
        </p>
        <p className="credit">By <strong>@veneciadulcinea</strong></p>
        <div className="donation-box">
  <p>¿Te fue útil?</p>
  <p>Puedes apoyarme en Binance Pay:</p>
  <img src="/qr-binance.png" alt="Binance Pay QR" className="qr-img" />
  <p className="credit">Email: <strong>venelandworld@gmail.com</strong></p>
      </div>
    </div>
  );
}

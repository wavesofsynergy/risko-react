import React, { useState } from 'react';
import './App.css';

const pipValues = {
  XAUUSD: 1,
  DJIUSD: 1,
  SPXUSD: 1,
  NXDUSD: 1
  EURUSD: 10,
  GBPAUD: 10,
  USDJPY: 9.2
  
};

function App() {
  const [asset, setAsset] = useState('');
  const [balance, setBalance] = useState('');
  const [risk, setRisk] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [lotSize, setLotSize] = useState('0.000');

  const calcularLotaje = () => {
    const pip = pipValues[asset];
    if (!pip || !balance || !risk || !stopLoss) {
      setLotSize('0.000');
      return;
    }
    const result = (balance * (risk / 100)) / (stopLoss * pip);
    setLotSize(result.toFixed(3));
  };

  return (
    <div className="app">
      <img src="/logo.svg" alt="Risko Logo" className="logo" />
      <div className="form-box">
        <select value={asset} onChange={e => setAsset(e.target.value)} className="input">
          <option value="">Select Asset</option>
          {Object.keys(pipValues).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
        <input type="number" className="input" placeholder="Balance USD" onChange={e => setBalance(e.target.value)} />
        <input type="number" className="input" placeholder="Riesgo %" onChange={e => setRisk(e.target.value)} />
        <input type="number" className="input" placeholder="Stop Loss (Pips)" onChange={e => setStopLoss(e.target.value)} />
        <button className="btn" onClick={calcularLotaje}>execute</button>
      </div>
      <div className="result">
        <p className="result-label">Calculated <strong>Lot</strong></p>
        <p class

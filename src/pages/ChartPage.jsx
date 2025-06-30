// src/pages/ChartPage.jsx
import React, { useState } from 'react';
import Chart from '../components/Chart';
import '../App.css';

export default function ChartPage() {
  const [symbol, setSymbol] = useState('OANDA:EURUSD');

  return (
    <div className="container">
      <h2>TradingView</h2>
      <select className="input" onChange={(e) => setSymbol(e.target.value)}>
        <option value="OANDA:EURUSD">EURUSD</option>
        <option value="FOREXCOM:XAUUSD">XAUUSD</option>
        <option value="CAPITALCOM:SPX">SPXUSD</option>
        <option value="BINANCE:BTCUSDT">BTCUSD</option>
        <option value="BINANCE:ETHUSDT">ETHUSD</option>
      </select>
      <Chart symbol={symbol} />
    </div>
  );
}

// src/pages/ChartView.jsx
import React, { useState } from 'react';
import '../App.css';

const tradingViewSymbols = {
  XAUUSD: "FOREXCOM:XAUUSD", EURUSD: "OANDA:EURUSD", USDJPY: "OANDA:USDJPY",
  GBPUSD: "OANDA:GBPUSD", ETHUSD: "BINANCE:ETHUSDT", BTCUSD: "BINANCE:BTCUSDT",
  SPXUSD: "CAPITALCOM:SPX", DJIUSD: "CAPITALCOM:DJI", NXDUSD: "CAPITALCOM:NDX"
};

export default function ChartView() {
  const [asset, setAsset] = useState('EURUSD');

  return (
    <div className="page">
      <h2>TradingView</h2>
      <select
        className="input"
        value={asset}
        onChange={(e) => setAsset(e.target.value)}
      >
        {Object.keys(tradingViewSymbols).map((symbol) => (
          <option key={symbol} value={symbol}>{symbol}</option>
        ))}
      </select>

      <div style={{ marginTop: '1rem' }}>
        <iframe
          title="TV Chart"
          src={`https://s.tradingview.com/widgetembed/?symbol=${tradingViewSymbols[asset]}&interval=60&theme=dark`}
          width="100%"
          height="450"
          frameBorder="0"
          allowTransparency="true"
          scrolling="no"
          style={{ borderRadius: '10px' }}
        ></iframe>
      </div>
    </div>
  );
}

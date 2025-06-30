import React, { useState } from 'react';
import '../App.css';

const tradingViewSymbols = {
  XAUUSD: "FOREXCOM:XAUUSD",
  EURUSD: "OANDA:EURUSD",
  USDJPY: "OANDA:USDJPY",
  GBPUSD: "OANDA:GBPUSD",
  ETHUSD: "BINANCE:ETHUSDT",
  BTCUSD: "BINANCE:BTCUSDT",
  SPXUSD: "CAPITALCOM:SPX",
  DJIUSD: "CAPITALCOM:DJI",
  NXDUSD: "CAPITALCOM:NDX"
};

export default function Trading() {
  const [selected, setSelected] = useState('EURUSD');

  return (
    <div className="container">
      <h2>Gráfico</h2>
      <select className="input" value={selected} onChange={(e) => setSelected(e.target.value)}>
        {Object.keys(tradingViewSymbols).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      <div className="chart-responsive">
        <iframe
          title="TradingView Chart"
          src={`https://s.tradingview.com/widgetembed/?symbol=${tradingViewSymbols[selected]}&interval=60&theme=dark&style=1`}
          width="100%"
          height="500"
          frameBorder="0"
          allowTransparency="true"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

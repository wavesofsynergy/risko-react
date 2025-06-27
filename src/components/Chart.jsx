import React from 'react';

const tradingViewSymbols = {
  XAUUSD: 'OANDA:XAUUSD',
  XAUCAD: 'OANDA:XAUCAD',
  EURUSD: 'OANDA:EURUSD',
  EURAUD: 'OANDA:EURAUD',
  EURCAD: 'OANDA:EURCAD',
  USDJPY: 'OANDA:USDJPY',
  GBPAUD: 'OANDA:GBPAUD',
  GBPCAD: 'OANDA:GBPCAD',
  DJIUSD: 'CAPITALCOM:DJI',
  SPXUSD: 'CAPITALCOM:SPX',
  NXDUSD: 'CAPITALCOM:NDX',
  BTCUSD: 'BINANCE:BTCUSDT',
  ETHUSD: 'BINANCE:ETHUSDT',
  ADAUSD: 'BINANCE:ADAUSDT',
  BNBUSD: 'BINANCE:BNBUSDT',
  LTCUSD: 'BINANCE:LTCUSDT',
  XRPUSD: 'BINANCE:XRPUSDT',
  SOLUSD: 'BINANCE:SOLUSDT',
  DOGEUSD: 'BINANCE:DOGEUSDT',
  DOTUSD: 'BINANCE:DOTUSDT',
  LINKUSD: 'BINANCE:LINKUSDT',
  UNIUSD: 'BINANCE:UNIUSDT'
};

const Chart = ({ symbol }) => {
  const tvSymbol = tradingViewSymbols[symbol] || 'OANDA:EURUSD';
  return (
    <div className="chart-container">
      <iframe
        title="TradingView Chart"
        src={`https://s.tradingview.com/widgetembed/?symbol=${tvSymbol}&interval=60&theme=dark`}
        width="100%"
        height="400"
        frameBorder="0"
        allowTransparency="true"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Chart;

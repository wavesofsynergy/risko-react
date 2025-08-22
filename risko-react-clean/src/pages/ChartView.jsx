import React, { useEffect, useRef, useState } from 'react';

/**
 * MAPA DE PARES → OANDA (Forex/Indices) + BINANCE FUTURES (Criptomonedas)
 * OANDA: Para pares forex, índices y metales preciosos
 * BINANCE FUTURES: Para criptomonedas (exchange más confiable y estable)
 */
const TV_MAP = {
  // FOREX E INDICES - OANDA
  XAUUSD: 'OANDA:XAUUSD',
  EURUSD: 'OANDA:EURUSD',
  USDJPY: 'OANDA:USDJPY',
  GBPUSD: 'OANDA:GBPUSD',
  SPXUSD: 'OANDA:SPX500USD',
  DJIUSD: 'OANDA:US30USD',
  NXDUSD: 'OANDA:NAS100USD',
  EURAUD: 'OANDA:EURAUD',
  EURCAD: 'OANDA:EURCAD',
  GBPAUD: 'OANDA:GBPAUD',
  GBPCAD: 'OANDA:GBPCAD',
  AUDCAD: 'OANDA:AUDCAD',

  // CRIPTOMONEDAS - BINANCE FUTURES (exchange más confiable)
  BTCUSD: 'BINANCE:BTCUSD',
  ETHUSD: 'BINANCE:ETHUSD',
  BNBUSD: 'BINANCE:BNBUSD',
  LTCUSD: 'BINANCE:LTCUSD',
  XRPUSD: 'BINANCE:XRPUSD',
  ADAUSD: 'BINANCE:ADAUSD',
  DOGEUSD: 'BINANCE:DOGEUSD',
  SOLUSD: 'BINANCE:SOLUSD',
  DOTUSD: 'BINANCE:DOTUSD',
  LINKUSD: 'BINANCE:LINKUSD',
  UNIUSD: 'BINANCE:UNIUSD'
};

const ALL_PAIRS = Object.keys(TV_MAP);

export default function ChartView() {
  const [pair, setPair] = useState('EURUSD');
  const container = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    // Cargar script Advanced Chart
    const scriptId = 'tv-adv';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.id = scriptId;
      s.src = 'https://s3.tradingview.com/tv.js';
      s.onload = initWidget;
      document.body.appendChild(s);
    } else {
      initWidget();
    }

    function initWidget() {
      if (!window.TradingView || !container.current) return;
      if (widgetRef.current) {
        widgetRef.current.remove();
        widgetRef.current = null;
      }
      
      // Configuración específica según el tipo de activo
      const isCrypto = ['BTCUSD', 'ETHUSD', 'BNBUSD', 'LTCUSD', 'XRPUSD', 'ADAUSD', 'DOGEUSD', 'SOLUSD', 'DOTUSD', 'LINKUSD', 'UNIUSD'].includes(pair);
      
      // Configuración base del widget
      const widgetConfig = {
        container_id: container.current.id,
        autosize: true,
        interval: '60',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: '#1A0D2D',
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        studies: []
      };

      // Configuración específica para criptomonedas
      if (isCrypto) {
        widgetConfig.symbol = `BINANCE:${pair}`;
        widgetConfig.exchange = 'BINANCE';
      } else {
        // Configuración para forex/índices
        widgetConfig.symbol = TV_MAP[pair];
      }
      
      widgetRef.current = new window.TradingView.widget(widgetConfig);
    }

    return () => {
      // No hay una API oficial para destruir el widget, pero removemos el contenedor
      if (widgetRef.current) {
        try { widgetRef.current.remove(); } catch(_) {}
        widgetRef.current = null;
      }
    };
  }, [pair]);

  return (
    <div className="chart-wrap">
      <div className="chart-controls">
        <select className="input" value={pair} onChange={e=>setPair(e.target.value)}>
          {ALL_PAIRS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div id="tv_container" ref={container} className="chart-frame" />
    </div>
  );
}

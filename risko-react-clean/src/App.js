import React, { createContext, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ChartView from './pages/ChartView';
import HowToUse from './pages/HowToUse';

export const LangContext = createContext();

const STRINGS = {
  es: {
    calc: 'Calculadora',
    tv: 'TradingView',
    how: '¿Cómo se Usa?',
    login: 'Iniciar Sesión',
    logout: 'Cerrar Sesión',
    selectPair: 'Seleccionar Par',
    execute: 'Ejecutar',
    balance: 'Balance USD',
    risk: 'Riesgo %',
    sl: 'Detener Pérdidas (Pips)',
    lotajeCalc: 'Lotaje Calculado',
    profit: 'Ganancia',
    rr: 'R:R',
    disclaimer: 'Esta herramienta es solo de uso informativo y no representa asesoramiento financiero.',
    credits: 'By wewos.xyz'
  },
  en: {
    calc: 'Calculator',
    tv: 'TradingView',
    how: 'How to Use',
    login: 'Log In',
    logout: 'Log Out',
    selectPair: 'Select Pair',
    execute: 'Execute',
    balance: 'Balance USD',
    risk: 'Risk %',
    sl: 'Stop Loss (Pips)',
    lotajeCalc: 'Calculated Lot',
    profit: 'Profit',
    rr: 'R:R',
    disclaimer: 'This tool is for informational purposes only and does not constitute financial advice.',
    credits: 'By wewos.xyz'
  }
};

export default function App() {
  const [lang, setLang] = useState('es');
  const strings = useMemo(() => STRINGS[lang], [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, strings }}>
      <Router>
        <nav className="nav">
          <div className="nav-left">
            <span className="brand">Risko</span>
          </div>
          <div className="nav-center">
            <NavLink to="/" className="nav-link">{strings.calc}</NavLink>
            <NavLink to="/chart" className="nav-link">{strings.tv}</NavLink>
            <NavLink to="/how" className="nav-link">{strings.how}</NavLink>
          </div>
          <div className="nav-right">
            <button className="lang-btn" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
              {lang.toUpperCase()}
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<ChartView />} />
          <Route path="/how" element={<HowToUse />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </LangContext.Provider>
  );
}

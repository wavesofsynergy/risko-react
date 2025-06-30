// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ChartView from './pages/ChartView';
import HowToUse from './pages/HowToUse';
import Donation from './pages/Donation';
import './App.css';
import './pages/StatsPanel.css';
import './serviceWorkerRegistration';

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/">Calculadora</NavLink>
        <NavLink to="/chart">TradingView</NavLink>
        <NavLink to="/how">¿Cómo usar?</NavLink>
        <NavLink to="/donar">Donar</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<ChartView />} />
        <Route path="/how" element={<HowToUse />} />
        <Route path="/donar" element={<Donation />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

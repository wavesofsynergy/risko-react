// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './pages/Calculator';
import ChartPage from './pages/ChartPage';
import About from './pages/About';
import Donate from './pages/Donate';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/" className="nav-link">Calculadora</Link>
        <Link to="/chart" className="nav-link">TradingView</Link>
        <Link to="/about" className="nav-link">¿Cómo usar?</Link>
        <Link to="/donate" className="nav-link">Donar</Link>
      </div>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;

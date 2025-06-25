// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">¿Cómo se calcula?</Link></li>
          <li><Link to="/settings">Ajustes</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;

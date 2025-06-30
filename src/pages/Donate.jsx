// src/pages/Donate.jsx
import React from 'react';
import '../App.css';

export default function Donate() {
  return (
    <div className="container">
      <h2>Donaciones</h2>
      <p>¿Te fue útil esta herramienta? Puedes apoyarme escaneando el siguiente QR.</p>
      <img src="/qr-binance.png" alt="QR Binance Pay" className="qr-img" style={{ width: '200px', margin: '20px auto' }} />
      <p className="credit">Email de Binance: <strong>veneciadulcinea@gmail.com</strong></p>
    </div>
  );
}

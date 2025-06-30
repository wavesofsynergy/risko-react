// src/pages/Donate.jsx
import React from 'react';

export default function Donate() {
  return (
    <div className="container">
      <h2>Apoya esta herramienta 💜</h2>
      <p>Si Risko te ha sido útil, puedes colaborar con su desarrollo.</p>
      <img src="/qr-binance.png" alt="Binance Pay QR" className="qr-img" style={{ width: '200px', margin: '20px auto' }} />
      <p>Email para Binance Pay: <strong>veneciadulcinea@gmail.com</strong></p>
    </div>
  );
}

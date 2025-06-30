// src/pages/Donation.jsx
import React from 'react';
import '../App.css';

export default function Donation() {
  return (
    <div className="page">
      <h2>Apóyanos en Binance Pay</h2>
      <img
        src="/qr-binance.png"
        alt="QR Binance"
        className="qr-img"
        style={{ maxWidth: '300px', width: '100%', margin: '2rem auto' }}
      />
      <p className="credit">Email: <strong>veneciadulcinea@gmail.com</strong></p>
    </div>
  );
}

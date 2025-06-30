// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="container">
      <h2>¿Cómo se usa Risko?</h2>
      <p>
        Esta calculadora te permite calcular el lotaje óptimo para tus operaciones de trading, basado en:
      </p>
      <ul>
        <li><strong>Balance:</strong> tu capital disponible.</li>
        <li><strong>Riesgo:</strong> porcentaje de capital que deseas arriesgar.</li>
        <li><strong>Stop Loss:</strong> cantidad de pips entre tu entrada y el SL.</li>
      </ul>
      <p>Risko fue creada para facilitar la gestión de riesgo y proteger tu capital. 💡</p>
    </div>
  );
}

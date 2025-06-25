// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="container">
      <h2>¿Cómo se calcula el lotaje?</h2>
      <p>
        El lotaje se calcula usando la fórmula:
        <br /><br />
        <code>(Balance * (Riesgo % / 100)) / (Stop Loss * valor del pip)</code>
        <br /><br />
        Esta fórmula te permite determinar el tamaño ideal de tu posición para respetar el riesgo máximo definido.
      </p>
      <p>
        Cada activo tiene un valor de pip diferente. Por ejemplo:
        <br />
        - XAUUSD = 1<br />
        - EURUSD = 10<br />
        - USDJPY = 9.2<br />
        etc.
      </p>
    </div>
  );
}

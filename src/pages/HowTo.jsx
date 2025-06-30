// src/pages/HowTo.jsx
import React from 'react';
import '../App.css';

export default function HowTo() {
  return (
    <div className="container">
      <h2>¿Cómo usar esta herramienta?</h2>
      <p className="howto-text">
        Esta calculadora te permite estimar el lotaje ideal para tus operaciones según tu balance, riesgo y stop loss.
        <br /><br />
        1. Selecciona el activo que vas a operar.
        <br />
        2. Ingresa el balance total de tu cuenta.
        <br />
        3. Especifica el porcentaje de riesgo que deseas asumir.
        <br />
        4. Ingresa tu stop loss en pips.
        <br />
        5. Presiona <strong>execute</strong> para calcular el lotaje ideal.
      </p>
    </div>
  );
}

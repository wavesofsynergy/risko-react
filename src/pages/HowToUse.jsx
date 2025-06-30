// src/pages/HowToUse.jsx
import React from 'react';
import '../App.css';

export default function HowToUse() {
  return (
    <div className="page">
      <h2>¿Cómo usar Risko?</h2>
      <p style={{ textAlign: 'justify', lineHeight: '1.6', fontSize: '14px' }}>
        Esta calculadora de lotaje te permite definir de forma precisa el tamaño de tu operación
        en función de tu balance, riesgo porcentual y el tamaño del stop loss en pips.
        <br /><br />
        Selecciona el activo con el que vas a operar, indica tu balance disponible,
        define el porcentaje que estás dispuesto a arriesgar (por ejemplo, 1%) y
        finalmente escribe tu stop loss estimado.
        <br /><br />
        Haz clic en "ejecutar" y obtendrás el tamaño de lote recomendado para esa operación,
        así como una proyección del posible beneficio basado en una relación riesgo-recompensa de 1:2.
      </p>
    </div>
  );
}

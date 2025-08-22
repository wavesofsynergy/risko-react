import React from 'react';

export default function HowToUse() {
  return (
    <div className="how-wrap">
      <h2 style={{ marginTop: 10, marginBottom: 8 }}>¿Cómo se Usa?</h2>
      <p className="how-text">
        Selecciona el par, ingresa tu balance, el porcentaje de riesgo y el stop loss en pips.
        La calculadora te devolverá el lotaje recomendado, el posible profit (1:2) y el R:R.
        Esta herramienta no constituye asesoramiento financiero; úsala como apoyo para la
        gestión del riesgo. Para análisis visual, abre la pestaña TradingView y usa las
        herramientas de posición Long/Short para estimar recorrido y pips.
      </p>
    </div>
  );
}

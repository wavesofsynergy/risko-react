import React, { useContext } from 'react';
import { LangContext } from '../App';

export default function HowToUse() {
  const { strings, lang } = useContext(LangContext);

  const content = {
    es: {
      title: '¿Cómo se Usa?',
      text: 'Selecciona el par, ingresa tu balance, el porcentaje de riesgo y el stop loss en pips. La calculadora te devolverá el lotaje recomendado, el posible profit (1:2) y el R:R. Esta herramienta no constituye asesoramiento financiero; úsala como apoyo para la gestión del riesgo. Para análisis visual, abre la pestaña TradingView y usa las herramientas de posición Long/Short para estimar recorrido y pips.'
    },
    en: {
      title: 'How to Use',
      text: 'Select the pair, enter your balance, risk percentage and stop loss in pips. The calculator will return the recommended lot size, potential profit (1:2) and R:R. This tool does not constitute financial advice; use it as support for risk management. For visual analysis, open the TradingView tab and use the Long/Short position tools to estimate range and pips.'
    }
  };

  const currentContent = content[lang];

  return (
    <div className="how-wrap">
      <h2 style={{ marginTop: 10, marginBottom: 8 }}>{currentContent.title}</h2>
      <p className="how-text">
        {currentContent.text}
      </p>
    </div>
  );
}

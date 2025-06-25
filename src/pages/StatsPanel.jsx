import React from 'react';
import './StatsPanel.css';

const StatsPanel = ({ rr, profit }) => {
  return (
    <div className="stats-panel">
      <h2 className="title">Resultados</h2>

      <div className="stats-box">
        <p className="label">Riesgo / Beneficio</p>
        <p className="value small">{rr}</p>
      </div>

      <div className="stats-box">
        <p className="label">Potencial Ganancia</p>
        <p className="value small">${profit}</p>
      </div>

      <p className="disclaimer">Valores estimados según los datos ingresados.</p>
    </div>
  );
};

export default StatsPanel;

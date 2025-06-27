// src/pages/StatsPanel.jsx
import React from 'react';
import './StatsPanel.css';

export default function StatsPanel({ rr, profit }) {
  return (
    <div className="row-results">
      <div className="mini-result">
        <span className="mini-label">RR</span>
        <span className="mini-value">{rr}</span>
      </div>
      <div className="mini-result">
        <span className="mini-label">Profit</span>
        <span className="mini-value">${profit}</span>
      </div>
    </div>
  );
}

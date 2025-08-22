import React, { useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { LangContext } from '../App';

const pipValues = {
  XAUUSD: 1, DJIUSD: 1, SPXUSD: 1, NXDUSD: 1,
  EURUSD: 10, EURAUD: 10, EURCAD: 10, GBPAUD: 10, GBPCAD: 10, USDJPY: 9.2, AUDCAD: 10,
  BTCUSD: 1, ETHUSD: 1, BNBUSD: 1, LTCUSD: 1, XRPUSD: 1, ADAUSD: 1, DOGEUSD: 1, SOLUSD: 1, DOTUSD: 1, LINKUSD: 1, UNIUSD: 1
};

export default function Home() {
  const { strings } = useContext(LangContext);
  const [user, setUser] = useState(null);
  const [asset, setAsset] = useState('');
  const [balance, setBalance] = useState('');
  const [risk, setRisk] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [lotSize, setLotSize] = useState('0.000');
  const [profit, setProfit] = useState('0.00');
  const [rr, setRR] = useState('1:2');

  useEffect(() =>
    onAuthStateChanged(auth, u => setUser(u)), []);

  const calcular = () => {
    const pip = pipValues[asset];
    if (!user) { window.location.href='/login'; return; }
    if (!pip || !balance || !risk || !stopLoss) return;
    const lot = (balance * (risk / 100)) / (stopLoss * pip);
    const rrFactor = 2;
    const potential = (balance * (risk / 100)) * rrFactor;
    setLotSize(lot.toFixed(3));
    setProfit(potential.toFixed(2));
    setRR('1:2');
  };

  return (
    <div className="container">
      <img src="/logo.svg" alt="risko" className="logo" />
      <div className="form-box">
        <select className="input" value={asset} onChange={e=>setAsset(e.target.value)}>
          <option value="">{strings.selectPair}</option>
          {Object.keys(pipValues).map(k => <option key={k} value={k}>{k}</option>)}
        </select>
        <input className="input" type="number" placeholder={strings.balance} onChange={e=>setBalance(e.target.value)} />
        <input className="input" type="number" placeholder={strings.risk} onChange={e=>setRisk(e.target.value)} />
        <input className="input" type="number" placeholder={strings.sl} onChange={e=>setStopLoss(e.target.value)} />
        <button className="btn" onClick={calcular}>{strings.execute}</button>
      </div>

      <div className="result">
        <p className="result-label"><strong>{strings.lotajeCalc.split(' ')[0]}</strong> {strings.lotajeCalc.split(' ')[1] || ''}</p>
        <p className="lotaje">{lotSize}</p>
        <div className="row-results">
          <div className="mini-result">
            <span className="mini-label">{strings.rr}</span>
            <span className="mini-value">{rr}</span>
          </div>
          <div className="mini-result">
            <span className="mini-label">{strings.profit}</span>
            <span className="mini-value">${profit}</span>
          </div>
        </div>
      </div>

      <p className="disclaimer">{strings.disclaimer}</p>
      <p className="credit">{strings.credits}</p>
      <button className="btn-outlined" onClick={()=>signOut(auth)}>{/* logout in current language */}
        {strings.logout}
      </button>
    </div>
  );
}

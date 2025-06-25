import React, { useEffect } from 'react';

export default function Chart({ symbol = 'XAUUSD' }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [[symbol]],
      chartOnly: false,
      width: "100%",
      height: "300",
      locale: "en",
      colorTheme: "dark",
      autosize: true,
      showVolume: false,
      hideDateRanges: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily: "Poppins",
      noTimeScale: false,
      backgroundColor: "#0c0819"
    });

    const container = document.getElementById("tv-widget");
    container.innerHTML = ""; // Limpia si hay anterior
    container.appendChild(script);
  }, [symbol]);

  return <div id="tv-widget" style={{ maxWidth: 400, margin: "2rem auto" }} />;
}

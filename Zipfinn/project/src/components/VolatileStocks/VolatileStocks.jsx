import React from "react";
import "./VolatileStocks.css";

const VolatileStocks = () => {
  const stocks = [
    {
      logo: "https://s3-symbol-logo.tradingview.com/shankara-building.svg",
      name: "Shankara Building Products Ltd.",
      ticker: "SHANKARA",
      value: "242.25",
      currency: "INR",
      change: "-75.54%",
      changeType: "down",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/sandt-ltd.svg",
      name: "S&T Corporation Limited",
      ticker: "STCORP",
      value: "5.64",
      currency: "INR",
      change: "+1.99%",
      changeType: "up",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/nragarwal-industries-ltd.svg",
      name: "NR Agarwal Industries Ltd.",
      ticker: "NRAIL",
      value: "429.00",
      currency: "INR",
      change: "+16.31%",
      changeType: "up",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/chowgule-steamships-ltd.svg",
      name: "Chowgule Steamships Limited",
      ticker: "CHOWGULSTM",
      value: "22.30",
      currency: "INR",
      change: "-2.96%",
      changeType: "down",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/relicab-cable-manufacturing-li.svg",
      name: "Relicab Cable Manufacturing Ltd.",
      ticker: "RELICAB",
      value: "65.59",
      currency: "INR",
      change: "+1.91%",
      changeType: "up",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/picturehouse-media-ltd.svg",
      name: "Picturehouse Media Limited",
      ticker: "PICTUREHS",
      value: "8.00",
      currency: "INR",
      change: "-5.55%",
      changeType: "down",
    },
  ];

  return (
    <div className="volatile-card">
      <div className="volatile-header">
        <h3>
          Most volatile stocks <span className="arrow">›</span>
        </h3>
      </div>

      <div className="volatile-grid">
        {stocks.map((stock, idx) => (
          <div key={idx} className="stock-item">
            <div className="stock-left">
              <img src={stock.logo} alt={stock.name} className="stock-logo" />
              <div>
                <div className="stock-name">{stock.name}</div>
                <div className="stock-ticker">{stock.ticker}</div>
              </div>
            </div>
            <div className="stock-right">
              <div className="stock-value">
                {stock.value} <span className="currency">{stock.currency}</span>
              </div>
              <div className={`stock-change ${stock.changeType}`}>
                {stock.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="volatile-footer">
        <a href="/markets/stocks-india/market-movers-most-volatile/">
          See all stocks with biggest price changes ›
        </a>
      </div>
    </div>
  );
};

export default VolatileStocks;

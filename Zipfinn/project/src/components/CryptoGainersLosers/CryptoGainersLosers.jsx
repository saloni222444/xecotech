import React from "react";
import "./CryptoGainersLosers.css";

const CryptoGainersLosers = () => {
  const gainers = [
    {
      logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCFTT.svg",
      name: "FTX Token",
      ticker: "FTTUSD",
      value: "1.00054",
      currency: "USD",
      change: "+20.17%",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCTOSHI3.svg",
      name: "Toshi",
      ticker: "TOSHI3USD",
      value: "0.0008563",
      currency: "USD",
      change: "+15.50%",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCZROL.svg",
      name: "LayerZero",
      ticker: "ZROLUSD",
      value: "2.1174",
      currency: "USD",
      change: "+11.84%",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCZEC.svg",
      name: "Zcash",
      ticker: "ZECUSD",
      value: "54.701",
      currency: "USD",
      change: "+11.30%",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCSNX.svg",
      name: "Synthetix",
      ticker: "SNXUSD",
      value: "0.71120",
      currency: "USD",
      change: "+10.19%",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCMOCAV.svg",
      name: "Moca Network",
      ticker: "MOCAVUSD",
      value: "0.070674",
      currency: "USD",
      change: "+9.33%",
    },
  ];

  const losers = [
    {
      logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCZBC.svg",
      name: "Zebec Network",
      ticker: "ZBCUSD",
      value: "0.0039594",
      currency: "USD",
      change: "-17.00%",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCSUN.svg",
      name: "Sun (New)",
      ticker: "SUNUSD",
      value: "0.021166",
      currency: "USD",
      change: "-9.14%",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCBUIDL.svg",
      name: "BUILDon",
      ticker: "BUIDLUSD",
      value: "0.3644",
      currency: "USD",
      change: "-8.75%",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCHYPER.svg",
      name: "Hyperliquid",
      ticker: "HYPERUSD",
      value: "44.327",
      currency: "USD",
      change: "-8.67%",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCWEMIX.svg",
      name: "WEMIX",
      ticker: "WEMIXUSD",
      value: "0.68073",
      currency: "USD",
      change: "-7.59%",
    },
    {
      logo: "https://s3-symbol-logo.tradingview.com/crypto/XTVCFART.svg",
      name: "Fartcoin",
      ticker: "FARTCOINUSD",
      value: "0.58743",
      currency: "USD",
      change: "-6.81%",
    },
  ];

  return (
    <div className="crypto-card">
      <div className="crypto-columns">
        {/* Gainers */}
        <div className="crypto-section">
          <h3>Crypto gainers ›</h3>
          <div className="crypto-list">
            {gainers.map((coin, idx) => (
              <div key={idx} className="crypto-item">
                <div className="crypto-left">
                  <img src={coin.logo} alt={coin.name} className="crypto-logo" />
                  <div>
                    <div className="crypto-name">{coin.name}</div>
                    <div className="crypto-ticker">{coin.ticker}</div>
                  </div>
                </div>
                <div className="crypto-right">
                  <div className="crypto-value">
                    {coin.value} <span className="currency">{coin.currency}</span>
                  </div>
                  <div className="crypto-change up">{coin.change}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="crypto-footer">
            <a href="#">See all coins with largest daily growth ›</a>
          </div>
        </div>

        {/* Losers */}
        <div className="crypto-section">
          <h3>Crypto losers ›</h3>
          <div className="crypto-list">
            {losers.map((coin, idx) => (
              <div key={idx} className="crypto-item">
                <div className="crypto-left">
                  <img src={coin.logo} alt={coin.name} className="crypto-logo" />
                  <div>
                    <div className="crypto-name">{coin.name}</div>
                    <div className="crypto-ticker">{coin.ticker}</div>
                  </div>
                </div>
                <div className="crypto-right">
                  <div className="crypto-value">
                    {coin.value} <span className="currency">{coin.currency}</span>
                  </div>
                  <div className="crypto-change down">{coin.change}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="crypto-footer">
            <a href="#">See all coins with largest daily drop ›</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoGainersLosers;

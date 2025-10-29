import React, { useState, useEffect } from 'react';
import './market.css';

const MarketSummary = () => {
  const [activeTab, setActiveTab] = useState('editors_picks');

  // Mock data for market indices
  const majorIndices = [
    { name: 'Sensex', symbol: 'SENSEX', price: '81,715.63', change: '-0.47%', changeDirection: 'down', currency: 'INR', status: 'closed' },
    { name: 'S&P 500', symbol: 'SPX', price: '6,634.14', change: '-0.34%', changeDirection: 'down', currency: 'USD', status: 'open' },
    { name: 'Nasdaq 100', symbol: 'NDX', price: '24,527.81', change: '-0.21%', changeDirection: 'down', currency: 'USD', status: 'open' },
    { name: 'Japan 225', symbol: 'NI225', price: '45,630.26', change: '+0.30%', changeDirection: 'up', currency: 'JPY', status: 'closed' },
    { name: 'SSE Composite', symbol: '000001', price: '3,853.6422', change: '+0.83%', changeDirection: 'up', currency: 'CNY', status: 'closed' },
    { name: 'FTSE 100', symbol: 'UKX', price: '9,250.43', change: '+0.29%', changeDirection: 'up', currency: 'GBP', status: 'open' }
  ];

  // Mock data for cryptocurrencies
  const cryptocurrencies = [
    { name: 'Bitcoin', symbol: 'BTCUSD', price: '111,654', change: '-1.49%', changeDirection: 'down', currency: 'USD' },
    { name: 'Ethereum', symbol: 'ETHUSD', price: '4,020.1', change: '-3.22%', changeDirection: 'down', currency: 'USD' }
  ];

  // Mock data for futures
  const futures = [
    { name: 'Crude oil', symbol: 'CL1!', price: '64.21', change: '-1.20%', changeDirection: 'down', currency: 'USD / BLL' },
    { name: 'Natural gas', symbol: 'NG1!', price: '2.943', change: '+2.97%', changeDirection: 'up', currency: 'USD / MMBTU' },
    { name: 'Gold', symbol: 'GC1!', price: '3,759.0', change: '-0.24%', changeDirection: 'down', currency: 'USD / APZ' },
    { name: 'Copper', symbol: 'HG1!', price: '4.7745', change: '-0.81%', changeDirection: 'down', currency: 'USD / LBR' }
  ];

  return (
    <div className="market-summary-container">
      <div className="market-summary">
        {/* Main Market Summary Section */}
        <div className="main-market-summary">
          <div className="market-section-header">
            <h2>
              <a href="/markets/">
                Market summary
                <span className="market-arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                    <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                  </svg>
                </span>
              </a>
            </h2>
          </div>

          {/* Top Row: Primary Chart + Major Indices */}
          <div className="top-row">
            {/* Primary Chart Container */}
            <div className="primary-chart-container">
              <div className="primary-chart">
                <div className="chart-header">
                  <div className="symbol-info">
                    <div className="symbol-logo">
                      <img src="https://s3-symbol-logo.tradingview.com/indices/nifty-50.svg" alt="Nifty 50" />
                    </div>
                    <div className="symbol-details">
                      <a href="/symbols/NSE-NIFTY/" className="symbol-link">
                        <span className="symbol-name">Nifty 50</span>
                        <span className="symbol-ticker">NIFTY</span>
                      </a>
                      <span className="market-status closed">Market closed</span>
                    </div>
                  </div>
                  <div className="price-info">
                    <div className="price">25,056.90</div>
                    <div className="currency">INR</div>
                    <div className="change negative">−0.45%</div>
                  </div>
                </div>
                <div className="chart-placeholder">
                  <div className="chart-visualization">
                    <div className="chart-grid"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Major Indices Container */}
            <div className="major-indices-container">
              <div className="indices-section">
                <div className="market-section-title">Major indices</div>
                <div className="indices-grid">
                  {majorIndices.map((index, i) => (
                    <div key={i} className="index-card">
                      <div className="index-header">
                        <img src={`https://s3-symbol-logo.tradingview.com/indices/${index.symbol.toLowerCase()}.svg`} alt={index.name} />
                        <div className="index-info">
                          <a href={`/symbols/${index.symbol}/`} className="index-name">{index.name}</a>
                          <div className="index-meta">
                            <span className="data-mode">{index.status === 'open' ? 'R' : 'D'}</span>
                            <span className={`market-status ${index.status}`}>
                              Market {index.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="index-ticker">{index.symbol}</div>
                      <div className="index-price">
                        <span className="price">{index.price}</span>
                        <span className="currency">{index.currency}</span>
                        <span className={`change ${index.changeDirection}`}>{index.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Containers */}
          <div className="bottom-row">
            {/* Crypto Market Cap Container */}
            <div className="bottom-container crypto-marketcap-container">
              <div className="tickerCardWithChartContainer-lLLezw9K" data-qa-id="main-market-summary-crypto-total-widget">
                <div className="wrapper-jFTZFkQA">
                  <div className="container-vJbfmS16 quote-ticker-inited">
                    <div className="container-jFTZFkQA">
                      <div className="header-jFTZFkQA">
                        <img className="logo-PsAlMQQF xsmall-PsAlMQQF logo-OqBfSaEf letter-PsAlMQQF" 
                             src="https://s3-symbol-logo.tradingview.com/crypto-total-market-cap.svg" alt="Crypto Market Cap" />
                        <a href="/symbols/TOTAL/?exchange=CRYPTOCAP" className="container-dkZGhsyD link-dkZGhsyD">
                          <div className="titleContainer-dkZGhsyD">
                            <span className="title-dkZGhsyD apply-overflow-tooltip">Crypto market cap</span>
                            <div className="container-t9ccEaDX">
                              <span className="dataMode-t9ccEaDX js-data-mode tv-data-mode--realtime apply-common-tooltip" title="Real-time">R</span>
                              <span className="sessionStatus-t9ccEaDX tv-market-status--market apply-common-tooltip" title="Market open">
                                <span className="tv-market-status__label">Market open</span>
                                <span className="tv-market-status__icon"></span>
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="valueAndChange-jFTZFkQA">
                        <span className="container-MounR3ug">
                          <span className="value-MounR3ug js-symbol-last">3.7<span className="falling-Bxh1N34l">7 </span>T</span>
                          <span className="unit-MounR3ug js-symbol-currency">USD</span>
                        </span>
                        <div className="change-jFTZFkQA">
                          <span className="changePositive-jFTZFkQA">+1.12%</span>
                        </div>
                      </div>
                      <div className="chart-jFTZFkQA">
                        <div className="tv-lightweight-charts-mini">
                          <div className="mini-chart-placeholder"></div>
                        </div>
                      </div>
                      <span className="timeframe-jFTZFkQA">1 month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* US Dollar Index Container */}
            <div className="bottom-container usd-index-container">
              <div className="tickerCardWithChartContainer-lLLezw9K" data-qa-id="main-market-summary-currency-widget">
                <div className="wrapper-jFTZFkQA">
                  <div className="container-vJbfmS16 quote-ticker-inited">
                    <div className="container-jFTZFkQA">
                      <div className="header-jFTZFkQA">
                        <img 
                          className="logo-PsAlMQQF xsmall-PsAlMQQF logo-OqBfSaEf letter-PsAlMQQF" 
                          src="https://s3-symbol-logo.tradingview.com/indices/u-s-dollar-index.svg" 
                          alt="US Dollar Index" 
                        />
                        <a href="/symbols/TVC-DXY/" className="container-dkZGhsyD link-dkZGhsyD">
                          <div className="titleContainer-dkZGhsyD">
                            <span className="title-dkZGhsyD apply-overflow-tooltip" data-overflow-tooltip-text="US Dollar index">
                              US Dollar index
                            </span>
                            <div className="container-t9ccEaDX">
                              <span 
                                className="dataMode-t9ccEaDX js-data-mode tv-data-mode--for-ticker-card tv-data-mode--realtime tv-data-mode--realtime--for-ticker-card apply-common-tooltip" 
                                title="Real-time"
                              >
                                R
                              </span>
                              <span 
                                className="sessionStatus-t9ccEaDX js-symbol-session-status tv-market-status tv-market-status--for-ticker-card tv-market-status--market tv-market-status--market--for-ticker-card tv-market-status--market__withIcon apply-common-tooltip" 
                                title="Market open"
                              >
                                <span className="tv-market-status__label tv-market-status__label--for-ticker-card">Market open</span>
                                <span className="tv-market-status__icon tv-market-status__icon--for-ticker-card"></span>
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      
                      <div className="valueAndChange-jFTZFkQA">
                        <span className="container-MounR3ug" style={{justifyContent: "flex-start"}}>
                          <span className="value-MounR3ug js-symbol-last">
                            98.28<span className="">9</span>
                          </span>
                          <span className="unit-MounR3ug js-symbol-currency" translate="no">USD</span>
                        </span>
                        <div className="change-jFTZFkQA">
                          <span className="changeNegative-jFTZFkQA">−0.18%</span>
                        </div>
                      </div>
                      
                      <div className="chart-jFTZFkQA">
                        <div className="mini-chart-placeholder futures-chart"></div>
                      </div>
                      
                      <span className="timeframe-jFTZFkQA">1 month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* US 10Y Yield Container */}
            <div className="bottom-container us-yield-container">
              <div className="tickerCardWithChartContainer-lLLezw9K" data-qa-id="main-market-summary-bond-widget">
                <div className="wrapper-jFTZFkQA">
                  <div className="container-vJbfmS16 quote-ticker-inited">
                    <div className="container-jFTZFkQA">
                      <div className="header-jFTZFkQA">
                        <img 
                          className="logo-PsAlMQQF xsmall-PsAlMQQF logo-OqBfSaEf letter-PsAlMQQF" 
                          src="https://s3-symbol-logo.tradingview.com/country/US.svg" 
                          alt="US 10Y Yield" 
                        />
                        <a href="/symbols/TVC-US10Y/" className="container-dkZGhsyD link-dkZGhsyD">
                          <div className="titleContainer-dkZGhsyD">
                            <span className="title-dkZGhsyD apply-overflow-tooltip" data-overflow-tooltip-text="US 10Y yield">
                              US 10Y yield
                            </span>
                            <div className="container-t9ccEaDX">
                              <span 
                                className="dataMode-t9ccEaDX js-data-mode tv-data-mode--for-ticker-card tv-data-mode--realtime tv-data-mode--realtime--for-ticker-card apply-common-tooltip" 
                                title="Real-time"
                              >
                                R
                              </span>
                              <span 
                                className="sessionStatus-t9ccEaDX js-symbol-session-status tv-market-status tv-market-status--for-ticker-card tv-market-status--market tv-market-status--market--for-ticker-card tv-market-status--market__withIcon apply-common-tooltip" 
                                title="Market open"
                              >
                                <span className="tv-market-status__label tv-market-status__label--for-ticker-card">Market open</span>
                                <span className="tv-market-status__icon tv-market-status__icon--for-ticker-card"></span>
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      
                      <div className="valueAndChange-jFTZFkQA">
                        <span className="container-MounR3ug" style={{justifyContent: "flex-start"}}>
                          <span className="value-MounR3ug js-symbol-last">
                            4.18<span className="">7</span>
                          </span>
                          <span className="unit-MounR3ug js-symbol-currency" translate="no">%</span>
                        </span>
                        <div className="change-jFTZFkQA">
                          <span className="changeNegative-jFTZFkQA">−1.83%</span>
                        </div>
                      </div>
                      
                      <div className="chart-jFTZFkQA">
                        <div className="mini-chart-placeholder economy-chart"></div>
                      </div>
                      
                      <span className="timeframe-jFTZFkQA">1 month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSummary;
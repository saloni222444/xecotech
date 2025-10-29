import React, { useState } from 'react';
import './ForexHeatMap.css';

const ForexHeatmap = () => {
  const [timeframe, setTimeframe] = useState('1D');

  const currencies = [
    { code: 'EUR', name: 'Euro', flag: 'EU' },
    { code: 'USD', name: 'US Dollar', flag: 'US' },
    { code: 'GBP', name: 'British Pound', flag: 'GB' },
    { code: 'JPY', name: 'Yen', flag: 'JP' },
    { code: 'CHF', name: 'Swiss Franc', flag: 'CH' },
    { code: 'AUD', name: 'Australian Dollar', flag: 'AU' },
    { code: 'CNY', name: 'Yuan Renminbi', flag: 'CN' },
    { code: 'CAD', name: 'Canadian Dollar', flag: 'CA' }
  ];

  // Sample data - in a real app, this would come from an API
  const heatmapData = {
    '1D': [
      [null, '+0.17', '+0.03', '+0.14', '+0.11', '+0.35', '+0.12', '+0.27'],
      ['-0.16', null, '-0.19', '0', '-0.05', '+0.11', '-0.01', '+0.11'],
      ['+0.03', '+0.21', null, '+0.20', '+0.09', '+0.38', '+0.13', '+0.30'],
      ['-0.14', '0', '-0.18', null, '-0.02', '+0.13', '+0.02', '+0.08'],
      ['-0.05', '+0.11', '-0.09', '+0.08', null, '+0.21', '+0.03', '+0.17'],
      ['-0.27', '-0.05', '-0.29', '-0.10', '-0.07', null, '-0.09', '+0.03'],
      ['-0.12', '+0.01', '-0.13', '-0.03', '0', '+0.48', null, '+0.05'],
      ['-0.21', '-0.06', '-0.26', '-0.04', '-0.02', '+0.04', '-0.09', null]
    ]
  };

  const timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y', 'YTD', '5Y', 'All'];

  const getIntensityClass = (value) => {
    if (!value || value === '0') return 'neutral';
    
    const numValue = parseFloat(value.replace('+', '').replace('-', ''));
    const isPositive = value.startsWith('+');
    
    if (numValue >= 0.3) return isPositive ? 'positive-xl' : 'negative-xl';
    if (numValue >= 0.2) return isPositive ? 'positive-l' : 'negative-l';
    if (numValue >= 0.1) return isPositive ? 'positive-m' : 'negative-m';
    if (numValue >= 0.05) return isPositive ? 'positive-s' : 'negative-s';
    return isPositive ? 'positive-s' : 'negative-s';
  };

  const currentData = heatmapData[timeframe] || heatmapData['1D'];

  return (
    <div className="yo-forex-heatmap">
      {/* Header */}
      <div className="yo-heatmap-header">
        <div className="yo-header-wrapper">
          <div className="yo-title-wrapper">
            <a href="/markets/currencies/cross-rates-overview-heat-map/" className="yo-title-link">
              <h3 className="yo-heatmap-title">
                Forex heatmap
                <span className="yo-arrow-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                    <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"/>
                  </svg>
                </span>
              </h3>
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="yo-heatmap-content">
        <div className="yo-table-container">
          <div className="yo-table-wrapper">
            <table className="yo-heatmap-table">
              <tbody>
                {/* Header Row */}
                <tr>
                  <th></th>
                  {currencies.map(currency => (
                    <th key={currency.code}>
                      <span title={currency.name} className="yo-currency-block">
                        <img 
                          className="yo-currency-flag" 
                          src={`https://s3-symbol-logo.tradingview.com/country/${currency.flag}.svg`} 
                          alt={currency.name}
                        />
                        {currency.code}
                      </span>
                    </th>
                  ))}
                </tr>

                {/* Data Rows */}
                {currencies.map((rowCurrency, rowIndex) => (
                  <tr key={rowCurrency.code}>
                    <th>
                      <span title={rowCurrency.name} className="yo-currency-block">
                        <img 
                          className="yo-currency-flag" 
                          src={`https://s3-symbol-logo.tradingview.com/country/${rowCurrency.flag}.svg`} 
                          alt={rowCurrency.name}
                        />
                        {rowCurrency.code}
                      </span>
                    </th>
                    {currencies.map((colCurrency, colIndex) => {
                      const value = currentData[rowIndex][colIndex];
                      const intensityClass = getIntensityClass(value);
                      
                      return (
                        <td key={colCurrency.code} className={value ? `heatmap-cell ${intensityClass}` : 'heatmap-cell empty'}>
                          {value && (
                            <div className="yo-cell-content">
                              {value}<span className="yo-percent-symbol">%</span>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Timeframe Selector */}
          <div className="yo-timeframe-selector">
            <div className="yo-timeframe-options">
              {timeframes.map(tf => (
                <button
                  key={tf}
                  className={`yo-timeframe-button ${timeframe === tf ? 'selected' : ''}`}
                  onClick={() => setTimeframe(tf)}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="yo-heatmap-footer">
        <a href="/markets/currencies/cross-rates-overview-heat-map/" className="yo-see-all-button">
          <span className="yo-button-background"></span>
          <span className="yo-button-content">
            See all <span className="yo-no-break">rates</span>
            <span className="yo-arrow-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                <path fill="currentColor" d="M7.56 4.5a.75.75 0 1 0-1.12 1l1.12-1zM10.5 9l.56.5a.75.75 0 0 0 0-1l-.56.5zm-4.06 3.5a.75.75 0 0 0 1.12 1l-1.12-1zm0-7l3.5 4 1.12-1-3.5-4-1.12 1zm3.5 3l-3.5 4 1.12 1 3.5-4-1.12-1z"/>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default ForexHeatmap;
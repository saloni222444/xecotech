import React, { useState } from 'react';
import './PaperTradingCalculator.css';

const PaperTradingCalculator = () => {
  const [selectedStock, setSelectedStock] = useState('AAPL');
  const [investmentAmount, setInvestmentAmount] = useState(1000);
  const [purchaseTime, setPurchaseTime] = useState('twoYears');

  const stocks = [
    { symbol: 'AAPL', name: 'Apple' },
    { symbol: 'MSFT', name: 'Microsoft' },
    { symbol: 'GOOG', name: 'Alphabet-C' },
    { symbol: 'AMZN', name: 'Amazon' },
    { symbol: 'TSLA', name: 'Tesla' }
  ];

  const purchaseOptions = [
    { value: 'twoYears', label: '2 years ago' },
    { value: 'oneYear', label: '1 year ago' },
    { value: 'sixMonths', label: '6 months ago' },
    { value: 'threeMonths', label: '3 months ago' }
  ];

  const handleStockSelect = (symbol) => {
    setSelectedStock(symbol);
  };

  const handleAmountChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setInvestmentAmount(value);
  };

  const handlePurchaseTimeChange = (e) => {
    setPurchaseTime(e.target.value);
  };

  const handleCalculate = () => {
    alert(`Calculating investment for ${selectedStock} with $${investmentAmount} purchased ${purchaseOptions.find(opt => opt.value === purchaseTime)?.label}`);
  };

  return (
    <div className="EOpaper-trading-calculator-overlap">
      <div className="EOpaper-calculator-header">
        <div className="EOpaper-header-content">
          <h1 className="EOpaper-main-title">Paper Trading Calculator</h1>
          <p className="EOpaper-main-description">
            Simulate the potential value of an investment based on historical performance.
          </p>
        </div>
        <div className="EOheader-image">
          <img 
            src="https://cdn.futustatic.com/upload/moomoo-trading-simulator/bg-card-popular-stocks-95ed61a22de51b941ce9a41c05f21660.png?_=1716263545971" 
            alt="Investment visualization" 
            className="EOcalculator-image" 
          />
        </div>
      </div>

      <div className="EOdivider"></div>

      <div className="EOcalculator-section">
        <div className="EOstock-selection">
          <h2 className="EOsection-title">Select a stock</h2>
          <div className="EOstocks-grid">
            {stocks.map(stock => (
              <div 
                key={stock.symbol}
                className={`EOstock-card ${selectedStock === stock.symbol ? 'EOactive' : ''}`}
                onClick={() => handleStockSelect(stock.symbol)}
              >
                <div className="EOstock-symbol">{stock.symbol}</div>
                <div className="EOstock-name">{stock.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="EOinvestment-controls">
          <div className="EOcontrol-group">
            <div className="EOinvestment-amount">
              <h3 className="EOcontrol-title">Investment Amount</h3>
              <div className="EOamount-control">
                <div className="EOamount-display">
                  <span className="EOcurrency">$</span>
                  <span className="EOamount">{investmentAmount.toLocaleString()}</span>
                </div>
                <div className="EOamount-buttons">
                  <button 
                    className="EOamount-btn EOminus"
                    onClick={() => setInvestmentAmount(prev => Math.max(0, prev - 100))}
                  >
                    -
                  </button>
                  <button 
                    className="EOamount-btn EOplus"
                    onClick={() => setInvestmentAmount(prev => prev + 100)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="EOpurchase-time">
              <h3 className="EOcontrol-title">Purchase Time</h3>
              <select 
                value={purchaseTime} 
                onChange={handlePurchaseTimeChange}
                className="EOtime-select"
              >
                {purchaseOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="EOcalculate-button" onClick={handleCalculate}>
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaperTradingCalculator;

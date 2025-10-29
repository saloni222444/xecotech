import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Defaultbroker1.css';

const CompareBrokers = ({
  pageTitle = "Made to trade",
  pageDescription = "Get trading with verified brokers today.",
  brokersData = [],
  showStats = true
}) => {
  const [activeTab, setActiveTab] = useState('All brokers');
  const navigate = useNavigate();
  const location = useLocation();

  // Current URL ke hisaab se active tab set karein
  useEffect(() => {
    const path = location.pathname;
    console.log('Current path:', path);

    switch (path) {
      case '/brokers':
      case '/brokers/all-brokers': // ✅ Add this case
        setActiveTab('All brokers');
        break;
      case '/brokers/stocks':
        setActiveTab('Stocks');
        break;
      case '/brokers/forex':
        setActiveTab('Forex');
        break;
      case '/brokers/futures':
        setActiveTab('Futures');
        break;
      case '/brokers/etfs':
        setActiveTab('ETFs');
        break;
      case '/brokers/options':
        setActiveTab('Options');
        break;
      default:
        setActiveTab('All brokers');
    }
  }, [location.pathname]);

  const tabs = ['All brokers', 'Stocks', 'Forex', 'Futures', 'ETFs', 'Options'];

  // ✅ CORRECTED handleTabClick function
  const handleTabClick = (tab) => {
    const routeMap = {
      'All brokers': '/brokers/all-brokers', // ✅ Changed from '/brokers/stocks'
      'Stocks': '/brokers/stocks',
      'Forex': '/brokers/forex',
      'Futures': '/brokers/futures',
      'ETFs': '/brokers/etfs',
      'Options': '/brokers/options'
    };

    const route = routeMap[tab];
    if (route) {
      console.log('Navigating to:', route);
      navigate(route);
    }
  };

  const renderStars = (broker) => {
    const stars = [];
    const fullStars = Math.floor(broker.stars);
    const hasHalfStar = broker.stars % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className="star star--fill">
          <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.12l2.03 4.04.11.24.26.03 4.51.65-3.26 3.13-.19.19.05.26.77 4.43L8.23 12 8 11.87l-.23.12-4.05 2.1.77-4.43.05-.26-.2-.19L1.1 6.08l4.5-.65.27-.03.11-.24L8 1.12z"></path>
          </svg>
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="star-half" className="star star--half">
          <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.12l2.03 4.04.11.24.26.03 4.51.65-3.26 3.13-.19.19.05.26.77 4.43L8.23 12 8 11.87l-.23.12-4.05 2.1.77-4.43.05-.26-.2-.19L1.1 6.08l4.5-.65.27-.03.11-.24L8 1.12z"></path>
          </svg>
        </span>
      );
    }

    return stars;
  };

  const getPlanClass = (plan) => {
    return plan === "platinum" ? "badge--platinum" : "badge--silver";
  };

  return (
    <div className="brokers-page">
      {/* Same Header Section */}
      <div className="brokers-header">
        <div className="header-content">
          <h1 className="header-title">{pageTitle}</h1>
          <p className="header-description">{pageDescription}</p>
        </div>

        <div className="header-controls">
          <div className="sort-controls">
            <button className="sort-button">
              Best rated
              <span className="chevron">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                  <path fill="currentColor" d="m7.47 11.53 1.06-1.06L14 15.94l5.47-5.47 1.06 1.06L14 18.06l-6.53-6.53Z" />
                </svg>
              </span>
            </button>
          </div>

          <div className="filter-tabs">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Brokers List */}
      <div className="brokers-list">
        <ul className="brokers-grid">
          {brokersData.map(broker => (
            <li key={broker.id} className="broker-card">
              <div className="card-container">
                <div className="card-content">
                  <div className="image-wrapper">
                    <img src={broker.widgetImage} alt={broker.name} className="broker-image" loading="lazy" />
                  </div>

                  <div className="name-block">
                    <div className="name-wrapper">
                      <a href={`/broker/${broker.name.replace(/\s+/g, '_')}/`} className="broker-name">{broker.name}</a>
                      <span className={`badge ${getPlanClass(broker.plan)}`}>
                        {broker.plan === "platinum" ? "Platinum" : "Silver"}
                      </span>
                    </div>
                    <div className="assets">Tradable assets: {broker.assets}</div>
                  </div>

                  <div className="info-section">
                    <div className="rating-section">
                      <div className="rating">
                        <div className="rating-block">
                          <span className="rating-value">{broker.rating}</span>
                          <span className="rating-title">{broker.ratingTitle}</span>
                        </div>
                        <div className="stars">
                          {renderStars(broker)}
                        </div>
                        <button className="genuine-rating" title="Genuine rating by TradingView">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none">
                            <path fill="currentColor" fillRule="evenodd" d="M9.38 1.144a.574.574 0 0 0-.76 0L7.268 2.332a.575.575 0 0 1-.464.138L5.03 2.208a.578.578 0 0 0-.64.414l-.5 1.738a.582.582 0 0 1-.316.37l-1.633.747a.586.586 0 0 0-.316.698l.51 1.735a.589.589 0 0 1-.07.483l-.972 1.52a.588.588 0 0 0 .108.76l1.22 1.182a.587.587 0 0 1 .2.444l-.004 1.81c0 .291.212.539.498.58l1.913.253c.167.023.316.12.407.263L6.4 16.73a.576.576 0 0 0 .73.217l1.628-.756a.573.573 0 0 1 .484 0l1.629.756c.262.121.573.03.729-.216l.966-1.526a.574.574 0 0 1 .406-.263l1.93-.254a.582.582 0 0 0 .498-.58l-.005-1.81c0-.17.073-.332.201-.443l1.203-1.182a.588.588 0 0 0 .108-.76l-.973-1.52a.589.589 0 0 1-.068-.483l.509-1.735a.586.586 0 0 0-.316-.698l-1.633-.748a.583.583 0 0 1-.316-.369l-.5-1.738a.578.578 0 0 0-.64-.414l-1.774.262a.575.575 0 0 1-.464-.138L9.38 1.144ZM7.848 12 13 7.045 11.914 6 7.848 9.91 6.086 8.216 5 9.261 7.848 12Z" />
                          </svg>
                        </button>
                      </div>

                      <div className="stats">
                        <div className="stat-group">
                          <span className="stat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                              <path fill="currentColor" fillRule="evenodd" d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9a.5.5 0 0 0 .854.354L5.707 13H12.5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12.5 3h-7ZM6 6h6v1H6V6Zm6 3H6v1h6V9Z" />
                            </svg>
                          </span>
                          <span className="stat-value">{broker.reviews}</span>
                          <span className="stat-label">Reviews</span>
                        </div>

                        <div className="stat-group">
                          <span className="stat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                              <path fill="currentColor" d="M9 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm4.727 7c1.495 0 2.623-1.653 2.04-3.031-.68-1.607-1.594-2.969-3.69-2.969H5.923c-2.096 0-3.01 1.362-3.69 2.969C1.65 14.347 2.778 16 4.273 16h9.454Z" />
                            </svg>
                          </span>
                          <span className="stat-value">{broker.accounts}</span>
                          <span className="stat-label">Accounts</span>
                        </div>
                      </div>
                    </div>

                    {broker.promotion && (
                      <div className="promotion-container">
                        <div className="promotion-content">
                          <div className="promotion-value">{broker.promotion}</div>
                          <div className="promotion-title">Promotion</div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="actions">
                    {broker.id !== 244 && (
                      <button className="action-button primary">
                        Open account
                        <span className="action-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                            <path fill="currentColor" d="M5.5 2.75A2.75 2.75 0 002.75 5.5v7a2.75 2.75 0 002.75 2.75h7a2.75 2.75 0 002.75-2.75V10h-1.5v2.5c0 .69-.56 1.25-1.25 1.25h-7c-.69 0-1.25-.56-1.25-1.25v-7c0-.69.56-1.25 1.25-1.25H8v-1.5H5.5zm5.5 1.5h1.69L8.97 7.97l1.06 1.06 3.72-3.72V7h1.5V2.75H11v1.5z" />
                          </svg>
                        </span>
                      </button>
                    )}
                    <a href={`/broker/${broker.name.replace(/\s+/g, '_')}/`} className="action-button secondary">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Same Stats Section */}
      {showStats && (
        <div className="stats-section">
          <div className="stats-title">
            <div>Every trade a</div>
            <div>#Zepfinn</div>
          </div>

          <div className="stats-container">
            <div className="stats-wrapper">
              <div className="stat-number">
                <svg className="stat-svg">
                  <defs>
                    <linearGradient id="gradientStart" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EA69FF"></stop>
                      <stop offset="100%" stopColor="#5CFFBE"></stop>
                    </linearGradient>
                    <linearGradient id="gradientEnd" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#27FFD8F8"></stop>
                      <stop offset="100%" stopColor="#5151FF"></stop>
                    </linearGradient>
                    <filter id="filterStart">
                      <feDropShadow dx="1" dy="1" floodColor="#27FFD8" floodOpacity="0.1" stdDeviation="5"></feDropShadow>
                      <feDropShadow dx="-1" dy="-1" floodColor="#F851FF" floodOpacity="0.1" stdDeviation="5"></feDropShadow>
                      <feGaussianBlur result="glow" stdDeviation="5"></feGaussianBlur>
                      <feMerge>
                        <feMergeNode in="glow"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                      </feMerge>
                    </filter>
                    <filter id="filterEnd">
                      <feDropShadow dx="1" dy="1" floodColor="#27FFD8F8" floodOpacity="0.1" stdDeviation="5"></feDropShadow>
                      <feDropShadow dx="-1" dy="-1" floodColor="#5151FF" floodOpacity="0.1" stdDeviation="5"></feDropShadow>
                      <feGaussianBlur result="glow" stdDeviation="5"></feGaussianBlur>
                      <feMerge>
                        <feMergeNode in="glow"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                      </feMerge>
                    </filter>
                  </defs>
                  <text
                    dominantBaseline="central"
                    fill="url(#gradientStart)"
                    fillOpacity="0.2"
                    filter="url(#filterStart)"
                    stroke="url(#gradientStart)"
                    strokeLinejoin="round"
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                  >
                    0
                  </text>
                </svg>
              </div>
              <div className="stat-description">Traders connected through us</div>
            </div>

            <div className="stats-wrapper">
              <div className="stat-number">
                <svg className="stat-svg">
                  <text
                    dominantBaseline="central"
                    fill="url(#gradientEnd)"
                    fillOpacity="0.2"
                    filter="url(#filterEnd)"
                    stroke="url(#gradientEnd)"
                    strokeLinejoin="round"
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                  >
                    0
                  </text>
                </svg>
              </div>
              <div className="stat-description">Successfully executed live orders</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareBrokers;
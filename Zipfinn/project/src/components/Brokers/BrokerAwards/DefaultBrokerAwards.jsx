import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './DefaultBrokerAwards.css';

const DefaultBrokerAwards = ({
  pageTitle = "Broker Awards",
  pageDescription = "The TradingView Broker Awards are where the world's best compete to show off their brokering capabilities on an international stage.",
  brokersData = {},
  showStats = true
}) => {
  const [activeTab, setActiveTab] = useState('2024');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = ['2024', '2023', '2022', '2021', '2020'];

  // Set active tab based on URL
  useEffect(() => {
    const path = location.pathname;
    console.log('Current path:', path);

    // Extract year from path or use default
    const yearMatch = path.match(/(\d{4})$/);
    if (yearMatch) {
      setActiveTab(yearMatch[1]);
    } else if (path.includes('/brokers')) {
      setActiveTab('2020');
    }
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    const routeMap = {
      '2024': '/brokers/BrokerAwards2024',
      '2023': '/brokers/BrokerAwards2023', 
      '2022': '/brokers/BrokerAwards2022',
      '2021': '/brokers/BrokerAwards2021',
      '2020': '/brokers/BrokerAwards2020'
    };

    const route = routeMap[tab];
    if (route) {
      console.log('Navigating to:', route);
      navigate(route);
      setActiveTab(tab);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://www.tradingview.com/broker-awards/')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  // Get current year's data
  const currentYearData = brokersData[activeTab];

  return (
    <div className="GO-broker-awards-page">
      {/* Header Section */}
      <div className="GO-awards-header">
        <div className="GO-header-content">
          <h1 className="GO-header-title">{pageTitle}</h1>
          <p className="GO-header-description">
            {pageDescription}
          </p>
        </div>

        {/* Tabs Navigation - CompareBrokers style */}
        <div className="GO-header-controls">
          <div className="GO-filter-tabs">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`GO-tab ${activeTab === tab ? 'GO-active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
            {/* <button className="GO-tab GO-more">
              More
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                <path fill="currentColor" d="M3.92 7.83 9 12.29l5.08-4.46-1-1.13L9 10.29l-4.09-3.6-.99 1.14Z"/>
              </svg>
            </button> */}
          </div>
        </div>
      </div>

      {/* Awards Sections */}
      {currentYearData && currentYearData.sections && (
        <div className="GO-awards-sections">
          {currentYearData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="GO-awards-section">
              <div className="GO-section-header">
                <h2 className="GO-section-title">{section.title}</h2>
                {section.subtitle && (
                  <p className="GO-section-subtitle">{section.subtitle}</p>
                )}
              </div>
              
              <div className="GO-cards-grid">
                {section.children.map((winner, winnerIndex) => (
                  <a 
                    key={winner.id || winnerIndex} 
                    className={`GO-award-card GO-card-${winner.id || winnerIndex + 1}`} 
                    href={winner.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DefaultBrokerAwards;
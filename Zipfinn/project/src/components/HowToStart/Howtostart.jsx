import React from 'react';
import './Howtostart.css';

const PaperTradingSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Sign Up For Free',
      description: 'Sign up for a paper trading account in less than 1 minute and get $1,000,000 in virtual funds to test your skills.'
    },
    {
      number: '2',
      title: 'Paper Trade',
      description: 'Test your strategies and refine your skills risk-free for 30 days, with free real-time NASDAQ Basic market data.'
    },
    {
      number: '3',
      title: 'Upgrade',
      description: 'Upgrade to a funded trading account and enjoy continued access to Paper Trading with free NASDAQ Basic data.'
    }
  ];

  const ArrowIcon = () => (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6539_44915)">
        <path d="M20.5682 3.04354L20.5682 17.8281L17.627 14.8712L17.627 3.04354L20.5682 3.04354Z" fill="currentColor"/>
        <path d="M20.5701 3.15611L5.91395 3.15611L2.95703 0.214844L19.2845 0.214844C19.9945 0.214844 20.5701 0.790433 20.5701 1.50046L20.5701 3.15611Z" fill="currentColor"/>
        <path d="M19.1555 3.70865L2.52167 20.3425L0.441902 18.2627L17.0758 1.62886L19.1555 3.70865Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_6539_44915">
          <rect width="20.5699" height="20.5699" fill="white" transform="matrix(-1 0 0 1 20.5698 0.214844)"/>
        </clipPath>
      </defs>
    </svg>
  );

  const InfoIcon = () => (
    <svg className="info-icon" height="100%" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.3472 8.81372C16.3472 13.3279 12.6877 16.9873 8.17358 16.9873C3.65944 16.9873 0 13.3279 0 8.81372C0 4.29957 3.65944 0.640137 8.17358 0.640137C12.6877 0.640137 16.3472 4.29957 16.3472 8.81372ZM7.15138 14.2533L7.15138 6.02664L9.19478 6.02664L9.19478 14.2533L7.15138 14.2533ZM7.15138 3.37689L7.15138 5.42028L8.15209 4.3776L9.19478 3.37689H7.15138Z" fill="currentColor"/>
    </svg>
  );

  return (
    <div className="how-paper-trading-section">
      <div className="how-container">
        <h2 className="how-section-heading">
          Start Paper Trading In No Time
        </h2>
        
        <div className="section-subtitle">
          <p>We've made it effortless for you.</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <span className="step-number">{step.number}</span>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <div className="step-description">
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="how-to-start-cta-section">
          <a 
            href="https://registration.tradezero.com/paper"
            className="how-to-start-cta-button"
            title="Start Paper Trading"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Start Paper Trading</span>
            <ArrowIcon />
          </a>
        </div>

        <div className="terms-section">
          <div className="terms-content">
            <div className="terms-link">
              <InfoIcon />
              <button className="terms-button">T&Cs apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperTradingSection;
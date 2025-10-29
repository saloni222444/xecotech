import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BrokerAwards2020.css';
import DefaultBrokerAwards from './DefaultBrokerAwards';
import ZepfinnLogo from './Zepfinn_logo.png';

const awardsData = {
  '2020': {
    sections: [
      {
        children: [
          {
            id: 1,
            title: "Broker of the Year 2020",
            broker: "Pepperstone",
            description: "King of the hill",
            logo: "https://s3.tradingview.com/brokers/logo/Pepperstone_blue_logo_160.svg",
            link: "/broker/Pepperstone/",
            cardClass: "DO-card-1"
          },
          {
            id: 2,
            title: "Most Popular Broker 2020",
            broker: "OANDA",
            description: "Champion of crowds",
            logo: "https://s3.tradingview.com/brokers/logo/logo_160_oanda_upd.svg",
            link: "/broker/OANDA/",
            cardClass: "DO-card-2"
          },
          {
            id: 3,
            title: "Social Champion 2020",
            broker: "FXCM",
            description: "Traders' Romeo (or Juliet)",
            logo: "https://s3.tradingview.com/brokers/logo/160x160_LS__fxcm_blue.svg",
            link: "/broker/FXCM/",
            cardClass: "DO-card-3"
          },
          {
            id: 4,
            title: "Most Innovative Tech 2020",
            broker: "Dhan",
            description: "Sent here from 2049",
            logo: "https://s3.tradingview.com/brokers/logo/160x160_LS__Dnan_2023.svg",
            link: "/broker/Dhan/",
            cardClass: "DO-card-4"
          },
          {
            id: 5,
            title: "Best Multi-Asset Broker 2020",
            broker: "TradeStation",
            description: "United Nations of symbols",
            logo: "https://s3.tradingview.com/brokers/logo/160x160_LS__tradestation_new.svg",
            link: "/broker/TradeStation/",
            cardClass: "DO-card-5"
          },
          {
            id: 6,
            title: "Best Forex Broker 2020",
            broker: "Capital.com",
            description: "Empress of exchanges",
            logo: "https://s3.tradingview.com/brokers/logo/Capitalcom.svg",
            link: "/broker/Capitalcom/",
            cardClass: "DO-card-6"
          },
          {
            id: 7,
            title: "Best Futures Broker 2020",
            broker: "Osmanlı Yatırım",
            description: "Contract for greatness",
            logo: "https://s3.tradingview.com/brokers/logo/logo_160_osmanli.svg",
            link: "/broker/OsmanliYatirim/",
            cardClass: "DO-card-7"
          },
          {
            id: 8,
            title: "Best Crypto Broker or Exchange 2020",
            broker: "BingX",
            description: "Saint of Satoshi",
            logo: "https://s3.tradingview.com/brokers/logo/BingX_logo_160_.svg",
            link: "/broker/BingX/",
            cardClass: "DO-card-8"
          }
        ]
      }
    ]
  }
};

const BrokerAwards2020 = () => {
  const [activeYear, setActiveYear] = useState('2020');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentData = awardsData[activeYear];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const AwardCard = ({ award }) => (
    <a 
      className={`DO-card ${award.cardClass} DO-theme-winners_2023`}
      href={award.link}
      target="_blank"
      rel="noopener noreferrer"
    >
    
      <div className="DO-bg"></div>
      <div className="DO-blob"></div>
      <div className="DO-card-wrapper">
        <img 
          className="DO-custom-logo" 
          src={ZepfinnLogo} 
          alt="Zepfinn Logo"
        />
        <h2 className="DO-card-title">{award.title}</h2>
        <div className="DO-about-wrap">
          <img className="DO-card-logo" src={award.logo} alt={award.broker} />
          <div className="DO-broker-info">
            <h3 className="DO-broker-name">{award.broker}</h3>
            <span className="DO-broker-description">{award.description}</span>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="DO-broker-awards-container">
      <DefaultBrokerAwards />

      {/* Awards Sections */}
      <div className="DO-card-block">
        <div className="DO-sections-container">
          {currentData?.sections?.map((section, index) => (
            <div key={index} className="DO-section-group">
              <span className="DO-section-title">{section.title}</span>
              <div className="DO-sections-block">
                {section.children.map((award) => (
                  <AwardCard key={award.id} award={award} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who's Next Section */}
      <div className="DO-gradient-wrapper">
        <div className="DO-content-wrapper">
          <div className="DO-cta-content">
            <h2 className="DO-cta-title">Who's next?</h2>
            <p className="DO-cta-text">
              Help your favorite win in 2025 by going to our Top Brokers page, finding your broker, and leaving a review.
            </p>
          </div>
          <a href="/brokers/" className="DO-round-button DO-black DO-primary">
            <span className="DO-button-content">Review brokers</span>
          </a>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="DO-share-container">
        <div className="DO-share-buttons">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.tradingview.com/broker-awards/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="DO-social-button"
            aria-label="Share on Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
              <path fill="currentColor" d="M15 23.95a10 10 0 1 0-3-.15V17H9.5v-3H12v-2.2c0-2.5 1.5-3.9 3.78-3.9 1.09 0 2.22.2 2.22.2v2.46h-1.25c-1.24 0-1.75.77-1.75 1.56V14h3l-.55 3H15v6.95z" />
            </svg>
          </a>

          <a
            href="https://twitter.com/intent/tweet?text=Broker%20Awards%202021%20by%20%40tradingview%20%E2%80%94%20Check%20out%20the%20best%20online%20brokers%20of%20the%20year.%20https%3A%2F%2Fwww.tradingview.com%2Fbroker-awards%2F"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="DO-social-button"
            aria-label="Share on Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
              <path fill="currentColor" d="M20.33 4h3.37l-7.37 8.47L25 24h-6.79l-5.32-7-6.08 7H3.43l7.89-9.06L3 4h6.96l4.8 6.4zm-1.19 18h1.87L8.95 6H6.94z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/tradingview/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="DO-social-button"
            aria-label="Share on LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
              <path fill="currentColor" d="M6 4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm4 8v9H7v-9h3zm.32-3.06c0 .9-.67 1.61-1.75 1.61h-.02c-1.04 0-1.7-.71-1.7-1.6 0-.92.68-1.62 1.74-1.62s1.71.7 1.73 1.6zM15 21h-3s.04-8.12 0-9h3v1.17a2.73 2.73 0 0 1 2.5-1.38c2.03 0 3.5 1.16 3.5 4.03V21h-3v-4.82c0-1.26-.36-2.12-1.48-2.12-.97 0-1.52 1.06-1.52 1.9V21z" />
            </svg>
          </a>

          <button
            className={`DO-social-button ${copied ? 'DO-copied' : ''}`}
            onClick={copyToClipboard}
            aria-label={copied ? "Copied!" : "Copy link"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
              <path fill="currentColor" d="M10.8 10.2a1 1 0 0 1 0-1.4l.7.7.7.7a1 1 0 0 1-1.4 0zm7.7 5.3l-.7-.7v-.01l.01-.02.07-.06.23-.23.77-.77 1.91-1.92c.38-.37.84-1.23.96-2.24.11-.97-.1-2-.96-2.84-1.8-1.8-3.85-1.23-4.58-.5l-2.42 2.41-1.11 1.12-.35.34-.09.1-.02.02h-.01l-.71-.7-.7-.7v-.02l.03-.02.09-.1.34-.34 1.12-1.11 2.41-2.42c1.48-1.48 4.8-2.11 7.42.5a5.33 5.33 0 0 1 1.53 4.49c-.16 1.4-.8 2.7-1.53 3.43l-1.92 1.91-.77.77-.23.23-.06.07-.02.01-.71-.7zm0 0l.7.7a1 1 0 0 1-1.4-1.4l.7.7zM7.8 11.8l.7.7.7.7v.01l-.01.02-.07.06-.23.23-.77.77-1.91 1.92a4.1 4.1 0 0 0-1.07 2.16c-.13.88.05 1.9 1.07 2.92.93.93 2.05 1.04 3.15.77a5.86 5.86 0 0 0 2.43-1.27l1.84-1.84.82-.82.25-.25.07-.06.02-.02.71.7.7.7v.01l-.02.02-.06.07-.25.25-.82.82-1.84 1.84A7.79 7.79 0 0 1 9.84 24a5.13 5.13 0 0 1-5.05-1.3a5.28 5.28 0 0 1-1.63-4.62c.2-1.41.95-2.6 1.63-3.29l1.92-1.91.77-.77.23-.23.06-.07.02-.01zm7.7 6.7l-.7-.7a1 1 0 0 1 1.4 1.4l-.7-.7zm-6.3-5.3l-.7-.7-.7-.7a1 1 0 0 1 1.4 1.4zm7.5-1a1 1 0 0 0-1.4-1.4l-4.5 4.5a1 1 0 1 0 1.4 1.4l4.5-4.5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrokerAwards2020;
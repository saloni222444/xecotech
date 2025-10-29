import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BrokerAwards2023.css';
import DefaultBrokerAwards from './DefaultBrokerAwards';
import ZepfinnLogo from './Zepfinn_logo.png';

// Import SVG files
import card1 from './card1.svg';
import card2 from './card2.svg';
import card3 from './card3.svg';
import card4 from './card4.svg';
import card5 from './card5.svg';

const awardsData = {
  '2023': {
    sections: [
      {
        title: "Global competition",
        children: [
          {
            id: 1,
            title: "Broker of the Year 2023",
            broker: "OANDA",
            description: "King of the hill",
            logo: "https://s3.tradingview.com/brokers/logo/logo_160_oanda_upd.svg",
            link: "/broker/OANDA/",
            cardClass: "card-1",
            bgImage: card1
          },
          {
            id: 2,
            title: "Social Champion 2023",
            broker: "Pepperstone",
            description: "Traders' Romeo (or Juliet)",
            logo: "https://s3.tradingview.com/brokers/logo/Pepperstone_blue_logo_160.svg",
            link: "/broker/Pepperstone/",
            cardClass: "card-2",
            bgImage: card2
          },
          {
            id: 3,
            title: "Newcomer of the Year 2023",
            broker: "Fyers",
            description: "Swinging at the king",
            logo: "https://s3.tradingview.com/brokers/logo/160x160_LS__fyers.svg",
            link: "/broker/FYERS/",
            cardClass: "card-3",
            bgImage: card3
          },
          {
            id: 4,
            title: "Most Reliable Tech 2023",
            broker: "OKX",
            description: "Sent here from 2049",
            logo: "https://s3.tradingview.com/brokers/logo/160x160_LS__OKX_2023.svg",
            link: "/broker/OKX/",
            cardClass: "card-4",
            bgImage: card4
          }
        ]
      },
      {
        title: "Asset-focused competition",
        children: [
          {
            id: 5,
            title: "Best Multi-Asset Broker 2023",
            broker: "Interactive Brokers",
            description: "United Nations of symbols",
            logo: "https://s3.tradingview.com/brokers/logo/IBRK.svg",
            link: "/broker/IBKR/",
            cardClass: "card-5",
            bgImage: card5
          },
          {
            id: 6,
            title: "Best Stock Broker 2023",
            broker: "InnovestX",
            description: "Sovereign of stocks",
            logo: "https://s3.tradingview.com/brokers/logo/160x160_LS__innovestx.svg",
            link: "/broker/InnovestX/",
            cardClass: "card-6",
            bgImage: card5
          },
          {
            id: 7,
            title: "Best Forex Broker 2023",
            broker: "easyMarkets",
            description: "Empress of exchanges",
            logo: "https://s3.tradingview.com/brokers/logo/logo_160easymarkets.svg",
            link: "/broker/easyMarkets/",
            cardClass: "card-7",
            bgImage: card1
          },
          {
            id: 8,
            title: "Best Futures Broker 2023",
            broker: "AMP Futures",
            description: "Contract for greatness",
            logo: "https://s3.tradingview.com/brokers/logo/amp.svg",
            link: "/broker/AMP_Futures/",
            cardClass: "card-8",
            bgImage: card2
          },
          {
            id: 9,
            title: "Best Crypto Broker or Exchange 2023",
            broker: "BingX",
            description: "Saint of Satoshi",
            logo: "https://s3.tradingview.com/brokers/logo/BingX_logo_160_.svg",
            link: "/broker/BingX/",
            cardClass: "card-9",
            bgImage: card3
          }
        ]
      },
      {
        title: "Local competition",
        children: [
          {
            id: 10,
            title: "Best Broker in AMER Region 2023",
            broker: "TradeStation",
            description: "Wall Street's favorite",
            logo: "https://s3.tradingview.com/brokers/logo/160x160_LS__tradestation_new.svg",
            link: "/broker/TradeStation/",
            cardClass: "card-10",
            bgImage: card4
          },
          {
            id: 11,
            title: "Best Broker in EMEA Region 2023",
            broker: "İnfo Yatırım",
            description: "Champion of the union",
            logo: "https://s3.tradingview.com/brokers/logo/logo_160_infoyatirim.svg",
            link: "/broker/infoyatirim/",
            cardClass: "card-11",
            bgImage: card5
          },
          {
            id: 12,
            title: "Best Broker in APAC Region 2023",
            broker: "Dhan",
            description: "Shogun of securities",
            logo: "https://s3.tradingview.com/brokers/logo/160x160_LS__Dnan_2023.svg",
            link: "/broker/Dhan/",
            cardClass: "card-12",
            bgImage: card1
          }
        ]
      }
    ]
  }
};

const BrokerAwards2023 = () => {
  const [activeYear, setActiveYear] = useState('2023');
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
      className={`card ${award.cardClass} theme-winners_2023`}
      href={award.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ 
        backgroundColor: '#000000'
      }}
    >
      <div className="card-wrapper">
        <img 
          className="custom-logo" 
          src={ZepfinnLogo} 
          alt="Zepfinn Logo"
        />
        <h2 className="card-title">{award.title}</h2>
        <div className="about-wrap">
          <img className="card-logo" src={award.logo} alt={award.broker} />
          <div className="broker-info">
            <h3 className="broker-name">{award.broker}</h3>
            <span className="broker-description">{award.description}</span>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="broker-awards-container">
      <DefaultBrokerAwards />

      {/* Awards Sections */}
      <div className="card-block">
        <div className="sections-container">
          {currentData?.sections?.map((section, index) => (
            <div key={index} className="section-group">
              <span className="section-title">{section.title}</span>
              <div className="sections-block">
                {section.children.map((award) => (
                  <AwardCard key={award.id} award={award} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who's Next Section */}
      <div className="BO-gradient-wrapper">
        <div className="BO-content-wrapper">
          <div className="BO-cta-content">
            <h2 className="BO-cta-title">Who's next?</h2>
            <p className="BO-cta-text">
              Help your favorite win in 2025 by going to our Top Brokers page, finding your broker, and leaving a review.
            </p>
          </div>
          <a href="/brokers/" className="BO-round-button BO-black BO-primary">
            <span className="BO-button-content">Review brokers</span>
          </a>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="BO-share-container">
        <div className="BO-share-buttons">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.tradingview.com/broker-awards/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="BO-social-button"
            aria-label="Share on Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
              <path fill="currentColor" d="M15 23.95a10 10 0 1 0-3-.15V17H9.5v-3H12v-2.2c0-2.5 1.5-3.9 3.78-3.9 1.09 0 2.22.2 2.22.2v2.46h-1.25c-1.24 0-1.75.77-1.75 1.56V14h3l-.55 3H15v6.95z" />
            </svg>
          </a>

          <a
            href="https://twitter.com/intent/tweet?text=Broker%20Awards%202022%20by%20%40tradingview%20%E2%80%94%20Check%20out%20the%20best%20online%20brokers%20of%20the%20year.%20https%3A%2F%2Fwww.tradingview.com%2Fbroker-awards%2F"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="BO-social-button"
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
            className="BO-social-button"
            aria-label="Share on LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
              <path fill="currentColor" d="M6 4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm4 8v9H7v-9h3zm.32-3.06c0 .9-.67 1.61-1.75 1.61h-.02c-1.04 0-1.7-.71-1.7-1.6 0-.92.68-1.62 1.74-1.62s1.71.7 1.73 1.6zM15 21h-3s.04-8.12 0-9h3v1.17a2.73 2.73 0 0 1 2.5-1.38c2.03 0 3.5 1.16 3.5 4.03V21h-3v-4.82c0-1.26-.36-2.12-1.48-2.12-.97 0-1.52 1.06-1.52 1.9V21z" />
            </svg>
          </a>

          <button
            className={`BO-social-button ${copied ? 'BO-copied' : ''}`}
            onClick={copyToClipboard}
            aria-label={copied ? "Copied!" : "Copy link"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
              <path fill="currentColor" d="M10.8 10.2a1 1 0 0 1 0-1.4l.7.7.7.7a1 1 0 0 1-1.4 0zm7.7 5.3l-.7-.7v-.01l.01-.02.07-.06.23-.23.77-.77 1.91-1.92c.38-.37.84-1.23.96-2.24.11-.97-.1-2-.96-2.84-1.8-1.8-3.85-1.23-4.58-.5l-2.42 2.41-1.11 1.12-.35.34-.09.1-.02.02h-.01l-.71-.7-.7-.7v-.02l.03-.02.09-.1.34-.34 1.12-1.11 2.41-2.42c1.48-1.48 4.8-2.11 7.42.5a5.33 5.33 0 0 1 1.53 4.49c-.16 1.4-.8 2.7-1.53 3.43l-1.92 1.91-.77.77-.23.23-.06.07-.02.01-.71-.7zm0 0l.7.7a1 1 0 0 1-1.4-1.4l.7.7zM7.8 11.8l.7.7.7.7v.01l-.01.02-.07.06-.23.23-.77.77-1.91 1.92a4.1 4.1 0 0 0-1.07 2.16c-.13.88.05 1.9 1.07 2.92.93.93 2.05 1.04 3.15.77a5.86 5.86 0 0 0 2.43-1.27l1.84-1.84.82-.82.25-.25.07-.06.02-.02.71.7.7.7v.01l-.02.02-.06.07-.25.25-.82.82-1.84 1.84A7.79 7.79 0 0 1 9.84 24a5.13 5.13 0 0 1-5.05-1.3 5.28 5.28 0 0 1-1.63-4.62c.2-1.41.95-2.6 1.63-3.29l1.92-1.91.77-.77.23-.23.06-.07.02-.01zm7.7 6.7l-.7-.7a1 1 0 0 1 1.4 1.4l-.7-.7zm-6.3-5.3l-.7-.7-.7-.7a1 1 0 0 1 1.4 1.4zm7.5-1a1 1 0 0 0-1.4-1.4l-4.5 4.5a1 1 0 1 0 1.4 1.4l4.5-4.5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrokerAwards2023;
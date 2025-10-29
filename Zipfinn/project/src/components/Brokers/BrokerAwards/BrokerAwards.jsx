import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BrokerAwards.css';
import DefaultBrokerAwards from './DefaultBrokerAwards';

const awardsData = {
  '2024': {
    sections: [
      {
        title: "Best of the best",
        subtitle: "Topping the 2024 list, this prestigious award is given to one standout performer who has demonstrated exceptional achievements across all categories.",
        gridClass: "best-of-best-grid",
        children: [
          {
            id: 1,
            title: "Broker of the Year",
            broker: "easyMarkets",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/easymarkets_298x272_BL__svg.svg",
            link: "/broker/easyMarkets/",
            type: "gold"
          }
        ]
      },
      {
        title: "Global champions",
        subtitle: "Celebrating the brokers that have excelled on the international stage, showcasing outstanding performance, and innovation on the global market.",
        gridClass: "global-champions-grid",
        children: [
          {
            id: 2,
            title: "Newcomer of the Year",
            broker: "ThinkMarkets",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/298x272_BL__svg_ThinkMarkets.svg",
            link: "/broker/ThinkMarkets/",
            type: "silver"
          },
          {
            id: 3,
            title: "Social Champion",
            broker: "FXCM",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/fxcm_298x272_BL__svg.svg",
            link: "/broker/FXCM/",
            type: "silver"
          },
          {
            id: 4,
            title: "Master of feedback",
            broker: "FOREX.com",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/forexcom_298x272_BL__svg.svg",
            link: "/broker/FOREXcom/",
            type: "silver"
          },
          {
            id: 5,
            title: "Most Reliable Tech",
            broker: "Trade Nation",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/tradenation_298x272_BL__svg.svg",
            link: "/broker/TradeNation/",
            type: "silver"
          }
        ]
      },
      {
        title: "Best by asset classes",
        subtitle: "Highlighting brokers that have demonstrated excellence in managing and optimizing various asset classes for their users.",
        gridClass: "asset-classes-grid",
        children: [
          {
            id: 6,
            title: "Multi-asset",
            broker: "Interactive Brokers",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/interactivebrokers_298x272_BL__svg.svg",
            link: "/broker/IBKR/",
            type: "violet"
          },
          {
            id: 7,
            title: "Stocks",
            broker: "moomoo",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/moomoo_298x272_BL__svg.svg",
            link: "/broker/moomoo/",
            type: "violet"
          },
          {
            id: 8,
            title: "Futures",
            broker: "AMP Futures",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/amp_298x272_BL__svg.svg",
            link: "/broker/AMP_Futures/",
            type: "violet"
          },
          {
            id: 9,
            title: "Options",
            broker: "Dhan",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/56dhan_298x272_BL__svg.svg",
            link: "/broker/Dhan/",
            type: "violet"
          },
          {
            id: 10,
            title: "Forex / CFD",
            broker: "Eightcap",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/298x272_BL__svg_Eightcap.svg",
            link: "/broker/Eightcap/",
            type: "violet"
          },
          {
            id: 11,
            title: "Crypto exchange",
            broker: "OKX",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/okx_298x272_BL__svg.svg",
            link: "/broker/OKX/",
            type: "violet"
          }
        ]
      },
      {
        title: "Best by region",
        subtitle: "Giving recognition where recognition is due to brokers that have excelled in regional markets, providing outstanding performance, and localized services to meet market needs.",
        gridClass: "region-grid",
        children: [
          {
            id: 12,
            title: "North America",
            broker: "tastytrade",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/tastytrade_298x272_BL__svg.svg",
            link: "/broker/tastytrade/",
            type: "green"
          },
          {
            id: 13,
            title: "Europe",
            broker: "TradeStation",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/tradestation_298x272_BL__svg.svg",
            link: "/broker/TradeStation/",
            type: "green"
          },
          {
            id: 14,
            title: "Middle East",
            broker: "Capital.com",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/capitalcom_298x272_BL__svg.svg",
            link: "/broker/Capitalcom/",
            type: "green"
          },
          {
            id: 15,
            title: "South Asia",
            broker: "Fyers",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/fyers_298x272_BL__svg.svg",
            link: "/broker/FYERS/",
            type: "green"
          },
          {
            id: 16,
            title: "Southeast Asia",
            broker: "DNSE",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/dnse_298x272_BL__svg.svg",
            link: "/broker/DNSE/",
            type: "green"
          }
        ]
      },
      {
        title: "Best in forex and CFD by region",
        subtitle: "Celebrating the champions of AMER, APAC, and EMEA. These brokers have gone above and beyond to provide outstanding service and localized tools to meet the needs of forex and CFD markets in their respective regions.",
        gridClass: "forex-cfd-grid",
        children: [
          {
            id: 17,
            title: "AMER",
            broker: "OANDA",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/oanda_298x272_BL__svg.svg",
            link: "/broker/OANDA/",
            type: "blue"
          },
          {
            id: 18,
            title: "APAC",
            broker: "IC Markets",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/icmarkets_298x272_BL__svg.svg",
            link: "/broker/ICmarkets/",
            type: "blue"
          },
          {
            id: 19,
            title: "EMEA",
            broker: "Pepperstone",
            description: "",
            logo: "https://s3.tradingview.com/brokers/widget/peperstone_298x272_BL__svg.svg",
            link: "/broker/Pepperstone/",
            type: "blue"
          }
        ]
      }
    ]
  },
};

const BrokerAwards = () => {
  const [activeYear, setActiveYear] = useState('2024');
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

const GoldAwardCard = ({ award }) => (
    <a 
      href={award.link} 
      className="gold-award-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="gold-shimmer"></div>
      <div className="gold-card-content">
        <div className="gold-card-logo">
          <img src={award.logo} alt={award.broker} />
        </div>
        <div className="gold-card-title">{award.title}</div>
        <div className="gold-card-broker">{award.broker}</div>
      </div>
    </a>
  );

  const AwardCard = ({ award, cardType }) => (
    <a 
      href={award.link} 
      className={`HO-award-card HO-go-award-card ${cardType} HO-${cardType}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="HO-custom-border HO-go-custom-border"></div>
      <div className="HO-custom-gradient HO-go-custom-gradient"></div>
      <div className="HO-overflow-content HO-go-overflow-content">
        <div className="HO-logo-container HO-go-logo-container">
          <img src={award.logo} alt={award.title} loading="lazy" />
        </div>
        <div className="HO-about-container HO-go-about-container">
          <span className="HO-award-title HO-go-award-title">{award.title}</span>
          <span className="HO-award-broker HO-go-award-broker">{award.broker}</span>
        </div>
      </div>
    </a>
  );

  return (
    <div className="HO-broker-awards-container HO-go-broker-awards-container">
      <DefaultBrokerAwards />
      {/* Awards Sections */}
      <div className="HO-awards-sections HO-go-awards-sections">
        {currentData?.sections?.map((section, index) => (
          <div key={index} className="HO-award-section-container HO-go-award-section-container">
            <div className="HO-section-header HO-go-section-header">
              <h3 className="HO-section-title HO-go-section-title">{section.title}</h3>
              <span className="HO-section-subtitle HO-go-section-subtitle">{section.subtitle}</span>
            </div>
            
            <div className={`HO-cards-container HO-go-cards-container ${section.gridClass} HO-${section.gridClass}`}>
              {section.children.map((award) => (
                award.type === 'gold' ? (
                  <div key={award.id} className="HO-full-width-container HO-go-full-width-container">
                    <GoldAwardCard award={award} />
                  </div>
                ) : (
                  <AwardCard 
                    key={award.id} 
                    award={award} 
                    cardType={award.type}
                  />
                )
              ))}
            </div>
          </div>
        ))}
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

export default BrokerAwards;
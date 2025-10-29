import React from 'react';
import './IndianStocksNews.css';

const IndianStocksNews = () => {
  // Sample news data - you can replace this with actual API data
  const newsItems = [
    {
      id: 1,
      logo: "https://s3-symbol-logo.tradingview.com/akzo-nobel.svg",
      source: "CNBC TV18",
      time: "3 hours ago",
      title: "Sign in to read exclusive news",
      isExclusive: true
    },
    {
      id: 2,
      logo: "https://s3-symbol-logo.tradingview.com/india-capital-growth-fund-limited.svg",
      source: "London Stock Exchange",
      time: "4 hours ago",
      title: "REG - India CapitalGrwthFd - Net Asset Value Daily Estimate",
      isExclusive: false
    },
    {
      id: 3,
      logo: "https://s3-symbol-logo.tradingview.com/birla.svg",
      source: "CNBC TV18",
      time: "4 hours ago",
      title: "Sign in to read exclusive news",
      isExclusive: true
    },
    {
      id: 4,
      logo: "https://s3-symbol-logo.tradingview.com/dalmia-bharat.svg",
      source: "CNBC TV18",
      time: "4 hours ago",
      title: "Sign in to read exclusive news",
      isExclusive: true
    },
    {
      id: 5,
      logo: "https://s3-symbol-logo.tradingview.com/tata.svg",
      source: "CNBC TV18",
      time: "4 hours ago",
      title: "Sign in to read exclusive news",
      isExclusive: true
    },
    {
      id: 6,
      logos: [
        "https://s3-symbol-logo.tradingview.com/unilever.svg",
        "https://s3-symbol-logo.tradingview.com/infosys.svg",
        "https://s3-symbol-logo.tradingview.com/reliance-industrial-infrastructure.svg"
      ],
      source: "Dow Jones Newswires",
      time: "4 hours ago",
      title: "Sign in to read exclusive news",
      isExclusive: true
    },
    {
      id: 7,
      logo: "https://s3-symbol-logo.tradingview.com/piramal.svg",
      source: "CNBC TV18",
      time: "4 hours ago",
      title: "Sign in to read exclusive news",
      isExclusive: true
    },
    {
      id: 8,
      logo: "https://s3-symbol-logo.tradingview.com/ashoka-india-equity.svg",
      source: "London Stock Exchange",
      time: "4 hours ago",
      title: "REG - Ashoka India Equity - Net Asset Value(s)",
      isExclusive: false
    },
    {
      id: 9,
      logo: "https://s3-symbol-logo.tradingview.com/jindal-poly-films.svg",
      source: "CNBC TV18",
      time: "4 hours ago",
      title: "Sign in to read exclusive news",
      isExclusive: true
    },
    {
      id: 10,
      logos: [
        "https://s3-symbol-logo.tradingview.com/nvidia.svg",
        "https://s3-symbol-logo.tradingview.com/alibaba.svg"
      ],
      source: "CNBC TV18",
      time: "4 hours ago",
      title: "Sign in to read exclusive news",
      isExclusive: true
    },
    {
      id: 11,
      logo: "https://s3-symbol-logo.tradingview.com/ipca.svg",
      source: "CNBC TV18",
      time: "5 hours ago",
      title: "Sign in to read exclusive news",
      isExclusive: true
    },
    {
      id: 12,
      logo: "https://s3-symbol-logo.tradingview.com/glenmark.svg",
      source: "Moneycontrol",
      time: "5 hours ago",
      title: "Glenmark signs cancer drug licensing deal with China's Hengrui for $18 million upfront with $1.1 billion in milestone payments",
      isExclusive: false
    },
    {
      id: 13,
      logos: [
        "https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDT.svg",
        "https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDC.svg",
        "https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg"
      ],
      source: "CNBC TV18",
      time: "5 hours ago",
      title: "Sign in to read exclusive news",
      isExclusive: true
    },
    {
      id: 14,
      logo: "https://s3-symbol-logo.tradingview.com/bhp.svg",
      source: "Reuters",
      time: "5 hours ago",
      title: "Metallurgical coal is set to rise from the doldrums as green steel ambition fades: Russell",
      isExclusive: false
    },
    {
      id: 15,
      logos: [
        "https://s3-symbol-logo.tradingview.com/waaree-energies-limited.svg",
        "https://s3-symbol-logo.tradingview.com/adani.svg",
        "https://s3-symbol-logo.tradingview.com/first-solar.svg",
        "https://s3-symbol-logo.tradingview.com/vikram-solar-limited.svg"
      ],
      source: "Reuters",
      time: "5 hours ago",
      title: "US solar dumping probe is India's Icarus moment",
      isExclusive: false
    }
  ];

  return (
    <div className="stocks-news-container" data-cms-base-widget="true" data-container-name="indian-stocks" data-an-widget-id="indian-stocks">
      <div className="stocks-news-header">
        <div className="header-wrapper">
          <span className="title-wrapper">
            <div className="title-container">
              <a className="title-link" href="/markets/stocks-india/news/">
                <h3 className="news-title">
                  Indian stocks <span className="no-break">news
                    <span role="img" className="arrow-icon" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                        <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                      </svg>
                    </span>
                  </span>
                </h3>
              </a>
            </div>
          </span>
        </div>
      </div>
      
      <div className="stocks-news-content">
        <div className="news-grid">
          {newsItems.map(item => (
            <a key={item.id} href="#" target="_blank" className="news-card">
              <article className="news-article" data-qa-id="news-headline-card">
                <div className="article-container">
                  <div className="article-header">
                    <ul className="logo-stack">
                      {item.logos ? (
                        item.logos.map((logo, index) => (
                          <li key={index}>
                            <img className="company-logo" src={logo} alt="" loading="lazy" />
                          </li>
                        ))
                      ) : (
                        <li>
                          <img className="company-logo" src={item.logo} alt="" loading="lazy" />
                        </li>
                      )}
                    </ul>
                    <span className="time-dot">
                      <relative-time locale="en" event-time={new Date().toISOString()} className="apply-common-tooltip">
                        {item.time}
                      </relative-time>
                    </span>
                    <span>
                      <span className="source-name">{item.source}</span>
                      {item.isExclusive && (
                        <span role="img" className="lock-icon" aria-hidden="true">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                            <path fill="currentColor" fillRule="evenodd" d="M6 6a3 3 0 0 1 6 0v1H6V6ZM5 7V6a4 4 0 1 1 8 0v1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2Zm3 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Z"></path>
                          </svg>
                        </span>
                      )}
                    </span>
                  </div>
                  <div className={`article-title ${item.isExclusive ? 'exclusive-title' : ''}`} data-qa-id="news-headline-title">
                    {item.title}
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
      
      <div className="stocks-news-footer">
        <div data-id="more-button">
          <a href="/markets/stocks-india/news/" className="more-button">
            <span className="button-background"></span>
            <span className="button-content">
              <span className="button-text">
                Keep <span className="no-break">reading
                  <span role="img" className="button-arrow" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                      <path fill="currentColor" d="M7.56 4.5a.75.75 0 1 0-1.12 1l1.12-1zM10.5 9l.56.5a.75.75 0 0 0 0-1l-.56.5zm-4.06 3.5a.75.75 0 0 0 1.12 1l-1.12-1zm0-7l3.5 4 1.12-1-3.5-4-1.12 1zm3.5 3l-3.5 4 1.12 1 3.5-4-1.12-1z"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndianStocksNews;
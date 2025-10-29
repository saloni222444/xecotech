import React, { useRef } from 'react';
import './StockSection.css';

const StocksSection = () => {
  const scrollRefs = {
    communityTrends: useRef(null),
    tradeIdeas: useRef(null),
    earnings: useRef(null)
  };

  // Sample data for Indian stocks
  const communityTrends = [
    { symbol: 'ICICIBANK', name: 'ICICI Bank Limited', price: '1,372.00', change: '+1.78%', changeDirection: 'up' },
    { symbol: 'ADANIENT', name: 'Adani Enterprises Limited', price: '2,592.70', change: '+3.46%', changeDirection: 'up' },
    { symbol: 'ADANIGREEN', name: 'Adani Green Energy Limited', price: '1,064.70', change: '+3.69%', changeDirection: 'up' },
    { symbol: 'ADANIPORTS', name: 'Adani Ports & Special Economic Zone Ltd', price: '1,422.70', change: '+1.37%', changeDirection: 'up' },
    { symbol: 'BHARTIARTL', name: 'Bharti Airtel Limited', price: '1,867.60', change: '−0.57%', changeDirection: 'down' },
    { symbol: 'APOLLOHOSP', name: 'Apollo Hospitals Enterprise Limited', price: '7,441.00', change: '+0.43%', changeDirection: 'up' },
    { symbol: 'ASIANPAINT', name: 'Asian Paints Ltd.', price: '2,335.80', change: '−0.60%', changeDirection: 'down' },
    { symbol: 'AXISBANK', name: 'Axis Bank Limited', price: '1,159.50', change: '+2.47%', changeDirection: 'up' },
    { symbol: 'BAJAJ_AUTO', name: 'Bajaj Auto Limited', price: '8,626.50', change: '−0.60%', changeDirection: 'down' },
    { symbol: 'HDFCBANK', name: 'HDFC Bank Limited', price: '965.25', change: '+1.50%', changeDirection: 'up' }
  ];

  const tradeIdeas = [
    {
      title: 'LIC – High Probability Breakout Setup!',
      description: 'After a long consolidation, LIC is now approaching a falling trendline breakout with strong bullish momentum.',
      author: 'TradeForReward',
      date: 'Sep 30',
      symbol: 'LICI',
      strategy: 'long',
      comments: 1,
      boosts: 17,
      editorsPick: true
    },
    {
      title: 'SHRIRAMFIN',
      description: 'Strong Breakout Candidates! Inverse head and shoulders pattern, Uptrend is Still Intact',
      author: 'Charts_insiders',
      date: '9 hours ago',
      symbol: 'SHRIRAMFIN',
      strategy: 'long',
      comments: 1,
      boosts: 6,
      editorsPick: true
    },
    {
      title: 'How to Backtest, Create a Strategy and Execute a Trade',
      description: 'In this video I have showed a good trade is executed with proper planning and mindset.',
      author: 'Averoy_Apoorv_Analysis',
      date: 'Sep 30',
      symbol: 'TATAINVEST',
      strategy: 'long',
      comments: 0,
      boosts: 12,
      isVideo: true,
      duration: '14:52'
    }
  ];

  const highestVolume = [
    { symbol: 'NETWEB', name: 'Netweb Technologies India Limited', price: '4,062.10', change: '+11.34%', changeDirection: 'up' },
    { symbol: 'ICICIBANK', name: 'ICICI Bank Limited', price: '1,372.00', change: '+1.78%', changeDirection: 'up' },
    { symbol: 'HDFCBANK', name: 'HDFC Bank Limited', price: '965.25', change: '+1.50%', changeDirection: 'up' },
    { symbol: 'TATAMOTORS', name: 'Tata Motors Limited', price: '718.35', change: '+5.61%', changeDirection: 'up' },
    { symbol: 'RELIANCE', name: 'Reliance Industries Limited', price: '1,368.70', change: '+0.34%', changeDirection: 'up' }
  ];

  const mostVolatile = [
    { symbol: 'ADESHWAR', name: 'Adeshwar Meditex Ltd.', price: '16.20', change: '−6.09%', changeDirection: 'down' },
    { symbol: 'JAINREC', name: 'JAIN RESOURCE RECYCLING L', price: '318.06', change: '0.00%', changeDirection: 'neutral' },
    { symbol: 'IFINSEC', name: 'India Finsec Ltd.', price: '171.90', change: '−1.77%', changeDirection: 'down' },
    { symbol: 'MADHUVEER', name: 'Madhuveer Com 18 Network Ltd.', price: '154.70', change: '−18.06%', changeDirection: 'down' },
    { symbol: 'ISLCONSUL', name: 'ISL Consulting Limited', price: '27.79', change: '+4.12%', changeDirection: 'up' }
  ];

  const stockGainers = [
    { symbol: 'ATLANTAA', name: 'Atlantaa Ltd', price: '46.38', change: '+20.00%', changeDirection: 'up' },
    { symbol: 'HIGHENE', name: 'High Energy Batteries Ltd.', price: '622.20', change: '+20.00%', changeDirection: 'up' },
    { symbol: 'SPCAPIT', name: 'SP Capital Financing Ltd.', price: '58.80', change: '+20.00%', changeDirection: 'up' },
    { symbol: 'OWAIS', name: 'Owais Metal & Mineral Processing Ltd.', price: '507.10', change: '+20.00%', changeDirection: 'up' },
    { symbol: 'SIKKO', name: 'Sikko Industries Ltd.', price: '88.41', change: '+19.99%', changeDirection: 'up' }
  ];

  const stockLosers = [
    { symbol: 'MADHUVEER', name: 'Madhuveer Com 18 Network Ltd.', price: '154.70', change: '−18.06%', changeDirection: 'down' },
    { symbol: 'TRUSTEDGE', name: 'Trustedge Capital Limited', price: '110.85', change: '−1.94%', changeDirection: 'down' },
    { symbol: 'SHANTHALA', name: 'Shanthala FMCG Products Ltd.', price: '32.50', change: '−10.47%', changeDirection: 'down' },
    { symbol: 'CEDAAR', name: 'Cedaar Textile Ltd.', price: '85.40', change: '−10.11%', changeDirection: 'down' },
    { symbol: 'GML', name: 'Galaxy Medicare Limited', price: '29.20', change: '−10.02%', changeDirection: 'down' }
  ];

  const earningsCalendar = [
    { symbol: 'AVANTEL', name: 'Avantel Limited', date: 'Oct 8', time: '17:30 GMT+5:30', actual: '—', estimate: '—' },
    { symbol: 'PLASTIBLEN', name: 'Plastiblends India Limited', date: 'Oct 8', time: '17:30 GMT+5:30', actual: '—', estimate: '—' },
    { symbol: 'JTLIND', name: 'JTL Industries Limited', date: 'Oct 8', time: '17:30 GMT+5:30', actual: '—', estimate: '—' },
    { symbol: 'IREDA', name: 'Indian Renewable Energy Development Agency Ltd.', date: 'Oct 9', time: '17:30 GMT+5:30', actual: '—', estimate: '—' },
    { symbol: 'HCLTECH', name: 'HCL Technologies Limited', date: 'Oct 9', time: '17:30 GMT+5:30', actual: '—', estimate: '15.57' },
    { symbol: 'TCS', name: 'Tata Consultancy Services Limited', date: 'Oct 9', time: '17:30 GMT+5:30', actual: '—', estimate: '34.62' }
  ];

  const newsItems = [
    { 
      title: 'Sign in to read exclusive news', 
      source: 'CNBC TV18', 
      time: '40 minutes ago', 
      symbols: ['WAAREE'],
      isPremium: true
    },
    { 
      title: 'European oil refineries bet on green projects to secure long-term future', 
      source: 'Reuters', 
      time: '1 hour ago', 
      symbols: ['PKNORLEN']
    },
    { 
      title: 'BofA Securities Europe acquires Eternal shares worth Rs 267 crore from Goldman Sachs', 
      source: 'Moneycontrol', 
      time: '2 hours ago', 
      symbols: ['RBLBANK', 'GS', 'MS', 'ZOMATO']
    }
  ];

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 300;
      if (direction === 'left') {
        ref.current.scrollLeft -= scrollAmount;
      } else {
        ref.current.scrollLeft += scrollAmount;
      }
    }
  };

  const TickerCard = ({ symbol, name, price, change, changeDirection, showStatus = false }) => (
    <div className="AAO-stock-ticker-card">
      <div className="AAO-ticker-card-content">
        <img
          src={`https://s3-symbol-logo.tradingview.com/${symbol.toLowerCase()}.svg`}
          alt={symbol}
          className="AAO-ticker-logo"
          onError={(e) => {
            e.target.src = `https://s3-symbol-logo.tradingview.com/placeholder.svg`;
          }}
        />
        <a href={`/symbols/NSE-${symbol}/`} className="AAO-ticker-info">
          <div className="AAO-ticker-title-container">
            <span className="AAO-ticker-name">{name}</span>
            {showStatus && (
              <div className="AAO-ticker-status">
                <span className="AAO-data-mode" title="Real-time">R</span>
                <span className="AAO-market-status" title="Market closed">
                  <span className="AAO-status-label">Market closed</span>
                  <span className="AAO-status-icon"></span>
                </span>
              </div>
            )}
          </div>
          <span className="AAO-ticker-symbol">{symbol}</span>
        </a>
        <div className="AAO-ticker-price-container">
          <span className="AAO-price-info">
            <span className="AAO-ticker-price">{price}</span>
            <span className="AAO-ticker-currency">INR</span>
          </span>
          <span className={`AAO-ticker-change AAO-${changeDirection}`}>{change}</span>
        </div>
      </div>
    </div>
  );

  const IdeaCard = ({ idea }) => (
    <article className="AAO-idea-card">
      <div className="AAO-idea-text">
        <a href={`/chart/${idea.symbol}/`} className="AAO-idea-title">{idea.title}</a>
        <p className="AAO-idea-description">{idea.description}</p>
      </div>
      <div className="AAO-idea-preview">
        <div className="AAO-preview-grid">
          {idea.editorsPick && (
            <div className="AAO-preview-corner AAO-top-left">
              <a className="AAO-editors-pick-badge" title="Editors' picks" href="/ideas/editors-picks/">
                <img src="https://static.tradingview.com/static/bundles/logo-tradingview.f3af8e3579cc12751704.svg" alt="Editors' picks" />
              </a>
            </div>
          )}
          {idea.isVideo && (
            <div className="AAO-preview-middle">
              <div className="AAO-play-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none">
                  <path fill="white" d="M9 6.76619C9 5.9889 9.84797 5.50879 10.5145 5.9087L22.5708 13.1425C23.2182 13.5309 23.2182 14.4691 22.5708 14.8575L10.5145 22.0913C9.84797 22.4912 9 22.0111 9 21.2338V6.76619Z"></path>
                </svg>
              </div>
            </div>
          )}
          <div className="AAO-preview-corner AAO-bottom-left">
            <a href={`/symbols/NSE-${idea.symbol}/`} className="AAO-logo-icon">
              <img
                src={`https://s3-symbol-logo.tradingview.com/${idea.symbol.toLowerCase()}.svg`}
                alt={idea.symbol}
              />
            </a>
            <span className={`AAO-strategy-icon AAO-${idea.strategy}`} title={idea.strategy === 'long' ? 'Long' : 'Short'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                <path fill="currentColor" d="M12 4h2v8h-2V7.41l-7.3 7.3-1.4-1.42L10.58 6H6V4h6z"></path>
              </svg>
            </span>
          </div>
          {idea.isVideo && (
            <div className="AAO-preview-corner AAO-bottom-right">
              <span className="AAO-video-duration">{idea.duration}</span>
            </div>
          )}
        </div>
      </div>
      <div className="AAO-idea-meta">
        <div className="AAO-idea-author">
          <a href={`/u/${idea.author}/`} className="AAO-author-link">by {idea.author}</a>
          <time className="AAO-publish-date">{idea.date}</time>
        </div>
        <div className="AAO-idea-actions">
          <a href={`/chart/${idea.symbol}/#comments`} className="AAO-comment-button" title="Comment">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="16" height="16">
              <path fill="currentColor" fillRule="evenodd" d="M9 22h11a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v17l1.5-1L9 22Zm-4.5 1.2 3.67-2.45.38-.25H20a2.5 2.5 0 0 0 2.5-2.5V9A2.5 2.5 0 0 0 20 6.5H7A2.5 2.5 0 0 0 4.5 9v14.2ZM9 11h9v1.5H9V11Zm9 3.5H9V16h9v-1.5Z"></path>
            </svg>
            <span>{idea.comments}</span>
          </a>
          <button className="AAO-boost-button" title="Boost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="16" height="16">
              <path fill="currentColor" d="m6.94 17.9-1.06-1.06-1.6 1.59 1.07 1.06 1.59-1.6ZM9.06 20.02 8 18.96l-3 3 1.06 1.07 3-3.01ZM10.12 21.08l1.06 1.06-1.59 1.6-1.06-1.07 1.6-1.59Z" data-part="fire"></path>
              <path fill="currentColor" d="M14.72 13.3a2.5 2.5 0 1 0 3.53-3.53 2.5 2.5 0 0 0-3.53 3.53Z" data-part="body"></path>
              <path fill="currentColor" fillRule="evenodd" d="m23.91 4.1.04.67c.07 1.09-.05 3.04-.58 5.12-.5 1.99-1.4 4.17-2.95 5.84v4.25L15 25.4l-1.1-4.77c-.44.22-.8.37-1.07.46l-.44.14-5.6-5.6.15-.44c.09-.27.23-.63.45-1.07l-4.77-1.1L8.04 7.6h4.25a13.38 13.38 0 0 1 5.84-2.95c2.09-.53 4.04-.64 5.12-.58l.66.04Zm-8.65 15.78a25.62 25.62 0 0 0 3.66-2.72v2.2l-3.07 3.06-.59-2.54ZM10.86 9.1a25.63 25.63 0 0 0-2.72 3.66l-2.54-.6L8.66 9.1h2.2Zm7.64-3c-1.95.5-3.95 1.36-5.37 2.78a22.2 22.2 0 0 0-4.6 6.36l4.25 4.26a22.2 22.2 0 0 0 6.36-4.6 11.65 11.65 0 0 0 2.78-5.38c.39-1.53.53-2.97.55-3.97-1 .02-2.44.16-3.97.55Z" data-part="body"></path>
            </svg>
            <span>{idea.boosts}</span>
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <section className="AAO-stocks-section" data-an-section-id="stocks">
      <div className="AAO-section-container">
        
        {/* Header */}
        <div className="AAO-section-header">
          <div className="AAO-header-wrapper">
            <div className="AAO-logo-text-wrapper">
              <img src="https://s3-symbol-logo.tradingview.com/country/IN.svg" alt="India" className="AAO-flag-logo" />
              <div className="AAO-title-wrapper">
                <h2>
                  <a href="/markets/stocks-india/">
                    Indian stocks
                    <span className="AAO-arrow-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                        <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                      </svg>
                    </span>
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="AAO-section-content">
          
          {/* Community Trends */}
          <div className="AAO-widget-group">
            <div className="AAO-widget-header">
              <h3 className="AAO-widget-title">Community trends</h3>
            </div>
            <div className="AAO-horizontal-scroll-container">
              <button
                className="AAO-scroll-button AAO-left"
                onClick={() => scroll(scrollRefs.communityTrends, 'left')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                  <path fill="currentColor" d="m9.59 14 6.7 6.7 1.42-1.4-5.3-5.3 5.3-5.3-1.41-1.4L9.59 14Z"></path>
                </svg>
              </button>
              <div className="AAO-scroll-content" ref={scrollRefs.communityTrends}>
                {communityTrends.map((stock, index) => (
                  <div key={index} className="AAO-custom-ticker-card">
                    <TickerCard {...stock} showStatus={true} />
                  </div>
                ))}
              </div>
              <button
                className="AAO-scroll-button AAO-right"
                onClick={() => scroll(scrollRefs.communityTrends, 'right')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                  <path fill="currentColor" d="m18.41 14-6.7 6.7-1.42-1.4 5.3-5.3-5.3-5.3 1.41-1.4 6.71 6.7Z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Trade Ideas */}
          <div className="AAO-widget-group">
            <div className="AAO-widget-header">
              <h3>
                <a href="/markets/stocks-india/ideas/">
                  Trade ideas
                  <span className="AAO-arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                      <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                    </svg>
                  </span>
                </a>
              </h3>
            </div>
            <div className="AAO-horizontal-scroll-container">
              <div className="AAO-scroll-content AAO-ideas-grid" ref={scrollRefs.tradeIdeas}>
                {tradeIdeas.map((idea, index) => (
                  <IdeaCard key={index} idea={idea} />
                ))}
                <a href="/markets/stocks-india/ideas/" className="AAO-see-all-card">
                  <p className="AAO-see-all-content">
                    <span>See all stocks ideas</span>
                    <span className="AAO-arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                        <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                      </svg>
                    </span>
                  </p>
                </a>
              </div>
              <button className="AAO-scroll-button AAO-right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                  <path fill="currentColor" d="m18.41 14-6.7 6.7-1.42-1.4 5.3-5.3-5.3-5.3 1.41-1.4 6.71 6.7Z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Hotlist Widgets */}
          <div className="AAO-hotlist-widgets">
            <div className="AAO-widgets-grid">
              
              {/* Highest Volume */}
              <div className="AAO-widget-card">
                <div className="AAO-widget-header">
                  <a href="/markets/stocks-india/market-movers-active/" className="AAO-title-link">
                    <h3 className="AAO-widget-title">Highest volume stocks</h3>
                  </a>
                </div>
                <div className="AAO-widget-content">
                  {highestVolume.map((stock, index) => (
                    <TickerCard key={index} {...stock} showStatus={true} />
                  ))}
                </div>
                <div className="AAO-widget-footer">
                  <a href="/markets/stocks-india/market-movers-active/" className="AAO-more-button">
                    See all most actively traded stocks
                  </a>
                </div>
              </div>

              {/* Most Volatile */}
              <div className="AAO-widget-card">
                <div className="AAO-widget-header">
                  <a href="/markets/stocks-india/market-movers-most-volatile/" className="AAO-title-link">
                    <h3 className="AAO-widget-title">Most volatile stocks</h3>
                  </a>
                </div>
                <div className="AAO-widget-content">
                  {mostVolatile.map((stock, index) => (
                    <TickerCard key={index} {...stock} showStatus={true} />
                  ))}
                </div>
                <div className="AAO-widget-footer">
                  <a href="/markets/stocks-india/market-movers-most-volatile/" className="AAO-more-button">
                    See all stocks with biggest price changes
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Gainers & Losers */}
          <div className="AAO-gainers-losers">
            <div className="AAO-widgets-grid">
              
              {/* Stock Gainers */}
              <div className="AAO-widget-card">
                <div className="AAO-widget-header">
                  <a href="/markets/stocks-india/market-movers-gainers/" className="AAO-title-link">
                    <h3 className="AAO-widget-title">Stock gainers</h3>
                  </a>
                </div>
                <div className="AAO-widget-content AAO-large">
                  {stockGainers.map((stock, index) => (
                    <TickerCard key={index} {...stock} showStatus={true} />
                  ))}
                </div>
                <div className="AAO-widget-footer">
                  <a href="/markets/stocks-india/market-movers-gainers/" className="AAO-more-button">
                    See all stocks with largest daily growth
                  </a>
                </div>
              </div>

              {/* Stock Losers */}
              <div className="AAO-widget-card">
                <div className="AAO-widget-header">
                  <a href="/markets/stocks-india/market-movers-losers/" className="AAO-title-link">
                    <h3 className="AAO-widget-title">Stock losers</h3>
                  </a>
                </div>
                <div className="AAO-widget-content AAO-large">
                  {stockLosers.map((stock, index) => (
                    <TickerCard key={index} {...stock} showStatus={true} />
                  ))}
                </div>
                <div className="AAO-widget-footer">
                  <a href="/markets/stocks-india/market-movers-losers/" className="AAO-more-button">
                    See all stocks with largest daily drop
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Earnings Calendar */}
          <div className="AAO-widget-group">
            <div className="AAO-widget-header">
              <a href="/markets/stocks-india/earnings/" className="AAO-title-link">
                <h3 className="AAO-widget-title">Earnings Calendar</h3>
              </a>
            </div>
            <div className="AAO-horizontal-scroll-container">
              <div className="AAO-scroll-content AAO-earnings-grid" ref={scrollRefs.earnings}>
                {earningsCalendar.map((earning, index) => (
                  <a key={index} href={`/symbols/NSE-${earning.symbol}/`} className="AAO-earning-card">
                    <div className="AAO-earning-top">
                      <div className="AAO-earning-date">{earning.date}</div>
                    </div>
                    <div className="AAO-earning-title">
                      <img
                        src={`https://s3-symbol-logo.tradingview.com/${earning.symbol.toLowerCase()}.svg`}
                        alt={earning.symbol}
                        className="AAO-earning-logo"
                      />
                      <div className="AAO-earning-info">
                        <span className="AAO-earning-symbol">{earning.symbol}</span>
                        <span className="AAO-earning-company">{earning.name}</span>
                      </div>
                    </div>
                    <div className="AAO-earning-stats">
                      <div className="AAO-stat">
                        <div className="AAO-stat-title">Actual</div>
                        <div className="AAO-stat-value AAO-highlighted">{earning.actual}</div>
                      </div>
                      <div className="AAO-stat">
                        <div className="AAO-stat-title">Estimate</div>
                        <div className="AAO-stat-value">
                          {earning.estimate}
                          {earning.estimate !== '—' && <span className="AAO-currency">INR</span>}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
                <a href="/markets/stocks-india/earnings/" className="AAO-see-all-card">
                  <p className="AAO-see-all-content">
                    <span>See more events</span>
                    <span className="AAO-arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                        <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                      </svg>
                    </span>
                  </p>
                </a>
              </div>
              <button className="AAO-scroll-button AAO-right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                  <path fill="currentColor" d="m18.41 14-6.7 6.7-1.42-1.4 5.3-5.3-5.3-5.3 1.41-1.4 6.71 6.7Z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Indian Stocks News */}
          <div className="AAO-widget-group">
            <div className="AAO-widget-header">
              <a href="/markets/stocks-india/news/" className="AAO-title-link">
                <h3 className="AAO-widget-title">Indian stocks news</h3>
              </a>
            </div>
            <div className="AAO-news-grid">
              {newsItems.map((news, index) => (
                <a key={index} href="/news/" target="_blank" className="AAO-news-card">
                  <article className="AAO-news-article">
                    <div className="AAO-news-header">
                      <div className="AAO-news-symbols">
                        {news.symbols.map((symbol, i) => (
                          <img key={i}
                            src={`https://s3-symbol-logo.tradingview.com/${symbol.toLowerCase()}.svg`}
                            alt={symbol}
                            className="AAO-news-logo"
                          />
                        ))}
                      </div>
                      <span className="AAO-news-time">{news.time}</span>
                      <span className="AAO-news-source">
                        {news.source}
                        {news.isPremium && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="16" height="16">
                            <path fill="currentColor" fillRule="evenodd" d="M6 6a3 3 0 0 1 6 0v1H6V6ZM5 7V6a4 4 0 1 1 8 0v1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2Zm3 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Z"></path>
                          </svg>
                        )}
                      </span>
                    </div>
                    <div className="AAO-news-title">{news.title}</div>
                  </article>
                </a>
              ))}
            </div>
            <div className="AAO-widget-footer">
              <a href="/markets/stocks-india/news/" className="AAO-more-button">
                Keep reading
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StocksSection;
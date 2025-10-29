import React, { useRef } from 'react';
import './Forex.css';
import ForexNews from './ForexNews';
import ForexHeatmap from './ForexHeatMap';

const StocksSection = () => {
  // Refs ko component ke andar define karo
  const scrollRefs = {
    communityTrends: useRef(null),
    tradeIdeas: useRef(null),
    earnings: useRef(null)
  };

  // Sample data - in a real app, this would come from props or API
  const communityTrends = [
    { symbol: 'AAPL', name: 'Apple Inc', price: '254.30', change: '+0.79%', changeDirection: 'up' },
    { symbol: 'AMD', name: 'Advanced Micro Devices Inc', price: '160.38', change: '−0.31%', changeDirection: 'down' },
    { symbol: 'AMZN', name: 'Amazon.com, Inc.', price: '217.30', change: '−1.32%', changeDirection: 'down' },
    { symbol: 'AVGO', name: 'Broadcom Inc.', price: '335.35', change: '−1.17%', changeDirection: 'down' },
    { symbol: 'BA', name: 'Boeing Company (The)', price: '214.27', change: '−0.39%', changeDirection: 'down' },
    { symbol: 'TSLA', name: 'Tesla Inc', price: '423.75', change: '−4.30%', changeDirection: 'down' },
    { symbol: 'NVDA', name: 'NVIDIA Corporation', price: '176.95', change: '−0.01%', changeDirection: 'down' }
  ];

  const tradeIdeas = [
    {
      title: '$OKLO - Overvalued?',
      author: 'lucisafferens',
      date: 'Updated Sep 24',
      symbol: 'OKLO',
      strategy: 'short',
      comments: 9,
      boosts: 32
    },
    {
      title: 'HOOD - Will it have a pullback?',
      author: 'ITS_A_MEEEEE_MARIO',
      date: 'Sep 24',
      symbol: 'HOOD',
      strategy: 'short',
      comments: 4,
      boosts: 11
    }
  ];

  const highestVolume = [
    { symbol: 'TSLA', name: 'Tesla, Inc.', price: '423.75', change: '−4.30%', changeDirection: 'down' },
    { symbol: 'NVDA', name: 'NVIDIA Corporation', price: '176.95', change: '−0.01%', changeDirection: 'down' },
    { symbol: 'PLTR', name: 'Palantir Technologies Inc.', price: '179.38', change: '−0.10%', changeDirection: 'down' }
  ];

  const mostVolatile = [
    { symbol: 'LBGJ', name: 'Li Bang International Corporation Inc.', price: '0.71', change: '−47.21%', changeDirection: 'down' },
    { symbol: 'ICU', name: 'SeaStar Medical Holding Corporation', price: '0.55', change: '−55.41%', changeDirection: 'down' },
    { symbol: 'AMBI', name: 'Ambipar Emergency Response', price: '1.67', change: '−51.03%', changeDirection: 'down' }
  ];

  const stockGainers = [
    { symbol: 'PEPG', name: 'PepGen Inc.', price: '5.81', change: '+118.42%', changeDirection: 'up' },
    { symbol: 'CPOP', name: 'Pop Culture Group Co., Ltd', price: '2.05', change: '+45.91%', changeDirection: 'up' },
    { symbol: 'FOFO', name: 'Hang Feng Technology Innovation Co., Ltd.', price: '27.94', change: '+45.14%', changeDirection: 'up' }
  ];

  const stockLosers = [
    { symbol: 'ZYBT', name: 'Zhengye Biotechnology Holding Limited', price: '3.30', change: '−33.60%', changeDirection: 'down' },
    { symbol: 'SLE', name: 'Super League Enterprise, Inc.', price: '5.28', change: '−29.32%', changeDirection: 'down' },
    { symbol: 'PSQH', name: 'PSQ Holdings, Inc.', price: '2.11', change: '−25.44%', changeDirection: 'down' }
  ];

  const earningsCalendar = [
    { symbol: 'TBN', name: 'Tamboran Resources Corporation', date: 'Today', time: 'Before market open', actual: '—', estimate: '−89.00' },
    { symbol: 'SNX', name: 'TD SYNNEX Corporation', date: 'Today', time: 'Before market open', actual: '3.58', estimate: '3.05' },
    { symbol: 'ACN', name: 'Accenture plc', date: 'Today', time: 'Before market open', actual: '3.03', estimate: '2.98' }
  ];

  const newsItems = [
    { title: 'Intel Stock Rises Again Amid Apple Speculation. Why It\'s Still on the "Wrong Path." — Barrons.com', source: 'Dow Jones Newswires', time: '4 hours ago', symbols: ['AAPL', 'INTC'] },
    { title: 'Vertex climbs after FDA\'s "breakthrough therapy" tag for kidney disease drug', source: 'Reuters', time: '4 hours ago', symbols: ['VRTX'] },
    { title: 'Konica Minolta to Showcase Game-changing Innovations at PRINTING United Expo', source: 'Acceswire', time: '4 hours ago', symbols: [] }
  ];

  // Scroll function
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

  const TickerCard = ({ symbol, name, price, change, changeDirection }) => (
    <div className="ticker-card">
      <div className="ticker-card-content">
        <img
          src={`https://s3-symbol-logo.tradingview.com/${symbol.toLowerCase()}.svg`}
          alt={symbol}
          className="ticker-logo"
          onError={(e) => {
            e.target.src = `https://s3-symbol-logo.tradingview.com/placeholder.svg`;
          }}
        />
        <a href={`/symbols/${symbol}/`} className="ticker-info">
          <div className="ticker-title-container">
            <span className="ticker-name">{name}</span>
            <div className="ticker-status">
              <span className="data-mode" title="Real-time">R</span>
              <span className="market-status" title="Market open">
                <span className="status-label">Market open</span>
                <span className="status-icon"></span>
              </span>
            </div>
          </div>
          <span className="ticker-symbol">{symbol}</span>
        </a>
        <div className="ticker-price-container">
          <span className="ticker-price">
            {price}
            <span className={`price-digit ${changeDirection}`}>0</span>
          </span>
          <span className="ticker-currency">USD</span>
          <span className={`ticker-change ${changeDirection}`}>{change}</span>
        </div>
      </div>
    </div>
  );

  const IdeaCard = ({ idea }) => (
    <article className="idea-card">
      <div className="idea-text">
        <a href={`/chart/${idea.symbol}/`} className="idea-title">{idea.title}</a>
        <p className="idea-description">
          {idea.title.includes('OKLO')
            ? 'Oklo aims to develop small nuclear power plants and sell electricity under long-term power purchase agreements. The equity is priced ahead of the business...'
            : 'Chart Breakdown - Current price testing upper resistance of the wedge. Strong uptrend since late August...'
          }
        </p>
      </div>
      <div className="idea-preview">
        <div className="preview-grid">
          <div className="preview-corner top-right"></div>
          <div className="preview-corner bottom-left">
            <a href={`/symbols/${idea.symbol}/`} className="logo-icon">
              <img
                src={`https://s3-symbol-logo.tradingview.com/${idea.symbol.toLowerCase()}.svg`}
                alt={idea.symbol}
              />
            </a>
            <span className={`strategy-icon ${idea.strategy}`} title={idea.strategy === 'long' ? 'Long' : 'Short'}>
              {idea.strategy === 'long' ? '↗' : '↘'}
            </span>
          </div>
        </div>
      </div>
      <div className="idea-meta">
        <div className="idea-author">
          <a href={`/u/${idea.author}/`} className="author-link">by {idea.author}</a>
          <time className="publish-date">{idea.date}</time>
        </div>
        <div className="idea-actions">
          <a href={`/chart/${idea.symbol}/#comments`} className="comment-button" title="Comment">
            <span className="comment-icon">💬</span>
            <span>{idea.comments}</span>
          </a>
          <button className="boost-button" title="Boost">
            <span className="boost-icon">🔥</span>
            <span>{idea.boosts}</span>
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <section className="stocks-section" data-section-id="stocks">
      <div className="section-container">

        {/* Header */}
        <div className="section-header">
          <div className="header-wrapper">
            <div className="logo-text-wrapper">
              {/* <img src="https://s3-symbol-logo.tradingview.com/country/US.svg" alt="US" className="flag-logo" /> */}
              <div className="title-wrapper">
                <a href="/markets/stocks-usa/" className="title-link">
                  <h2 className="section-title">Forex and currencies﻿</h2>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-content">
          {/* Community Trends */}
          <div className="widget-group community-trends">
            {/* <div className="widget-header">
              <h3 className="widget-title">Community trends</h3>
            </div> */}
            {/* <div className="horizontal-scroll-container"> */}
              {/* <button
                className="scroll-button left"
                onClick={() => scroll(scrollRefs.communityTrends, 'left')}
              >
                ‹
              </button> */}
              {/* <div
                className="scroll-content"
                ref={scrollRefs.communityTrends}
              >
                {communityTrends.map((stock, index) => (
                  <div key={index} className="ticker-card">
                    <img
                      src={`https://s3-symbol-logo.tradingview.com/${stock.symbol.toLowerCase()}.svg`}
                      alt={stock.symbol}
                      className="ticker-logo"
                      onError={(e) => {
                        e.target.src = `https://s3-symbol-logo.tradingview.com/placeholder.svg`;
                      }}
                    />
                    <a href={`/symbols/${stock.symbol}/`} className="ticker-info">
                      <span className="ticker-symbol">{stock.symbol}</span>
                      <span className="ticker-name">{stock.name}</span>
                      <div className="ticker-price-container">
                        <div className="price-info">
                          <span className="ticker-price">{stock.price}</span>
                          <span className="ticker-currency">USD</span>
                        </div>
                        <span className={`ticker-change ${stock.changeDirection}`}>
                          {stock.change}
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </div> */}
              {/* <button
                className="scroll-button right"
                onClick={() => scroll(scrollRefs.communityTrends, 'right')}
              >
                ›
              </button> */}
            {/* </div> */}
          </div>

          {/* Trade Ideas */}
          <div className="widget-group">
            <div className="widget-header">
              <a href="/markets/stocks-usa/ideas/" className="title-link">
                <h3 className="widget-title">Trade ideas</h3>
              </a>
            </div>
            <div className="horizontal-scroll-container">
              <div className="scroll-content ideas-grid">
                {tradeIdeas.map((idea, index) => (
                  <IdeaCard key={index} idea={idea} />
                ))}
                <a href="/markets/stocks-usa/ideas/" className="see-all-card">
                  <p className="see-all-content">
                    <span>See all stocks ideas</span>
                    <span className="arrow">›</span>
                  </p>
                </a>
              </div>
              <button className="scroll-button right">›</button>
            </div>
          </div>

          {/* Hotlist Widgets */}
          {/* <div className="hotlist-widgets">
            <div className="widgets-grid"> */}

              {/* Highest Volume
              <div className="widget-card">
                <div className="widget-header">
                  <a href="/markets/stocks-usa/market-movers-active/" className="title-link">
                    <h3 className="widget-title">Highest volume stocks</h3>
                  </a>
                </div>
                <div className="widget-content">
                  {highestVolume.map((stock, index) => (
                    <TickerCard key={index} {...stock} />
                  ))}
                </div>
                <div className="widget-footer">
                  <a href="/markets/stocks-usa/market-movers-active/" className="more-button">
                    See all most actively traded stocks
                  </a>
                </div>
              </div> */}

              {/* Most Volatile
              <div className="widget-card">
                <div className="widget-header">
                  <a href="/markets/stocks-usa/market-movers-most-volatile/" className="title-link">
                    <h3 className="widget-title">Most volatile stocks</h3>
                  </a>
                </div>
                <div className="widget-content">
                  {mostVolatile.map((stock, index) => (
                    <TickerCard key={index} {...stock} />
                  ))}
                </div>
                <div className="widget-footer">
                  <a href="/markets/stocks-usa/market-movers-most-volatile/" className="more-button">
                    See all stocks with biggest price changes
                  </a>
                </div>
              </div>

            </div>
          </div> */}

          {/* Gainers & Losers */}
          {/* <div className="gainers-losers">
            <div className="widgets-grid"> */}

              {/* Stock Gainers */}
              {/* <div className="widget-card"> */}
                {/* <div className="widget-header">
                  <a href="/markets/stocks-usa/market-movers-gainers/" className="title-link">
                    <h3 className="widget-title">Crypto gainers</h3>
                  </a>
                </div> */}
                {/* <div className="tabs-container">
                  <div className="tabs">
                    <button className="tab active">Regular hours</button>
                    <button className="tab">Pre-market</button>
                    <button className="tab">After-hours</button>
                  </div>
                </div> */}
                {/* <div className="widget-content">
                  {stockGainers.map((stock, index) => (
                    <TickerCard key={index} {...stock} />
                  ))}
                </div>
                <div className="widget-footer">
                  <a href="/markets/stocks-usa/market-movers-gainers/" className="more-button">
                    See all stocks with largest daily growth
                  </a>
                </div>
              </div> */}

              {/* Stock Losers */}
              {/* <div className="widget-card">
                <div className="widget-header">
                  <a href="/markets/stocks-usa/market-movers-losers/" className="title-link">
                    <h3 className="widget-title">Crypto losers</h3>
                  </a>
                </div> */}
                {/* <div className="tabs-container">
                  <div className="tabs">
                    <button className="tab active">Regular hours</button>
                    <button className="tab">Pre-market</button>
                    <button className="tab">After-hours</button>
                  </div>
                </div> */}
                {/* <div className="widget-content">
                  {stockLosers.map((stock, index) => (
                    <TickerCard key={index} {...stock} />
                  ))}
                </div>
                <div className="widget-footer">
                  <a href="/markets/stocks-usa/market-movers-losers/" className="more-button">
                    See all stocks with largest daily drop
                  </a>
                </div>
              </div> */}

            {/* </div>
          </div> */}

          {/* Earnings Calendar */}
          {/* <div className="widget-group">
            <div className="widget-header">
              <a href="/markets/stocks-usa/earnings/" className="title-link">
                <h3 className="widget-title">Earnings Calendar</h3>
              </a>
            </div>
            <div className="horizontal-scroll-container">
              <div className="scroll-content earnings-grid">
                {earningsCalendar.map((earning, index) => (
                  <a key={index} href={`/symbols/${earning.symbol}/`} className="earning-card">
                    <div className="earning-top">
                      <div className="earning-date">{earning.date}</div>
                      <span className="earning-time" title={earning.time}>⏰</span>
                    </div>
                    <div className="earning-title">
                      <img
                        src={`https://s3-symbol-logo.tradingview.com/${earning.symbol.toLowerCase()}.svg`}
                        alt={earning.symbol}
                        className="earning-logo"
                      />
                      <div className="earning-info">
                        <span className="earning-symbol">{earning.symbol}</span>
                        <span className="earning-company">{earning.name}</span>
                      </div>
                    </div>
                    <div className="earning-stats">
                      <div className="stat">
                        <div className="stat-title">Actual</div>
                        <div className="stat-value">{earning.actual}</div>
                      </div>
                      <div className="stat">
                        <div className="stat-title">Estimate</div>
                        <div className="stat-value">{earning.estimate}</div>
                      </div>
                    </div>
                  </a>
                ))}
                <a href="/markets/stocks-usa/earnings/" className="see-all-card">
                  <p className="see-all-content">
                    <span>See more events</span>
                    <span className="arrow">›</span>
                  </p>
                </a>
              </div>
              <button className="scroll-button right">›</button>
            </div>
          </div> */}

          {/* US Stocks News */}
          <div className="widget-group">
            {/* <div className="widget-header">
              <a href="/markets/stocks-usa/news/" className="title-link">
                <h3 className="widget-title">US stocks news</h3>
              </a>
            </div> */}
            {/* <div className="news-grid">
              {newsItems.map((news, index) => (
                <a key={index} href="/news/" target="_blank" className="news-card">
                  <article className="news-article">
                    <div className="news-header">
                      {/* <div className="news-symbols">
                        {news.symbols.map((symbol, i) => (
                          <img key={i}
                            src={`https://s3-symbol-logo.tradingview.com/${symbol.toLowerCase()}.svg`}
                            alt={symbol}
                            className="news-logo"
                          />
                        ))}
                      </div> */}
                      {/* <span className="news-time">{news.time}</span>
                      <span className="news-source">{news.source}</span>
                    </div>
                    <div className="news-title">{news.title}</div>
                  </article>
                </a>
              ))}
            </div> */} 
            {/* <div className="widget-footer">
              <a href="/markets/stocks-usa/news/" className="more-button">
                Keep reading
              </a>
            </div> */}
          </div>

        </div>
      </div>
      <ForexNews />
      <ForexHeatmap />
    </section>
  );
};

export default StocksSection;
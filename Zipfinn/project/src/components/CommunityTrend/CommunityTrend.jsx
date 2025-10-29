import React, { useRef, useState } from 'react';
import './CommunityTrend.css';

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

  // Better Image Component with multiple fallback options
  const CustomImage = ({ symbol, className, alt }) => {
    const [imageSrc, setImageSrc] = useState('');
    const [imageLoaded, setImageLoaded] = useState(false);

    // Multiple image source options
    const imageSources = [
      // Option 1: Financial Modeling Prep API (reliable)
      `https://financialmodelingprep.com/image-stock/${symbol}.png`,
      // Option 2: EOD Historical Data
      `https://eodhistoricaldata.com/img/logos/US/${symbol}.png`,
      // Option 3: Simple Icons with company initial
      `https://via.placeholder.com/64/3B82F6/FFFFFF?text=${symbol?.charAt(0) || 'C'}`,
      // Option 4: Dynamic colored placeholder
      `https://ui-avatars.com/api/?name=${symbol}&background=3B82F6&color=fff&size=64&bold=true`
    ];

    const handleError = (currentIndex = 0) => {
      if (currentIndex < imageSources.length - 1) {
        // Try next image source
        setImageSrc(imageSources[currentIndex + 1]);
      }
    };

    const handleLoad = () => {
      setImageLoaded(true);
    };

    // Initialize with first image source
    React.useEffect(() => {
      setImageSrc(imageSources[0]);
    }, [symbol]);

    return (
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} ${imageLoaded ? 'AO-image-loaded' : 'AO-image-loading'}`}
        onError={() => handleError(imageSources.indexOf(imageSrc))}
        onLoad={handleLoad}
        loading="lazy"
      />
    );
  };

  // Simple Image Component for reliable placeholder
  const SimpleImage = ({ symbol, className, alt }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    
    // Use ui-avatars.com for reliable images
    const imageUrl = `https://ui-avatars.com/api/?name=${symbol}&background=3B82F6&color=fff&size=64&bold=true`;

    return (
      <img
        src={imageUrl}
        alt={alt}
        className={`${className} ${imageLoaded ? 'AO-image-loaded' : 'AO-image-loading'}`}
        onLoad={() => setImageLoaded(true)}
        loading="eager" // Change to eager for better loading
      />
    );
  };

  // Even simpler - use colored div with text
  const TextLogo = ({ symbol, className }) => {
    const backgroundColor = `hsl(${symbol.charCodeAt(0) * 137.508}, 70%, 50%)`;
    
    return (
      <div 
        className={`${className} AO-text-logo`}
        style={{ backgroundColor }}
      >
        {symbol.charAt(0)}
      </div>
    );
  };

  const TickerCard = ({ symbol, name, price, change, changeDirection }) => (
    <div className="AO-ticker-card">
      <div className="AO-ticker-card-content">
        <SimpleImage 
          symbol={symbol} 
          className="AO-ticker-logo" 
          alt={symbol} 
        />
        <a href={`/symbols/${symbol}/`} className="AO-ticker-info">
          <div className="AO-ticker-title-container">
            <span className="AO-ticker-name">{name}</span>
            <div className="AO-ticker-status">
              <span className="AO-data-mode" title="Real-time">R</span>
              <span className="AO-market-status" title="Market open">
                <span className="AO-status-label">Market open</span>
                <span className="AO-status-icon"></span>
              </span>
            </div>
          </div>
          <span className="AO-ticker-symbol">{symbol}</span>
        </a>
        <div className="AO-ticker-price-container">
          <span className="AO-ticker-price">
            {price}
            <span className={`AO-price-digit ${changeDirection}`}>0</span>
          </span>
          <span className="AO-ticker-currency">USD</span>
          <span className={`AO-ticker-change ${changeDirection}`}>{change}</span>
        </div>
      </div>
    </div>
  );

  const IdeaCard = ({ idea }) => (
    <article className="AO-idea-card">
      <div className="AO-idea-text">
        <a href={`/chart/${idea.symbol}/`} className="AO-idea-title">{idea.title}</a>
        <p className="AO-idea-description">
          {idea.title.includes('OKLO')
            ? 'Oklo aims to develop small nuclear power plants and sell electricity under long-term power purchase agreements. The equity is priced ahead of the business...'
            : 'Chart Breakdown - Current price testing upper resistance of the wedge. Strong uptrend since late August...'
          }
        </p>
      </div>
      <div className="AO-idea-preview">
        <div className="AO-preview-grid">
          <div className="AO-preview-corner AO-top-right"></div>
          <div className="AO-preview-corner AO-bottom-left">
            <a href={`/symbols/${idea.symbol}/`} className="AO-logo-icon">
              <SimpleImage 
                symbol={idea.symbol} 
                alt={idea.symbol} 
              />
            </a>
            <span className={`AO-strategy-icon ${idea.strategy}`} title={idea.strategy === 'long' ? 'Long' : 'Short'}>
              {idea.strategy === 'long' ? '↗' : '↘'}
            </span>
          </div>
        </div>
      </div>
      <div className="AO-idea-meta">
        <div className="AO-idea-author">
          <a href={`/u/${idea.author}/`} className="AO-author-link">by {idea.author}</a>
          <time className="AO-publish-date">{idea.date}</time>
        </div>
        <div className="AO-idea-actions">
          <a href={`/chart/${idea.symbol}/#comments`} className="AO-comment-button" title="Comment">
            <span className="AO-comment-icon">💬</span>
            <span>{idea.comments}</span>
          </a>
          <button className="AO-boost-button" title="Boost">
            <span className="AO-boost-icon">🔥</span>
            <span>{idea.boosts}</span>
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <section className="AO-stocks-section" data-section-id="stocks">
      <div className="AO-section-container">

        {/* Header */}
        <div className="AO-section-header">
          <div className="AO-header-wrapper">
            <div className="AO-logo-text-wrapper">
              <SimpleImage 
                symbol="US" 
                className="AO-flag-logo" 
                alt="US" 
              />
              <div className="AO-title-wrapper">
                <a href="/markets/stocks-usa/" className="AO-title-link">
                  <h2 className="AO-section-title">Crypto</h2>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="AO-section-content">
          {/* Community Trends */}
          <div className="AO-widget-group AO-community-trends">
            <div className="AO-widget-header">
              <h3 className="AO-widget-title">Community trends</h3>
            </div>
            <div className="AO-horizontal-scroll-container">
              <button
                className="AO-scroll-button AO-left"
                onClick={() => scroll(scrollRefs.communityTrends, 'left')}
              >
                ‹
              </button>
              <div
                className="AO-scroll-content"
                ref={scrollRefs.communityTrends}
              >
                {communityTrends.map((stock, index) => (
                  <div key={index} className="AO-ticker-card">
                    <SimpleImage 
                      symbol={stock.symbol} 
                      className="AO-ticker-logo" 
                      alt={stock.symbol} 
                    />
                    <a href={`/symbols/${stock.symbol}/`} className="AO-ticker-info">
                      <span className="AO-ticker-symbol">{stock.symbol}</span>
                      <span className="AO-ticker-name">{stock.name}</span>
                      <div className="AO-ticker-price-container">
                        <div className="AO-price-info">
                          <span className="AO-ticker-price">{stock.price}</span>
                          <span className="AO-ticker-currency">USD</span>
                        </div>
                        <span className={`AO-ticker-change ${stock.changeDirection}`}>
                          {stock.change}
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              <button
                className="AO-scroll-button AO-right"
                onClick={() => scroll(scrollRefs.communityTrends, 'right')}
              >
                ›
              </button>
            </div>
          </div>

          {/* Trade Ideas */}
          <div className="AO-widget-group">
            <div className="AO-widget-header">
              <a href="/markets/stocks-usa/ideas/" className="AO-title-link">
                <h3 className="AO-widget-title">Trade ideas</h3>
              </a>
            </div>
            <div className="AO-horizontal-scroll-container">
              <div className="AO-scroll-content AO-ideas-grid">
                {tradeIdeas.map((idea, index) => (
                  <IdeaCard key={index} idea={idea} />
                ))}
                <a href="/markets/stocks-usa/ideas/" className="AO-see-all-card">
                  <p className="AO-see-all-content">
                    <span>See all stocks ideas</span>
                    <span className="AO-arrow">›</span>
                  </p>
                </a>
              </div>
              <button className="AO-scroll-button AO-right">›</button>
            </div>
          </div>

          {/* Gainers & Losers */}
          <div className="AO-gainers-losers">
            <div className="AO-widgets-grid">

              {/* Stock Gainers */}
              <div className="AO-widget-card">
                <div className="AO-widget-header">
                  <a href="/markets/stocks-usa/market-movers-gainers/" className="AO-title-link">
                    <h3 className="AO-widget-title">Crypto gainers</h3>
                  </a>
                </div>
                <div className="AO-widget-content">
                  {stockGainers.map((stock, index) => (
                    <TickerCard key={index} {...stock} />
                  ))}
                </div>
                <div className="AO-widget-footer">
                  <a href="/markets/stocks-usa/market-movers-gainers/" className="AO-more-button">
                    See all stocks with largest daily growth
                  </a>
                </div>
              </div>

              {/* Stock Losers */}
              <div className="AO-widget-card">
                <div className="AO-widget-header">
                  <a href="/markets/stocks-usa/market-movers-losers/" className="AO-title-link">
                    <h3 className="AO-widget-title">Crypto losers</h3>
                  </a>
                </div>
                <div className="AO-widget-content">
                  {stockLosers.map((stock, index) => (
                    <TickerCard key={index} {...stock} />
                  ))}
                </div>
                <div className="AO-widget-footer">
                  <a href="/markets/stocks-usa/market-movers-losers/" className="AO-more-button">
                    See all stocks with largest daily drop
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StocksSection;
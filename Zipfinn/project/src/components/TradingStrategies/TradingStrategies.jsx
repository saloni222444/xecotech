import React, { useState, useEffect } from 'react';
import './TradingStrategies.css';

const TradingStrategies = () => {
  const [selectedStrategy, setSelectedStrategy] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const strategies = [
    {
      name: "Diagonal Spread",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/DiagonalSpread.161da656bf.png",
      description: "A protective put is an options strategy that helps investors protect their stock investments from declines. It involves buying a put option for an owned stock, allowing the right to sell at a predetermined strike price before expiration."
    },
    {
      name: "Covered Stock",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/CoveredStock.894a43e9e2.png",
      description: "Covered stock strategy involves owning the underlying stock and selling call options against it to generate income."
    },
    {
      name: "Straddle",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/Straddle.84e10e5a00.png",
      description: "A straddle involves buying both a call and put option with the same strike price and expiration date."
    },
    {
      name: "Strangle",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/Strangle.82699b50f2.png",
      description: "A strangle involves buying out-of-the-money call and put options with different strike prices."
    },
    {
      name: "Collar",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/Collar.51dfddaf5e.png",
      description: "A collar involves owning stock, buying a protective put, and selling a covered call."
    },
    {
      name: "Iron Butterfly",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/IronButterfly.a6f7f5503d.png",
      description: "Iron butterfly is a neutral strategy that involves four options with three different strike prices."
    },
    {
      name: "Vertical Spread",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/VerticalSpread.9291a627ae.png",
      description: "Vertical spread involves buying and selling options of the same type with different strike prices."
    },
    {
      name: "Iron Condor",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/IronCondor.dc7fc183e2.png",
      description: "Iron condor is a neutral strategy that profits from low volatility in the underlying asset."
    },
    {
      name: "Calendar Spread",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/CalendarSpread.f95b4fdb4b.png",
      description: "Calendar spread involves buying and selling options with different expiration dates."
    },
    {
      name: "Butterfly",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/Butterfly.37a974296f.png",
      description: "Butterfly spread involves options at three different strike prices to create a risk-defined position."
    },
    {
      name: "Single Option",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/SingleOption.c7f1915ef0.png",
      description: "Basic options strategy involving either a single call or put option."
    },
    {
      name: "Condor",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/Condor.cf34aec022.png",
      description: "Condor spread involves four options with four different strike prices."
    },
    {
      name: "Custom",
      image: "https://cdn.futustatic.com/moomoo_node/assets/images/Custom.9af0fc3b27.png",
      description: "Create your own custom options strategies tailored to your market outlook."
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleStrategySelect = (index) => {
    setSelectedStrategy(index);
  };

  const nextStrategy = () => {
    setSelectedStrategy((prev) => (prev + 1) % strategies.length);
  };

  const prevStrategy = () => {
    setSelectedStrategy((prev) => (prev - 1 + strategies.length) % strategies.length);
  };

  return (
    <div className="trading-strategies-section">
      <div className="content-wrapper">
        <div className="content-title-wrapper">
          <div className="title-icon"></div>
          <div className="subtitle demi">
            One-stop trading and analysis
            <div className="desc">
              Use 13 options strategies and advanced order types for your options trading
            </div>
          </div>
        </div>

        <div className="content-box-wrapper content-box-swiper-wrapper">
          <div className="swiper-title demi">
            Use 13 options strategies and advanced order types for your options trading
          </div>

          <div className="strategies-carousel">
            <div className="carousel-container">
              <button 
                className="carousel-button prev" 
                onClick={prevStrategy}
                aria-label="Previous strategy"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>

              <div className="carousel-slide">
                <img 
                  src={strategies[selectedStrategy].image} 
                  alt={`Explore ${strategies[selectedStrategy].name.toLowerCase()} options strategy on moomoo`}
                  className={`strategy-image ${selectedStrategy === 0 ? 'selected' : ''}`}
                  loading="lazy"
                />
              </div>

              <button 
                className="carousel-button next" 
                onClick={nextStrategy}
                aria-label="Next strategy"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </button>
            </div>

            <div className="carousel-progress">
              <div 
                className="progress-fill" 
                style={{ 
                  transform: `scaleX(${(selectedStrategy + 1) / strategies.length}) scaleY(1)`
                }}
              ></div>
            </div>

            <div className="strategy-info">
              <div className="introduce-text desc">
                {strategies[selectedStrategy].description}
              </div>
              <div className="explore-text desc">
                Explore <span className="highlight">{strategies[selectedStrategy].name.toLowerCase()} &gt;</span>
              </div>
            </div>

            {isMobile && (
              <div className="mobile-navigation">
                <div className="swipe-hint">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="currentColor">
                    <path d="M10.7124 7.78926L17.4133 0H15.8254L10.0071 6.76331L5.35992 0H0L7.02738 10.2273L0 18.3956H1.58799L7.73237 11.2533L12.6401 18.3956H18L10.7121 7.78926H10.7124Z"/>
                  </svg>
                  <div className="swiper-button-text">
                    Swipe to view chart
                  </div>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="currentColor" className="reverse">
                    <path d="M10.7124 7.78926L17.4133 0H15.8254L10.0071 6.76331L5.35992 0H0L7.02738 10.2273L0 18.3956H1.58799L7.73237 11.2533L12.6401 18.3956H18L10.7121 7.78926H10.7124Z"/>
                  </svg>
                </div>
              </div>
            )}

            <div className="content-box-button-wrapper">
              <div className="cta-button-container cta-button demi cta-button-analysis">
                <div className="cta-btn-guide-box">
                  <a href="javascript:;" className="cta-btn" target="_self">
                    Customize your strategies
                  </a>
                </div>
              </div>
              
              <div className="disclosure dark disclosure-mounted">
                Disclosure
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingStrategies;
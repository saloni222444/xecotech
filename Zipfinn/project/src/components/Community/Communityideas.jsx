import React, { useState, useRef, useEffect } from 'react';
import './CommunityIdeas.css';

const CommunityIdeas = () => {
  const [activeTab, setActiveTab] = useState('editors_picks');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  const ideasData = [
    {
      id: 1,
      title: "ITC Limited Weekly Chart – Wave Y Targets Support Cluster",
      description: "ITC has been trending lower since the ₹498.85 peak, carving out what appears to be a complex W-X-Y correction. The first leg (W) found support near ₹391.20, followed by a corrective bounce into X at ₹444.20. The decline since then has kept price under a descending trendline, respecting the larger co",
      author: "WaveXplorer",
      date: "Sep 23",
      symbol: "NSE:ITC",
      strategy: "short",
      comments: 6,
      boosts: 19,
      image: "https://s3.tradingview.com/n/nvw8CiKB_mid.png",
      link: "https://in.tradingview.com/chart/ITC/nvw8CiKB-ITC-Limited-Weekly-Chart-Wave-Y-Targets-Support-Cluster/"
    },
    {
      id: 2,
      title: "Tanla Platforms : Inverted Head & Shoulder in making",
      description: "Tanla Platforms is forming a inverted head and Shoulder pattern right shoulder . On Friday last week , the stock is just around the neckline. The Stock just started holding above 50 and 200 DMA. RSI daily reading is above 70 indicating a positive momentum. Need to be watchful in next week , i",
      author: "vipoolgandhi",
      date: "Sep 21",
      symbol: "NSE:TANLA",
      strategy: "long",
      comments: 1,
      boosts: 18,
      image: "https://s3.tradingview.com/i/iRpHpdJ1_mid.png",
      link: "https://in.tradingview.com/chart/TANLA/iRpHpdJ1-Tanla-Platforms-Inverted-Head-Shoulder-in-making/"
    },
    {
      id: 3,
      title: "NIFTY : Trading levels and Plan for 22-Sep-2025",
      description: "NIFTY TRADING PLAN – 22-Sep-2025 The index closed around 25,352, with immediate opening resistance at 25,363, and higher hurdles near 25,409 (last intraday resistance) and 25,461. On the downside, supports are placed at 25,291 (opening/last intraday support) and the 25,189–25,204 zone. The critica",
      author: "LiveTradingBox",
      date: "Sep 21",
      symbol: "NSE:NIFTY",
      strategy: "short",
      comments: 1,
      boosts: 15,
      image: "https://s3.tradingview.com/n/nvge5aLJ_mid.png",
      link: "https://in.tradingview.com/chart/NIFTY/nvge5aLJ-NIFTY-Trading-levels-and-Plan-for-22-Sep-2025/"
    },
    {
      id: 4,
      title: "Positive moves on beaten down stock(Adani Green)",
      description: "Posititive news has come for the adani group from higher court. Adani Green is beaten down stock(may be not because of news flows but because of valuation). But now buying is there from the lower levels. Valuations have come down in last 2-3 years(however still expensive valuation). But may be this",
      author: "ravivalecha1990",
      date: "Sep 22",
      symbol: "NSE:ADANIGREEN",
      strategy: null,
      comments: 2,
      boosts: 16,
      image: "https://s3.tradingview.com/o/oJ2i0x7z_mid.png",
      link: "https://in.tradingview.com/chart/ADANIGREEN/oJ2i0x7z-Positive-moves-on-beaten-down-stock-Adani-Green/"
    },
    {
      id: 5,
      title: "Sigachi's Technical Surge: Next Resistance in Sight",
      description: "Over the past month, Sigachi traded within a well-defined consolidation range, reflecting a period of equilibrium between buyers and sellers. However, in the most recent week, the stock decisively broke out above this consolidation zone on increased trading volume a classic signal of renewed bulli",
      author: "NiftyNotion",
      date: "Sep 22",
      symbol: "NSE:SIGACHI",
      strategy: "long",
      comments: 1,
      boosts: 21,
      image: "https://s3.tradingview.com/y/Y05U3Xol_mid.png",
      link: "https://in.tradingview.com/chart/SIGACHI/Y05U3Xol-Sigachi-s-Technical-Surge-Next-Resistance-in-Sight/"
    }
  ];

  // Check scroll position and update arrow visibility
  const updateScrollArrows = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollArrows);
      // Initial check
      updateScrollArrows();

      return () => {
        container.removeEventListener('scroll', updateScrollArrows);
      };
    }
  }, []);

  const StrategyIcon = ({ strategy }) => {
    if (strategy === 'long') {
      return (
        <span title="Long" className="idea-strategy-icon-wrap strategy-long">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
            <path fill="currentColor" d="M12 4h2v8h-2V7.41l-7.3 7.3-1.4-1.42L10.58 6H6V4h6z"></path>
          </svg>
          <span className="visually-hidden">Long</span>
        </span>
      );
    }
    if (strategy === 'short') {
      return (
        <span title="Short" className="idea-strategy-icon-wrap strategy-short">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
            <path fill="currentColor" d="M3.3 4.7l7.29 7.3H6v2h8V6h-2v4.59l-7.3-7.3-1.4 1.42z"></path>
          </svg>
          <span className="visually-hidden">Short</span>
        </span>
      );
    }
    return null;
  };

  const BoostButton = ({ boosts }) => {
    return (
      <button type="button" className="boost-button" title="Boost" aria-pressed="false">
        <span className="content-wrap">
          <span className="icons-wrap">
            <span role="img" className="hollow-icon" aria-label={`${boosts} boosts`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                <path fill="currentColor" d="m6.94 17.9-1.06-1.06-1.6 1.59 1.07 1.06 1.59-1.6ZM9.06 20.02 8 18.96l-3 3 1.06 1.07 3-3.01ZM10.12 21.08l1.06 1.06-1.59 1.6-1.06-1.07 1.6-1.59Z" data-part="fire"></path>
                <path fill="currentColor" d="M14.72 13.3a2.5 2.5 0 1 0 3.53-3.53 2.5 2.5 0 0 0-3.53 3.53Z" data-part="body"></path>
                <path fill="currentColor" fillRule="evenodd" d="m23.91 4.1.04.67c.07 1.09-.05 3.04-.58 5.12-.5 1.99-1.4 4.17-2.95 5.84v4.25L15 25.4l-1.1-4.77c-.44.22-.8.37-1.07.46l-.44.14-5.6-5.6.15-.44c.09-.27.23-.63.45-1.07l-4.77-1.1L8.04 7.6h4.25a13.38 13.38 0 0 1 5.84-2.95c2.09-.53 4.04-.64 5.12-.58l.66.04Zm-8.65 15.78a25.62 25.62 0 0 0 3.66-2.72v2.2l-3.07 3.06-.59-2.54ZM10.86 9.1a25.63 25.63 0 0 0-2.72 3.66l-2.54-.6L8.66 9.1h2.2Zm7.64-3c-1.95.5-3.95 1.36-5.37 2.78a22.2 22.2 0 0 0-4.6 6.36l4.25 4.26a22.2 22.2 0 0 0 6.36-4.6 11.65 11.65 0 0 0 2.78-5.38c.39-1.53.53-2.97.55-3.97-1 .02-2.44.16-3.97.55Z" data-part="body"></path>
              </svg>
            </span>
          </span>
          <span className="boost-count">{boosts}</span>
        </span>
      </button>
    );
  };

  return (
    <div className="HO-community-ideas-container">
      <div className="HO-community-ideas-header">
        <div className="HO-header-wrapper">
          <span className="HO-title-wrapper">
            <div className="HO-title-container">
              <div className="HO-main-market-summary"> 
                {/* yha per mene arrow ko copy kerne ke liye marketsummary se code liya hai no confusion ki yha maretsummary ki class kya ker rhi hai */}
                <div className="section-header">
                  <h2>
                    <a href="/markets/">
                      Community ideas﻿
                      <span className="arrow-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                          <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                        </svg>
                      </span>
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>

      <div className="community-ideas-content">
        <div className="tabs-container">
          <div className="tabs-scroll-wrap">
            <div className="community-square-tabs" role="tablist">
              <button
                role="tab"
                className={`tab-button ${activeTab === 'editors_picks' ? 'selected' : ''}`}
                onClick={() => setActiveTab('editors_picks')}
              >
                <span className="tab-content">Editors' picks</span>
              </button>
              <button
                role="tab"
                className={`tab-button ${activeTab === 'popular' ? 'selected' : ''}`}
                onClick={() => setActiveTab('popular')}
              >
                <span className="community-tab-content">For You</span>
              </button>
              <button
                role="tab"
                className={`tab-button ${activeTab === 'popular' ? 'selected' : ''}`}
                onClick={() => setActiveTab('popular')}
              >
                <span className="community-ttab-content">Following</span>
              </button>
              <button
                role="tab"
                className={`tab-button ${activeTab === 'popular' ? 'selected' : ''}`}
                onClick={() => setActiveTab('popular')}
              >
                <span className="tab-content">Popular</span>
              </button>
            </div>
          </div>
        </div>

        <div className="ideas-cards-container">
          <div className="ideas-filmstrip">
            {showLeftArrow && (
              <div className="scroll-button left">
                <button className="scroll-arrow-button" type="button" onClick={scrollLeft}>
                  <span className="arrow-content">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                      <path fill="currentColor" d="m9.59 14 6.7-6.7 1.42 1.4-5.3 5.3 5.3 5.3-1.41 1.4L9.59 14Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            )}

            <div className="ideas-scroll-container" ref={scrollContainerRef}>
              {ideasData.map((idea) => (
                <article key={idea.id} className="idea-card">
                  <div className="idea-text-block">
                    <a href={idea.link} className="idea-title">{idea.title}</a>
                    <a href={idea.link} className="idea-description">
                      <span className="description-content">{idea.description}</span>
                    </a>
                  </div>

                  <div className="idea-preview">
                    <div className="preview-grid">
                      <div className="corner top-left">
                        <a
                          className="editors-pick-badge"
                          title="My Logo"
                          href="/my-page"
                        >
                          <img
                            className="badge-icon"
                            src="Zepfinn_logo (1).png"
                            alt="My Logo"
                          />
                        </a>
                      </div>
                      <div className="corner bottom-left">
                        <span>
                          <a href={`/symbols/${idea.symbol.replace(':', '-')}/`} title={idea.symbol} className="symbol-logo">
                            <img className="logo-image" src={`https://s3-symbol-logo.tradingview.com/${idea.symbol.split(':')[1].toLowerCase()}.svg`} alt={idea.symbol} />
                          </a>
                        </span>
                        <StrategyIcon strategy={idea.strategy} />
                      </div>
                      <a href={idea.link} className="preview-image-link">
                        <picture className="preview-picture">
                          <img src={idea.image} alt="" className="preview-image" />
                        </picture>
                      </a>
                    </div>
                  </div>

                  <div className="idea-meta">
                    <div className="publication-info">
                      <address className="author-info">
                        <a href={`/u/${idea.author}/`} className="author-link">by {idea.author}</a>
                      </address>
                      <time className="publication-date" title={idea.date}>{idea.date}</time>
                    </div>
                    <div className="idea-buttons">
                      <a href={`${idea.link}/#chart-view-comment-form`} aria-label={`${idea.comments} comments`} title="Comment" className="comment-button">
                        <span className="button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                            <path fill="currentColor" fillRule="evenodd" d="M9 22h11a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v17l1.5-1L9 22Zm-4.5 1.2 3.67-2.45.38-.25H20a2.5 2.5 0 0 0 2.5-2.5V9A2.5 2.5 0 0 0 20 6.5H7A2.5 2.5 0 0 0 4.5 9v14.2ZM9 11h9v1.5H9V11Zm9 3.5H9V16h9v-1.5Z"></path>
                          </svg>
                        </span>
                        <span className="button-text">{idea.comments}</span>
                      </a>
                      <BoostButton boosts={idea.boosts} />
                    </div>
                  </div>
                </article>
              ))}

              <a className="see-all-card" href="/ideas/editors-picks/">
                <p className="see-all-content">
                  <span className="see-all-wrap">
                    <span className="see-all-text">See all editors' picks ideas</span>
                    <span role="img" className="see-all-arrow" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                        <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                      </svg>
                    </span>
                  </span>
                </p>
              </a>
            </div>

            {showRightArrow && (
              <div className="scroll-button right">
                <button className="scroll-arrow-button" type="button" onClick={scrollRight}>
                  <span className="arrow-content">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                      <path fill="currentColor" d="m18.41 14-6.7 6.7-1.42-1.4 5.3-5.3-5.3-5.3 1.41-1.4 6.71 6.7Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityIdeas;
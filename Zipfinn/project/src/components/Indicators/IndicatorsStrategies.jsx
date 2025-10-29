import React, { useState } from 'react';
import './IndicatorsStrategies.css';

const IndicatorsStrategies = () => {
  const [activeTab, setActiveTab] = useState('editors_picks');

  const scriptsData = [
    {
      id: 1,
      title: "FiniteStateMachine",
      description: "OVERVIEW A flexible framework for creating, testing and implementing a Finite State Machine (FSM) in your script. FSMs use rules to control how states change in response to events. This is the first Finite State Machine library on TradingView and it's quite a different way to think about your",
      author: "SimpleCryptoLife",
      date: "Sep 14",
      type: "library",
      comments: 2,
      boosts: 12,
      image: "https://s3.tradingview.com/u/uYMS0UUJ_mid.png",
      link: "https://in.tradingview.com/script/uYMS0UUJ-FiniteStateMachine/"
    },
    {
      id: 2,
      title: "Trading Activity Index (Zeiierman)",
      description: "Overview Trading Activity Index (Zeiierman) is a volume-based market activity meter that transforms dollar-volume into a smooth, normalized 'activity index.' It highlights when market participation is unusually low or high with a dynamic color gradient: Light Blue → Low Activity (thin p",
      author: "Zeiierman",
      date: "Updated Sep 15",
      type: "indicator",
      comments: 4,
      boosts: 465,
      image: "https://s3.tradingview.com/r/rtOfqf13_mid.png",
      link: "https://in.tradingview.com/script/rtOfqf13-Trading-Activity-Index-Zeiierman/"
    },
    {
      id: 3,
      title: "Expected Value Monte Carlo",
      description: "I created this indicator after noticing that there was no Expected Value indicator here on TradingView. The EVMC provides statistical Expected Value to what might happen in the future regarding the asset you are analyzing. It uses 2 quantitative methods: Historical Backtest to ground your anal",
      author: "HenriqueCentieiro",
      date: "Sep 16",
      type: "indicator",
      comments: 1,
      boosts: 116,
      image: "https://s3.tradingview.com/s/SU8QcnJ3_mid.png",
      link: "https://in.tradingview.com/script/SU8QcnJ3-Expected-Value-Monte-Carlo/"
    },
    {
      id: 4,
      title: "Bar Index & Time",
      description: "Library to convert a bar index to a timestamp and vice versa. Utilizes runtime memory to store the time and time_close values of every bar on the chart (and optional future bars), with the ability of storing additional custom values for every chart bar.",
      author: "n00btraders",
      date: "Sep 11",
      type: "library",
      comments: 4,
      boosts: 5,
      image: "https://s3.tradingview.com/m/McBWNSif_mid.png",
      link: "https://in.tradingview.com/script/McBWNSif-Bar-Index-Time/"
    },
    {
      id: 5,
      title: "Liquidity Void Detector (Zeiierman)",
      description: "Overview Liquidity Void Detector (Zeiierman) is an oscillator highlighting inefficient price displacements under low participation. It measures the most recent price move (standardized return) and amplifies it only when volume is below its own trend. Positive readings ⇒ strong up-move",
      author: "Zeiierman",
      date: "Sep 12",
      type: "indicator",
      comments: 8,
      boosts: 707,
      image: "https://s3.tradingview.com/q/q1hXS0v6_mid.png",
      link: "https://in.tradingview.com/script/q1hXS0v6-Liquidity-Void-Detector-Zeiierman/"
    },
    {
      id: 6,
      title: "Trading Activity Index (Zeiierman)",
      description: "Overview Trading Activity Index (Zeiierman) is a volume-based market activity meter that transforms dollar-volume into a smooth, normalized 'activity index.' It highlights when market participation is unusually low or high with a dynamic color gradient: Light Blue → Low Activity (thin p",
      author: "Zeiierman",
      date: "Updated Sep 15",
      type: "indicator",
      comments: 4,
      boosts: 465,
      image: "https://s3.tradingview.com/r/rtOfqf13_mid.png",
      link: "https://in.tradingview.com/script/rtOfqf13-Trading-Activity-Index-Zeiierman/"
    },
    {
      id: 7,
      title: "Trading Activity Index (Zeiierman)",
      description: "Overview Trading Activity Index (Zeiierman) is a volume-based market activity meter that transforms dollar-volume into a smooth, normalized 'activity index.' It highlights when market participation is unusually low or high with a dynamic color gradient: Light Blue → Low Activity (thin p",
      author: "Zeiierman",
      date: "Updated Sep 15",
      type: "indicator",
      comments: 4,
      boosts: 465,
      image: "https://s3.tradingview.com/r/rtOfqf13_mid.png",
      link: "https://in.tradingview.com/script/rtOfqf13-Trading-Activity-Index-Zeiierman/"
    },
  ];

  const ScriptTypeIcon = ({ type }) => {
    if (type === 'library') {
      return (
        <span title="Pine Script® library" className="script-type-icon library">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
            <path fill="currentColor" fillRule="evenodd" d="M15 5h8v8h-8V5Zm1.5 1.5h5v5h-5v-5Z"></path>
            <path fill="currentColor" d="M13 15V8.5H5V23h14.5v-8H13Zm-6.5-5h5v5h-5v-5Zm5 6.5v5h-5v-5h5Zm6.5 5h-5v-5h5v5Z"></path>
          </svg>
          <span className="visually-hidden">Pine Script® library</span>
        </span>
      );
    }
    if (type === 'indicator') {
      return (
        <span title="Pine Script® indicator" className="script-type-icon indicator">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
            <path fill="currentColor" d="m24 11.06-4.57 4.54a2.75 2.75 0 0 1-3.88 0l-3.16-3.14a1.25 1.25 0 0 0-1.76 0L6.06 17 5 15.93l4.57-4.54a2.75 2.75 0 0 1 3.88 0l3.16 3.14c.49.49 1.27.49 1.76 0L22.94 10 24 11.06Z"></path>
          </svg>
          <span className="visually-hidden">Pine Script® indicator</span>
        </span>
      );
    }
    return null;
  };

  const BoostButton = ({ boosts }) => {
    const formatBoosts = (count) => {
      if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
      }
      return count.toString();
    };

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
          <span className="boost-count">{formatBoosts(boosts)}</span>
        </span>
      </button>
    );
  };

  return (
    <div className="IO-indicators-strategies-container">
      <div className="IO-indicators-strategies-header">
        <div className="IO-header-wrapper">
          <span className="IO-title-wrapper">
            <div className="IO-title-container">
              <div className="IO-main-market-summary">
                {/* yha per mene arrow ko copy kerne ke liye marketsummary se code liya hai no confusion ki yha maretsummary ki class kya ker rhi hai */}
                <div className="section-header">
                  <h2>
                    <a href="/markets/">
                      Indicators and strategies﻿
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

      <div className="indicators-strategies-content">
        <div className="tabs-container">
          <div className="tabs-scroll-wrap">
            <div className="square-tabs" role="tablist">
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
                <span className="tab-content">Following</span>
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

        <div className="scripts-cards-container">
          <div className="scripts-filmstrip">
            <div className="scripts-scroll-container">
              {scriptsData.map((script) => (
                <article key={script.id} className="script-card">
                  <div className="script-text-block">
                    <a href={script.link} className="script-title">{script.title}</a>
                    <a href={script.link} className="script-description">
                      <span className="description-content">{script.description}</span>
                    </a>
                  </div>

                  <div className="script-preview">
                    <div className="preview-grid">
                      <div className="corner top-left">
                        <a className="editors-pick-badge" title="Editors' picks" href="/scripts/editors-picks/">
                          <img className="badge-icon" src="https://static.tradingview.com/static/bundles/logo-tradingview.f3af8e3579cc12751704.svg" alt="Editors' pick" />
                        </a>
                      </div>
                      <div className="corner top-right">
                        <ScriptTypeIcon type={script.type} />
                      </div>
                      <a href={script.link} className="preview-image-link">
                        <picture className="preview-picture">
                          <img src={script.image} alt="" className="preview-image" />
                        </picture>
                      </a>
                    </div>
                  </div>

                  <div className="script-meta">
                    <div className="publication-info">
                      <address className="author-info">
                        <a href={`/u/${script.author}/`} className="author-link">by {script.author}</a>
                      </address>
                      <time className="publication-date" title={script.date}>{script.date}</time>
                    </div>
                    <div className="script-buttons">
                      <a href={`${script.link}/#chart-view-comment-form`} aria-label={`${script.comments} comments`} title="Comment" className="comment-button">
                        <span className="button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                            <path fill="currentColor" fillRule="evenodd" d="M9 22h11a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v17l1.5-1L9 22Zm-4.5 1.2 3.67-2.45.38-.25H20a2.5 2.5 0 0 0 2.5-2.5V9A2.5 2.5 0 0 0 20 6.5H7A2.5 2.5 0 0 0 4.5 9v14.2ZM9 11h9v1.5H9V11Zm9 3.5H9V16h9v-1.5Z"></path>
                          </svg>
                        </span>
                        <span className="button-text">{script.comments}</span>
                      </a>
                      <BoostButton boosts={script.boosts} />
                    </div>
                  </div>
                </article>
              ))}

              <a className="see-all-card" href="/scripts/editors-picks/">
                <p className="see-all-content">
                  <span className="see-all-wrap">
                    <span className="see-all-text">See all indicators and strategies</span>
                    <span role="img" className="see-all-arrow" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                        <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                      </svg>
                    </span>
                  </span>
                </p>
              </a>
            </div>

            <div className="scroll-button right">
              <button className="scroll-arrow-button" type="button">
                <span className="arrow-content">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                    <path fill="currentColor" d="m18.41 14-6.7 6.7-1.42-1.4 5.3-5.3-5.3-5.3 1.41-1.4 6.71 6.7Z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorsStrategies;
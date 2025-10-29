import React from 'react';
import './ForexNews.css';

const TopStories = () => {
  const stories = [
    {
      id: 1,
      title: "XAU/USD: Gold Prices Blast Off to New Record at $3,790 on Bright Rate-Cut Outlook",
      time: "20 hours ago",
      source: "Zepfinn",
      logos: [
        "https://s3-symbol-logo.tradingview.com/metal/gold.svg",
        "https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg"
      ]
    },
    {
      id: 2,
      title: "FLY: Firefly Stock Nosedives 12% After Poor Earnings – Losses Mount, Revenue Shrinks",
      time: "21 hours ago",
      source: "Zepfinn",
      logos: ["F"]
    },
    {
      id: 3,
      title: "NVDA: Nvidia Stock Soars 4% to New Record at $4.5 Trillion. Huge OpenAI Deal in the Works.",
      time: "21 hours ago",
      source: "Zepfinn",
      logos: [
        "https://s3-symbol-logo.tradingview.com/nvidia.svg",
        "https://s3-symbol-logo.tradingview.com/oracle.svg"
      ]
    },
    {
      id: 4,
      title: "IXIC: Nasdaq Composite Rallies 0.7% for New All-Time High. Nvidia Jump Powers the Leg Up.",
      time: "yesterday",
      source: "Zepfinn",
      logos: [
        "https://s3-symbol-logo.tradingview.com/indices/nasdaq-composite.svg",
        "https://s3-symbol-logo.tradingview.com/nvidia.svg",
        "https://s3-symbol-logo.tradingview.com/oracle.svg",
        "https://s3-symbol-logo.tradingview.com/coreweave.svg"
      ]
    },
    {
      id: 5,
      title: "TSLA: Tesla Stock Gains as Traders Ramp Up Bets in Efforts to Hit a New All-Time High",
      time: "2 days ago",
      source: "Zepfinn",
      logos: [
        "https://s3-symbol-logo.tradingview.com/tesla.svg",
        "https://s3-symbol-logo.tradingview.com/byd-electronic.svg"
      ]
    },
    {
      id: 6,
      title: "QUBT: Quantum Computing Stock Sheds 13% on $500 Million Share Offering. What's That Mean?",
      time: "2 days ago",
      source: "Zepfinn",
      logos: ["https://s3-symbol-logo.tradingview.com/quantum-computing.svg"]
    }
  ];

  const renderLogo = (logo, index) => {
    if (logo.startsWith('http')) {
      return (
        <img 
          key={index}
          className="ok-logo-PsAlMQQF xxxsmall-PsAlMQQF letter-PsAlMQQF" 
          src={logo} 
          alt="" 
          loading="lazy" 
        />
      );
    } else {
      return (
        <span key={index} className="ok-logo-PsAlMQQF xxxsmall-PsAlMQQF letter-PsAlMQQF">
          {logo}
        </span>
      );
    }
  };

  return (
    <div 
      data-cms-base-widget="true" 
      data-container-name="top-stories" 
      data-an-widget-id="top-stories" 
      className="ok-container-oFtCtY_t"
    >
      <div className="ok-header-oFtCtY_t header-m-oFtCtY_t">
        <div className="ok-wrapper-HeCy_Rm7 wrap-HeCy_Rm7">
          <span className="ok-titleAndHintWrapper-HeCy_Rm7 truncated-HeCy_Rm7">
            <div className="ok-container-HeCy_Rm7">
              <a className="ok-containerLink-HeCy_Rm7" href="/news/top-stories/all/">
                <h3 className="ok-title-HeCy_Rm7 title-m-HeCy_Rm7" id="top-stories">
                Forex News
                </h3>
              </a>
            </div>
          </span>
        </div>
      </div>
      
      <div className="ok-content-oFtCtY_t">
        <div>
          <div className="ok-grid-iTt_Zp4a">
            {stories.map(story => (
              <a 
                key={story.id}
                href={`/news/tradingview:${story.id}-${story.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}/`} 
                target="_blank" 
                className="ok-card-DmjQR0Aa card-h0q8oyW8"
              >
                <article className="ok-article-DmjQR0Aa wrapper-DmjQR0Aa" data-qa-id="news-headline-card">
                  <div className="ok-container-DmjQR0Aa">
                    <div className="ok-header-DmjQR0Aa header-TUPxzdRV">
                      <ul className="ok-stack-L2E26Swf stack--xxxsmall-L2E26Swf logo-TUPxzdRV apply-common-tooltip">
                        {story.logos.map((logo, index) => (
                          <li key={index}>
                            {renderLogo(logo, index)}
                          </li>
                        ))}
                      </ul>
                      <span className="ok-date-TUPxzdRV doth-TUPxzdRV">
                        <time>{story.time}</time>
                      </span>
                      <span>
                        <span className="">{story.source}</span>
                      </span>
                    </div>
                    <div 
                      className="ok-apply-overflow-tooltip apply-overflow-tooltip--direction_both block-bETdSLzM title-DmjQR0Aa" 
                      data-qa-id="news-headline-title"
                    >
                      {story.title}
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="ok-footer-oFtCtY_t">
        <div data-id="more-button">
          <a 
            href="/news/top-stories/all/" 
            className="ok-button-hLc5LYm1 textButton-H6_2ZGVv link-H6_2ZGVv brand-H6_2ZGVv medium-H6_2ZGVv"
          >
            <span className="ok-background-H6_2ZGVv"></span>
            <span className="ok-content-H6_2ZGVv">
              <span className="ok-title-hLc5LYm1">
                Keep <span className="ok-noBreak-HkGXK524">reading
                  <span role="img" className="arrowIcon-hLc5LYm1" aria-hidden="true">
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

export default TopStories;
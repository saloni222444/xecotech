import React from "react";
import { Star } from "lucide-react";
import "./TradingBrokers.css";

const BrokerCard = () => {
  return (
    <div className="FO-broker1-section">
      {/* Header */}
      <div className="FO-broker1-header">
        <h2>
          Trading and <span>brokers</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6 11"
            width="6"
            height="11"
          >
            <path
              fill="currentColor"
              d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"
            ></path>
          </svg>
        </h2>
        <p>
          Trade directly on the supercharts through our supported
          fully-verified and user-<br />reviewed brokers.
        </p>
      </div>

      {/* Card */}
      <div className="FO-Trading-broker1-card">
        {/* Left Content */}
        <div>
          <h3>Interactive Brokers</h3>
          <p>Tradable assets: Stocks, Forex, Bonds, Options</p>

          {/* Rating */}
          <div className="FO-broker1-rating">
            <span className="FO-score">4.4</span>
            <span className="FO-label">• Very Good</span>
            <div className="FO-stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < 4 ? "currentColor" : "none"}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="FO-broker1-stats">
            <div>
              <span>32.4K</span> Reviews
            </div>
            <div>
              <span>264.8K</span> Accounts
            </div>
          </div>

          {/* Button */}
          <button className="FO-broker1-btn">Learn more</button>
        </div>

        {/* Right Logo */}
        <div className="FO-broker1-logo">
          <video
            width="298"
            height="272"
            autoPlay
            muted
            loop
            playsInline
            className="FO-broker1-video"
            style={{ width: "298px", height: "272px" }}
          >
            <source
              src="dc17a213c89f6006b05a2ef57f6c398f.webm"
              type="video/mp4"
            />
            {/* Agar video load na ho to fallback */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default BrokerCard;

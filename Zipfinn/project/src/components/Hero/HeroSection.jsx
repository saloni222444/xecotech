import React from 'react';
import './HeroSection.css';


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        {/* Top text line */}
        <div className="top-text">
          <div className="smoilty-wrapper">
            <span className="line"></span>
            <button className="smoilty-text">Simplify your workflow</button>
            <span className="line"></span>
          </div>
        </div>


        {/* Main Heading and Subtitle */}
        <div className="hero-text">
          <h1>Empower your<br /> trading journey with Zepfinn</h1>
          <p className="hero-subtitle">
            Step into the world of trading with confidence, powered by clarity.
            Experience the markets anywhere, anytime—right at your fingertips.
          </p>
        </div>

        {/* Get Started Button */}
        <div className="hero-cta-section">
          <button className="hero-cta-button">Get started For Free</button>
        </div>

        {/* Main Financial Dashboard Image */}
        <div className="image-container">
          <div className="hero-image">
            {/* Replace with your image URL */}
            <img
              src="df861011b5c1a824c1e3b7c3fbbef352.jpg"
              alt="Financial Dashboard"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
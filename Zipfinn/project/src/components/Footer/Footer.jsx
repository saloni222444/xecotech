// Footer.jsx
import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    console.log('🔄 Subscribe process started...');
    
    if (!email) {
      console.log('❌ Email validation failed: Empty email');
      setMessage('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      console.log('❌ Email validation failed: Invalid email format');
      setMessage('Please enter a valid email address');
      return;
    }

    console.log('✅ Email validation passed:', email);
    setIsSubmitting(true);
    setMessage('');

    try {
      console.log('🚀 Making API request to:', 'https://zepfinn.xecotech.co/api/subscribe');
      console.log('📧 Sending email:', email);
      
      const requestBody = { email };
      console.log('📦 Request payload:', JSON.stringify(requestBody));

      const response = await fetch('https://zepfinn.xecotech.co/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('📡 API Response Status:', response.status);
      console.log('📡 API Response OK:', response.ok);

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      console.log('📄 Response Content-Type:', contentType);

      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
        console.log('📄 Response Data:', data);
      } else {
        const textResponse = await response.text();
        console.log('📄 Response Text (non-JSON):', textResponse);
        data = { message: textResponse || 'Unknown response' };
      }

      if (response.ok) {
        console.log('🎉 Subscription successful!');
        setMessage('Successfully subscribed! Thank you for your interest.');
        setEmail('');
      } else {
        console.log('❌ Subscription failed with status:', response.status);
        console.log('❌ Error message:', data.message);
        setMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.log('💥 Network/API error occurred:');
      console.error('Error details:', error);
      console.log('Error name:', error.name);
      console.log('Error message:', error.message);
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      console.log('🏁 Subscribe process completed');
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    console.log('📝 Email input changed:', value);
  };

  const handleButtonClick = () => {
    console.log('🖱️ Subscribe button clicked');
    console.log('📧 Current email value:', email);
  };

  return (
    <footer className="tradingview-footer">
      <div className="footer-background"></div>
      
      <div className="footer-container">
        {/* Header Section */}
        <div className="footer-header">
          <div className="footer-logo">Zepfinn</div>
          <div className="footer-tagline">Look first / Then leap.</div>
          <div className="language-selector-top">
            <span>🌐</span> English
          </div>
        </div>

        {/* Main Content */}
        <div className="footer-content">
          {/* Left Side with Social Media */}
          <div className="footer-left">
            <div className="social-media-section">
              <h3 className="link-section-title">Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Subscribe Section */}
            <div className="subscribe-section">
              <h3 className="link-section-title">Subscribe for updates</h3>
              <form onSubmit={handleSubscribe} className="subscribe-form">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="subscribe-input"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={isSubmitting}
                />
                <button 
                  type="submit" 
                  className="subscribe-button"
                  disabled={isSubmitting}
                  onClick={handleButtonClick}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {message && (
                <div className={`subscribe-message ${message.includes('Successfully') ? 'success' : 'error'}`}>
                  {message}
                </div>
              )}
              {/* <p className="subscribe-text">
                Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken spare ribs salami.
              </p> */}
            </div>
            
            <div className="origin-info">
              <h3 className="link-section-title">Origin (India)</h3>
              <p className="origin-text">Enter name: GXB provided by GX Total Investor</p>
              <p className="origin-text">Select reference date provided by Global Company to 2021 Financial Report System Inc.</p>
              <p className="origin-text">Compare in 2020 Annual Report Accounts, GDP</p>
            </div>
          </div>

          {/* Right Side with Links Grid */}
          <div className="footer-links-grid">
            {/* Column 1 */}
            <div className="link-section idea-section">
              <h3 className="link-section-title">IDEA | TIME | PROJECT</h3>
              <ul className="link-list-vertical">
                <li><a href="#" className="footer-link">Supercheck</a></li>
                <li><a href="#" className="footer-link">SCE/CRRESS</a></li>
                <li><a href="#" className="footer-link">Stock</a></li>
                <li><a href="#" className="footer-link">ETS</a></li>
                <li><a href="#" className="footer-link">Group</a></li>
                <li><a href="#" className="footer-link">CZC sales</a></li>
                <li><a href="#" className="footer-link">Pine</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="link-section research-section">
              <h3 className="link-section-title">RESEARCH</h3>
              <ul className="link-list-vertical">
                <li><a href="#" className="footer-link">Stock</a></li>
                <li><a href="#" className="footer-link">ETS</a></li>
                <li><a href="#" className="footer-link">Engine</a></li>
              </ul>
              
              <h3 className="link-section-title">CLIMBING</h3>
              <ul className="link-list-vertical">
                <li><a href="#" className="footer-link">Executive</a></li>
                <li><a href="#" className="footer-link">Exercise</a></li>
              </ul>
              
              <h3 className="link-section-title">SHARE PROJECTS</h3>
              <ul className="link-list-vertical">
                <li><a href="#" className="footer-link">Total Content</a></li>
                <li><a href="#" className="footer-link">Options</a></li>
                <li><a href="#" className="footer-link">Note: Time</a></li>
                <li><a href="#" className="footer-link">Pine Subject</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="link-section tools-section">
              <h3 className="link-section-title">APST</h3>
              <ul className="link-list-vertical">
                <li><a href="#" className="footer-link">Mobile</a></li>
                <li><a href="#" className="footer-link">Desktop</a></li>
              </ul>
              
              <h3 className="link-section-title">TOOLS & REGISTRATION</h3>
              <ul className="link-list-vertical">
                <li><a href="#" className="footer-link">Feature</a></li>
                <li><a href="#" className="footer-link">Widget</a></li>
                <li><a href="#" className="footer-link">Market data</a></li>
              </ul>
              
              <h3 className="link-section-title">TRADING</h3>
              <ul className="link-list-vertical">
                <li><a href="#" className="footer-link">Charities</a></li>
                <li><a href="#" className="footer-link">Reviews</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="link-section community-section">
              <h3 className="link-section-title">SPECIAL OFFICE</h3>
              <ul className="link-list-vertical">
                <li><a href="#" className="footer-link">CSF Group Source</a></li>
                <li><a href="#" className="footer-link">Data exchange</a></li>
                <li><a href="#" className="footer-link">US release bundle</a></li>
              </ul>
              
              <h3 className="link-section-title">ABOUT COMPANY</h3>
              <ul className="link-list-vertical">
                <li><a href="#" className="footer-link">Value up site</a></li>
                <li><a href="#" className="footer-link">Share retention</a></li>
                <li><a href="#" className="footer-link">Date</a></li>
                <li><a href="#" className="footer-link">Code set</a></li>
                <li><a href="#" className="footer-link">Available</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <a href="#" className="footer-bottom-link">Practices & Security</a>
            <a href="#" className="footer-bottom-link">Remote Solutions</a>
            <a href="#" className="footer-bottom-link">Growth Officers</a>
          </div>
          <div className="footer-bottom-right">
            <div className="copyright-notice">
              <span>© 2021  Zepfinn, Inc.</span>
              <span>SKT: https and other documents provided by Group.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
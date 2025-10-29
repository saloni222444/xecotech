// Mobile.jsx - IMPROVED
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mobile.css'; // Create this CSS file

const Mobile = () => {
  const navigate = useNavigate();

  const handleAppStore = () => {
    // Redirect to App Store
    window.location.href = 'https://apps.apple.com/app/zipfinn';
  };

  const handlePlayStore = () => {
    // Redirect to Play Store
    window.location.href = 'https://play.google.com/store/apps/details?id=com.zipfinn';
  };

  return (
    <div className="mobile-download-page">
      <div className="download-container">
        <h1>📱 Download Mobile App</h1>
        <div className="download-card">
          <div className="app-info">
            <h2>Zipfinn Mobile v2.3.5</h2>
            <p>Trade on the go with our powerful mobile application</p>
            
            <div className="app-features">
              <h3>App Features</h3>
              <ul>
                <li>✅ Live market quotes and charts</li>
                <li>✅ Portfolio tracking</li>
                <li>✅ Price alerts and notifications</li>
                <li>✅ News feed and market analysis</li>
                <li>✅ Touch-optimized trading interface</li>
              </ul>
            </div>

            <div className="requirements">
              <h3>Requirements</h3>
              <ul>
                <li>📱 iOS 13.0+ or Android 8.0+</li>
                <li>💾 100MB free storage space</li>
                <li>🌐 Internet connection (WiFi or cellular)</li>
              </ul>
            </div>
          </div>

          <div className="download-actions">
            <div className="store-buttons">
              <button className="store-btn ios" onClick={handleAppStore}>
                <i className="fab fa-apple"></i>
                <div className="store-text">
                  <span>Download on the</span>
                  <span>App Store</span>
                </div>
              </button>

              <button className="store-btn android" onClick={handlePlayStore}>
                <i className="fab fa-google-play"></i>
                <div className="store-text">
                  <span>Get it on</span>
                  <span>Google Play</span>
                </div>
              </button>
            </div>

            <button className="back-btn" onClick={() => navigate('/download')}>
              <i className="fas fa-arrow-left"></i>
              Back to Downloads
            </button>

            <div className="qr-code">
              <h4>Scan to Download</h4>
              <div className="qr-placeholder">
                {/* Add actual QR code image here */}
                <p>QR Code Placeholder</p>
                <p>Scan with your phone camera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
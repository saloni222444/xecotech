// Desktop.jsx - FIXED
import React, { useEffect } from 'react'; // ✅ useEffect import karein
import { useNavigate } from 'react-router-dom';
import './Desktop.css'; // Create this CSS file

const Desktop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Desktop component mounted - route is working!");
  }, []);

  // ✅ handleDownload function add karein
  const handleDownload = () => {
    // Actual download logic here
    console.log("Downloading desktop app...");
    // You can add actual download link here
    // window.location.href = '/path/to/desktop-app.exe';
    
    // Temporary: Show alert for demo
    alert("Desktop app download started! (This is a demo)");
  };

  return (
    <div className="desktop-download-page">
      <div className="download-container">
        <h1>📥 Download Desktop App</h1>
        <div className="download-card">
          <div className="app-info">
            <h2>Zipfinn Desktop v2.4.1</h2>
            <p>Full-featured trading platform with advanced charting tools</p>
            
            <div className="system-requirements">
              <h3>System Requirements</h3>
              <ul>
                <li>✅ Windows 10/11, macOS 10.14+, or Linux Ubuntu 18.04+</li>
                <li>✅ 4GB RAM minimum (8GB recommended)</li>
                <li>✅ 2GB free disk space</li>
                <li>✅ Internet connection</li>
              </ul>
            </div>

            <div className="features">
              <h3>Key Features</h3>
              <ul>
                <li>Advanced charting with 100+ indicators</li>
                <li>Real-time market data</li>
                <li>Multi-monitor support</li>
                <li>Custom layouts and workspaces</li>
                <li>Portfolio tracking</li>
              </ul>
            </div>
          </div>

          <div className="download-actions">
            <button className="download-btn primary" onClick={handleDownload}>
              <i className="fas fa-download"></i>
              Download Now (85.2 MB)
            </button>
            
            <button className="download-btn secondary" onClick={() => navigate('/download')}>
              <i className="fas fa-arrow-left"></i>
              Back to Downloads
            </button>

            <div className="platform-links">
              <h4>Download for other platforms:</h4>
              <div className="platform-buttons">
                <button className="platform-btn">Windows</button>
                <button className="platform-btn">macOS</button>
                <button className="platform-btn">Linux</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
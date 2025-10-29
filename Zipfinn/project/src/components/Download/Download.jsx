// Download.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Download.css";

const Download = () => {
  const navigate = useNavigate();

  const downloadItems = [
    {
      id: 1,
      title: "Desktop Application",
      description: "Full-featured desktop app with advanced charting tools and real-time data",
      icon: "fas fa-desktop",
      version: "v2.4.1",
      size: "85.2 MB",
      platforms: ["Windows", "macOS", "Linux"], 
      downloadLink: "/download/desktop",
      features: [
        "Advanced charting tools",
        "Real-time market data",
        "Technical indicators",
        "Custom layouts",
        "Multi-monitor support"
      ]
    },
    {
      id: 2,
      title: "Mobile App",
      description: "Trade on the go with our powerful mobile application",
      icon: "fas fa-mobile-alt",
      version: "v2.3.5",
      size: "45.7 MB",
      platforms: ["iOS", "Android"],
      downloadLink: "/download/mobile",
      features: [
        "Live market quotes",
        "Portfolio tracking",
        "Price alerts",
        "News feed",
        "Touch-optimized charts"
      ]
    },
    {
      id: 3,
      title: "Web Platform",
      description: "No download required - access directly from your browser",
      icon: "fas fa-globe",
      version: "Latest",
      size: "0 MB",
      platforms: ["All modern browsers"],
      downloadLink: "/dashboard",
      features: [
        "Instant access",
        "Auto-updates",
        "Cross-platform",
        "Pro features",
        "Cloud sync"
      ]
    }
  ];

  const handleDownload = (item) => {
    if (item.downloadLink) {
      navigate(item.downloadLink);
    }
  };

  return (
    <div className="downloads-page">
      <div className="downloads-header">
        <h1>Downloads</h1>
        <p>Get the right tools for your trading journey</p>
      </div>

      <div className="downloads-grid">
        {downloadItems.map((item) => (
          <div key={item.id} className="download-card">
            <div className="download-card-header">
              <i className={item.icon}></i>
              <div className="download-title-section">
                <h3>{item.title}</h3>
                <span className="version">{item.version}</span>
              </div>
            </div>

            <p className="download-description">{item.description}</p>

            <div className="download-info">
              <div className="info-item">
                <span className="info-label">Size:</span>
                <span className="info-value">{item.size}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Platforms:</span>
                <span className="info-value">{item.platforms.join(", ")}</span>
              </div>
            </div>

            <div className="features-list">
              <h4>Key Features:</h4>
              <ul>
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="download-actions">
              {item.size === "0 MB" ? (
                <button 
                  className="btn-primary"
                  onClick={() => navigate(item.downloadLink)}
                >
                  Launch Web Platform
                </button>
              ) : (
                <button 
                  className="btn-primary"
                  onClick={() => handleDownload(item)}
                >
                  <i className="fas fa-download"></i>
                  Download for {item.platforms[0]}
                </button>
              )}
              
              <button className="btn-secondary" onClick={() => handleDownload(item)}>
                View All Platforms
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="downloads-footer">
        <div className="system-requirements">
          <h3>System Requirements</h3>
          <div className="requirements-grid">
            <div className="requirement-item">
              <h4>Desktop App</h4>
              <ul>
                <li>Windows 10+, macOS 10.14+, or Linux Ubuntu 18.04+</li>
                <li>4GB RAM minimum, 8GB recommended</li>
                <li>2GB free disk space</li>
                <li>Internet connection</li>
              </ul>
            </div>
            <div className="requirement-item">
              <h4>Mobile App</h4>
              <ul>
                <li>iOS 13.0+ or Android 8.0+</li>
                <li>100MB free storage</li>
                <li>Internet connection (WiFi or cellular)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
import React, { useState, useRef, useEffect } from 'react';
import './stocks.css';

const StockScreener = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [viewMode, setViewMode] = useState('table');
  const [showScreenerMenu, setShowScreenerMenu] = useState(false);
  const [showStocksMenu, setShowStocksMenu] = useState(false);
  const [filters, setFilters] = useState({
    market: 'US',
    watchlist: '',
    index: '',
    price: '',
    changePercent: '',
    marketCap: '',
    pe: '',
    epsGrowth: '',
    divYield: '', 
    sector: '',
    analystRating: '',
    performance: '',
    revenueGrowth: '',
    peg: '',
    roe: '',
    beta: '',
    recentEarnings: '',
    upcomingEarnings: ''
  });

  const screenerMenuRef = useRef(null);
  const stocksMenuRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (screenerMenuRef.current && !screenerMenuRef.current.contains(event.target)) {
        setShowScreenerMenu(false);
      }
      if (stocksMenuRef.current && !stocksMenuRef.current.contains(event.target)) {
        setShowStocksMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filterOptions = [
    { key: 'market', label: 'Market', type: 'country' },
    { key: 'watchlist', label: 'Watchlist', type: 'select' },
    { key: 'index', label: 'Index', type: 'select' },
    { key: 'price', label: 'Price', type: 'range' },
    { key: 'changePercent', label: 'Change %', type: 'range' },
    { key: 'marketCap', label: 'Market cap', type: 'range' },
    { key: 'pe', label: 'P/E', type: 'range' },
    { key: 'epsGrowth', label: 'EPS dil growth', type: 'range' },
    { key: 'divYield', label: 'Div yield %', type: 'range' },
    { key: 'sector', label: 'Sector', type: 'select' },
    { key: 'analystRating', label: 'Analyst Rating', type: 'select' },
    { key: 'performance', label: 'Perf %', type: 'range' },
    { key: 'revenueGrowth', label: 'Revenue growth', type: 'range' },
    { key: 'peg', label: 'PEG', type: 'range' },
    { key: 'roe', label: 'ROE', type: 'range' },
    { key: 'beta', label: 'Beta', type: 'range' },
    { key: 'recentEarnings', label: 'Recent earnings date', type: 'date' },
    { key: 'upcomingEarnings', label: 'Upcoming earnings date', type: 'date' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'performance', label: 'Performance' },
    { id: 'extendedHours', label: 'Extended Hours' },
    { id: 'valuation', label: 'Valuation' },
    { id: 'dividends', label: 'Dividends' },
    { id: 'profitability', label: 'Profitability' },
    { id: 'incomeStatement', label: 'Income Statement' },
    { id: 'balanceSheet', label: 'Balance Sheet' },
    { id: 'cashFlow', label: 'Cash Flow' },
    { id: 'perShare', label: 'Per Share' },
    { id: 'technicals', label: 'Technicals' }
  ];

  const screenerMenuItems = [
    { label: 'Stock Screener', active: true },
    { label: 'ETF Screener' },
    { label: 'Bond Screener' },
    { label: 'Crypto Coins Screener' },
    { label: 'CEX Screener' },
    { label: 'DEX Screener' }
  ];

  const stocksMenuItems = [
    { 
      label: 'Save screen', 
      shortcut: 'Ctrl+S',
      icon: '💾',
      disabled: true
    },
    { 
      label: 'Share screen', 
      icon: '🔗',
      disabled: true,
      hasSwitch: true
    },
    { 
      label: 'Make a copy…', 
      icon: '📄',
      disabled: false
    },
    { 
      label: 'Rename…', 
      icon: '✏️',
      disabled: true
    },
    { 
      label: 'Export screen results', 
      icon: '📤',
      disabled: false
    },
    { type: 'separator' },
    { 
      label: 'Create new screen…', 
      shortcut: 'Shift+N',
      icon: '➕',
      disabled: false
    },
    { type: 'separator' },
    { 
      label: 'Open screen…', 
      shortcut: '•',
      icon: '📂',
      disabled: false
    }
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      market: 'US',
      watchlist: '',
      index: '',
      price: '',
      changePercent: '',
      marketCap: '',
      pe: '',
      epsGrowth: '',
      divYield: '',
      sector: '',
      analystRating: '',
      performance: '',
      revenueGrowth: '',
      peg: '',
      roe: '',
      beta: '',
      recentEarnings: '',
      upcomingEarnings: ''
    });
  };

  return (
    <div className="stock-screener">
      {/* Header */}
      <header className="screener-header">
        <div className="header-main">
          <div className="screen-title-wrapper" ref={screenerMenuRef}>
            <button 
              className="screen-title-btn"
              onClick={() => setShowScreenerMenu(!showScreenerMenu)}
            >
              <h1>Stock Screener</h1>
              <span className="caret">▼</span>
            </button>
            
            {/* Screener Dropdown Menu */}
            {showScreenerMenu && (
              <div className="screener-menu">
                <div className="menu-content">
                  {screenerMenuItems.map((item, index) => (
                    <button
                      key={index}
                      className={`menu-item ${item.active ? 'active' : ''}`}
                    >
                      <div className="menu-item-content">
                        <span className="menu-item-label">{item.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="header-actions">
            <div className="screen-name-wrapper" ref={stocksMenuRef}>
              <button 
                className="screen-name-btn"
                onClick={() => setShowStocksMenu(!showStocksMenu)}
              >
                <h2>All stocks</h2>
                <span className="caret">▼</span>
              </button>
              
              {/* Stocks Dropdown Menu */}
              {showStocksMenu && (
                <div className="stocks-menu">
                  <div className="menu-content">
                    {stocksMenuItems.map((item, index) => (
                      <React.Fragment key={index}>
                        {item.type === 'separator' ? (
                          <div className="menu-separator"></div>
                        ) : (
                          <button
                            className={`menu-item ${item.disabled ? 'disabled' : ''}`}
                            disabled={item.disabled}
                          >
                            <div className="menu-item-content">
                              <div className="menu-item-left">
                                {item.icon && (
                                  <span className="menu-icon">{item.icon}</span>
                                )}
                                <span className="menu-item-label">{item.label}</span>
                              </div>
                              <div className="menu-item-right">
                                {item.shortcut && (
                                  <span className="menu-shortcut">{item.shortcut}</span>
                                )}
                                {item.hasSwitch && (
                                  <div className="menu-switch">
                                    <input type="checkbox" disabled={item.disabled} />
                                    <span className="switch-slider"></span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button className="save-btn">
              <span className="icon">💾</span>
              Save
            </button>
          </div>
        </div>

        <div className="header-controls">
          <button className="control-btn" title="Screener settings">
            <span className="icon">⚙️</span>
          </button>
          <button className="control-btn" title="Hide filters">
            <span className="icon">▼</span>
          </button>
        </div>
      </header>

      {/* Filters Section */}
      <section className="filters-section">
        <div className="filters-container">
          <div className="filter-pills">
            {filterOptions.map((filter) => (
              <div key={filter.key} className="filter-pill">
                <button className="pill-btn">
                  <div className="pill-content">
                    <span className="pill-label">{filter.label}</span>
                    {filters[filter.key] && (
                      <span className="pill-value">
                        {filter.type === 'country' && (
                          <span className="flag">🇺🇸</span>
                        )}
                        {filters[filter.key]}
                      </span>
                    )}
                    <span className="pill-caret">▼</span>
                  </div>
                </button>
              </div>
            ))}
          </div>

          <div className="filter-controls">
            <button className="control-btn add-filter" title="Add new filter">
              <span className="icon">+</span>
            </button>
            <button 
              className="control-btn reset-filters" 
              title="Reset options"
              onClick={resetFilters}
            >
              <span className="icon">↺</span>
            </button>
          </div>
        </div>
      </section>

      {/* Control Panel */}
      <section className="control-panel">
        <div className="view-mode-switcher">
          <button 
            className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
            title="Table view"
          >
            <span className="icon">📊</span>
          </button>
          <button 
            className={`view-btn ${viewMode === 'chart' ? 'active' : ''}`}
            onClick={() => setViewMode('chart')}
            title="Chart view"
          >
            <span className="icon">📈</span>
          </button>
        </div>

        <div className="vertical-separator"></div>

        <div className="tab-section">
          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
            <button className="tab-btn more-tab">
              More <span className="caret">▼</span>
            </button>
          </div>
        </div>

        <div className="header-controls">
          <button className="control-btn" title="Refresh">
            <span className="icon">🔄</span>
          </button>
        </div>
      </section>

      {/* Content Area */}
      <section className="content-area">
        <div className="content-placeholder">
          {viewMode === 'table' ? (
            <div className="table-view">
              <h3>Stock Data Table</h3>
              <p>Stock data will be displayed here in table format</p>
            </div>
          ) : (
            <div className="chart-view">
              <h3>Stock Performance Charts</h3>
              <p>Interactive charts will be displayed here</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default StockScreener;
import React, { useState, useEffect } from 'react';
import './Luxembourg.css';
import CountrySelector from '../CountrySelector';

const TradingDashboard = () => {
  const [activeTab, setActiveTab] = useState('market-summary');
  const [activeTimeframe, setActiveTimeframe] = useState('10Y');
  const [selectedIndicator, setSelectedIndicator] = useState('GDP');
  const [marketData, setMarketData] = useState({
    indices: [],
    stocks: {
      trending: [],
      volume: [],
      gainers: [],
      losers: []
    },
    futures: [],
    forex: [],
    bonds: [],
    corporateBonds: [],
    etfs: [],
    economy: {
      indicators: [],
      calendar: [],
      detailedIndicators: {
        gdp: [],
        government: [],
        prices: [],
        labor: []
      }
    }
  });

  // Yield curve data points
  const yieldCurveData = {
    current: [
      { maturity: '1M', yield: 3.45 },
      { maturity: '3M', yield: 3.52 },
      { maturity: '6M', yield: 3.58 },
      { maturity: '1Y', yield: 3.57 },
      { maturity: '2Y', yield: 3.46 },
      { maturity: '5Y', yield: 3.58 },
      { maturity: '10Y', yield: 3.98 },
      { maturity: '20Y', yield: 4.54 },
      { maturity: '30Y', yield: 4.57 }
    ],
    oneMonth: [
      { maturity: '1M', yield: 3.38 },
      { maturity: '3M', yield: 3.45 },
      { maturity: '6M', yield: 3.52 },
      { maturity: '1Y', yield: 3.48 },
      { maturity: '2Y', yield: 3.42 },
      { maturity: '5Y', yield: 3.55 },
      { maturity: '10Y', yield: 3.92 },
      { maturity: '20Y', yield: 4.48 },
      { maturity: '30Y', yield: 4.52 }
    ],
    oneYear: [
      { maturity: '1M', yield: 2.85 },
      { maturity: '3M', yield: 2.92 },
      { maturity: '6M', yield: 3.15 },
      { maturity: '1Y', yield: 3.25 },
      { maturity: '2Y', yield: 3.35 },
      { maturity: '5Y', yield: 3.42 },
      { maturity: '10Y', yield: 3.65 },
      { maturity: '20Y', yield: 4.12 },
      { maturity: '30Y', yield: 4.18 }
    ]
  };

  // Mock data - in real app, you'd fetch this from an API
  useEffect(() => {
    setMarketData({
      indices: [
        { symbol: 'S&P 500', value: '6,671.07', change: '+0.40%', isUp: true },
        { symbol: 'NASDAQ 100', value: '24,745.36', change: '+0.68%', isUp: true },
        { symbol: 'DOW JONES', value: '46,253.32', change: '−0.04%', isUp: false },
        { symbol: 'RUSSELL 2000', value: '2,519.75', change: '+0.97%', isUp: true }
      ],
      stocks: {
        trending: [
          { symbol: 'HIMS', name: 'Hims & Hers Health', price: '62.76', change: '+16.18%', isUp: true },
          { symbol: 'OMER', name: 'Omeros Corporation', price: '10.42', change: '+154.15%', isUp: true },
          { symbol: 'AMD', name: 'Advanced Micro Devices', price: '238.60', change: '+9.40%', isUp: true }
        ],
        volume: [
          { symbol: 'NVDA', name: 'NVIDIA Corporation', price: '179.83', change: '−0.11%', isUp: false },
          { symbol: 'TSLA', name: 'Tesla, Inc.', price: '435.15', change: '+1.38%', isUp: true },
          { symbol: 'AAPL', name: 'Apple Inc.', price: '249.34', change: '+0.63%', isUp: true }
        ],
        gainers: [
          { symbol: 'COOT', name: 'Australian Oilseeds', price: '2.64', change: '+173.58%', isUp: true },
          { symbol: 'PFAI', name: 'Pinnacle Food Group', price: '4.57', change: '+139.27%', isUp: true },
          { symbol: 'SLNH', name: 'Soluna Holdings', price: '4.29', change: '+53.76%', isUp: true }
        ],
        losers: [
          { symbol: 'AQMS', name: 'Aqua Metals, Inc.', price: '13.94', change: '−52.94%', isUp: false },
          { symbol: 'PXLW', name: 'Pixelworks, Inc.', price: '7.81', change: '−47.83%', isUp: false },
          { symbol: 'AWX', name: 'Avalon Holdings', price: '3.23', change: '−36.04%', isUp: false }
        ]
      },
      futures: [
        { 
          symbol: 'GC1!', 
          name: 'Gold Futures', 
          value: '4,358.6', 
          change: '−0.02%', 
          isUp: false,
          unit: 'USD / APZ',
          marketStatus: 'open'
        },
        // ... other futures data
      ],
      forex: [
        { pair: 'EUR/USD', rate: '1.1651', change: '+0.07%', isUp: true },
        { pair: 'USD/JPY', rate: '0.0066', change: '−0.05%', isUp: false },
        { pair: 'GBP/USD', rate: '1.3411', change: '+0.13%', isUp: true },
        { pair: 'USD/CHF', rate: '1.2550', change: '+0.02%', isUp: true }
      ],
      bonds: [
        { 
          symbol: 'US01Y',
          name: '1 Year',
          coupon: '0%',
          yield: '3.571%',
          maturity: 'Oct 1, 2026',
          price: '3.435',
          priceUnit: 'Disc. yield, %',
          yieldChange: '+0.28%',
          yieldIsUp: true,
          priceChange: '+0.010',
          priceChangeUnit: 'Disc. yield, %',
          priceChangeIsUp: true
        },
        // ... other bonds data
      ],
      corporateBonds: [
        {
          symbol: 'AAPL423',
          name: 'Apple Inc.',
          coupon: '4.65%',
          yield: '4.82%',
          maturity: 'May 6, 2053',
          price: '96.42',
          priceUnit: '% of par',
          yieldChange: '+0.12%',
          yieldIsUp: true,
          priceChange: '-0.25',
          priceChangeUnit: '% of par',
          priceChangeIsUp: false,
          rating: 'AA+',
          sector: 'Technology'
        },
        // ... other corporate bonds data
      ],
      etfs: [
        { symbol: 'SPY', name: 'SPDR S&P 500 ETF', price: 'N/A', change: 'N/A' },
        { symbol: 'QQQ', name: 'Invesco QQQ Trust', price: 'N/A', change: 'N/A' },
        { symbol: 'IWM', name: 'iShares Russell 2000', price: 'N/A', change: 'N/A' },
        { symbol: 'GLD', name: 'SPDR Gold Shares', price: 'N/A', change: 'N/A' }
      ],
      economy: {
        indicators: [
          {
            id: 'GDP',
            name: 'GDP',
            value: '29.18T',
            unit: 'USD',
            change: '+0.5%',
            isUp: true,
            period: '2024',
            timeframeData: '10 years'
          },
          {
            id: 'FYGDPG',
            name: 'Full Year GDP Growth',
            value: '2.8',
            unit: '%',
            change: '-0.2%',
            isUp: false,
            period: '2024',
            timeframeData: '10 years'
          },
          {
            id: 'RealGDP',
            name: 'Real GDP',
            value: '23.77T',
            unit: 'USD',
            change: '+0.3%',
            isUp: true,
            period: 'Q2 2025',
            timeframeData: '10 years'
          },
          {
            id: 'InterestRate',
            name: 'Interest Rate',
            value: '4.25',
            unit: '%',
            change: '-0.1%',
            isUp: false,
            period: 'Latest',
            timeframeData: '10 years'
          },
          {
            id: 'InflationRate',
            name: 'Inflation Rate',
            value: '2.9',
            unit: '%',
            change: '+0.1%',
            isUp: true,
            period: 'Latest',
            timeframeData: '10 years'
          },
          {
            id: 'UnemploymentRate',
            name: 'Unemployment Rate',
            value: '4.3',
            unit: '%',
            change: '+0.2%',
            isUp: true,
            period: 'Latest',
            timeframeData: '10 years'
          },
          {
            id: 'CurrentAccount',
            name: 'Current Account',
            value: '-251.3B',
            unit: 'USD',
            change: '+42.86%',
            isUp: true,
            period: 'Latest',
            timeframeData: '10 years'
          }
        ],
        calendar: [
          { event: 'Fed Barkin Speech', time: '17:30', importance: 'medium' },
          { event: 'Jobless Claims', time: '18:00', importance: 'high' },
          { event: 'Continuing Claims', time: '18:00', importance: 'low' }
        ],
        detailedIndicators: {
          gdp: [
            { name: 'GDP', period: '2024', value: '29.18T', unit: 'USD' },
            { name: 'Real GDP', period: 'Q2 2025', value: '23.77T', unit: 'USD' },
            { name: 'Gross National Product', period: 'Q2 2025', value: '23.77T', unit: 'USD' },
            { name: 'GDP Per Capita PPP', period: '2024', value: '75.49K', unit: 'USD' },
            { name: 'GDP Growth', period: 'Q2 2025', value: '2.1', unit: '%' },
            { name: 'GDP Growth Rate', period: 'Q2 2025', value: '3.8', unit: '%' }
          ],
          government: [
            { name: 'Government Revenues', period: 'Sep 2025', value: '543.66B', unit: 'USD' },
            { name: 'Government Spending', period: 'Q2 2025', value: '3.99T', unit: 'USD' },
            { name: 'Government Budget Value', period: 'Sep 2025', value: '197.95B', unit: 'USD' },
            { name: 'Government Debt', period: 'Sep 2025', value: '37.64T', unit: 'USD' },
            { name: 'Government Debt to GDP', period: '2024', value: '124.3', unit: '% of GDP' },
            { name: 'Government Spending to GDP', period: '2024', value: '39.7', unit: '% of GDP' }
          ],
          prices: [
            { name: 'Inflation Rate MoM', period: 'Aug 2025', value: '0.4', unit: '%' },
            { name: 'Core CPI', period: 'Aug 2025', value: '2.5', unit: '%' },
            { name: 'Core PCE Price Index Annual Change', period: 'Aug 2025', value: '2.91', unit: '%' },
            { name: 'Core Producer Prices YoY', period: 'Aug 2025', value: '2.8', unit: '%' },
            { name: 'Food Inflation YoY', period: 'Aug 2025', value: '3.2', unit: '%' },
            { name: 'Rent Inflation', period: 'Aug 2025', value: '3.6', unit: '%' }
          ],
          labor: [
            { name: 'All Employees, Total Nonfarm', period: '—', value: '', unit: 'PSN' },
            { name: 'Nonfarm Payrolls (Jobs Created)', period: 'Aug 2025', value: '22K', unit: 'PSN' },
            { name: 'Initial Jobless Claims', period: 'Sep 20, 2025', value: '218K', unit: 'PSN' },
            { name: 'Job Offers', period: 'Aug 2025', value: '7.23M', unit: 'PSN' },
            { name: 'Wages', period: 'Aug 2025', value: '31.46', unit: 'USD / HOUR' },
            { name: 'Wage Growth YoY', period: 'Aug 2025', value: '4.86', unit: '%' }
          ]
        },
        calendarEvents: [
          { 
            day: 'Today', 
            time: '18:25', 
            title: 'Redbook YoY', 
            country: 'USA', 
            importance: 'low',
            actual: '—',
            forecast: '—',
            prior: '5.9%'
          },
          { 
            day: 'Today', 
            time: '18:30', 
            title: 'Fed Waller Speech', 
            country: 'USA', 
            importance: 'medium',
            actual: '—',
            forecast: '—',
            prior: '—'
          },
          { 
            day: 'Today', 
            time: '20:00', 
            title: 'NY Fed Treasury Purchases 1 to 2.5 yrs', 
            country: 'USA', 
            importance: 'low',
            actual: '—',
            forecast: '75',
            prior: '—'
          }
        ]
      }
    });
  }, []);

  const tabs = [
    { id: 'market-summary', label: 'Major Indices' },
    { id: 'stocks', label: 'US Stocks' },
    { id: 'futures', label: 'Futures' },
    { id: 'forex', label: 'Forex' },
    { id: 'bond', label: 'Bond Yields' },
    { id: 'corporate-bonds', label: 'Corporate Bonds' },
    { id: 'etfs', label: 'ETFs' },
    { id: 'economy', label: 'Economy' }
  ];

  const timeframes = [
    { id: '1Y', label: '1Y' },
    { id: '5Y', label: '5Y' },
    { id: '10Y', label: '10Y' },
    { id: 'All', label: 'All' }
  ];

  // Safe render functions with null checks
  const renderMarketCard = (item, index) => (
    <div key={index} className="market-card">
      <div className="card-header">
        <span className="symbol">{item.symbol || item.pair || item.maturity}</span>
        <span className={`change ${item.isUp ? 'up' : 'down'}`}>
          {item.change}
        </span>
      </div>
      <div className="card-value">{item.value || item.rate || item.yield}</div>
      {item.name && <div className="card-name">{item.name}</div>}
    </div>
  );

  const renderStockSection = (title, stocks) => {
    if (!stocks || !Array.isArray(stocks) || stocks.length === 0) {
      return <div className="stock-section">No data available</div>;
    }
    
    return (
      <div className="stock-section">
        <h3>{title}</h3>
        <div className="stocks-grid">
          {stocks.map((stock, index) => (
            <div key={index} className="stock-card">
              <div className="stock-header">
                <span className="stock-symbol">{stock.symbol}</span>
                <span className={`stock-change ${stock.isUp ? 'up' : 'down'}`}>
                  {stock.change}
                </span>
              </div>
              <div className="stock-price">{stock.price}</div>
              <div className="stock-name">{stock.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Economy Section Render Functions
  const handleIndicatorClick = (indicatorId) => {
    setSelectedIndicator(indicatorId);
  };

  const renderIndicatorCard = (indicator) => (
    <div 
      key={indicator.id}
      className={`indicator-card ${selectedIndicator === indicator.id ? 'selected' : ''}`}
      onClick={() => handleIndicatorClick(indicator.id)}
    >
      <button className="card-control" aria-label={`Show ${indicator.name} chart`}></button>
      <div className="card-content">
        <div className="card-title">
          <a href={`/symbols/ECONOMICS-${indicator.id}/`} className="title-link">
            <div className="title-container">
              <span className="title">{indicator.name}</span>
              <div className="data-mode-container">
                <span className="data-mode" title="Real-time">R</span>
                <span className="session-status"></span>
              </div>
            </div>
          </a>
        </div>
        <div className="value-and-change">
          <div className="value-container">
            <span className="value">{indicator.value}</span>
            <span className="unit">{indicator.unit}</span>
          </div>
          <span className={`change ${indicator.isUp ? 'up' : 'down'}`}>
            {indicator.change}
          </span>
        </div>
        <div className="card-chart">
          <div className="mini-chart-placeholder">
            <div className="chart-line"></div>
          </div>
        </div>
        <div className="timeframe">{indicator.timeframeData}</div>
      </div>
    </div>
  );

  const renderIndicatorRow = (indicator, index) => (
    <div key={index} className="indicator-row">
      <div className="indicator-info">
        <a href={`/symbols/ECONOMICS-${indicator.name.replace(/\s+/g, '')}/`} className="indicator-link">
          <span className="indicator-name">{indicator.name}</span>
        </a>
        <span className="indicator-period">{indicator.period}</span>
        <div className="indicator-value">
          <span className="value">{indicator.value}</span>
          <span className="unit">{indicator.unit}</span>
        </div>
      </div>
    </div>
  );

  const renderCalendarEvent = (event, index) => (
    <a key={index} href="/economic-calendar/" className="calendar-event">
      <div className="event-top">
        <div className="event-date">
          <div className="event-day">{event.day}</div>
          <div className="event-dot">•</div>
          <div className="event-time" title={`Oct 21, 2025, ${event.time} GMT+5:30`}>
            <span className="time-string">{event.time}</span>
          </div>
        </div>
        <span 
          role="img" 
          className={`importance-icon ${event.importance}`}
          aria-hidden="false"
          title={`${event.importance === 'low' ? 'Low' : event.importance === 'medium' ? 'Medium' : 'High'} importance`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
            <path fill="var(--stats-icon-color-1, currentColor)" d="M4 9h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z"></path>
            <path fill="var(--stats-icon-color-2, currentColor)" d="M9 6H8a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"></path>
            <path fill="var(--stats-icon-color-3, currentColor)" d="M13 3h-1c-.55 0-1 .41-1 .92v10.16c0 .5.45.92 1 .92h1c.55 0 1-.41 1-.92V3.92c0-.5-.45-.92-1-.92Z"></path>
          </svg>
        </span>
      </div>
      <div className="event-title-block">
        <img 
          className="flag-icon" 
          crossOrigin="" 
          alt={event.country} 
          src="https://s3-symbol-logo.tradingview.com/country/US.svg"
        />
        <div className="event-column">
          <span className="event-title">{event.title}</span>
        </div>
      </div>
      <div className="event-stats">
        <div className="stat-wrap">
          <div className="stat-title">Actual</div>
          <div className="stat-value-wrap">
            <div className="stat-value highlighted">{event.actual}</div>
          </div>
        </div>
        <div className="stat-wrap">
          <div className="stat-title">Forecast</div>
          <div className="stat-value-wrap">
            <div className="stat-value">{event.forecast}</div>
          </div>
        </div>
        <div className="stat-wrap">
          <div className="stat-title">Prior</div>
          <div className="stat-value-wrap">
            <div className="stat-value">{event.prior}</div>
          </div>
        </div>
      </div>
    </a>
  );

  // Yield Curve Component
  const YieldCurveChart = () => {
    const maxYield = Math.max(
      ...yieldCurveData.current.map(d => d.yield),
      ...yieldCurveData.oneMonth.map(d => d.yield),
      ...yieldCurveData.oneYear.map(d => d.yield)
    );
    
    const minYield = Math.min(
      ...yieldCurveData.current.map(d => d.yield),
      ...yieldCurveData.oneMonth.map(d => d.yield),
      ...yieldCurveData.oneYear.map(d => d.yield)
    );

    const yieldRange = maxYield - minYield;
    const chartHeight = 200;
    const chartWidth = 800;

    const getYPosition = (yieldValue) => {
      return chartHeight - ((yieldValue - minYield) / yieldRange) * chartHeight;
    };

    const getXPosition = (index, total) => {
      return (index / (total - 1)) * chartWidth;
    };

    const createCurvePath = (data) => {
      if (data.length === 0) return '';
      
      let path = `M ${getXPosition(0, data.length)} ${getYPosition(data[0].yield)}`;
      
      for (let i = 1; i < data.length; i++) {
        const x = getXPosition(i, data.length);
        const y = getYPosition(data[i].yield);
        
        const prevX = getXPosition(i - 1, data.length);
        const prevY = getYPosition(data[i - 1].yield);
        const controlX = (prevX + x) / 2;
        
        path += ` Q ${controlX} ${prevY}, ${x} ${y}`;
      }
      
      return path;
    };

    return (
      <div className="yield-curve-chart-container">
        <div className="chart-axes">
          <div className="y-axis">
            {[minYield, minYield + yieldRange * 0.25, minYield + yieldRange * 0.5, minYield + yieldRange * 0.75, maxYield].map((value, index) => (
              <div key={index} className="y-tick">
                <span className="tick-label">{value.toFixed(2)}%</span>
                <div className="tick-line"></div>
              </div>
            ))}
          </div>
          <div className="x-axis">
            {yieldCurveData.current.map((point, index) => (
              <div key={index} className="x-tick" style={{ left: `${(index / (yieldCurveData.current.length - 1)) * 100}%` }}>
                <span className="tick-label">{point.maturity}</span>
                <div className="tick-line"></div>
              </div>
            ))}
          </div>
        </div>
        
        <svg 
          className="yield-curve-svg" 
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          preserveAspectRatio="none"
        >
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => (
            <line
              key={`grid-${index}`}
              x1="0"
              y1={chartHeight * ratio}
              x2={chartWidth}
              y2={chartHeight * ratio}
              className="grid-line"
            />
          ))}
          
          <path
            d={createCurvePath(yieldCurveData.oneYear)}
            className="yield-curve-line one-year"
            fill="none"
            strokeWidth="2"
          />
          <path
            d={createCurvePath(yieldCurveData.oneMonth)}
            className="yield-curve-line one-month"
            fill="none"
            strokeWidth="2"
          />
          <path
            d={createCurvePath(yieldCurveData.current)}
            className="yield-curve-line current"
            fill="none"
            strokeWidth="3"
          />
          
          {yieldCurveData.current.map((point, index) => (
            <circle
              key={`current-${index}`}
              cx={getXPosition(index, yieldCurveData.current.length)}
              cy={getYPosition(point.yield)}
              r="3"
              className="data-point current"
            />
          ))}
          {yieldCurveData.oneMonth.map((point, index) => (
            <circle
              key={`oneMonth-${index}`}
              cx={getXPosition(index, yieldCurveData.oneMonth.length)}
              cy={getYPosition(point.yield)}
              r="2"
              className="data-point one-month"
            />
          ))}
          {yieldCurveData.oneYear.map((point, index) => (
            <circle
              key={`oneYear-${index}`}
              cx={getXPosition(index, yieldCurveData.oneYear.length)}
              cy={getYPosition(point.yield)}
              r="2"
              className="data-point one-year"
            />
          ))}
        </svg>
      </div>
    );
  };

  // Safe data access with optional chaining
  const trendingStocks = marketData.stocks?.trending || [];
  const volumeStocks = marketData.stocks?.volume || [];
  const gainersStocks = marketData.stocks?.gainers || [];
  const losersStocks = marketData.stocks?.losers || [];
  const economyIndicators = marketData.economy?.indicators || [];
  const economyCalendar = marketData.economy?.calendar || [];
  const futuresData = marketData.futures || [];
  const bondsData = marketData.bonds || [];
  const corporateBondsData = marketData.corporateBonds || [];
  const detailedIndicators = marketData.economy?.detailedIndicators || {};
  const calendarEvents = marketData.economy?.calendarEvents || [];

  return (
    <div className="trading-dashboard">
      {/* Header */}
      <CountrySelector />
      <header className="dashboard-header">
        <div className="header-main">
          <div className="logo-section">
            <h1>US Markets Dashboard</h1>
          </div>
          <div className="market-status">
            <span className="status-badge open">Market Closed</span>
            <span className="current-time">{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="dashboard-nav">
        <div className="nav-container">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        
        {/* Market Summary Section */}
        {activeTab === 'market-summary' && (
          <section className="content-section">
            <div className="section-header">
              <h2>Major Indices</h2>
              <button className="view-all-btn">View All →</button>
            </div>
            <div className="market-grid">
              {marketData.indices.map(renderMarketCard)}
            </div>
            <div className="chart-placeholder">
              <div className="chart-container">
                <h3>Market Overview Chart</h3>
                <div className="mock-chart">
                  <div className="chart-line"></div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Stocks Section */}
        {activeTab === 'stocks' && (
          <section className="content-section">
            <div className="section-header">
              <h2>US Stocks</h2>
              <button className="view-all-btn">View All →</button>
            </div>
            
            {/* Trending Stocks */}
            <div className="trending-section">
              <h3>Community Trends</h3>
              <div className="trending-grid">
                {trendingStocks.map((stock, index) => (
                  <div key={index} className="trending-card">
                    <div className="trending-badge">Trending</div>
                    <div className="trending-content">
                      <span className="trending-symbol">{stock.symbol}</span>
                      <span className={`trending-change ${stock.isUp ? 'up' : 'down'}`}>
                        {stock.change}
                      </span>
                    </div>
                    <div className="trending-price">{stock.price}</div>
                    <div className="trending-name">{stock.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stock Sections Grid */}
            <div className="stocks-layout">
              <div className="stocks-column">
                {renderStockSection('Highest Volume', volumeStocks)}
                {renderStockSection('Stock Gainers', gainersStocks)}
              </div>
              <div className="stocks-column">
                {renderStockSection('Most Volatile', volumeStocks)}
                {renderStockSection('Stock Losers', losersStocks)}
              </div>
            </div>

            {/* Earnings Calendar */}
            <div className="earnings-section">
              <h3>Earnings Calendar</h3>
              <div className="earnings-list">
                {['BK', 'KEY', 'IIIN', 'SNA', 'USB'].map((symbol, index) => (
                  <div key={index} className="earnings-item">
                    <span className="earnings-symbol">{symbol}</span>
                    <span className="earnings-date">Today</span>
                    <span className="earnings-estimate">Est: 1.77 USD</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Futures Section */}
        {activeTab === 'futures' && (
          <section className="content-section">
            <div className="section-header">
              <h2>Futures & Commodities</h2>
              <button className="view-all-btn">View All →</button>
            </div>
            
            <div className="futures-container">
              <div className="futures-grid">
                {futuresData.map((future, index) => (
                  <div key={index} className="futures-card">
                    <div className="futures-header">
                      <div className="futures-logo">
                        <div className="futures-logo-letter">
                          {future.symbol.charAt(0)}
                        </div>
                      </div>
                      <div className="futures-title">
                        <span className="futures-name">{future.name}</span>
                        <div className="futures-status">
                          <span className="data-mode">D</span>
                          <span className={`market-status ${future.marketStatus}`}>
                            {future.marketStatus === 'open' ? 'Market open' : 'Market closed'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="futures-symbol">{future.symbol}</div>
                    <div className="futures-data">
                      <div className="futures-value">
                        <span className="value">{future.value}</span>
                        <span className="unit">{future.unit}</span>
                      </div>
                      <span className={`futures-change ${future.isUp ? 'up' : 'down'}`}>
                        {future.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="futures-footer">
                <button className="view-all-futures-btn">
                  See all futures →
                </button>
              </div>
            </div>
            
            <div className="commodity-breakdown">
              <h3>Commodity Breakdown</h3>
              <div className="breakdown-charts">
                <div className="breakdown-item">
                  <span>Metals</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div className="breakdown-item">
                  <span>Energy</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '30%'}}></div>
                  </div>
                </div>
                <div className="breakdown-item">
                  <span>Agriculture</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '10%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Forex Section */}
        {activeTab === 'forex' && (
          <section className="content-section">
            <div className="section-header">
              <h2>Forex & Currencies</h2>
              <button className="view-all-btn">View All →</button>
            </div>
            <div className="forex-grid">
              {marketData.forex.map(renderMarketCard)}
            </div>
            <div className="forex-heatmap">
              <h3>Currency Heat Map</h3>
              <div className="heatmap-container">
                <div className="heatmap-row">
                  <span>EUR/USD</span>
                  <div className="heatmap-value positive">+0.07%</div>
                </div>
                <div className="heatmap-row">
                  <span>USD/JPY</span>
                  <div className="heatmap-value negative">-0.05%</div>
                </div>
                <div className="heatmap-row">
                  <span>GBP/USD</span>
                  <div className="heatmap-value positive">+0.13%</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Bond Yields Section */}
        {activeTab === 'bond' && (
          <section className="content-section">
            <div className="bond-section">
              <div className="bond-header">
                <div className="bond-title-section">
                  <h2>US government bond yields</h2>
                  <button className="customize-curves-btn">
                    <span className="btn-icon">📊</span>
                    <span className="btn-text">Customize curves</span>
                  </button>
                </div>
              </div>

              {/* Yield Curve Chart */}
              <div className="yield-curve-container">
                <div className="yield-curve-chart">
                  <div className="chart-header">
                    <h3>Yield Curve Comparison</h3>
                    <div className="chart-legend">
                      <div className="legend-item">
                        <span className="legend-swatch current"></span>
                        <span className="legend-text">Current</span>
                      </div>
                      <div className="legend-item">
                        <span className="legend-swatch one-month"></span>
                        <span className="legend-text">1 month ago</span>
                      </div>
                      <div className="legend-item">
                        <span className="legend-swatch one-year"></span>
                        <span className="legend-text">1 year ago</span>
                      </div>
                    </div>
                  </div>
                  <YieldCurveChart />
                </div>
              </div>

              {/* Bond Yields Table */}
              <div className="bond-table-container">
                <table className="bond-yields-table">
                  <thead>
                    <tr>
                      <th className="table-header left-align">Symbol</th>
                      <th className="table-header">Coupon</th>
                      <th className="table-header">Yield %</th>
                      <th className="table-header">Maturity date</th>
                      <th className="table-header">Price</th>
                      <th className="table-header">Yield change 1 day</th>
                      <th className="table-header">Price change 1 day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bondsData.map((bond, index) => (
                      <tr key={index} className="bond-row">
                        <td className="bond-cell">
                          <div className="bond-symbol-container">
                            <a href={`/symbols/TVC:${bond.symbol}/`} className="bond-symbol-link" target="_blank" rel="noopener noreferrer">
                              {bond.symbol}
                            </a>
                            <span className="bond-name">{bond.name}</span>
                          </div>
                        </td>
                        <td className="bond-cell">
                          <span>{bond.coupon}</span>
                        </td>
                        <td className="bond-cell">
                          <span>{bond.yield}</span>
                        </td>
                        <td className="bond-cell">
                          <span>{bond.maturity}</span>
                        </td>
                        <td className="bond-cell">
                          <div className="bond-price-container">
                            <span>{bond.price}</span>
                            <span className="bond-unit">{bond.priceUnit}</span>
                          </div>
                        </td>
                        <td className="bond-cell">
                          <span className={`bond-yield-change ${bond.yieldIsUp === true ? 'up' : bond.yieldIsUp === false ? 'down' : 'neutral'}`}>
                            {bond.yieldChange}
                          </span>
                        </td>
                        <td className="bond-cell">
                          <div className={`bond-price-change ${bond.priceChangeIsUp === true ? 'up' : bond.priceChangeIsUp === false ? 'down' : 'neutral'}`}>
                            <span>{bond.priceChange}</span>
                            <span className="bond-unit">{bond.priceChangeUnit}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Corporate Bonds Section */}
        {activeTab === 'corporate-bonds' && (
          <section className="content-section">
            <div className="bond-section">
              <div className="bond-header">
                <div className="bond-title-section">
                  <h2>US Corporate Bonds</h2>
                  <div className="bond-filters">
                    <button className="filter-btn active">All</button>
                    <button className="filter-btn">Investment Grade</button>
                    <button className="filter-btn">High Yield</button>
                    <button className="filter-btn">By Sector</button>
                  </div>
                </div>
                <button className="view-all-btn">View All Corporate Bonds →</button>
              </div>

              {/* Corporate Bonds Summary */}
              <div className="corporate-bonds-summary">
                <div className="summary-cards">
                  <div className="summary-card">
                    <span className="summary-label">Average Yield</span>
                    <span className="summary-value">5.28%</span>
                    <span className="summary-change up">+0.15%</span>
                  </div>
                  <div className="summary-card">
                    <span className="summary-label">Investment Grade</span>
                    <span className="summary-value">4.65%</span>
                    <span className="summary-change up">+0.08%</span>
                  </div>
                  <div className="summary-card">
                    <span className="summary-label">High Yield</span>
                    <span className="summary-value">7.82%</span>
                    <span className="summary-change up">+0.22%</span>
                  </div>
                  <div className="summary-card">
                    <span className="summary-label">Spread vs Treasury</span>
                    <span className="summary-value">+142bps</span>
                    <span className="summary-change up">+5bps</span>
                  </div>
                </div>
              </div>

              {/* Corporate Bonds Table */}
              <div className="bond-table-container">
                <table className="bond-yields-table corporate-bonds-table">
                  <thead>
                    <tr>
                      <th className="table-header left-align">Symbol & Issuer</th>
                      <th className="table-header">Rating</th>
                      <th className="table-header">Sector</th>
                      <th className="table-header">Coupon</th>
                      <th className="table-header">Yield %</th>
                      <th className="table-header">Maturity date</th>
                      <th className="table-header">Price</th>
                      <th className="table-header">Yield change 1 day</th>
                      <th className="table-header">Price change 1 day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {corporateBondsData.map((bond, index) => (
                      <tr key={index} className="bond-row corporate-bond-row">
                        <td className="bond-cell">
                          <div className="bond-symbol-container">
                            <a href={`/symbols/${bond.symbol}/`} className="bond-symbol-link" target="_blank" rel="noopener noreferrer">
                              {bond.symbol}
                            </a>
                            <span className="bond-name">{bond.name}</span>
                          </div>
                        </td>
                        <td className="bond-cell">
                          <span className={`bond-rating rating-${bond.rating?.replace('+', 'plus').toLowerCase()}`}>
                            {bond.rating}
                          </span>
                        </td>
                        <td className="bond-cell">
                          <span className="bond-sector">{bond.sector}</span>
                        </td>
                        <td className="bond-cell">
                          <span>{bond.coupon}</span>
                        </td>
                        <td className="bond-cell">
                          <span>{bond.yield}</span>
                        </td>
                        <td className="bond-cell">
                          <span>{bond.maturity}</span>
                        </td>
                        <td className="bond-cell">
                          <div className="bond-price-container">
                            <span>{bond.price}</span>
                            <span className="bond-unit">{bond.priceUnit}</span>
                          </div>
                        </td>
                        <td className="bond-cell">
                          <span className={`bond-yield-change ${bond.yieldIsUp === true ? 'up' : bond.yieldIsUp === false ? 'down' : 'neutral'}`}>
                            {bond.yieldChange}
                          </span>
                        </td>
                        <td className="bond-cell">
                          <div className={`bond-price-change ${bond.priceChangeIsUp === true ? 'up' : bond.priceChangeIsUp === false ? 'down' : 'neutral'}`}>
                            <span>{bond.priceChange}</span>
                            <span className="bond-unit">{bond.priceChangeUnit}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Credit Spread Analysis */}
              <div className="credit-spread-section">
                <h3>Credit Spread Analysis</h3>
                <div className="spread-charts">
                  <div className="spread-chart">
                    <h4>Investment Grade Spreads</h4>
                    <div className="chart-placeholder-small">
                      <p>AAA: +85bps | AA: +95bps | A: +115bps | BBB: +165bps</p>
                    </div>
                  </div>
                  <div className="spread-chart">
                    <h4>High Yield Spreads</h4>
                    <div className="chart-placeholder-small">
                      <p>BB: +285bps | B: +425bps | CCC: +685bps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ETFs Section */}
        {activeTab === 'etfs' && (
          <section className="content-section">
            <div className="section-header">
              <h2>ETFs of the USA</h2>
              <button className="view-all-btn">View All →</button>
            </div>
            <div className="etfs-grid">
              {marketData.etfs.map((etf, index) => (
                <div key={index} className="etf-card">
                  <div className="etf-symbol">{etf.symbol}</div>
                  <div className="etf-name">{etf.name}</div>
                  <div className="etf-details">
                    <span className="etf-price">{etf.price}</span>
                    <span className="etf-change">{etf.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Economy Section */}
        {activeTab === 'economy' && (
          <section className="content-section">
            <div className="economy-section">
              {/* Main Economy Header */}
              <div className="economy-header">
                <div className="header-wrapper">
                  <div className="header-container">
                    <a className="header-link" href="/markets/world-economy/countries/united-states/">
                      <h2 className="header-title">
                        US <span className="no-break">economy</span>
                        <span role="img" className="arrow-icon" aria-hidden="true">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                            <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                          </svg>
                        </span>
                      </h2>
                    </a>
                  </div>
                </div>
              </div>

              {/* Key Economic Indicators Section */}
              <div className="economy-content">
                <div className="indicators-section">
                  <div className="indicators-header">
                    <div className="indicators-wrapper">
                      <div className="indicators-container">
                        <h3 className="indicators-title">Key economic indicators</h3>
                      </div>
                    </div>
                  </div>

                  <div className="indicators-content">
                    <div className="indicators-container-main">
                      <div className="indicators-scroll-container">
                        <div className="indicators-scroll-area">
                          <div className="scroll-left-button">
                            <button className="scroll-button" type="button">
                              <span className="button-content">
                                <span role="img" aria-hidden="true">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                    <path fill="currentColor" d="m9.59 14 6.7 6.7 1.42-1.4-5.3-5.3 5.3-5.3-1.41-1.4L9.59 14Z"></path>
                                  </svg>
                                </span>
                              </span>
                            </button>
                          </div>

                          <div className="indicators-grid">
                            {economyIndicators.map(renderIndicatorCard)}
                          </div>

                          <a className="see-all-card" href="/markets/world-economy/countries/united-states/">
                            <p className="see-all-content">
                              <span className="see-all-wrap">
                                <span className="see-all-text">See all US indicators</span>
                                <span role="img" className="see-all-arrow" aria-hidden="true">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                                    <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                                  </svg>
                                </span>
                              </span>
                            </p>
                          </a>

                          <div className="scroll-right-button visible">
                            <button className="scroll-button" type="button">
                              <span className="button-content">
                                <span role="img" aria-hidden="true">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                    <path fill="currentColor" d="m18.41 14-6.7 6.7-1.42-1.4 5.3-5.3-5.3-5.3 1.41-1.4 6.71 6.7Z"></path>
                                  </svg>
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Main Chart Area */}
                      <div className="main-chart-container">
                        <div className="chart-wrapper">
                          <div className="chart-area">
                            <div className="chart-placeholder-main">
                              <h3>US {economyIndicators.find(i => i.id === selectedIndicator)?.name} Chart</h3>
                              <div className="mock-chart-large">
                                <div className="chart-line-main"></div>
                              </div>
                            </div>
                          </div>
                          <div className="chart-controls">
                            <div className="timeframe-controls">
                              <div className="timeframe-options">
                                {timeframes.map(timeframe => (
                                  <button
                                    key={timeframe.id}
                                    tabIndex="0"
                                    title={timeframe.label}
                                    className={`timeframe-tab ${activeTimeframe === timeframe.id ? 'selected' : ''}`}
                                    onClick={() => setActiveTimeframe(timeframe.id)}
                                  >
                                    <span className="timeframe-label">{timeframe.label}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                            <span className="chart-buttons">
                              <a href="/widget-docs/widgets/charts/symbol-overview/" title="Get widget" aria-label="Get widget" target="_blank" className="chart-button">
                                <span className="button-slot">
                                  <span role="img" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                      <path fill="currentColor" d="M15.66 5.77c.4.08.66.48.57.89l-3 14a.75.75 0 0 1-1.46-.32l3-14c.08-.4.48-.66.89-.57ZM18 7.94a.75.75 0 0 1 1.06.06l4.5 5c.25.28.25.72 0 1l-4.5 5a.75.75 0 0 1-1.12-1L22 13.5 17.94 9A.75.75 0 0 1 18 7.94ZM10.06 9a.75.75 0 0 0-1.12-1l-4.5 5a.75.75 0 0 0 0 1l4.5 5a.75.75 0 1 0 1.12-1L6 13.5 10.06 9Z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </a>
                              <span className="chart-style-group">
                                <button aria-label="Chart style line with markers" title="Line with markers" className="chart-style-button selected">
                                  <span className="button-slot">
                                    <span aria-hidden="true" role="img" className="block-icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                        <path fill="currentColor" fillRule="evenodd" d="m18.58 16.12 7-8.65-1.16-.94-7 8.64a2.5 2.5 0 0 0-2.18.17l-2.34-2.13a2.5 2.5 0 1 0-.86 1.26l2.19 1.98a2.5 2.5 0 1 0 4.35-.33ZM10.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                                        <path fill="currentColor" d="M8.24 13.56c.22.47.58.86 1.03 1.11l-5.7 6.81-1.15-.96 5.82-6.96Z"></path>
                                      </svg>
                                    </span>
                                  </span>
                                </button>
                                <button aria-label="Chart style step line" title="Step line" className="chart-style-button">
                                  <span className="button-slot">
                                    <span aria-hidden="true" role="img" className="block-icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                        <path fill="currentColor" d="M18.75 4.25H24v1.5h-3.75v13h-6.5v-7h-3.5v12H5v-1.5h3.75v-12h6.5v7h3.5v-13Z"></path>
                                      </svg>
                                    </span>
                                  </span>
                                </button>
                              </span>
                              <a href="/chart/?symbol=ECONOMICS%3AUSGDP" target="_blank" aria-label="Launch full chart view" title="Launch full chart view" className="chart-button">
                                <span className="button-slot">
                                  <span role="img" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                      <path fill="currentColor" d="M17 5.5h3A2.5 2.5 0 0 1 22.5 8v3H24V8a4 4 0 0 0-4-4h-3v1.5ZM11 5.5V4H8a4 4 0 0 0-4 4v3h1.5V8A2.5 2.5 0 0 1 8 5.5h3ZM5.5 17H4v3a4 4 0 0 0 4 4h3v-1.5H8A2.5 2.5 0 0 1 5.5 20v-3ZM17 22.5V24h3a4 4 0 0 0 4-4v-3h-1.5v3a2.5 2.5 0 0 1-2.5 2.5h-3Z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Indicators Sections */}
                <div className="detailed-indicators">
                  <div className="indicators-grid-layout">
                    {/* GDP Indicators */}
                    <div className="indicator-category">
                      <div className="category-header">
                        <div className="header-wrapper">
                          <div className="header-container">
                            <a className="header-link" href="/markets/world-economy/countries/united-states/?category=gdp">
                              <h3 className="category-title">
                                <span className="no-break">GDP</span>
                                <span role="img" className="arrow-icon" aria-hidden="true">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                                    <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                                  </svg>
                                </span>
                              </h3>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="category-content">
                        <div className="indicators-table-header">
                          <span>Indicator</span>
                          <span>Period</span>
                          <span>Last</span>
                        </div>
                        <div className="indicators-table-header mobile">
                          <span>Indicator</span>
                          <span>Period/Last</span>
                        </div>
                        <div className="indicators-list">
                          {detailedIndicators.gdp?.map(renderIndicatorRow)}
                        </div>
                      </div>
                      <div className="category-footer">
                        <a href="/markets/world-economy/countries/united-states/?category=gdp" className="see-more-button">
                          <span className="button-background"></span>
                          <span className="button-content">
                            <span className="button-title">See all GDP indicators</span>
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Government Indicators */}
                    <div className="indicator-category">
                      <div className="category-header">
                        <div className="header-wrapper">
                          <div className="header-container">
                            <a className="header-link" href="/markets/world-economy/countries/united-states/?category=gov">
                              <h3 className="category-title">
                                <span className="no-break">Government</span>
                                <span role="img" className="arrow-icon" aria-hidden="true">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                                    <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                                  </svg>
                                </span>
                              </h3>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="category-content">
                        <div className="indicators-table-header">
                          <span>Indicator</span>
                          <span>Period</span>
                          <span>Last</span>
                        </div>
                        <div className="indicators-table-header mobile">
                          <span>Indicator</span>
                          <span>Period/Last</span>
                        </div>
                        <div className="indicators-list">
                          {detailedIndicators.government?.map(renderIndicatorRow)}
                        </div>
                      </div>
                      <div className="category-footer">
                        <a href="/markets/world-economy/countries/united-states/?category=gov" className="see-more-button">
                          <span className="button-background"></span>
                          <span className="button-content">
                            <span className="button-title">See all government indicators</span>
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Prices Indicators */}
                    <div className="indicator-category">
                      <div className="category-header">
                        <div className="header-wrapper">
                          <div className="header-container">
                            <a className="header-link" href="/markets/world-economy/countries/united-states/?category=prce">
                              <h3 className="category-title">
                                <span className="no-break">Prices</span>
                                <span role="img" className="arrow-icon" aria-hidden="true">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                                    <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                                  </svg>
                                </span>
                              </h3>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="category-content">
                        <div className="indicators-table-header">
                          <span>Indicator</span>
                          <span>Period</span>
                          <span>Last</span>
                        </div>
                        <div className="indicators-table-header mobile">
                          <span>Indicator</span>
                          <span>Period/Last</span>
                        </div>
                        <div className="indicators-list">
                          {detailedIndicators.prices?.map(renderIndicatorRow)}
                        </div>
                      </div>
                      <div className="category-footer">
                        <a href="/markets/world-economy/countries/united-states/?category=prce" className="see-more-button">
                          <span className="button-background"></span>
                          <span className="button-content">
                            <span className="button-title">See all prices indicators</span>
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Labor Indicators */}
                    <div className="indicator-category">
                      <div className="category-header">
                        <div className="header-wrapper">
                          <div className="header-container">
                            <a className="header-link" href="/markets/world-economy/countries/united-states/?category=lbr">
                              <h3 className="category-title">
                                <span className="no-break">Labor</span>
                                <span role="img" className="arrow-icon" aria-hidden="true">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                                    <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                                  </svg>
                                </span>
                              </h3>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="category-content">
                        <div className="indicators-table-header">
                          <span>Indicator</span>
                          <span>Period</span>
                          <span>Last</span>
                        </div>
                        <div className="indicators-table-header mobile">
                          <span>Indicator</span>
                          <span>Period/Last</span>
                        </div>
                        <div className="indicators-list">
                          {detailedIndicators.labor?.map(renderIndicatorRow)}
                        </div>
                      </div>
                      <div className="category-footer">
                        <a href="/markets/world-economy/countries/united-states/?category=lbr" className="see-more-button">
                          <span className="button-background"></span>
                          <span className="button-content">
                            <span className="button-title">See all labor indicators</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Economic Calendar */}
                <div className="economic-calendar-section">
                  <div className="calendar-header">
                    <div className="header-wrapper">
                      <div className="header-container">
                        <a className="header-link" href="/economic-calendar/?country=us">
                          <h3 className="calendar-title">
                            Economic <span className="no-break">Calendar</span>
                            <span role="img" className="arrow-icon" aria-hidden="true">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                                <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                              </svg>
                            </span>
                          </h3>
                        </a>
                      </div>
                    </div>
                    <a href="/widget-docs/widgets/calendars/economic-calendar/" title="Get widget" aria-label="Get widget" target="_blank" className="calendar-widget-button">
                      <span className="button-slot">
                        <span role="img" aria-hidden="true">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                            <path fill="currentColor" d="M15.66 5.77c.4.08.66.48.57.89l-3 14a.75.75 0 0 1-1.46-.32l3-14c.08-.4.48-.66.89-.57ZM18 7.94a.75.75 0 0 1 1.06.06l4.5 5c.25.28.25.72 0 1l-4.5 5a.75.75 0 0 1-1.12-1L22 13.5 17.94 9A.75.75 0 0 1 18 7.94ZM10.06 9a.75.75 0 0 0-1.12-1l-4.5 5a.75.75 0 0 0 0 1l4.5 5a.75.75 0 1 0 1.12-1L6 13.5 10.06 9Z"></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="calendar-content">
                    <div className="calendar-container">
                      <div className="calendar-scroll-container">
                        <div className="calendar-scroll-area">
                          <div className="scroll-left-button">
                            <button className="scroll-button" type="button">
                              <span className="button-content">
                                <span role="img" aria-hidden="true">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                    <path fill="currentColor" d="m9.59 14 6.7 6.7 1.42-1.4-5.3-5.3 5.3-5.3-1.41-1.4L9.59 14Z"></path>
                                  </svg>
                                </span>
                              </span>
                            </button>
                          </div>

                          <div className="calendar-events-grid">
                            {calendarEvents.map(renderCalendarEvent)}
                          </div>

                          <a className="see-all-card calendar" href="/economic-calendar/?country=us">
                            <p className="see-all-content">
                              <span className="see-all-wrap">
                                <span className="see-all-text">See more events</span>
                                <span role="img" className="see-all-arrow" aria-hidden="true">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="6" height="11">
                                    <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"></path>
                                  </svg>
                                </span>
                              </span>
                            </p>
                          </a>

                          <div className="scroll-right-button visible">
                            <button className="scroll-button" type="button">
                              <span className="button-content">
                                <span role="img" aria-hidden="true">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                    <path fill="currentColor" d="m18.41 14-6.7 6.7-1.42-1.4 5.3-5.3-5.3-5.3 1.41-1.4 6.71 6.7Z"></path>
                                  </svg>
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-footer">
                    <a href="/economic-calendar/?country=us" className="see-more-button">
                      <span className="button-background"></span>
                      <span className="button-content">
                        <span className="button-title">See all market events</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default TradingDashboard;
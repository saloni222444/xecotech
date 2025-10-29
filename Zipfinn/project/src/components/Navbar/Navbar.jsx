import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavItem = ({ title, menuData, onSubmenuHover, onSubmenuLeave, isSubmenuActive, activeNavItem, setActiveNavItem, mobileMenuOpen, setMobileMenuOpen, selectedCountry, onCountryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const navItemRef = useRef(null);

  // IMPROVED: Better handleItemClick function with event handling
  const handleItemClick = (item, e) => {
    if (e) {
      e.stopPropagation(); // Prevent event bubbling
    }

    console.log("Item clicked:", item); // Debug log

    if (item.action) {
      item.action();
    } else if (item.route) {
      console.log("Navigating to:", item.route); // Debug log
      navigate(item.route);
    }

    // Close menus
    setIsOpen(false);
    setActiveNavItem(null);

    // Mobile menu close करें
    if (mobileMenuOpen && setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Update height when menu opens or content changes
  useEffect(() => {
    if (dropdownRef.current && isOpen) {
      const dropdown = dropdownRef.current;
      // Reset height first
      dropdown.style.height = 'auto';
      // Calculate content height
      const contentHeight = dropdown.scrollHeight;
      // Set dynamic height
      dropdown.style.height = `${contentHeight}px`;

      // If submenu is active, apply the shared height
      if (isSubmenuActive) {
        const finalHeight = Math.max(contentHeight, parseInt(document.documentElement.style.getPropertyValue('--menu-height') || '0'));
        dropdown.style.height = `${finalHeight}px`;
      }
    }
  }, [isOpen, menuData, isSubmenuActive]);

  const handleMouseEnter = () => {
    setIsOpen(true);
    setActiveNavItem(navItemRef.current);
  };

  const handleMouseLeave = (e) => {
    // Check if mouse is moving to dropdown menu
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && dropdownRef.current && dropdownRef.current.contains(relatedTarget)) {
      return; // Don't close if moving to dropdown
    }
    setIsOpen(false);
    if (activeNavItem === navItemRef.current) {
      setActiveNavItem(null);
    }
  };

  const handleDropdownMouseEnter = () => {
    setIsOpen(true);
    setActiveNavItem(navItemRef.current);
  };

  const handleDropdownMouseLeave = (e) => {
    // Check if mouse is moving back to nav item
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && navItemRef.current && navItemRef.current.contains(relatedTarget)) {
      return; // Don't close if moving back to nav item
    }
    setIsOpen(false);
    if (activeNavItem === navItemRef.current) {
      setActiveNavItem(null);
    }
  };

  return (
    <div
      ref={navItemRef}
      className="nav-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{title}</span>
      {isOpen && menuData && (
        <div
          ref={dropdownRef}
          className={`dropdown-menu main-menu ${isSubmenuActive ? 'active' : ''}`}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          {menuData.header && (
            <div
              className={`dropdown-header ${menuData.header.action || menuData.header.route ? 'clickable' : ''}`}
              onClick={(e) => (menuData.header.action || menuData.header.route) && handleItemClick(menuData.header, e)}
              style={{ cursor: (menuData.header.action || menuData.header.route) ? 'pointer' : 'default' }}
            >
              {typeof menuData.header === "object" ? (
                <>
                  {menuData.header.icon && <i className={menuData.header.icon}></i>}
                  <span>{menuData.header.text}</span>
                </>
              ) : (
                menuData.header
              )}
            </div>
          )}

          {menuData.description && (
            <div className="dropdown-description">{menuData.description}</div>
          )}

          {menuData.divider && <div className="dropdown-divider"></div>}

          {menuData.subHeader && (
            <div className="dropdown-subheader">{menuData.subHeader}</div>
          )}

          {menuData.subItems &&
            menuData.subItems.map((item, index) => {

              if (item.type === 'divider') {
                return <div key={index} className="dropdown-divider"></div>;
              }

              if (item.type === 'subHeader') {
                return (
                  <div key={index} className="dropdown-subheader">
                    {item.text}
                  </div>
                );
              }

              // FIXED: Improved click handling for all items
              return (
                <div
                  key={index}
                  className={`dropdown-item ${item.submenu ? 'has-submenu' : ''} ${item.action || item.route ? 'clickable' : ''}`}
                  onMouseEnter={(e) => onSubmenuHover(item.submenu, e, dropdownRef.current)}
                  onMouseLeave={onSubmenuLeave}
                  onClick={(e) => {
                    if (item.action || item.route) {
                      handleItemClick(item, e);
                    }
                  }}
                  style={{ cursor: (item.action || item.route) ? 'pointer' : 'default' }}
                >
                  <div className="dropdown-item-content">
                    {item.icon && <i className={item.icon}></i>}
                    <div className="dropdown-item-text">
                      <span className="dropdown-item-title">{item.text}</span>
                      {item.description && (
                        <div className="dropdown-item-description">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="dropdown-item-right">
                    {item.badge && (
                      <span
                        className={`badge ${item.badge === "BETA" ? "badge-beta" : "badge-new"}`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {item.submenu && (
                      <i className="fas fa-chevron-right arrow-icon"></i>
                    )}
                  </div>
                </div>
              );
            })}

          {menuData.about && menuData.about.length > 0 && (
            <>
              <div className="dropdown-divider"></div>
              {menuData.about.map((item, index) => (
                <div
                  key={index}
                  className={`dropdown-item ${item.action || item.route ? 'clickable' : ''}`}
                  onClick={(e) => (item.action || item.route) && handleItemClick(item, e)}
                  style={{ cursor: (item.action || item.route) ? 'pointer' : 'default' }}
                >
                  <span>{item.text}</span>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

// Navbar.jsx - Updated to accept selectedCountry and onCountryChange props
const Navbar = ({ user, onLogout, selectedCountry, onCountryChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subMenu, setSubMenu] = useState(null);
  const [subMenuPosition, setSubMenuPosition] = useState({ top: 0, left: 0 });
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [activeMainMenu, setActiveMainMenu] = useState(null);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [userMenuTimeout, setUserMenuTimeout] = useState(null);
  const subMenuRef = useRef(null);

  const navigate = useNavigate();

  // FIXED: Scroll effect - Remove scrolled from dependencies
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      console.log("Scroll Y:", window.scrollY, "Scrolled:", isScrolled); // Debug
      setScrolled(isScrolled);
    };

    // Immediate check on mount
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array

  // Update both menus height when submenu changes
  useEffect(() => {
    if (subMenuRef.current && subMenuVisible && activeMainMenu) {
      const submenu = subMenuRef.current;
      const mainMenu = activeMainMenu;

      // Calculate heights
      const mainMenuHeight = mainMenu.scrollHeight;
      const submenuHeight = submenu.scrollHeight;

      // Use the larger height for both menus
      const finalHeight = Math.max(mainMenuHeight, submenuHeight);

      // Set CSS variable for consistent height
      document.documentElement.style.setProperty('--menu-height', `${finalHeight}px`);

      // Apply heights to both menus
      mainMenu.style.height = `${finalHeight}px`;
      submenu.style.height = `${finalHeight}px`;
    }
  }, [subMenu, subMenuVisible, activeMainMenu]);

  // Improved user menu handlers with delay
  const handleUserMenuEnter = () => {
    if (userMenuTimeout) {
      clearTimeout(userMenuTimeout);
      setUserMenuTimeout(null);
    }
    setUserMenuOpen(true);
  };

  const handleUserMenuLeave = () => {
    const timeout = setTimeout(() => {
      setUserMenuOpen(false);
    }, 300);
    setUserMenuTimeout(timeout);
  };

  const handleDropdownEnter = () => {
    if (userMenuTimeout) {
      clearTimeout(userMenuTimeout);
      setUserMenuTimeout(null);
    }
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setUserMenuOpen(false);
    }, 300);
    setUserMenuTimeout(timeout);
  };

  // Sign in click handler
  const handleSignInClick = () => {
    setUserMenuOpen(false);
    navigate('/login');
  };

  // Conditional user menu based on login status
  const userMenu = user ? [
    { icon: "fas fa-user", text: "My Profile", action: () => navigate('/profile') },
    { text: "Help Center" },
    { text: "What's new" },
    { type: "divider" },
    { type: "toggle", text: "Dark theme" },
    { type: "divider" },
    // { icon: "fas fa-sign-out-alt", text: "Logout", action: onLogout }
  ] : [
    { icon: "fas fa-user", text: "Sign in", action: () => navigate('/login') },
    { text: "Help Center" },
    { text: "What's new" },
    { type: "divider" },
    { type: "toggle", text: "Dark theme" }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-mode');
  };

  const handleSubmenuHover = (submenuData, e, mainMenuElement) => {
    if (submenuData) {
      const mainMenu = mainMenuElement || e.target.closest('.nav-item').querySelector('.dropdown-menu');
      const rect = mainMenu.getBoundingClientRect();

      setActiveMainMenu(mainMenu);

      const itemRect = e.target.getBoundingClientRect();
      setSubMenuPosition({
        top: rect.top,
        left: rect.right
      });
      setSubMenu(submenuData);
      setSubMenuVisible(true);
    }
  };

  const handleSubmenuLeave = () => {
    // Don't immediately hide submenu - let the timeout handle it
  };

  const handleSubmenuMouseEnter = () => {
    setSubMenuVisible(true);
  };

  const handleSubmenuMouseLeave = (e) => {
    // Check if mouse is moving back to main menu
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && activeMainMenu && activeMainMenu.contains(relatedTarget)) {
      return; // Don't close if moving back to main menu
    }

    setSubMenuVisible(false);
    setTimeout(() => {
      if (!subMenuVisible) {
        setSubMenu(null);
        setActiveMainMenu(null);
        // Reset heights
        document.documentElement.style.removeProperty('--menu-height');
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
          menu.style.height = 'auto';
          menu.classList.remove('active');
        });
      }
    }, 200);
  };

  // UPDATED: Submenu item click handler to handle country changes
  const handleSubmenuItemClick = (item, e) => {
    if (e) {
      e.stopPropagation();
    }

    console.log("Submenu item clicked:", item);

    // If this is a country item, update the selected country
    if (item.isCountry) {
      console.log("Updating selected country to:", item.text);
      if (onCountryChange) {
        onCountryChange({
          id: item.id,
          name: item.text,
          flag: item.flag,
          route: item.route
        });
      }
    }

    if (item.route) {
      console.log("Navigating to:", item.route);
      navigate(item.route);

      // Close all menus
      setSubMenuVisible(false);
      setSubMenu(null);
      setActiveMainMenu(null);
      setActiveNavItem(null);
    }
  };

  // Market indices data for the right-side menu
  const marketIndicesSubmenu = [
    {
      text: "Nifty 50",
      value: "25,327.05 INR",
      change: "-0.38%",
      isBold: true
    },
    {
      text: "Sensex D",
      value: "82,626.23 INR",
      change: "-0.47%"
    },
    {
      text: "BSE LargeCap D",
      value: "9,783.79 INR",
      change: "-0.18%"
    },
    {
      text: "BSE MidCap D",
      value: "46,867.33 INR",
      change: "-0.09%"
    },
    {
      text: "BSE SmallCap D",
      value: "54,622.04 INR",
      change: "+0.16%"
    },
    {
      text: "Nifty 500",
      value: "23,486.65 INR",
      change: "-0.14%"
    },
    {
      text: "Nifty MidCap",
      value: "59,094.35 INR",
      change: "+0.04%"
    }
  ];

  // UPDATED: Countries submenu data with country change actions
  const countriesSubmenu = [
    {
      text: "India",
      isBold: true,
      route: "/market/Countries/India/India",
      isCountry: true,
      id: "india",
      flag: "https://s3-symbol-logo.tradingview.com/country/IN.svg"
    },
    {
      text: "United States",
      isBold: true,
      route: "/market/Countries/Unitedstate/Unitedstate",
      isCountry: true,
      id: "usa",
      flag: "https://s3-symbol-logo.tradingview.com/country/US.svg"
    },
    {
      text: "Canada",
      isBold: true,
      route: "/market/Countries/Canada/Canada",
      isCountry: true,
      id: "canada",
      flag: "https://s3-symbol-logo.tradingview.com/country/CA.svg"
    },
    {
      text: "United Kingdom",
      isBold: true,
      route: "/market/Countries/UnitedKingdom/UnitedKingdom",
      isCountry: true,
      id: "uk",
      flag: "https://s3-symbol-logo.tradingview.com/country/GB.svg"
    },
    {
      text: "Germany",
      isBold: true,
      route: "/market/Countries/Germany/Germany",
      isCountry: true,
      id: "germany",
      flag: "https://s3-symbol-logo.tradingview.com/country/DE.svg"
    },
    {
      text: "Japan",
      isBold: true,
      route: "/market/Countries/Japan/Japan",
      isCountry: true,
      id: "japan",
      flag: "https://s3-symbol-logo.tradingview.com/country/JP.svg"
    },
    {
      text: "Mainland China",
      isBold: true,
      route: "/market/Countries/MainlandChina/MainlandChina",
      isCountry: true,
      id: "china",
      flag: "https://s3-symbol-logo.tradingview.com/country/CN.svg"
    },
    {
      text: "Hong Kong, China",
      isBold: true,
      route: "/market/Countries/HongKong/HongKong",
      isCountry: true,
      id: "hongkong",
      flag: "https://s3-symbol-logo.tradingview.com/country/HK.svg"
    },
    {
      text: "Saudi Arabia",
      isBold: true,
      route: "/market/Countries/SaudiArabia/SaudiArabia",
      isCountry: true,
      id: "saudiarabia",
      flag: "https://s3-symbol-logo.tradingview.com/country/SA.svg"
    },
    {
      text: "Australia",
      isBold: true,
      route: "/market/Countries/Australia/Australia",
      isCountry: true,
      id: "australia",
      flag: "https://s3-symbol-logo.tradingview.com/country/AU.svg"
    }
  ];

  // Entire world submenu data
  const entireWorldSubmenu = [
    { text: "Entire world", isBold: true },
    { text: "Countries", isBold: true },
    { text: "News", hasArrow: true },
    { text: "ASSETS", isSectionHeader: true },
    { text: "Indices", hasArrow: true },
    { text: "Stocks", hasArrow: true },
    { text: "Crypto", hasArrow: true },
    { text: "Futures", hasArrow: true },
    { text: "Forex", hasArrow: true },
    { text: "Government bonds", hasArrow: true },
    { text: "Corporate bonds", hasArrow: true },
    { text: "ETFs", hasArrow: true },
    { text: "Economy", hasArrow: true }
  ];

  // Menu data definitions with submenus
  const productsMenu = {
    header: {
      icon: "fas fa-gem",
      text: "Supercharts"
    },
    description: "The one terminal to rule them all",
    divider: true,
    subHeader: "INDIVIDUAL TOOLS",
    subItems: [
      {
        icon: "fas fa-circle-notch",
        text: "Screeners",
        route: "/Screneres/stocks", 
        action: () => navigate('/Screneres/stocks'), 
        submenu: [
          {
            text: "Stock Screener",
            description: "Screen stocks based on criteria",
            route: "/Screneres/stocks", 
            action: () => navigate('/Screneres/stocks'), 
          },
          {
            text: "Forex Screener",
            description: "Real-time forex market screening",
            route: "/screener/forex",
            action: () => navigate('/screener/forex')
          },
          {
            text: "Crypto Screener",
            description: "Cryptocurrency market analysis",
            route: "/screener/crypto",
            action: () => navigate('/screener/crypto')
          },
          {
            text: "Options Screener",
            description: "Options trading opportunities",
            route: "/screener/options",
            action: () => navigate('/screener/options')
          }
        ]
      },
      {
        icon: "fas fa-calendar-alt",
        text: "Calendars",
        submenu: [
          { text: "Economic Calendar", description: "Global economic events" },
          { text: "Earnings Calendar", description: "Company earnings schedule" },
          { text: "Dividend Calendar", description: "Dividend announcement dates" },
          { text: "IPO Calendar", description: "Upcoming IPOs" }
        ]
      },
      {
        icon: "fas fa-stream",
        text: "News Flow",
        submenu: [
          { text: "Market News", description: "Latest market updates" },
          { text: "Company News", description: "Corporate announcements" },
          { text: "Economic News", description: "Macroeconomic developments" }
        ]
      },
      {
        icon: "fas fa-briefcase",
        text: "Portfolios",
        badge: "BETA",
        submenu: [
          { text: "Create Portfolio", description: "Build your investment portfolio" },
          { text: "Track Performance", description: "Monitor portfolio returns" },
          { text: "Portfolio Analysis", description: "Detailed portfolio analytics" }
        ]
      },
      {
        icon: "fas fa-wave-square",
        text: "Yield Curves",
        submenu: [
          { text: "US Treasury Yield Curve", description: "US government bond yields" },
          { text: "European Yield Curves", description: "European government bonds" },
          { text: "Asian Yield Curves", description: "Asian government bonds" }
        ]
      },
      {
        icon: "fas fa-sliders-h",
        text: "Options",
        submenu: [
          { text: "Options Chain", description: "Complete options data" },
          { text: "Options Flow", description: "Unusual options activity" },
          { text: "Volatility Analysis", description: "Options volatility metrics" }
        ]
      },
      {
        icon: "fas fa-chart-bar",
        text: "Fundamental Graphs",
        badge: "NEW",
        submenu: [
          { text: "Financial Ratios", description: "Company financial metrics" },
          { text: "Revenue Analysis", description: "Revenue trends and analysis" },
          { text: "Earnings Analysis", description: "Earnings performance" }
        ]
      }
    ],
    about: [
      { text: "Pricing" },
      { text: "Features" },
      { text: "What's new" },
      { text: "Market data" }
    ]
  };

  const communityMenu = {
    header: {
      icon: "fas fa-trophy",
      text: "The Leap",
      action: () => navigate('/Leap')
    },
    description: "Compete for real-money prizes in a risk-free competition",
    divider: true,
    subItems: [
      { icon: "fas fa-trophy", text: "Leap", action: () => navigate('/Leap') },
      { type: "subHeader", text: "CREATED BY TRADERS" },
      { icon: "fas fa-lightbulb", text: "Trading ideas", action: () => navigate('/community/ideas') },
      { icon: "fas fa-chart-area", text: "Indicators and strategies", action: () => navigate('/community/strategies') }
    ],
    about: [
      { text: "Power of community", action: () => navigate('/community/about') }
    ]
  };

  // Updated Markets menu with the structure from the image
  const marketsMenu = {
    header: {
      icon: "fas fa-globe",
      text: "Entire World",
    },
    subItems: [
      {
        icon: "fas fa-flag",
        text: "Countries",
        hasArrow: true,
        submenu: countriesSubmenu
      },
      {
        icon: "fas fa-newspaper",
        text: "News",
        hasArrow: true,
        submenu: entireWorldSubmenu
      },
      { type: "divider" },
      { type: "subHeader", text: "ASSETS" },
      {
        icon: "fas fa-chart-line",
        text: "Indices",
        hasArrow: true,
        submenu: marketIndicesSubmenu
      },
      {
        icon: "fas fa-building",
        text: "Stocks",
        hasArrow: true,
        submenu: entireWorldSubmenu
      },
      {
        icon: "fas fa-coins",
        text: "Crypto",
        hasArrow: true,
        submenu: entireWorldSubmenu
      },
      {
        icon: "fas fa-chart-bar",
        text: "Futures",
        hasArrow: true,
        submenu: entireWorldSubmenu
      },
      {
        icon: "fas fa-dollar-sign",
        text: "Forex",
        hasArrow: true,
        submenu: entireWorldSubmenu
      },
      {
        icon: "fas fa-landmark",
        text: "Government bonds",
        hasArrow: true,
        submenu: entireWorldSubmenu
      },
      {
        icon: "fas fa-briefcase",
        text: "Corporate bonds",
        hasArrow: true,
        submenu: entireWorldSubmenu
      },
      {
        icon: "fas fa-layer-group",
        text: "ETFs",
        hasArrow: true,
        submenu: entireWorldSubmenu
      },
      {
        icon: "fas fa-globe",
        text: "Economy",
        hasArrow: true,
        submenu: entireWorldSubmenu
      }
    ]
  };

  const brokersMenu = {
    subItems: [
      {
        icon: "fas fa-chart-bar",
        text: "Compare brokers",
        action: () => navigate('/brokers')
      },
      {
        icon: "fas fa-user-plus",
        text: "Open an account",
        action: () => navigate('/brokers?with_open_account=true')
      },
      {
        icon: "fas fa-trophy",
        text: "Awarded brokers",
        action: () => navigate('/broker-awards')
      },
    ],
    about: [
      {
        text: "Trading space",
        action: () => navigate('/trading/')
      }
    ]
  };

  // FIXED: moreMenu with direct actions for submenu items
  const moreMenu = {
    header: {
      icon: "fas fa-question-circle",
      text: "Help Center",
    },
    divider: true,
    subItems: [
      {
        icon: "fas fa-download",
        text: "Download",
        hasArrow: true,
        submenu: [
          {
            text: "Desktop App",
            route: "/download/desktop",
            description: "Download our full-featured desktop application",
            action: () => navigate('/download/desktop')
          },
          {
            text: "Mobile App",
            route: "/download/mobile",
            description: "Get the mobile app for trading on the go",
            action: () => navigate('/download/mobile')
          },
        ]
      },
      {
        icon: "fas fa-briefcase",
        text: "For business",
        hasArrow: true,
        submenu: [
          {
            text: "All widgets",
            route: "/business/widgets",
            action: () => navigate('/business/widgets')
          },
          {
            text: "Documentation",
            route: "/business/documentation",
            subHeader: "CHARTING LIBRARIES",
            action: () => navigate('/business/documentation')
          },
          {
            text: "Compare Libraries",
            route: "/business/compare-libraries",
            action: () => navigate('/business/compare-libraries')
          },
          {
            text: "Lightweight Chart",
            route: "/business/lightweight-chart",
            action: () => navigate('/business/lightweight-chart')
          },
          {
            text: "Advanced Chart",
            route: "/business/advanced-chart",
            action: () => navigate('/business/advanced-chart')
          },
          {
            text: "Trading Platform",
            route: "/business/trading-platform",
            subHeader: "MORE",
            action: () => navigate('/business/trading-platform')
          },
          {
            text: "Brokerage Integration",
            route: "/business/brokerage-integration",
            action: () => navigate('/business/brokerage-integration')
          },
          {
            text: "Advertising",
            route: "/business/advertising",
            action: () => navigate('/business/advertising')
          }
        ]
      },
      {
        icon: "fas fa-building",
        text: "Company",
        hasArrow: true,
        submenu: [
          {
            text: "About",
            route: "/company/about",
            action: () => navigate('/company/about')
          },
          {
            text: "Zipfinn",
            route: "/company/zipfinn",
            action: () => navigate('/company/zipfinn')
          },
          {
            text: "Space Mission",
            route: "/company/space-mission",
            action: () => navigate('/company/space-mission')
          },
          {
            text: "Careers",
            route: "/company/careers",
            action: () => navigate('/company/careers')
          },
          {
            text: "Blogs And News",
            route: "/company/blogs",
            action: () => navigate('/company/blogs')
          },
          {
            text: "Media Kit",
            route: "/company/media-kit",
            action: () => navigate('/company/media-kit')
          },
          {
            text: "Accessibility Statement",
            route: "/company/accessibility",
            subHeader: "MERCH",
            action: () => navigate('/company/accessibility')
          },
          {
            text: "Zipfinn Merch Store",
            route: "/company/merch-store",
            action: () => navigate('/company/merch-store')
          },
          {
            text: "Tarot Cards For Traders",
            route: "/company/tarot-cards",
            action: () => navigate('/company/tarot-cards')
          },
          {
            text: "The C63 TradeTime",
            route: "/company/tradetime",
            action: () => navigate('/company/tradetime')
          }
        ]
      }
    ]
  };

  return (
    <div className={`navbar-fullwidth ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar">
        <div className="nav-left">
          <div className="nav-logo">
            <img
              src="Zepfinn_logo_white.png"
              alt="Zepfinn Logo"
              className="logo-img"
            />
          </div>

          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <NavItem
              title="Products"
              menuData={productsMenu}
              onSubmenuHover={handleSubmenuHover}
              onSubmenuLeave={handleSubmenuLeave}
              isSubmenuActive={subMenuVisible && activeMainMenu}
              activeNavItem={activeNavItem}
              setActiveNavItem={setActiveNavItem}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              selectedCountry={selectedCountry}
              onCountryChange={onCountryChange}
            />
            <NavItem
              title="Community"
              menuData={communityMenu}
              onSubmenuHover={handleSubmenuHover}
              onSubmenuLeave={handleSubmenuLeave}
              isSubmenuActive={subMenuVisible && activeMainMenu}
              activeNavItem={activeNavItem}
              setActiveNavItem={setActiveNavItem}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              selectedCountry={selectedCountry}
              onCountryChange={onCountryChange}
            />
            <NavItem
              title="Markets"
              menuData={marketsMenu}
              onSubmenuHover={handleSubmenuHover}
              onSubmenuLeave={handleSubmenuLeave}
              isSubmenuActive={subMenuVisible && activeMainMenu}
              activeNavItem={activeNavItem}
              setActiveNavItem={setActiveNavItem}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              selectedCountry={selectedCountry}
              onCountryChange={onCountryChange}
            />
            <NavItem
              title="Brokers"
              menuData={brokersMenu}
              onSubmenuHover={handleSubmenuHover}
              onSubmenuLeave={handleSubmenuLeave}
              isSubmenuActive={subMenuVisible && activeMainMenu}
              activeNavItem={activeNavItem}
              setActiveNavItem={setActiveNavItem}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              selectedCountry={selectedCountry}
              onCountryChange={onCountryChange}
            />
            <NavItem
              title="More"
              menuData={moreMenu}
              onSubmenuHover={handleSubmenuHover}
              onSubmenuLeave={handleSubmenuLeave}
              isSubmenuActive={subMenuVisible && activeMainMenu}
              activeNavItem={activeNavItem}
              setActiveNavItem={setActiveNavItem}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              selectedCountry={selectedCountry}
              onCountryChange={onCountryChange}
            />
          </div>
        </div>

        <div className="nav-right">
          <div className="search-box">
            <i className="fas fa-search search-icon"></i>
            <input type="text" className="search-input" placeholder="Search (Ctrl+K)" />
          </div>

          <div className="user-menu">
            <div
              className="user-dropdown"
              onMouseEnter={handleUserMenuEnter}
              onMouseLeave={handleUserMenuLeave}
            >
              <div className="user-action-item">
                <i className="fas fa-user-circle"></i>
              </div>
              {userMenuOpen && (
                <div
                  className="user-dropdown-menu"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  {userMenu.map((item, index) =>
                    item.type === 'divider' ? (
                      <div key={index} className="dropdown-divider"></div>
                    ) : item.type === 'toggle' ? (
                      <div
                        key={index}
                        className="dropdown-item"
                        onClick={toggleDarkMode}
                      >
                        <span>{item.text}</span>
                        <i
                          className={darkMode ? 'fas fa-toggle-on' : 'fas fa-toggle-off'}
                          style={{ marginLeft: 'auto' }}
                        ></i>
                      </div>
                    ) : item.action ? (
                      <div
                        key={index}
                        className="dropdown-item"
                        onClick={item.action}
                      >
                        {item.icon && <i className={item.icon}></i>}
                        <span>{item.text}</span>
                      </div>
                    ) : (
                      <div key={index} className="dropdown-item">
                        {item.icon && <i className={item.icon}></i>}
                        <span>{item.text}</span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="country-selector">
              <i className="fas fa-globe"></i>
              <span>EN</span>
            </div>
            <div className="user-action-item">
              <i className="fas fa-bell"></i>
            </div>
          </div>

          <div
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={mobileMenuOpen ? "fas fa-x" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

      {subMenu && (
        <div
          ref={subMenuRef}
          className={`submenu right-side-menu ${subMenuVisible ? 'visible' : 'hidden'}`}
          style={{
            top: `${subMenuPosition.top}px`,
            left: `${subMenuPosition.left}px`
          }}
          onMouseEnter={handleSubmenuMouseEnter}
          onMouseLeave={handleSubmenuMouseLeave}
        >
          <div className="submenu-content">
            {subMenu.map((item, index) => (
              <div
                key={index}
                className={`submenu-item ${item.isSectionHeader ? 'section-header' : ''} ${item.route || item.action ? 'clickable' : ''}`}
                onClick={(e) => {
                  if (item.route || item.action) {
                    handleSubmenuItemClick(item, e);
                  }
                }}
                style={{ cursor: (item.route || item.action) ? 'pointer' : 'default' }}
              >
                {item.value ? (
                  <>
                    <div className="submenu-text-wrapper">
                      <div className={`submenu-text ${item.isBold ? 'bold' : ''}`}>{item.text}</div>
                      <div className="submenu-value">{item.value}</div>
                    </div>
                    <div className={`submenu-change ${item.change?.includes('+') ? 'positive' : 'negative'}`}>
                      {item.change}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`submenu-text ${item.isBold ? 'bold' : ''}`}>{item.text}</div>
                    {item.hasArrow && <i className="fas fa-chevron-right submenu-arrow"></i>}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
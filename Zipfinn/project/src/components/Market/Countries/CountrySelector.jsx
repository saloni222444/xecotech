import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CountrySelector.css';

const CountrySelector = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const countriesData = {
    "North America": [
      { 
        id: "usa", 
        name: "USA", 
        flag: "https://s3-symbol-logo.tradingview.com/country/US.svg", 
        route: "/markets/Countries/Unitedstate/Unitedstate" 
      },
      { 
        id: "canada", 
        name: "Canada", 
        flag: "https://s3-symbol-logo.tradingview.com/country/CA.svg", 
        route: "/markets/Countries/Canada/Canada" 
      }
    ],
    
    "Europe": [
      { 
        id: "austria", 
        name: "Austria", 
        flag: "https://s3-symbol-logo.tradingview.com/country/AT.svg", 
        route: "/markets/Countries/Austria/Austria/" 
      },
      { 
        id: "belgium", 
        name: "Belgium", 
        flag: "https://s3-symbol-logo.tradingview.com/country/BE.svg", 
        route: "/markets/Countries/Belgium/Belgium/" 
      },
      { 
        id: "switzerland", 
        name: "Switzerland", 
        flag: "https://s3-symbol-logo.tradingview.com/country/CH.svg", 
        route: "/markets/Countries/Switzerland/Switzerland/" 
      },
      { 
        id: "cyprus", 
        name: "Cyprus", 
        flag: "https://s3-symbol-logo.tradingview.com/country/CY.svg", 
        route: "/markets/Countries/Cyprus/Cyprus/" 
      },
      { 
        id: "czech", 
        name: "Czech Republic", 
        flag: "https://s3-symbol-logo.tradingview.com/country/CZ.svg", 
        route: "/markets/Countries/Czech_Republic/Czech_Republic/" 
      },
      { 
        id: "germany", 
        name: "Germany", 
        flag: "https://s3-symbol-logo.tradingview.com/country/DE.svg", 
        route: "/markets/Countries/Germany/Germany/" 
      },
      { 
        id: "denmark", 
        name: "Denmark", 
        flag: "https://s3-symbol-logo.tradingview.com/country/DK.svg", 
        route: "/markets/Countries/Denmark/Denmark/" 
      },
      { 
        id: "estonia", 
        name: "Estonia", 
        flag: "https://s3-symbol-logo.tradingview.com/country/EE.svg", 
        route: "/markets/Countries/Estonia/Estonia/" 
      },
      { 
        id: "spain", 
        name: "Spain", 
        flag: "https://s3-symbol-logo.tradingview.com/country/ES.svg", 
        route: "/markets/Countries/Spain/Spain/" 
      },
      { 
        id: "finland", 
        name: "Finland", 
        flag: "https://s3-symbol-logo.tradingview.com/country/FI.svg", 
        route: "/markets/Countries/Finland/Finland/" 
      },
      { 
        id: "france", 
        name: "France", 
        flag: "https://s3-symbol-logo.tradingview.com/country/FR.svg", 
        route: "/markets/Countries/France/France/" 
      },
      { 
        id: "greece", 
        name: "Greece", 
        flag: "https://s3-symbol-logo.tradingview.com/country/GR.svg", 
        route: "/markets/Countries/Greece/Greece/" 
      },
      { 
        id: "hungary", 
        name: "Hungary", 
        flag: "https://s3-symbol-logo.tradingview.com/country/HU.svg", 
        route: "/markets/Countries/Hungary/Hungary/" 
      },
      { 
        id: "ireland", 
        name: "Ireland", 
        flag: "https://s3-symbol-logo.tradingview.com/country/IE.svg", 
        route: "/markets/Countries/Ireland/Ireland/" 
      },
      { 
        id: "iceland", 
        name: "Iceland", 
        flag: "https://s3-symbol-logo.tradingview.com/country/IS.svg", 
        route: "/markets/Countries/Iceland/Iceland/" 
      },
      { 
        id: "italy", 
        name: "Italy", 
        flag: "https://s3-symbol-logo.tradingview.com/country/IT.svg", 
        route: "/markets/Countries/Italy/Italy/" 
      },
      { 
        id: "lithuania", 
        name: "Lithuania", 
        flag: "https://s3-symbol-logo.tradingview.com/country/LT.svg", 
        route: "/markets/Countries/Lithuania/Lithuania/" 
      },
      { 
        id: "latvia", 
        name: "Latvia", 
        flag: "https://s3-symbol-logo.tradingview.com/country/LV.svg", 
        route: "/markets/Countries/Latvia/Latvia/" 
      },
      { 
        id: "luxembourg", 
        name: "Luxembourg", 
        flag: "https://s3-symbol-logo.tradingview.com/country/LU.svg", 
        route: "/markets/Countries/Luxembourg/Luxembourg/" 
      },
      { 
        id: "netherlands", 
        name: "Netherlands", 
        flag: "https://s3-symbol-logo.tradingview.com/country/NL.svg", 
        route: "/markets/Countries/Netherlands/Netherlands/" 
      },
      { 
        id: "norway", 
        name: "Norway", 
        flag: "https://s3-symbol-logo.tradingview.com/country/NO.svg", 
        route: "/markets/Countries/Norway/Norway/" 
      },
      { 
        id: "poland", 
        name: "Poland", 
        flag: "https://s3-symbol-logo.tradingview.com/country/PL.svg", 
        route: "/markets/Countries/Poland/Poland/" 
      },
      { 
        id: "portugal", 
        name: "Portugal", 
        flag: "https://s3-symbol-logo.tradingview.com/country/PT.svg", 
        route: "/markets/Countries/Portugal/Portugal/" 
      },
      { 
        id: "serbia", 
        name: "Serbia", 
        flag: "https://s3-symbol-logo.tradingview.com/country/RS.svg", 
        route: "/markets/Countries/Serbia/Serbia/" 
      },
      { 
        id: "russia", 
        name: "Russia", 
        flag: "https://s3-symbol-logo.tradingview.com/country/RU.svg", 
        route: "/markets/Countries/Russia/Russia/" 
      },
      { 
        id: "romania", 
        name: "Romania", 
        flag: "https://s3-symbol-logo.tradingview.com/country/RO.svg", 
        route: "/markets/Countries/Romania/Romania/" 
      },
      { 
        id: "sweden", 
        name: "Sweden", 
        flag: "https://s3-symbol-logo.tradingview.com/country/SE.svg", 
        route: "/markets/Countries/Sweden/Sweden/" 
      },
      { 
        id: "slovakia", 
        name: "Slovakia", 
        flag: "https://s3-symbol-logo.tradingview.com/country/SK.svg", 
        route: "/markets/Countries/Slovakia/Slovakia/" 
      },
      { 
        id: "turkey", 
        name: "Turkey", 
        flag: "https://s3-symbol-logo.tradingview.com/country/TR.svg", 
        route: "/markets/Countries/Turkey/Turkey/" 
      },
      { 
        id: "uk", 
        name: "United Kingdom", 
        flag: "https://s3-symbol-logo.tradingview.com/country/GB.svg", 
        route: "/markets/Countries/UnitedKingdom/UnitedKingdom/" 
      }
    ],
    "Middle East / Africa": [
      { 
        id: "uae", 
        name: "United Arab Emirates", 
        flag: "https://s3-symbol-logo.tradingview.com/country/AE.svg", 
        route: "/markets/Countries/UnitedArabEmirates/UnitedArabEmirates/" 
      },
      { 
        id: "bahrain", 
        name: "Bahrain", 
        flag: "https://s3-symbol-logo.tradingview.com/country/BH.svg", 
        route: "/markets/Countries/Bahrain/Bahrain/" 
      },
      { 
        id: "egypt", 
        name: "Egypt", 
        flag: "https://s3-symbol-logo.tradingview.com/country/EG.svg", 
        route: "/markets/Countries/Egypt/Egypt/" 
      },
      { 
        id: "israel", 
        name: "Israel", 
        flag: "https://s3-symbol-logo.tradingview.com/country/IL.svg", 
        route: "/markets/Countries/Israel/Israel/" 
      },
      { 
        id: "kenya", 
        name: "Kenya", 
        flag: "https://s3-symbol-logo.tradingview.com/country/KE.svg", 
        route: "/markets/Countries/Kenya/Kenya/" 
      },
      { 
        id: "kuwait", 
        name: "Kuwait", 
        flag: "https://s3-symbol-logo.tradingview.com/country/KW.svg", 
        route: "/markets/Countries/Kuwait/Kuwait/" 
      },
      { 
        id: "morocco", 
        name: "Morocco", 
        flag: "https://s3-symbol-logo.tradingview.com/country/MA.svg", 
        route: "/markets/Countries/Morocco/Morocco/" 
      },
      { 
        id: "nigeria", 
        name: "Nigeria", 
        flag: "https://s3-symbol-logo.tradingview.com/country/NG.svg", 
        route: "/markets/Countries/Nigeria/Nigeria/" 
      },
      { 
        id: "qatar", 
        name: "Qatar", 
        flag: "https://s3-symbol-logo.tradingview.com/country/QA.svg", 
        route: "/markets/Countries/Qatar/Qatar/" 
      },
      { 
        id: "ksa", 
        name: "Saudi Arabia", 
        flag: "https://s3-symbol-logo.tradingview.com/country/SA.svg", 
        route: "/markets/Countries/SaudiArabia/SaudiArabia/" 
      },
      { 
        id: "tunisia", 
        name: "Tunisia", 
        flag: "https://s3-symbol-logo.tradingview.com/country/TN.svg", 
        route: "/markets/Countries/Tunisia/Tunisia/" 
      },
      { 
        id: "rsa", 
        name: "South Africa", 
        flag: "https://s3-symbol-logo.tradingview.com/country/ZA.svg", 
        route: "/markets/Countries/SouthAfrica/SouthAfrica/" 
      }
    ],
    "Mexico and South America": [
      { 
        id: "argentina", 
        name: "Argentina", 
        flag: "https://s3-symbol-logo.tradingview.com/country/AR.svg", 
        route: "/markets/Countries/Argentina/Argentina/" 
      },
      { 
        id: "brazil", 
        name: "Brazil", 
        flag: "https://s3-symbol-logo.tradingview.com/country/BR.svg", 
        route: "/markets/Countries/Brazil/Brazil/" 
      },
      { 
        id: "chile", 
        name: "Chile", 
        flag: "https://s3-symbol-logo.tradingview.com/country/CL.svg", 
        route: "/markets/Countries/Chile/Chile/" 
      },
      { 
        id: "colombia", 
        name: "Colombia", 
        flag: "https://s3-symbol-logo.tradingview.com/country/CO.svg", 
        route: "/markets/Countries/Colombia/Colombia/" 
      },
      { 
        id: "mexico", 
        name: "Mexico", 
        flag: "https://s3-symbol-logo.tradingview.com/country/MX.svg", 
        route: "/markets/Countries/Mexico/Mexico/" 
      },
      { 
        id: "peru", 
        name: "Peru", 
        flag: "https://s3-symbol-logo.tradingview.com/country/PE.svg", 
        route: "/markets/Countries/Peru/Peru/" 
      },
      { 
        id: "venezuela", 
        name: "Venezuela", 
        flag: "https://s3-symbol-logo.tradingview.com/country/VE.svg", 
        route: "/markets/Countries/Venezuela/Venezuela/" 
      }
    ],
    "Asia / Pacific": [
      { 
        id: "australia", 
        name: "Australia", 
        flag: "https://s3-symbol-logo.tradingview.com/country/AU.svg", 
        route: "/markets/Countries/Australia/Australia/" 
      },
      { 
        id: "bangladesh", 
        name: "Bangladesh", 
        flag: "https://s3-symbol-logo.tradingview.com/country/BD.svg", 
        route: "/markets/Countries/Bangladesh/Bangladesh/" 
      },
      { 
        id: "china", 
        name: "Mainland China", 
        flag: "https://s3-symbol-logo.tradingview.com/country/CN.svg", 
        route: "/markets/Countries/MainlandChina/MainlandChina/" 
      },
      { 
        id: "hongkong", 
        name: "Hong Kong, China", 
        flag: "https://s3-symbol-logo.tradingview.com/country/HK.svg", 
        route: "/markets/Countries/HongKong/HongKong/" 
      },
      { 
        id: "indonesia", 
        name: "Indonesia", 
        flag: "https://s3-symbol-logo.tradingview.com/country/ID.svg", 
        route: "/markets/Countries/Indonesia/Indonesia/" 
      },
      { 
        id: "india", 
        name: "India", 
        flag: "https://s3-symbol-logo.tradingview.com/country/IN.svg", 
        route: "/markets/Countries/India/India/" 
      },
      { 
        id: "japan", 
        name: "Japan", 
        flag: "https://s3-symbol-logo.tradingview.com/country/JP.svg", 
        route: "/markets/Countries/Japan/Japan/" 
      },
      { 
        id: "korea", 
        name: "South Korea", 
        flag: "https://s3-symbol-logo.tradingview.com/country/KR.svg", 
        route: "/markets/Countries/SouthKorea/SouthKorea/" 
      },
      { 
        id: "srilanka", 
        name: "Sri Lanka", 
        flag: "https://s3-symbol-logo.tradingview.com/country/LK.svg", 
        route: "/markets/Countries/SriLanka/SriLanka/" 
      },
      { 
        id: "malaysia", 
        name: "Malaysia", 
        flag: "https://s3-symbol-logo.tradingview.com/country/MY.svg", 
        route: "/markets/Countries/Malaysia/Malaysia/" 
      },
      { 
        id: "newzealand", 
        name: "New Zealand", 
        flag: "https://s3-symbol-logo.tradingview.com/country/NZ.svg", 
        route: "/markets/Countries/NewZealand/NewZealand/" 
      },
      { 
        id: "philippines", 
        name: "Philippines", 
        flag: "https://s3-symbol-logo.tradingview.com/country/PH.svg", 
        route: "/markets/Countries/Philippines/Philippines/" 
      },
      { 
        id: "pakistan", 
        name: "Pakistan", 
        flag: "https://s3-symbol-logo.tradingview.com/country/PK.svg", 
        route: "/markets/Countries/Pakistan/Pakistan/" 
      },
      { 
        id: "singapore", 
        name: "Singapore", 
        flag: "https://s3-symbol-logo.tradingview.com/country/SG.svg", 
        route: "/markets/Countries/Singapore/Singapore/" 
      },
      { 
        id: "thailand", 
        name: "Thailand", 
        flag: "https://s3-symbol-logo.tradingview.com/country/TH.svg", 
        route: "/markets/Countries/Thailand/Thailand/" 
      }
    ]
  };

  // ✅ Get all countries as a flat array
  const getAllCountries = () => {
    return Object.values(countriesData).flat();
  };

  // ✅ Find country by route
  const findCountryByRoute = (route) => {
    return getAllCountries().find(country => 
      route.includes(country.route.replace('/markets/', '')) ||
      route === country.route
    );
  };

  // ✅ Update selected country based on current URL
  useEffect(() => {
    const currentPath = location.pathname;
    
    // Check if we're on a country page
    const matchedCountry = findCountryByRoute(currentPath);
    
    if (matchedCountry) {
      setSelectedCountry(matchedCountry);
    } else {
      // Default to USA if no country matched
      setSelectedCountry({
        id: "usa", 
        name: "USA", 
        flag: "https://s3-symbol-logo.tradingview.com/country/US.svg", 
        route: "/markets/Countries/Unitedstate/Unitedstate"
      });
    }
  }, [location.pathname]);

  const filteredCountries = Object.entries(countriesData).reduce((acc, [region, countries]) => {
    const filtered = countries.filter(country => 
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[region] = filtered;
    }
    return acc;
  }, {});

  // ✅ Handle country click
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    if (country.route) {
      navigate(country.route);
      setIsDialogOpen(false);
    }
  };

  // ✅ Handle entire world click
  const handleEntireWorldClick = () => {
    navigate('/markets/');
    setIsDialogOpen(false);
  };

  // Format country name for display
  const formatCountryName = (name) => {
    if (!name) return { firstPart: 'USA', secondPart: '' };
    
    const words = name.split(' ');
    if (words.length <= 1) {
      return { firstPart: name, secondPart: '' };
    }
    // For names with multiple words, split after first word
    return {
      firstPart: words[0],
      secondPart: words.slice(1).join(' ')
    };
  };

  const countryNameParts = selectedCountry ? formatCountryName(selectedCountry.name) : formatCountryName('USA');

  return (
    <div className="country-selector">
      {/* Header Button - Centered */}
      <div className="page-head">
        <div className="landing-header with-breadcrumbs">
          <nav aria-label="Breadcrumbs" className="breadcrumbs-container">
            <ul className="breadcrumbs-list breadcrumbs">
              <li className="breadcrumbs-listitem">
                <div 
                  className="breadcrumb text-button link light-gray small"
                  onClick={handleEntireWorldClick}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="background states-without-bg"></span>
                  <span className="content">
                    <span className="breadcrumb-content">Markets</span>
                  </span>
                </div>
              </li>
              <li className="breadcrumbs-listitem">
                <span className="divider divider-small" aria-hidden="true">/</span>
                <div 
                  className="breadcrumb current-page text-button link dimmed light-gray small"
                  style={{ cursor: 'pointer' }}
                >
                  <span className="background states-without-bg"></span>
                  <span className="content">
                    <span className="breadcrumb-content">{selectedCountry?.name || 'USA'}</span>
                  </span>
                </div>
              </li>
            </ul>
          </nav>
          <div className="header-center-container">
            <div className="btn-container">
              <img 
                className="logo medium flag-medium letter" 
                crossOrigin="" 
                src={selectedCountry?.flag || "https://s3-symbol-logo.tradingview.com/country/US.svg"} 
                alt={`${selectedCountry?.name || 'USA'} Flag`} 
              />
              <button 
                className="header-btn" 
                onClick={() => setIsDialogOpen(true)}
              >
                <img 
                  className="logo large flag-large letter" 
                  crossOrigin="" 
                  src={selectedCountry?.flag || "https://s3-symbol-logo.tradingview.com/country/US.svg"} 
                  alt={`${selectedCountry?.name || 'USA'} Flag`} 
                />
                <img 
                  className="logo xlarge flag-xlarge letter" 
                  crossOrigin="" 
                  src={selectedCountry?.flag || "https://s3-symbol-logo.tradingview.com/country/US.svg"} 
                  alt={`${selectedCountry?.name || 'USA'} Flag`} 
                />
                <div className="header-text-container">
                  <h1 className="header">
                    {countryNameParts.firstPart} 
                    {countryNameParts.secondPart ? (
                      <span className="no-break">
                        {countryNameParts.secondPart}
                        <div className="arrow-wrap">
                          <span role="img" className="icon-small" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                              <path fill="currentColor" d="m.6 6.063 1.8-2.126L8 8.675l5.6-4.738 1.8 2.126L8 12.325.6 6.063z"></path>
                            </svg>
                          </span>
                          <span role="img" className="icon-large" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                              <path fill="currentColor" d="m.271 11.698 4.458-5.396L14 13.96l9.271-7.658 4.458 5.396L14 23.04.271 11.698z"></path>
                            </svg>
                          </span>
                        </div>
                      </span>
                    ) : (
                      <span className="no-break">
                        <div className="arrow-wrap">
                          <span role="img" className="icon-small" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                              <path fill="currentColor" d="m.6 6.063 1.8-2.126L8 8.675l5.6-4.738 1.8 2.126L8 12.325.6 6.063z"></path>
                            </svg>
                          </span>
                          <span role="img" className="icon-large" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                              <path fill="currentColor" d="m.271 11.698 4.458-5.396L14 13.96l9.271-7.658 4.458 5.396L14 23.04.271 11.698z"></path>
                            </svg>
                          </span>
                        </div>
                      </span>
                    )}
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog with Scrollbar */}
      {isDialogOpen && (
        <div className="dialog-overlay" onClick={() => setIsDialogOpen(false)}>
          <div className="dialog" onClick={(e) => e.stopPropagation()}>
            <div role="dialog" aria-labelledby="dialog-title" className="wrapper">
              <div className="dialog-header">
                <div id="dialog-title" className="title">
                  <div className="ellipsis">Select country</div>
                </div>
                <button 
                  className="nav-button size-medium preserve-paddings close"
                  onClick={() => setIsDialogOpen(false)}
                  type="button"
                >
                  <span className="background"></span>
                  <span role="img" className="icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                      <path stroke="currentColor" strokeWidth="1.2" d="m1.5 1.5 15 15m0-15-15 15"></path>
                    </svg>
                  </span>
                  <span className="visually-hidden">Close menu</span>
                </button>
              </div>
              
              <div className="search-container">
                <div className="input-container">
                  <input 
                    type="text" 
                    className="search input" 
                    autoComplete="off" 
                    role="searchbox" 
                    placeholder="Search" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <span role="img" className="search-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none">
                    <path stroke="currentColor" d="M17.4 17.5a7 7 0 1 0-4.9 2c1.9 0 3.64-.76 4.9-2zm0 0l5.1 5"></path>
                  </svg>
                </span>
              </div>

              <div className="content-list-container">
                <div className="content-list content-list-desktop">
                  {/* Entire World Option */}
                  <div className="market-items-container market-items-container-desktop">
                    <div className="column">
                      <div 
                        className="icon-color wrap-tablet" 
                        data-market="global"
                        onClick={handleEntireWorldClick}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="container-item desktop container-with-icon">
                          <div className="icon-wrap">
                            <span role="img" className="icon" aria-hidden="true">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                <path fill="currentColor" fillRule="evenodd" d="M11.88 4.23a10.04 10.04 0 0 1 4.24 0h-.02a16.57 16.57 0 0 1 1.57 5.24A12.6 12.6 0 0 1 14 10c-1.3 0-2.55-.19-3.67-.53.33-2.15.89-3.97 1.57-5.23l-.02-.01Zm-1.26.35a10.01 10.01 0 0 0-4.08 2.76 9.02 9.02 0 0 0 2.83 1.79c.28-1.75.71-3.3 1.25-4.55Zm-1.4 5.57c-1.27-.5-2.4-1.18-3.3-2.03a9.95 9.95 0 0 0 0 11.77c.92-.84 2.04-1.52 3.31-2.02a31.8 31.8 0 0 1 0-7.72Zm.16 8.74a9.58 9.58 0 0 0-2.83 1.78c1.1 1.22 2.5 2.18 4.07 2.75a19.14 19.14 0 0 1-1.24-4.53Zm2.5 4.88h.02a16.55 16.55 0 0 1-1.57-5.22 12.34 12.34 0 0 1 7.34 0 16.55 16.55 0 0 1-1.57 5.21l.02.01a10.04 10.04 0 0 1-4.24 0Zm5.5-.35a10.01 10.01 0 0 0 4.07-2.75 9.58 9.58 0 0 0-2.83-1.78c-.28 1.74-.7 3.29-1.24 4.53Zm1.39-5.55c1.27.5 2.4 1.18 3.31 2.02a9.96 9.96 0 0 0 0-11.77c-.9.85-2.03 1.54-3.3 2.03a31.81 31.81 0 0 1-.01 7.72Zm-.97-7.4a13.66 13.66 0 0 1-7.6 0 30.98 30.98 0 0 0 0 7.07 13.38 13.38 0 0 1 7.6 0 30.96 30.96 0 0 0 0-7.07Zm.83-1.34a9.02 9.02 0 0 0 2.83-1.8 10.01 10.01 0 0 0-4.08-2.75c.54 1.25.97 2.8 1.25 4.55ZM14 3a11 11 0 1 0 0 22 11 11 0 0 0 0-22Z"></path>
                              </svg>
                            </span>
                          </div>
                          <div className="text-block">
                            <div className="title title-without-desc">Entire world</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Countries by Region */}
                  {Object.entries(filteredCountries).map(([region, countries]) => (
                    <div key={region}>
                      <div className="group-title group-title-desktop">{region}</div>
                      <div className="market-items-container market-items-container-desktop">
                        {chunkArray(countries, Math.ceil(countries.length / 2)).map((column, columnIndex) => (
                          <div key={columnIndex} className="column">
                            {column.map((country) => (
                              <a
                                key={country.id}
                                className="icon-color wrap-tablet" 
                                data-market={country.id}
                                href={country.route}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleCountryClick(country);
                                }}
                                style={{ cursor: 'pointer', textDecoration: 'none', display: 'block' }}
                              >
                                <div className={`container-item desktop ${country.id === selectedCountry?.id ? 'selected' : ''}`}>
                                  <div className="icon-wrap">
                                    <img 
                                      className="icon apply-common-tooltip" 
                                      crossOrigin="" 
                                      src={country.flag} 
                                      alt={`${country.name} flag`}
                                    />
                                  </div>
                                  <div className="text-block">
                                    <div className="title title-without-desc">{country.name}</div>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to split array into chunks
const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export default CountrySelector;
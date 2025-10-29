// App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/DashBoard/Profile';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/HeroSection';
import BrokerCards from './components/BrokerCards/TradingBrokers';
import MarketSummary from './components/MarketSummary/Market';
import CryptoGainersLosers from './components/CryptoGainersLosers/CryptoGainersLosers';
import VolatileStocks from './components/VolatileStocks/VolatileStocks';
import IndianStocksNews from './components/IndianStocksNews/IndianStocksNews';
import Forex from './components/Forex/Forex';
import Indicators from './components/Indicators/IndicatorsStrategies';
import EconomicCalendar from './components/EconomicCalendar/EconomicCalendar';
import CryptoNews from './components/CryptoNews/CryptoNews';
import TopStories from './components/TopStories/TopStories';
import Community from './components/Community/Communityideas';
import Footer from './components/Footer/Footer';
import './App.css';
import StockSection from './components/StockSection/StockSection';
import CommunityTrend from './components/CommunityTrend/CommunityTrend';
import FutureCommodities from './components/FutureCommodities/Future';
import Howtostart from './components/HowToStart/Howtostart';
import PaperTradingCalculator from './components/PaperTradingCalculator/PaperTradingCalculator';
import FAQSection from './components/FAQSection/FAQSection';
import TradingStrategies from './components/TradingStrategies/TradingStrategies';
import CompareBrokers from './components/Brokers/Compare/CompareBrokers';

// Downloads components
import Download from './components/Download/Download';
import Desktop from './components/Download/Desktop';
import Mobile from './components/Download/Mobile';

// Business pages (temporary)
const BusinessPage = ({ page }) => (
  <div style={{ padding: '2rem', minHeight: '80vh' }}>
    <h1>{page || 'Business Page'}</h1>
    <p>This page is under development and will be available soon.</p>
  </div>
);

// Company pages (temporary)
const CompanyPage = ({ page }) => (
  <div style={{ padding: '2rem', minHeight: '80vh' }}>
    <h1>{page || 'Company Page'}</h1>
    <p>This page is under development and will be available soon.</p>
  </div>
);

import BrokerAwards from './components/Brokers/BrokerAwards/BrokerAwards';
import BrokerAwards2023 from './components/Brokers/BrokerAwards/BrokerAwards2023';
import BrokerAwards2022 from './components/Brokers/BrokerAwards/BrokerAwards2022';
import BrokerAwards2024 from './components/Brokers/BrokerAwards/BrokerAwards2024';
import BrokerAwards2021 from './components/Brokers/BrokerAwards/BrokerAwards2021';
import BrokerAwards2020 from './components/Brokers/BrokerAwards/BrokerAwards2020';

// Brokers pages
import AllBrokersPage from './components/Brokers/Compare/AllBrokers/AllBrokers';
import StocksPage from './components/Brokers/Compare/stocks/stocks';
import ForexPage from './components/Brokers/Compare/Forex1/Forex';
import FuturesPage from './components/Brokers/Compare/Future/Future';
import ETFsPage from './components/Brokers/Compare/ETFs/ETFs';
import OptionsPage from './components/Brokers/Compare/Options/Options';

// OpenAccount page
import OpenAccountPage from './components/Brokers/openaccount/OpenAccount';

//Community Ideas and Indicators Ideas
import Communitys from './Communityparts/Communityideass/Communitys';
import ExploreCommunity from './Communityparts/Communityideass/ExploreCommunity';
import IndicatorsIdeas from './Communityparts/Indicators/IndicatorsIdeas';

// Power Of community
import CommunityPower from "./Communityparts/CommunityAbout/CommunityPower/CommunityPower";
import FinanceSocial from "./Communityparts/CommunityAbout/FinanceSocial/FinanceSocial";
import GrowthTrade from "./Communityparts/CommunityAbout/GrowthTrade/GrowthTrade";
import PineScriptNav from "./Communityparts/CommunityAbout/PineNav/PineScriptNav";
import TheLeapNav from "./Communityparts/CommunityAbout/TheLeapNav/TheLeapNav";
import TradingAccount from "./Communityparts/CommunityAbout/TradingAccount/TradingAccount";
import UnleashPower from "./Communityparts/CommunityAbout/UnleashPower/UnleashPower";
import WaysToearn from "./Communityparts/CommunityAbout/WaysTOearn/WaysToearn";
//LeapPage
import CompletedContests from "./Communityparts/LeapPage/Completed contests/CompletedContests";
import FineDetails from "./Communityparts/LeapPage/Finedetails/FineDetails";
import Leaderboard from "./Communityparts/LeapPage/Leaderboard/Leaderboard";
import Leap from "./Communityparts/LeapPage/Leap/Leap";
import PaperTradings from "./Communityparts/LeapPage/PaperTradings/PaperTradings";
import TradingTalk from "./Communityparts/LeapPage/TradingTalk/TradingTalk";
import ZipfinnLove from './Communityparts/CommunityAbout/GrowthTrade/ZipfinnLove/ZipfinnLove';
import EasyToFollow from './Communityparts/EasyToFollow/EasyToFollow';

// Import all country components
import Unitedstate from './components/Market/Countries/Unitedstate/Unitedstate';
import Canada from './components/Market/Countries/Canada/Canada';
import Argentina from './components/Market/Countries/Argentina/Argentina';
import Australia from './components/Market/Countries/Australia/Australia';
import Austria from './components/Market/Countries/Austria/Austria';
import Bahrain from './components/Market/Countries/Bahrain/Bahrain';
import Bangladesh from './components/Market/Countries/Bangladesh/Bangladesh';
import Belgium from './components/Market/Countries/Belgium/Belgium';
import Brazil from './components/Market/Countries/Brazil/Brazil';
import Chile from './components/Market/Countries/Chile/Chile';
import Colombia from './components/Market/Countries/Colombia/Colombia';
import Cyprus from './components/Market/Countries/Cyprus/Cyprus';
import Czech_Republic from './components/Market/Countries/CzechRepublic/CzechRepublic';
import Denmark from './components/Market/Countries/Denmark/Denmark';
import Egypt from './components/Market/Countries/Egypt/Egypt';
import Estonia from './components/Market/Countries/Estonia/Estonia';
import Finland from './components/Market/Countries/Finland/Finland';
import France from './components/Market/Countries/France/France';
import Germany from './components/Market/Countries/Germany/Germany';
import Greece from './components/Market/Countries/Greece/Greece';
import Hong_Kong_China from './components/Market/Countries/HongKong/HongKong';
import Hungary from './components/Market/Countries/Hungary/Hungary';
import Iceland from './components/Market/Countries/Iceland/Iceland';
import India from './components/Market/Countries/India/India';
import Indonesia from './components/Market/Countries/Indonesia/Indonesia';
import Ireland from './components/Market/Countries/Ireland/Ireland';
import Israel from './components/Market/Countries/Israel/Israel';
import Italy from './components/Market/Countries/Italy/Italy';
import Japan from './components/Market/Countries/Japan/Japan';
import Kenya from './components/Market/Countries/Kenya/Kenya';
import Kuwait from './components/Market/Countries/Kuwait/Kuwait';
import Latvia from './components/Market/Countries/Latvia/Latvia';
import Lithuania from './components/Market/Countries/Lithuania/Lithuania';
import Luxembourg from './components/Market/Countries/Luxembourg/Luxembourg';
import Mainland_China from './components/Market/Countries/MainlandChina/MainlandChina';
import Malaysia from './components/Market/Countries/Malaysia/Malaysia';
import Mexico from './components/Market/Countries/Mexico/Mexico';

import Morocco from './components/Market/Countries/Morocco/Morocco';

import Netherlands from './components/Market/Countries/Netherlands/Netherlands';
import New_Zealand from './components/Market/Countries/NewZealand/NewZealand';
import Nigeria from './components/Market/Countries/Nigeria/Nigeria';
import Norway from './components/Market/Countries/Norway/Norway';
import Pakistan from './components/Market/Countries/Pakistan/Pakistan';
import Peru from './components/Market/Countries/Peru/Peru';
import Philippines from './components/Market/Countries/Philippines/Philippines';
import Poland from './components/Market/Countries/Poland/Poland';
import Portugal from './components/Market/Countries/Portugal/Portugal';
import Qatar from './components/Market/Countries/Qatar/Qatar';
import Romania from './components/Market/Countries/Romania/Romania';
import Russia from './components/Market/Countries/Russia/Russia';
import Saudi_Arabia from './components/Market/Countries/SaudiArabia/SaudiArabia';
import Serbia from './components/Market/Countries/Serbia/Serbia';
import Singapore from './components/Market/Countries/Singapore/Singapore';
import Slovakia from './components/Market/Countries/Slovakia/Slovakia';
import South_Africa from './components/Market/Countries/SouthAfrica/SouthAfrica';
import South_Korea from './components/Market/Countries/SouthKorea/SouthKorea';
import Spain from './components/Market/Countries/Spain/Spain';
import Sri_Lanka from './components/Market/Countries/SriLanka/SriLanka';
import Sweden from './components/Market/Countries/Sweden/Sweden';
import Switzerland from './components/Market/Countries/Switzerland/Switzerland';
// import Taiwan_China from './components/Market/Countries/TaiwanChina/TaiwanChina';
import Thailand from './components/Market/Countries/Thailand/Thailand';
import Tunisia from './components/Market/Countries/Tunisia/Tunisia';
import Turkey from './components/Market/Countries/Turkey/Turkey';
import United_Arab_Emirates from './components/Market/Countries/UnitedArabEmirates/UnitedArabEmirates';

import UK from './components/Market/Countries/UnitedKingdom/UnitedKingdom';

// import Vietnam from './components/Market/Countries/Vietnam/Vietnam';
import Venezuela from './components/Market/Countries/Venezuela/Venezuela';


import StockScreener from './components/products/Screneres/stocks/stocks';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({
    id: "usa",
    name: "USA",
    flag: "https://s3-symbol-logo.tradingview.com/country/US.svg",
    route: "/markets/Countries/Unitedstate/Unitedstate"
  });
  const location = useLocation();

  // ScrollToTop component
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
    }
  }, []);

  // Update selected country based on URL when location changes
  useEffect(() => {
    const currentPath = location.pathname;

    // Define all countries and their routes
    const allCountries = [
      { id: "usa", name: "USA", flag: "https://s3-symbol-logo.tradingview.com/country/US.svg", route: "/markets/Countries/Unitedstate/Unitedstate" },
      { id: "canada", name: "Canada", flag: "https://s3-symbol-logo.tradingview.com/country/CA.svg", route: "/markets/Countries/Canada/Canada" },
      { id: "india", name: "India", flag: "https://s3-symbol-logo.tradingview.com/country/IN.svg", route: "/markets/Countries/India/India" },
      { id: "uk", name: "United Kingdom", flag: "https://s3-symbol-logo.tradingview.com/country/GB.svg", route: "/markets/Countries/UnitedKingdom/UnitedKingdom" },
      { id: "germany", name: "Germany", flag: "https://s3-symbol-logo.tradingview.com/country/DE.svg", route: "/markets/Countries/Germany/Germany" },
      { id: "japan", name: "Japan", flag: "https://s3-symbol-logo.tradingview.com/country/JP.svg", route: "/markets/Countries/Japan/Japan" },
      { id: "china", name: "Mainland China", flag: "https://s3-symbol-logo.tradingview.com/country/CN.svg", route: "/markets/Countries/MainlandChina/MainlandChina" },
      { id: "hongkong", name: "Hong Kong, China", flag: "https://s3-symbol-logo.tradingview.com/country/HK.svg", route: "/markets/Countries/HongKong/HongKong" },
      { id: "saudiarabia", name: "Saudi Arabia", flag: "https://s3-symbol-logo.tradingview.com/country/SA.svg", route: "/markets/Countries/SaudiArabia/SaudiArabia" },
      { id: "australia", name: "Australia", flag: "https://s3-symbol-logo.tradingview.com/country/AU.svg", route: "/markets/Countries/Australia/Australia" },
      // Add other countries as needed
      { id: "austria", name: "Austria", flag: "https://s3-symbol-logo.tradingview.com/country/AT.svg", route: "/markets/Countries/Austria/Austria/" },
      { id: "belgium", name: "Belgium", flag: "https://s3-symbol-logo.tradingview.com/country/BE.svg", route: "/markets/Countries/Belgium/Belgium/" },
      { id: "switzerland", name: "Switzerland", flag: "https://s3-symbol-logo.tradingview.com/country/CH.svg", route: "/markets/Countries/Switzerland/Switzerland/" },
      { id: "cyprus", name: "Cyprus", flag: "https://s3-symbol-logo.tradingview.com/country/CY.svg", route: "/markets/Countries/Cyprus/Cyprus/" },
      { id: "czech", name: "Czech Republic", flag: "https://s3-symbol-logo.tradingview.com/country/CZ.svg", route: "/markets/Countries/Czech_Republic/Czech_Republic/" },
      { id: "denmark", name: "Denmark", flag: "https://s3-symbol-logo.tradingview.com/country/DK.svg", route: "/markets/Countries/Denmark/Denmark/" },
      { id: "estonia", name: "Estonia", flag: "https://s3-symbol-logo.tradingview.com/country/EE.svg", route: "/markets/Countries/Estonia/Estonia/" },
      { id: "spain", name: "Spain", flag: "https://s3-symbol-logo.tradingview.com/country/ES.svg", route: "/markets/Countries/Spain/Spain/" },
      { id: "finland", name: "Finland", flag: "https://s3-symbol-logo.tradingview.com/country/FI.svg", route: "/markets/Countries/Finland/Finland/" },
      { id: "france", name: "France", flag: "https://s3-symbol-logo.tradingview.com/country/FR.svg", route: "/markets/Countries/France/France/" },
      { id: "greece", name: "Greece", flag: "https://s3-symbol-logo.tradingview.com/country/GR.svg", route: "/markets/Countries/Greece/Greece/" },
      { id: "hungary", name: "Hungary", flag: "https://s3-symbol-logo.tradingview.com/country/HU.svg", route: "/markets/Countries/Hungary/Hungary/" },
      { id: "ireland", name: "Ireland", flag: "https://s3-symbol-logo.tradingview.com/country/IE.svg", route: "/markets/Countries/Ireland/Ireland/" },
      { id: "iceland", name: "Iceland", flag: "https://s3-symbol-logo.tradingview.com/country/IS.svg", route: "/markets/Countries/Iceland/Iceland/" },
      { id: "italy", name: "Italy", flag: "https://s3-symbol-logo.tradingview.com/country/IT.svg", route: "/markets/Countries/Italy/Italy/" },
      { id: "lithuania", name: "Lithuania", flag: "https://s3-symbol-logo.tradingview.com/country/LT.svg", route: "/markets/Countries/Lithuania/Lithuania/" },
      { id: "latvia", name: "Latvia", flag: "https://s3-symbol-logo.tradingview.com/country/LV.svg", route: "/markets/Countries/Latvia/Latvia/" },
      { id: "luxembourg", name: "Luxembourg", flag: "https://s3-symbol-logo.tradingview.com/country/LU.svg", route: "/markets/Countries/Luxembourg/Luxembourg/" },
      { id: "netherlands", name: "Netherlands", flag: "https://s3-symbol-logo.tradingview.com/country/NL.svg", route: "/markets/Countries/Netherlands/Netherlands/" },
      { id: "norway", name: "Norway", flag: "https://s3-symbol-logo.tradingview.com/country/NO.svg", route: "/markets/Countries/Norway/Norway/" },
      { id: "poland", name: "Poland", flag: "https://s3-symbol-logo.tradingview.com/country/PL.svg", route: "/markets/Countries/Poland/Poland/" },
      { id: "portugal", name: "Portugal", flag: "https://s3-symbol-logo.tradingview.com/country/PT.svg", route: "/markets/Countries/Portugal/Portugal/" },
      { id: "serbia", name: "Serbia", flag: "https://s3-symbol-logo.tradingview.com/country/RS.svg", route: "/markets/Countries/Serbia/Serbia/" },
      { id: "russia", name: "Russia", flag: "https://s3-symbol-logo.tradingview.com/country/RU.svg", route: "/markets/Countries/Russia/Russia/" },
      { id: "romania", name: "Romania", flag: "https://s3-symbol-logo.tradingview.com/country/RO.svg", route: "/markets/Countries/Romania/Romania/" },
      { id: "sweden", name: "Sweden", flag: "https://s3-symbol-logo.tradingview.com/country/SE.svg", route: "/markets/Countries/Sweden/Sweden/" },
      { id: "slovakia", name: "Slovakia", flag: "https://s3-symbol-logo.tradingview.com/country/SK.svg", route: "/markets/Countries/Slovakia/Slovakia/" },
      { id: "turkey", name: "Turkey", flag: "https://s3-symbol-logo.tradingview.com/country/TR.svg", route: "/markets/Countries/Turkey/Turkey/" },
      { id: "uae", name: "United Arab Emirates", flag: "https://s3-symbol-logo.tradingview.com/country/AE.svg", route: "/markets/Countries/United_Arab_Emirates/United_Arab_Emirates/" },
      { id: "bahrain", name: "Bahrain", flag: "https://s3-symbol-logo.tradingview.com/country/BH.svg", route: "/markets/Countries/Bahrain/Bahrain/" },
      { id: "egypt", name: "Egypt", flag: "https://s3-symbol-logo.tradingview.com/country/EG.svg", route: "/markets/Countries/Egypt/Egypt/" },
      { id: "israel", name: "Israel", flag: "https://s3-symbol-logo.tradingview.com/country/IL.svg", route: "/markets/Countries/Israel/Israel/" },
      { id: "kenya", name: "Kenya", flag: "https://s3-symbol-logo.tradingview.com/country/KE.svg", route: "/markets/Countries/Kenya/Kenya/" },
      { id: "kuwait", name: "Kuwait", flag: "https://s3-symbol-logo.tradingview.com/country/KW.svg", route: "/markets/Countries/Kuwait/Kuwait/" },
      { id: "morocco", name: "Morocco", flag: "https://s3-symbol-logo.tradingview.com/country/MA.svg", route: "/markets/Countries/Morocco/Morocco/" },
      { id: "nigeria", name: "Nigeria", flag: "https://s3-symbol-logo.tradingview.com/country/NG.svg", route: "/markets/Countries/Nigeria/Nigeria/" },
      { id: "qatar", name: "Qatar", flag: "https://s3-symbol-logo.tradingview.com/country/QA.svg", route: "/markets/Countries/Qatar/Qatar/" },
      { id: "tunisia", name: "Tunisia", flag: "https://s3-symbol-logo.tradingview.com/country/TN.svg", route: "/markets/Countries/Tunisia/Tunisia/" },
      { id: "southafrica", name: "South Africa", flag: "https://s3-symbol-logo.tradingview.com/country/ZA.svg", route: "/markets/Countries/South_Africa/South_Africa/" },
      { id: "argentina", name: "Argentina", flag: "https://s3-symbol-logo.tradingview.com/country/AR.svg", route: "/markets/Countries/Argentina/Argentina/" },
      { id: "brazil", name: "Brazil", flag: "https://s3-symbol-logo.tradingview.com/country/BR.svg", route: "/markets/Countries/Brazil/Brazil/" },
      { id: "chile", name: "Chile", flag: "https://s3-symbol-logo.tradingview.com/country/CL.svg", route: "/markets/Countries/Chile/Chile/" },
      { id: "colombia", name: "Colombia", flag: "https://s3-symbol-logo.tradingview.com/country/CO.svg", route: "/markets/Countries/Colombia/Colombia/" },
      { id: "mexico", name: "Mexico", flag: "https://s3-symbol-logo.tradingview.com/country/MX.svg", route: "/markets/Countries/Mexico/Mexico/" },
      { id: "peru", name: "Peru", flag: "https://s3-symbol-logo.tradingview.com/country/PE.svg", route: "/markets/Countries/Peru/Peru/" },
      { id: "venezuela", name: "Venezuela", flag: "https://s3-symbol-logo.tradingview.com/country/VE.svg", route: "/markets/Countries/Venezuela/Venezuela/" },
      { id: "bangladesh", name: "Bangladesh", flag: "https://s3-symbol-logo.tradingview.com/country/BD.svg", route: "/markets/Countries/Bangladesh/Bangladesh/" },
      { id: "indonesia", name: "Indonesia", flag: "https://s3-symbol-logo.tradingview.com/country/ID.svg", route: "/markets/Countries/Indonesia/Indonesia/" },
      { id: "southkorea", name: "South Korea", flag: "https://s3-symbol-logo.tradingview.com/country/KR.svg", route: "/markets/Countries/South_Korea/South_Korea/" },
      { id: "srilanka", name: "Sri Lanka", flag: "https://s3-symbol-logo.tradingview.com/country/LK.svg", route: "/markets/Countries/Sri_Lanka/Sri_Lanka/" },
      { id: "malaysia", name: "Malaysia", flag: "https://s3-symbol-logo.tradingview.com/country/MY.svg", route: "/markets/Countries/Malaysia/Malaysia/" },
      { id: "newzealand", name: "New Zealand", flag: "https://s3-symbol-logo.tradingview.com/country/NZ.svg", route: "/markets/Countries/New_Zealand/New_Zealand/" },
      { id: "philippines", name: "Philippines", flag: "https://s3-symbol-logo.tradingview.com/country/PH.svg", route: "/markets/Countries/Philippines/Philippines/" },
      { id: "pakistan", name: "Pakistan", flag: "https://s3-symbol-logo.tradingview.com/country/PK.svg", route: "/markets/Countries/Pakistan/Pakistan/" },
      { id: "singapore", name: "Singapore", flag: "https://s3-symbol-logo.tradingview.com/country/SG.svg", route: "/markets/Countries/Singapore/Singapore/" },
      { id: "thailand", name: "Thailand", flag: "https://s3-symbol-logo.tradingview.com/country/TH.svg", route: "/markets/Countries/Thailand/Thailand/" }
    ];

    // Find the country that matches the current route
    const matchedCountry = allCountries.find(country =>
      currentPath.includes(country.route.replace('/markets/', '')) ||
      currentPath === country.route ||
      currentPath.includes(country.id)
    );

    if (matchedCountry) {
      setSelectedCountry(matchedCountry);
    }
  }, [location.pathname]);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser');
  };

  // Function to update selected country
  const updateSelectedCountry = (country) => {
    setSelectedCountry(country);
  };

  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  const PublicRoute = ({ children }) => {
    if (isLoggedIn) {
      return <Navigate to="/dashboard" replace />;
    }
    return children;
  };

  // Dashboard Component
  const Dashboard = () => (
    <div className="shared-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <Hero />
      <div className="main-content">
        <Howtostart />
        <PaperTradingCalculator />
        <MarketSummary />
        <Community />
        <StockSection />
        <Indicators />
        <TopStories />
        <TradingStrategies />
        <CommunityTrend />
        <CryptoNews />
        <FutureCommodities />
        <Forex />
        <EconomicCalendar />
        <FAQSection />
        <BrokerCards />
      </div>
      <Footer />
    </div>
  );

  // Brokers wrapper
  const Brokers = () => (
    <div className="brokers-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <CompareBrokers />
      <Footer />
    </div>
  );

  // Broker Awards Wrappers
  const BrokerAwardsWrapper = () => (
    <div className="broker-awards-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <BrokerAwards />
      <Footer />
    </div>
  );

  const BrokerAwards2024Wrapper = () => (
    <div className="broker-awards-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <BrokerAwards2024 />
      <Footer />
    </div>
  );

  const BrokerAwards2023Wrapper = () => (
    <div className="broker-awards-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <BrokerAwards2023 />
      <Footer />
    </div>
  );

  const BrokerAwards2022Wrapper = () => (
    <div className="broker-awards-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <BrokerAwards2022 />
      <Footer />
    </div>
  );

  const BrokerAwards2021Wrapper = () => (
    <div className="broker-awards-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <BrokerAwards2021 />
      <Footer />
    </div>
  );

  const BrokerAwards2020Wrapper = () => (
    <div className="broker-awards-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <BrokerAwards2020 />
      <Footer />
    </div>
  );

  // OpenAccount Wrapper
  const OpenAccountWrapper = () => (
    <div className="brokers-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <OpenAccountPage />
      <Footer />
    </div>
  );

  // Downloads Wrapper
  const DownloadsWrapper = () => (
    <div className="downloads-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <Download />
      <Footer />
    </div>
  );

  // Desktop Download Wrapper
  const DesktopWrapper = () => (
    <div className="downloads-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <Desktop />
      <Footer />
    </div>
  );

  // Mobile Download Wrapper
  const MobileWrapper = () => (
    <div className="downloads-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <Mobile />
      <Footer />
    </div>
  );

  // Business Page Wrapper
  const BusinessPageWrapper = ({ page }) => (
    <div className="business-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <BusinessPage page={page} />
      <Footer />
    </div>
  );

  // Company Page Wrapper
  const CompanyPageWrapper = ({ page }) => (
    <div className="company-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <CompanyPage page={page} />
      <Footer />
    </div>
  );

  // Add AllBrokersPageWrapper
  const AllBrokersPageWrapper = () => (
    <div className="brokers-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <AllBrokersPage />
      <Footer />
    </div>
  );

  // Other wrappers
  const StocksPageWrapper = () => (
    <div className="brokers-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <StocksPage />
      <Footer />
    </div>
  );

  const ForexPageWrapper = () => (
    <div className="brokers-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <ForexPage />
      <Footer />
    </div>
  );

  const FuturesPageWrapper = () => (
    <div className="brokers-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <FuturesPage />
      <Footer />
    </div>
  );

  const ETFsPageWrapper = () => (
    <div className="brokers-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <ETFsPage />
      <Footer />
    </div>
  );

  const OptionsPageWrapper = () => (
    <div className="brokers-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <OptionsPage />
      <Footer />
    </div>
  );

  // Country Page Wrapper
  const CountryPageWrapper = ({ Component, country }) => (
    <div className="market-bg">
      <Navbar
        user={currentUser}
        onLogout={handleLogout}
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <Component
        selectedCountry={selectedCountry}
        onCountryChange={updateSelectedCountry}
      />
      <Footer />
    </div>
  );

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login onLogin={handleLogin} />
            </PublicRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile user={currentUser} onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />

        {/* FIXED: Downloads Routes - Corrected paths */}
        <Route
          path="/download"
          element={
            <ProtectedRoute>
              <DownloadsWrapper />
            </ProtectedRoute>
          }
        />

        <Route
          path="/download/desktop"
          element={
            <ProtectedRoute>
              <div className="downloads-bg">
                <Navbar
                  user={currentUser}
                  onLogout={handleLogout}
                  selectedCountry={selectedCountry}
                  onCountryChange={updateSelectedCountry}
                />
                <Desktop />
                <Footer />
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/download/mobile"
          element={
            <ProtectedRoute>
              <MobileWrapper />
            </ProtectedRoute>
          }
        />

        {/* Business Routes */}
        <Route
          path="/business/widgets"
          element={
            <ProtectedRoute>
              <BusinessPageWrapper page="All Widgets" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/business/documentation"
          element={
            <ProtectedRoute>
              <BusinessPageWrapper page="Documentation" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/business/compare-libraries"
          element={
            <ProtectedRoute>
              <BusinessPageWrapper page="Compare Libraries" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/business/lightweight-chart"
          element={
            <ProtectedRoute>
              <BusinessPageWrapper page="Lightweight Chart" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/business/advanced-chart"
          element={
            <ProtectedRoute>
              <BusinessPageWrapper page="Advanced Chart" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/business/trading-platform"
          element={
            <ProtectedRoute>
              <BusinessPageWrapper page="Trading Platform" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/business/brokerage-integration"
          element={
            <ProtectedRoute>
              <BusinessPageWrapper page="Brokerage Integration" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/business/advertising"
          element={
            <ProtectedRoute>
              <BusinessPageWrapper page="Advertising" />
            </ProtectedRoute>
          }
        />

        {/* Company Routes */}
        <Route
          path="/company/about"
          element={
            <ProtectedRoute>
              <CompanyPageWrapper page="About Us" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company/zipfinn"
          element={
            <ProtectedRoute>
              <CompanyPageWrapper page="Zipfinn" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company/space-mission"
          element={
            <ProtectedRoute>
              <CompanyPageWrapper page="Space Mission" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company/careers"
          element={
            <ProtectedRoute>
              <CompanyPageWrapper page="Careers" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company/blogs"
          element={
            <ProtectedRoute>
              <CompanyPageWrapper page="Blogs And News" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company/media-kit"
          element={
            <ProtectedRoute>
              <CompanyPageWrapper page="Media Kit" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company/accessibility"
          element={
            <ProtectedRoute>
              <CompanyPageWrapper page="Accessibility Statement" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company/merch-store"
          element={
            <ProtectedRoute>
              <CompanyPageWrapper page="Zipfinn Merch Store" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company/tarot-cards"
          element={
            <ProtectedRoute>
              <CompanyPageWrapper page="Tarot Cards For Traders" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company/tradetime"
          element={
            <ProtectedRoute>
              <CompanyPageWrapper page="The C63 TradeTime" />
            </ProtectedRoute>
          }
        />

        {/* Brokers Routes */}
        <Route
          path="/brokers"
          element={
            <ProtectedRoute>
              <Brokers />
            </ProtectedRoute>
          }
        />

        {/* Broker Awards Routes - Year Based */}
        <Route
          path="/broker-awards"
          element={
            <ProtectedRoute>
              <BrokerAwardsWrapper />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brokers/BrokerAwards2024"
          element={
            <ProtectedRoute>
              <BrokerAwards2024Wrapper />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brokers/BrokerAwards2023"
          element={
            <ProtectedRoute>
              <BrokerAwards2023Wrapper />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brokers/BrokerAwards2022"
          element={
            <ProtectedRoute>
              <BrokerAwards2022Wrapper />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brokers/BrokerAwards2021"
          element={
            <ProtectedRoute>
              <BrokerAwards2021Wrapper />
            </ProtectedRoute>
          }
        />

        <Route
          path="/brokers/BrokerAwards2020"
          element={
            <ProtectedRoute>
              <BrokerAwards2020Wrapper />
            </ProtectedRoute>
          }
        />

        <Route
          path="/brokers/open-account"
          element={
            <ProtectedRoute>
              <OpenAccountWrapper />
            </ProtectedRoute>
          }
        />

        {/* Add All Brokers Route */}
        <Route
          path="/brokers/all-brokers"
          element={
            <ProtectedRoute>
              <AllBrokersPageWrapper />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brokers/stocks"
          element={
            <ProtectedRoute>
              <StocksPageWrapper />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brokers/forex"
          element={
            <ProtectedRoute>
              <ForexPageWrapper />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brokers/futures"
          element={
            <ProtectedRoute>
              <FuturesPageWrapper />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brokers/etfs"
          element={
            <ProtectedRoute>
              <ETFsPageWrapper />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brokers/options"
          element={
            <ProtectedRoute>
              <OptionsPageWrapper />
            </ProtectedRoute>
          }
        />

        {/* Markets Routes - Updated with actual components */}

        {/* North America Routes */}
        <Route
          path="/markets/Countries/Unitedstate/Unitedstate"
          element={
            <ProtectedRoute>
              <CountryPageWrapper Component={Unitedstate} country="United States" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/markets/Countries/Canada/Canada"
          element={
            <ProtectedRoute>
              <CountryPageWrapper Component={Canada} country="Canada" />
            </ProtectedRoute>
          }
        />

        {/* Europe Routes */}
        <Route path="/markets/Countries/Austria/Austria/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Austria selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Belgium/Belgium/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Belgium selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Switzerland/Switzerland/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Switzerland selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Cyprus/Cyprus/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Cyprus selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Czech_Republic/Czech_Republic/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Czech_Republic selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Germany/Germany/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Germany selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Denmark/Denmark/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Denmark selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Estonia/Estonia/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Estonia selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Spain/Spain/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Spain selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Finland/Finland/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Finland selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/France/France/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><France selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Greece/Greece/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Greece selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Hungary/Hungary/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Hungary selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Ireland/Ireland/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Ireland selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Iceland/Iceland/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Iceland selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Italy/Italy/" element={<ProtectedRoute><CountryPageWrapper Component={Italy} country="Italy" /></ProtectedRoute>} />
        <Route path="/markets/Countries/Lithuania/Lithuania/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Lithuania selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Latvia/Latvia/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Latvia selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Luxembourg/Luxembourg/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Luxembourg selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Netherlands/Netherlands/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Netherlands selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Norway/Norway/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Norway selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Poland/Poland/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Poland selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Portugal/Portugal/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Portugal selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Serbia/Serbia/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Serbia selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Russia/Russia/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Russia selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Romania/Romania/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Romania selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Sweden/Sweden/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Sweden selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Slovakia/Slovakia/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Slovakia selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Turkey/Turkey/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Turkey selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/UnitedKingdom/UnitedKingdom/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><UK selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        {/* Middle East / Africa Routes */}
        <Route path="/markets/Countries/United_Arab_Emirates/United_Arab_Emirates/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><United_Arab_Emirates selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Bahrain/Bahrain/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Bahrain selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Egypt/Egypt/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Egypt selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Israel/Israel/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Israel selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Kenya/Kenya/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Kenya selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Kuwait/Kuwait/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Kuwait selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/Morocco/Morocco/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Morocco selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/Nigeria/Nigeria/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Nigeria selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Qatar/Qatar/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Qatar selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Saudi_Arabia/Saudi_Arabia/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Saudi_Arabia selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Tunisia/Tunisia/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Tunisia selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/South_Africa/South_Africa/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><South_Africa selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        {/* Mexico and South America Routes */}
        <Route path="/markets/Countries/Argentina/Argentina/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Argentina selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Brazil/Brazil/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Brazil selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Chile/Chile/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Chile selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Colombia/Colombia/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Colombia selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Mexico/Mexico/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Mexico selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Peru/Peru/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Peru selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Venezuela/Venezuela/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Venezuela selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        {/* Asia / Pacific Routes */}
        <Route path="/markets/Countries/Australia/Australia/" element={<ProtectedRoute><CountryPageWrapper Component={Australia} country="Australia" /></ProtectedRoute>} />
        <Route path="/markets/Countries/Bangladesh/Bangladesh/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Bangladesh selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/Mainland_China/Mainland_China/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Mainland_China selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />
        <Route path="/markets/Countries/Hong_Kong_China/Hong_Kong_China/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Hong_Kong_China selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/Indonesia/Indonesia/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Indonesia selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/India/India/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><India selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/Japan/Japan/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Japan selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/South_Korea/South_Korea/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><South_Korea selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/Sri_Lanka/Sri_Lanka/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Sri_Lanka selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/Malaysia/Malaysia/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Malaysia selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/New_Zealand/New_Zealand/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><New_Zealand selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/Philippines/Philippines/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Philippines selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/Pakistan/Pakistan/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Pakistan selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/Singapore/Singapore/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Singapore selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        <Route path="/markets/Countries/Thailand/Thailand/" element={<ProtectedRoute><Navbar user={currentUser} onLogout={handleLogout} selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Thailand selectedCountry={selectedCountry} onCountryChange={updateSelectedCountry} /><Footer /></ProtectedRoute>} />

        {/* UnitedState Route with Navbar and Footer */}
        <Route
          path="/market/Countries/Unitedstate/Unitedstate"
          element={
            <ProtectedRoute>
              <Navbar
                user={currentUser}
                onLogout={handleLogout}
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Unitedstate
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Market/Countries/Canada/Canada"
          element={
            <ProtectedRoute>
              <Navbar
                user={currentUser}
                onLogout={handleLogout}
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Canada
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/market/Countries/India/India"
          element={
            <ProtectedRoute>
              <Navbar
                user={currentUser}
                onLogout={handleLogout}
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <India
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Market/Countries/UnitedKingdom/UnitedKingdom"
          element={
            <ProtectedRoute>
              <Navbar
                user={currentUser}
                onLogout={handleLogout}
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <UK
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/market/Countries/Germany/Germany"
          element={
            <ProtectedRoute>
              <Navbar
                user={currentUser}
                onLogout={handleLogout}
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Germany
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Market/Countries/Japan/Japan"
          element={
            <ProtectedRoute>
              <Navbar
                user={currentUser}
                onLogout={handleLogout}
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Japan
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/market/Countries/MainlandChina/MainlandChina"
          element={
            <ProtectedRoute>
              <Navbar
                user={currentUser}
                onLogout={handleLogout}
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Mainland_China
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Market/Countries/HongKong/HongKong"
          element={
            <ProtectedRoute>
              <Navbar
                user={currentUser}
                onLogout={handleLogout}
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Hong_Kong_China
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/market/Countries/SaudiArabia/SaudiArabia"
          element={
            <ProtectedRoute>
              <Navbar
                user={currentUser}
                onLogout={handleLogout}
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Saudi_Arabia
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Market/Countries/Australia/Australia"
          element={
            <ProtectedRoute>
              <Navbar
                user={currentUser}
                onLogout={handleLogout}
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Australia
                selectedCountry={selectedCountry}
                onCountryChange={updateSelectedCountry}
              />
              <Footer />
            </ProtectedRoute>
          }
        />


        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
        />

       
        <Route path="/Screneres/stocks" element={
          <ProtectedRoute>
            <Navbar
              user={currentUser}
              onLogout={handleLogout}
              selectedCountry={selectedCountry}
              onCountryChange={updateSelectedCountry}
            />
            <StockScreener />
            <Footer />
          </ProtectedRoute>
        } />

        {/* New route for community ideas */}
        <Route path="/community/ideas" element={
          <ProtectedRoute>
            <Navbar
              user={currentUser}
              onLogout={handleLogout}
              selectedCountry={selectedCountry}
              onCountryChange={updateSelectedCountry}
            />
            <Communitys />
            <Footer />
          </ProtectedRoute>
        } />

        {/* New route for community/strategies */}
        <Route path="community/strategies" element={
          <ProtectedRoute>
            <Navbar
              user={currentUser}
              onLogout={handleLogout}
              selectedCountry={selectedCountry}
              onCountryChange={updateSelectedCountry}
            />
            <IndicatorsIdeas />
            <Footer />
          </ProtectedRoute>
        } />

        <Route path="/community" element={
          <ProtectedRoute>
            <Navbar
              user={currentUser}
              onLogout={handleLogout}
              selectedCountry={selectedCountry}
              onCountryChange={updateSelectedCountry}
            />
            <ExploreCommunity />
            <Footer />
          </ProtectedRoute>
        } />




        {/* New route for community/About*/}
        <Route path="/community/about" element={
          <ProtectedRoute>
            <Navbar
              user={currentUser}
              onLogout={handleLogout}
              selectedCountry={selectedCountry}
              onCountryChange={updateSelectedCountry}
            />
            <CommunityPower />
            <UnleashPower />
            <FinanceSocial />
            <TheLeapNav />
            <PineScriptNav />
            <WaysToearn />
            <TradingAccount />
            <GrowthTrade />
            <Footer />
          </ProtectedRoute>
        } />

        {/* New route for community/About*/}
        <Route path='/Leap' element={
          <ProtectedRoute>
            <Navbar
              user={currentUser}
              onLogout={handleLogout}
              selectedCountry={selectedCountry}
              onCountryChange={updateSelectedCountry}
            />
            <Leap />
            <Leaderboard />
            <FineDetails />
            <CompletedContests />
            <TradingTalk />
            <PaperTradings />
            <Footer />
          </ProtectedRoute>
        } />

        <Route path='/TakeLeapBtn' element={
          <ProtectedRoute>
            <Navbar
              user={currentUser}
              onLogout={handleLogout}
              selectedCountry={selectedCountry}
              onCountryChange={updateSelectedCountry}
            />
            <Leap />
            <Leaderboard />
            <FineDetails />
            <CompletedContests />
            <TradingTalk />
            <PaperTradings />
            <Footer />
          </ProtectedRoute>
        } />

        {/*section calls links for community power*/}
        <Route path="/featured/scripts" element={
          <ProtectedRoute>
            <Navbar
              user={currentUser}
              onLogout={handleLogout}
              selectedCountry={selectedCountry}
              onCountryChange={updateSelectedCountry}
            />
            <IndicatorsIdeas />
            <Footer />
          </ProtectedRoute>
        } />

        <Route path="/opensource" element={
          <ProtectedRoute>
            <Navbar
              user={currentUser}
              onLogout={handleLogout}
              selectedCountry={selectedCountry}
              onCountryChange={updateSelectedCountry}
            />
            <IndicatorsIdeas />
            <Footer />
          </ProtectedRoute>
        } />

        <Route path="/docs" element={
          <ProtectedRoute>
            <Navbar
              user={currentUser}
              onLogout={handleLogout}
              selectedCountry={selectedCountry}
              onCountryChange={updateSelectedCountry}
            />
            <EasyToFollow />
            <Footer />
          </ProtectedRoute>
        } />

        <Route path="/ZipfinnLove" element={
          <ProtectedRoute>
            <Navbar
              user={currentUser}
              onLogout={handleLogout}
              selectedCountry={selectedCountry}
              onCountryChange={updateSelectedCountry}
            />
            <ZipfinnLove />
            <Footer />
          </ProtectedRoute>
        } />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div >
  );
}

export default App;
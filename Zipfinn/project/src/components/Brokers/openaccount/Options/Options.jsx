import React from 'react';
import Defaultbroker1 from '../Defaultbroker1'; // ✅ Same path

// OptionsPage.jsx में
const optionsBrokers = [
    {
    id: 363,
    name: "Dhan",
    rating: 4.6,
    ratingTitle: "Excellent",
    stars: 5.0,
    reviews: "28.5K",
    accounts: "412.2K",
    assets: "Stocks, Futures, Options",
    promotion: "Free Demat A/c, ₹0 AMC",
    plan: "silver",
    widgetImage: "https://s3.tradingview.com/brokers/widget/56dhan_298x272_BL__svg.svg"
  },
  {
    id: 374,
    name: "Fyers",
    rating: 4.5,
    ratingTitle: "Great",
    stars: 4.5,
    reviews: "10.8K",
    accounts: "135.5K",
    assets: "Stocks, Futures, Options",
    promotion: "FREE Demat A/c with 0 AMC",
    plan: "silver",
    widgetImage: "https://s3.tradingview.com/brokers/widget/fyers_298x272_BL__svg.svg"
  },
  {
    id: 495,
    name: "Alice Blue",
    rating: 4.2,
    ratingTitle: "Good",
    stars: 4.0,
    reviews: "530",
    accounts: "13.4K",
    assets: "Stocks, Futures, Bonds, ETFs, Options",
    promotion: "Trade Flat ₹20 Per Order!",
    plan: "silver",
    widgetImage: "https://s3.tradingview.com/brokers/widget/alice_blue_298x272_BL__svg.svg"
  },
  
  
];




const OptionsPage = () => {
  return (
    <Defaultbroker1
      pageTitle="Options Trading"
      pageDescription="Trade options with top verified brokers."
      brokersData={optionsBrokers}
      showStats={true}
    />
  );
};

export default OptionsPage;
import React from 'react';
import Defaultbroker from '../Defaultbroker'; // ✅ Same path

// ETFsPage.jsx में  
const etfsBrokers = [
  {
    id: 495,
    name: "Alice Blue",
    rating: 4.2,
    ratingTitle: "Good",
    stars: 4.0,
    reviews: "530",
    accounts: "13.4K", 
    assets: "ETFs, Stocks, Bonds",
    promotion: "Trade Flat ₹20 Per Order!",
    plan: "silver",
    widgetImage: "https://s3.tradingview.com/brokers/widget/alice_blue_298x272_BL__svg.svg"
  },
   {
    id: 711,
    name: "Share.Market",
    rating: 4.2,
    ratingTitle: "Good",
    stars: 4.0,
    reviews: "35",
    accounts: "525",
    assets: "Stocks, Futures, ETFs, Options",
    promotion: "",
    plan: "silver",
    widgetImage: "https://s3.tradingview.com/brokers/widget/298x272_BL__svg_sharemarket.svg"
  },
];


const ETFsPage = () => {
  return (
    <Defaultbroker
      pageTitle="ETFs Trading"
      pageDescription="Trade ETFs with top verified brokers."
      brokersData={etfsBrokers}
      showStats={true}
    />
  );
};

export default ETFsPage;
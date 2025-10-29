import React from 'react';
import Defaultbroker from '../Defaultbroker'; // ✅ Correct path

const forexBrokers = [
  {
    id: 244,
    name: "Interactive Brokers",
    rating: 4.4,
    ratingTitle: "Very Good",
    stars: 4.5,
    reviews: "32.6K",
    accounts: "268.1K",
    assets: "Stocks, Forex, Bonds, Options",
    promotion: "Low Trading Costs",
    plan: "platinum",
    widgetImage: "https://s3.tradingview.com/brokers/widget/interactivebrokers_298x272_BL__svg.svg"
  },
  
];

const ForexPage = () => {
  return (
    <Defaultbroker
      pageTitle="Forex Trading"
      pageDescription="Trade forex with top verified brokers."
      brokersData={forexBrokers}
      showStats={true}
    />
  );
};

export default ForexPage;
import React from 'react';
import Defaultbroker from './Defaultbroker';

const brokers = [ 
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
  {
    id: 407,
    name: "Paytm Money",
    rating: 4.2,
    ratingTitle: "Good",
    stars: 4.0,
    reviews: "740",
    accounts: "24.5K",
    assets: "Stocks, Futures",
    promotion: "",
    plan: "silver",
    widgetImage: "https://s3.tradingview.com/brokers/widget/paytm_298x272_BL__svg.svg"
  },
  {
    id: 492,
    name: "Motilal Oswal",
    rating: 3.9,
    ratingTitle: "Above Average",
    stars: 4.0,
    reviews: "124",
    accounts: "3.8K",
    assets: "Stocks, Futures",
    promotion: "",
    plan: "silver",
    widgetImage: "https://s3.tradingview.com/brokers/widget/298x272_BL___Motilal_Oswal.svg"
  }
];

const AllBrokersPage = () => {
  return (
    <Defaultbroker
      pageTitle="Made to trade"
      pageDescription="Get trading with verified brokers today."
      brokersData={brokers}  
      showStats={true}
    />
  );
};

export default AllBrokersPage;
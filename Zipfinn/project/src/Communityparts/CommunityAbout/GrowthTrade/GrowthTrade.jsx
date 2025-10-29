import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GrowthCard1 from '../../../assets/images/GrowthCard1.jpg';
import GrowthCard2 from '../../../assets/images/GrowthCard2.jpg';
import GrowthCard from '../../../assets/images/GrowthCard.jpg';
import moderators from '../../../assets/svg/moderators.svg';
import rules from '../../../assets/svg/rules.svg';
import './GrowthTrade.css';

const GrowthTrade = () => {
  const navigate = useNavigate(); // React Router navigation

  // Image Cards Data
  const imageCards = [
    { src: GrowthCard, title: "@tyt.ducks" },
    { src: GrowthCard1, title: "@tyt.ducks" },
    { src: GrowthCard2, title: "@tyt.ducks" },
    { src: GrowthCard, title: "@tyt.ducks" },
    { src: GrowthCard1, title: "@tyt.ducks" },
    { src: GrowthCard2, title: "@tyt.ducks" },
    { src: GrowthCard, title: "@tyt.ducks" },
    { src: GrowthCard1, title: "@tyt.ducks" },
  ];

  // House Sections Data
  const houseSections = [
    {
      img: moderators,
      heading: "House Rules",
      desc: "We've got rules here, folks. Read about what's allowed and what most certainly isn't in the largest house of traders and investors in the world.",
      link: "#",
      linkText: "Learn more ."
    },
    {
      img: rules,
      heading: "Moderators",
      desc: "The real MVPs. Meet the members of TradingView's community who have earned their place as the most trusted people on the platform.",
      link: "#",
      linkText: "Learn more ."
    }
  ];

  // Handle button click
  const ZipfinnLoveClick = () => {
    navigate('/ZipfinnLove'); // Navigate to your desired route
  };

  return (
    <div className="community-Growthtrade-container">
      {/* Header Section */}
      <div className="community-Growthtrade-section">
        <h1 className='community-Growthtrade-heading'>
          Growth in every trading with <span>Zepfinn</span>
        </h1>
        <p className='community-Growthtrade-para'>
          100 million traders shaping their own future with Zepfinn. You could be next.
        </p>
      </div>

      {/* Image Cards Section */}
      <div className="community-Growthtrade-image-section">
        {imageCards.map((card, index) => (
          <div className="Growthtrade-image-cards" key={index}>
            <img src={card.src} alt={card.title} />
            <p className='title'>{card.title}</p>
          </div>
        ))}
      </div>

      {/* Explore Button Section */}
      <div className="community-Explore-Zepfinn-btns">
        <button className='Explore-Zepfinn-btns' onClick={ZipfinnLoveClick}>
          Explore the Zepfinn
        </button>
      </div>

      {/* House Sections */}
      <div className="House-moderators-container">
        <div className="House-moderators-section">
          {houseSections.map((section, index) => (
            <div className="House-moderators-image" key={index}>
              <div className="House-moderators-upbody">
                <img src={section.img} alt={section.heading} />
              </div>
              <div className="House-moderators-downbody">
                <h1>{section.heading}</h1>
                <p>{section.desc}</p>
                <a href={section.link} className='House-moderators-link'>{section.linkText}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowthTrade;

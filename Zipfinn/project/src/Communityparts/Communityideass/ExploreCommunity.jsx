import React, { useState } from 'react';
import Slider from "react-slick";
import { faCalendarWeek, faChartBar, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import explor from '../../assets/images/explor.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ExploreCommunity.css'
const ExploreCommunity = () => {
    
    const tradeIdeas = [
        {
            title: 'Tech Growth Stocks',
            description: 'Analyzing the next big tech companies.',
            author: 'SkyTradingZone',
            publicationDate: 'Sep 28, 2025',
            likes: 5,
            boosts: 17,
            image: explor
        },
        {
            title: 'Crypto Insights',
            description: 'Top altcoins to watch this month.',
            author: 'CryptoGuru',
            publicationDate: 'Sep 27, 2025',
            likes: 8,
            boosts: 22,
            image: explor
        },
        {
            title: 'Forex Opportunities',
            description: 'EUR/USD pair analysis.',
            author: 'TraderJoe',
            publicationDate: 'Sep 26, 2025',
            likes: 3,
            boosts: 10,
            image: explor
        },
        {
            title: 'Indices Strategy',
            description: 'Best index trades for Q4.',
            author: 'MarketPro',
            publicationDate: 'Sep 25, 2025',
            likes: 6,
            boosts: 15,
            image: explor
        },
    ];

    const sections = [
        {
            tradeCategories: ['Editors picks', 'Stocks', 'Crypto', 'Forex', 'Indices', 'Futures'],
            heading: 'Trading ideas.',
            description: "Get inspiration for your next trade. Don't reinvent the wheel."
        },
        {
            tradeCategories: ['Editors picks', 'Stocks'],
            heading: 'Learn trading ideas.',
            description: 'Learn the ins and outs of trading'
        }, {
            tradeCategories: ['Editors picks', 'Indices', 'Futures'],
            heading: 'Watch tradind videos.',
            description: "Get inspiration for your next trade. Don't reinvent the wheel."
        },
        {
            tradeCategories: ['Editors picks', 'Stocks'],
            heading: 'Trading plans.',
            description: 'Learn the ins and outs of trading'
        },
    ];

    const TradeIdeaCard = ({ idea }) => {
        const [likes, setLikes] = useState(idea.likes);
        const [boosts, setBoosts] = useState(idea.boosts);

        return (
            <div className="explor-trade-ideas-cards">
                <div className="explor-trade-ideas-img-cards">
                    <img src={idea.image} alt={idea.title} />
                </div>
                <div className="explor-trade-ideas-card-description">
                    <h5 className="explor-title"><a href="#">{idea.title}</a></h5>
                    <p className="explor-card-para">{idea.description}</p>
                </div>
                <div className="explor-description-links-btns">
                    <div className="explor-date-link">
                        <a href="#">{`by ${idea.author}`}</a>
                        <p>
                            <FontAwesomeIcon icon={faCalendarWeek} /> {idea.publicationDate}
                        </p>
                    </div>
                    <div className="explor-description-btns">
                        <button onClick={() => setLikes(likes + 1)}>
                            <FontAwesomeIcon icon={faChartBar} /> {likes}
                        </button>
                        <button onClick={() => setBoosts(boosts + 1)}>
                            <FontAwesomeIcon icon={faRocket} /> {boosts}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1025,
                settings: { slidesToShow: 2, slidesToScroll: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            },
        ],
    };

    return (
        <div className="Explore-community-container">
            <h1 className="Explore-community-heading">Explore the community</h1>

            {sections.map((section, secIndex) => (
                <div key={secIndex}>
                    <div className="Explore-trads-ideas">
                        <div className="Explore-heading-lins">
                            <h2 className="explor-trade-ideas-heading"><a href="#">{section.heading}</a></h2>
                            <p className="explor-trade-ideas-para">{section.description}</p>
                        </div>
                        <div className="explor-trade-ideas-btns">
                            {section.tradeCategories.map((category, index) => (
                                <button key={index} className="explor-btns-trade">{category}</button>
                            ))}
                        </div>
                    </div>

                    <div className="explor-trade-ideas-card-Container">
                        <Slider {...sliderSettings}>
                            {tradeIdeas.map((idea, index) => (
                                <TradeIdeaCard key={index} idea={idea} />
                            ))}
                        </Slider>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExploreCommunity;

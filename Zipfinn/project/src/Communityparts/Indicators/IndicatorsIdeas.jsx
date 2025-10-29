import React, { useState, useEffect } from 'react';
import { faCalendarWeek, faChartBar, faLockOpen, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom"; // 👈 import useNavigate
import './IndicatorsIdeas.css';

const IndicatorsIdeas = () => {
  const [trading, setTrading] = useState([]);
  const navigate = useNavigate(); // 👈 initialize navigate

  const api = async () => {
    const responce = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc4569a69f614e65bca8407595a80afe");
    const result = await responce.json();
    setTrading(result.articles);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      <div className="Indicators-head">
        <div className="Indicators-section">
          <div className="Indicators-ide">
            {/* 👇 Community button navigates to /community */}
            <button 
              className='community'
              onClick={() => navigate("/community")}
            >
              Community
            </button> / 
            <button><a href="#" className='ideas'>Analysis Indicators & Approaches</a></button>
          </div>

          <div className="Indicators-ideas">
            <h1>Analysis Indicators & Approaches</h1>
            <div className="populer-edit-btns">
              <button><a href="#" className="Indicators-populer">Populer</a></button>
              <button><a href="#" className="Indicators-editors">Editors' picks</a></button>
            </div>
          </div>
        </div>

        <div className="Indicators-side-ideas">
          <select id="Indicators-ideas">
            <option value="idea1">All Ideas</option>
            <option value="idea2">Indicators</option>
            <option value="idea3">Strategies</option>
            <option value="idea4">Libraries</option>
          </select>
          <button><FontAwesomeIcon icon={faLockOpen} /> Open source only</button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="Indicators-card-Container">
        <div className="Indicators-card-section">
          {trading.map((articles, index) => (
            <div className="Indicators-cards" key={index}>
              <div className="Indicators-img-cards">
                {articles.urlToImage && <img src={articles.urlToImage} alt="img" />}
              </div>
              <div className="Indicators-card-description">
                <h5 className='title'>{articles.title}</h5>
                <p className='card-para'>{articles.description}</p>
              </div>
              <div className="Indicators-description-links-btns">
                <div className="Indicators-date-link">
                  <a href={articles.url}>by SkyTradingZone</a>
                  <p><FontAwesomeIcon icon={faCalendarWeek} /> {articles.publishedAt}</p>
                </div>
                <div className="Indicators-cards-description-btns">
                  <button><FontAwesomeIcon icon={faChartBar} /> 5</button>
                  <button><FontAwesomeIcon icon={faRocket} /> 17</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="Indicators-publication-btns">
          <div className="Indicators-main-publication-btns">
            <button>Show more publication</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorsIdeas;

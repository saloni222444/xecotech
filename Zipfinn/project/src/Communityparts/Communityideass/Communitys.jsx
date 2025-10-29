import React, { useState, useEffect } from 'react';
import { faCalendarWeek, faChartBar, faRocket, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom"; // 👈 import useNavigate
import './Communitys.css'

const Communitys = () => {
    const [trading, setTrading] = useState([]);
    const navigate = useNavigate();
    const [isIdeasActive, setIsIdeasActive] = useState(false);
    const [isPopulerActive, setIsPopulerActive] = useState(false);
    const [isEditorsActive, setIsEditorsActive] = useState(false);
    const [isVideoOnly, setIsVideoOnly] = useState(false);
    const [isPuplication, setPublication] = useState(false);
    const api = async () => {
        const response = await fetch("https://zepfinn.xecotech.co/api/blogs");
        const result = await response.json();
        console.log(result);
        setTrading(result.articles);
    }

    useEffect(() => {
        api();
    }, []);
    console.log(trading);

    return (
        <div>
            <div className="community-head">
                <div className="community-section">
                    <div className="comm-ide">
                        <button
                            className='community'
                            onClick={() => navigate("/community")}
                        >Community
                        </button>
                        <span>/</span>
                        <button
                            onClick={() => setIsIdeasActive(!isIdeasActive)}
                            className={isIdeasActive ? 'active' : ''}
                        >
                            <a href="#" className='ideas'>Ideas</a>
                        </button>
                    </div>
                    <div className="community-content-image">
                        <div className="community-ideas">
                            <h1>Participant Proposals</h1>
                            <div className="populer-edit-btns">
                                <button
                                    onClick={() => setIsPopulerActive(!isPopulerActive)}
                                    className={isPopulerActive ? 'active' : ''}
                                >
                                    <a href="#" className="populer">Populer</a>
                                </button>
                                <button
                                    onClick={() => setIsEditorsActive(!isEditorsActive)}
                                    className={isEditorsActive ? 'active' : ''}
                                >
                                    <a href="#" className="editors">Editors' picks</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="side-ideas-videos">
                <select id="ideas">
                    <option id='option' value="idea1">All Ideas</option>
                    <option id='option' value="idea2">Trading ideas</option>
                    <option id='option' value="idea3">Education ideas</option>
                </select>
                <button onClick={() => setIsVideoOnly(!isVideoOnly)} className={isVideoOnly ? 'active' : ''}>
                    <FontAwesomeIcon icon={faVideo} />
                    <span> Video Only</span>
                </button>
            </div>

            <div className="community-card-Container">
                <div className="community-card-section">
                    {trading && trading.map((articles) => (
                        <div className="commuinty-cards" key={articles.url}>
                            <div className="img-cards">
                                <img src={articles.urlToImage} alt="img" />
                            </div>
                            <div className="card-description">
                                <h5 className='title'>{articles.title}</h5>
                                <p className='card-para'>{articles.description}</p>
                            </div>
                            <div className="description-links-btns">
                                <div className="date-link">
                                    <a href={articles.url}>by SkyTradingZone</a>
                                    <p><FontAwesomeIcon icon={faCalendarWeek} /> {articles.publishedAt}</p>
                                </div>
                                <div className="community-casd-description-btns">
                                    <button><FontAwesomeIcon icon={faChartBar} /> 5</button>
                                    <button><FontAwesomeIcon icon={faRocket} /> 17</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="publication-btns">
                    <div className="main-publication-btns">
                        <button onClick={() => setPublication(!isPuplication)}
                            className={isPuplication ? 'active' : ''}
                        >Show more publication</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Communitys;

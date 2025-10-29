
import React from 'react'
import numb from '../../../assets/images/paltform.jpg'
import stock from '../../../assets/images/stock.jpg'
import graph from '../../../assets/video/graph.mp4'
import Zepfinns from '../../../assets/images/Zepfinns.png'
import zep from '../../../assets/images/zep.png'
import './UnleashPower.css'
const UnleashPower = () => {


    const cards = [
        {
            type: "image",
            src: numb,
            title: "Trade ideas",
            desc: "Sharing your market analysis helps others learn, but you'll also get valuable feedback too — from expert traders and investors across all trading disciplines."
        },
        {
            type: "image",
            src: stock,
            title: "Chats",
            desc: "Discuss what's unfolding in realtime, getting trading opinions and ideas that evolve with every tick."
        },
        {
            type: "image",
            src: Zepfinns,
            title: "Trade ideas",
            desc: "Sharing your market analysis helps others learn, but you'll also get valuable feedback too — from expert traders and investors across all trading disciplines."
        },
        {
            type: "video",
            src: graph,
            title: "Chats",
            desc: "Discuss what's unfolding in realtime, getting trading opinions and ideas that evolve with every tick."
        }
    ];
 
    return (
        <div className='Unleash-power'>
            <div className="Unleash-community-container">
                <h1>Empower the voice of community</h1>
                
           
                <div className="Unleash-community-section">
                    {cards.map((card, index) => (
                        <div className="Unleash-community-cards" key={index}>
                            <div className="Unleash-card-img">
                                {card.type === "image" ? (
                                    <img className='Unleash-Body-Cards' src={card.src} alt="img" />
                                ) : (
                                    <video src={card.src} autoPlay loop muted></video>
                                )}
                            </div>
                            <div className="Unleash-card-body">
                                <h2>{card.title}</h2>
                                <p>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="Unleash-card-body-images">
                    <h1>Growth stap by stap with <span>Zepfinn</span></h1>
                    <img  src={zep} alt="" />  
                </div>
            </div>
        </div>
    )
}

export default UnleashPower

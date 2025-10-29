import React from 'react'
import parts from '../../../assets/video/parts.webm'
import learn from '../../../assets/svg/learn.svg'
import markit from '../../../assets/images/markit.jpg'
import greenGraph from '../../../assets/video/greenGraph.mp4'
import './FinanceSocial.css'
const FinanceSocial = () => {

    
    const cards = [
        {
            type: "image",
            src: markit,
            title: "Create",
            desc: "Simply create trading content using real-time social collaborative tools."
        },
        {
            type: "video",
            src: greenGraph,
            title: "Collaborate",
            desc: "Thousands and thousands of users share opinions every day from our charting platform: discussing their ideas, market analysis and general trade set-ups with others in the community."
        },
        {
            type: "video",
            src: parts,
            title: "Share",
            desc: "Start sharing your vision today — criticize and argue, comment and add important details, be active! Together, all these interactions make up the precious nuggets of knowledge that can be used by many traders all over the world."
        },
        {
            type: "image",
            src: learn,
            title: "Learn",
            desc: "Our community is built solely on non-profit interactions of talented investors, who are helping each other prosper. With one click you can view a live chart or annotated article posted by the community."
        }
    ];

    return (
        <div className='Finance-Unleash-power'>
            <div className="Finance-Unleash-community-container">
                <h1>Capital should be community</h1>
                <p className='finance-para'>
                    Who's got the best insight: one Wall Street suit or one million sociable traders?
                </p>

                <div className="Finance-Unleash-community-section">
                    {cards.map((card, index) => (
                        <div className="Finance-Unleash-community-cards" key={index}>
                            <div className={card.type === "video" ? "Finance-Unleash-card-video" : "Finance-Unleash-card-img"}>
                                {card.type === "image" ? <img src={card.src} alt="img" /> : <video src={card.src} autoPlay muted loop></video>}
                            </div>
                            <div className="Finance-Unleash-card-body">
                                <h2>{card.title}</h2>
                                <p className='Finance-Unleash-card-body-para'>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FinanceSocial

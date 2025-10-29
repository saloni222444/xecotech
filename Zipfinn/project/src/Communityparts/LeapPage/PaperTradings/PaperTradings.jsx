import React from 'react'
import video from '../../../assets/images/video.png'
import icons from '../../../assets/images/icons.png'
import './PaperTradings.css'
const PaperTradings = () => {

  const paperTradingData = [
    {
      image: video,
      title: "What's Paper Trading?",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo atque soluta rerum sapiente eaque minima.",
      link: "#",
      linkText: "Learn how it works."
    },
    {
      image: icons,
      title: "How The Leap works",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo atque soluta rerum sapiente eaque minima.",
      link: "#",
      linkText: "Learn how it works."
    }
  ];

  return (
    <div className="paper-trading-container">
      <div className="paper-trading-Devaid-section">
        {paperTradingData.map((item, index) => (
          <div key={index} className="paper-trading-image">
                <div className="paper-trading-upbody">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="paper-tradig-downbody">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <a href={item.link} className="paper-tradig-link">
                    {item.linkText}
                  </a>
                </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaperTradings

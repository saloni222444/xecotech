import React from 'react'
import XTbig from '../../../assets/svg/XTbig.svg'
import './FineDetails.css'
const FineDetails = () => {

  const detailsData = [
    {
      title: "Virtual money",
      description: `"At the start of the Zepfinn Challenge contest, every participant will be provided with a virtual balance of $100,000 in their Paper Trading account. This amount serves as play money, allowing participants to trade, strategize, and compete without any real financial risk while testing their investment skills."`,
    },
    {
      title: "Symbols for trading",
      description: `Zepfinn chellenge offers real-time paper trading on over ten futures, including the most popular contracts such as E-Mini Nasdaq-100, Micro E-Mini S&P, Micro Bitcoin, Gold, and others, giving participants a diverse range of trading opportunities."`,
      buttons: ["MET1!", "MET1!", "khjhh!", "MET1!"], 
    },
    {
      title: "Power of community",
      description: `Harness our global community to discover ideas, strategies, and scripts. 
      With over 100 million members, our social network provides endless resources for traders.`,
    },
    {
      title: "Our champions",
      description: `The top 250 participants with the highest income by the end of the contest will be the winners.  
      1st prize — $8,500, 2nd — $7,000, 3rd — $6,000, 4th — $5,000, 5th — $3,500,  
      6th to 25th — $500, 26th to 50th — $200, and 51st to 250th — 6 additional months 
      of their current plan.  
      (Note: You can only win one prize — whichever is higher.)`,
    },
    {
      title: "Practice makes perfect",
      description: `No real money required, no brokerage account needed, and no hidden terms.  
      Learn, practice, and compete with traders globally for cash prizes.  
      Trade for at least 10 trading days, and you’ll have a chance to win.`,
    },
  ];

  return (
    <div className="chack-details-container">
       <h1 className='chack-details-heading'>Chack The fine details</h1>
      <div className="chack-details-section">
       <div className="details-boxes">
        {detailsData.map((item, index) => (
          <div key={index} className="details-headings">
            <h3>{item.title}</h3>
            <p>{item.description}</p>

           
            {item.buttons && (
              <p className="logo-icon-button">
                {item.buttons.map((btn, i) => (
                  <button key={i}>
                    <img src={XTbig} alt="icon" /> {btn}
                  </button>
                ))}
              </p>
            )}
          </div>
        ))}
       </div>
        <div className="details-rules">
          <p>
            Remember, <a href="#">all rules</a> must be followed to secure your prize.
          </p>
          <button className="details-readbtn">Read contest FAQ</button>
        </div>
      </div>
    </div>
  )
}

export default FineDetails

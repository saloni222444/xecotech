import React from 'react'
import Slider from "react-slick";
import man from '../../../assets/images/man.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CompletedContest.css'
const CompletedContests = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const contestData = [
   {
      sponsor: "CME Group",
      username: "ProfitHero",
      ranking: "#1 OUT OF 50,000",
      bestTrade: "+$5.0M",
      profitableTrades: "95% (19/20)"
    },
     {
      sponsor: "CME Group",
      username: "ProfitHero",
      ranking: "#1 OUT OF 50,000",
      bestTrade: "+$5.0M",
      profitableTrades: "95% (19/20)"
    },
     {
      sponsor: "CME Group",
      username: "ProfitHero",
      ranking: "#1 OUT OF 50,000",
      bestTrade: "+$5.0M",
      profitableTrades: "95% (19/20)"
    },
     {
      sponsor: "CME Group",
      username: "ProfitHero",
      ranking: "#1 OUT OF 50,000",
      bestTrade: "+$5.0M",
      profitableTrades: "95% (19/20)"
    },
     {
      sponsor: "CME Group",
      username: "ProfitHero",
      ranking: "#1 OUT OF 50,000",
      bestTrade: "+$5.0M",
      profitableTrades: "95% (19/20)"
    }
  ];

  return (
    <div className='CompletedContests-container'>
      <div className="completed-heading">
        <h1>Wrapped-Up Competitions</h1>
        <p>Meet our top 10 Zepfinn champions..</p>
      </div>

      <Slider {...settings}>
        {contestData.map((contest, index) => (
          <div key={index} className="completed-card">
            <div className="card-uperbody">
              <h4>Sponsored by <span>{contest.sponsor}</span></h4>
              <div className="completed-imgdp">
                <div className="dp-img">
                  <img src={man} alt="profile" />
                  <p>{contest.ranking}</p>
                </div>
              </div>
              <div className="completed-card-body">
                <h2>{contest.username}</h2>
              </div>
            </div>

            <div className="card-down-body">
              <div className="trade-profits">
                <div className="besttrade">
                  <p>Best trade</p>
                  <h4>{contest.bestTrade}</h4>
                </div>
                <div className="profittrades">
                  <p>Profitable trades</p>
                  <h4>{contest.profitableTrades}</h4>
                </div>
              </div>
              <button className="cardbtnss">See contest highlights</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CompletedContests

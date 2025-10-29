import React from 'react'
import Slider from "react-slick";
import './TradingTalk.css'
import images from '../../../assets/images/images.jpg'
const TradingTalk = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
          initialSlide: 1
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
  const TradingData = [
    {
      firstname: "Srosh mayi",
      secandname: "@Srosh mayi",
      description: "Join in the talk about the hottest topic in town as participants of the Leap share their minds about competition. Share, listen, and learn everything there is to know."
    },
    {
      firstname: "Srosh mayi",
      secandname: "@Srosh mayi",
      description: "Join in the talk about the hottest topic in town as participants of the Leap share their minds about competition. Share, listen, and learn everything there is to know."
    },
    {
      firstname: "Srosh mayi",
      secandname: "@Srosh mayi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Earum unde error, modi repudiandae alias estratione enim? Tenetur enim eos quas optio, repudiandae a,error ipsa nisi rerum facere in!"
    },
    {
      firstname: "Srosh mayi",
      secandname: "@Srosh mayi",
      description: "Join in the talk about the hottest topic in town as participants of the Leap share their minds about competition. Share, listen, and learn everything there is to know."
    },
    {
      firstname: "Srosh mayi",
      secandname: "@Srosh mayi",
      description: "Join in the talk about the hottest topic in town as participants of the Leap share their minds about competition. Share, listen, and learn everything there is to know."
    },
    {
      firstname: "Srosh mayi",
      secandname: "@Srosh mayi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Earum unde error, modi repudiandae alias estratione enim? Tenetur enim eos quas optio, repudiandae a,error ipsa nisi rerum facere in!"
    }

  ]
  return (
    <div>
      <div className="trading-talk-section">
        <div className="trading-talk-heading">
          <h1>Traders' Conversation on <span>Zepfinn</span></h1>
          <p>
            Take part in the talk about the town’s trending topic as participants of The Leap reveal
            their thoughts on the competition. Share, listen, and gain complete knowledge.
          </p>
        </div>
        <div className="Trading-story-slider-cards">
          <Slider {...settings}>
            {TradingData.map((Trading, index) => (
              <div key={index} className="trading-talk-cards">
                <div className="trading-talk-cards-img">
                  <img src={images} alt="" />
                  <div className="trading-talk-cards-thinks">
                    <p>{Trading.description}</p>
                  </div>
                </div>
                <div className="trading-talk-cards-name">
                  <h3>{Trading.firstname}</h3>
                  <p>{Trading.secandname}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="trade-talks-btn">
          <button>
            Publish my story
          </button>
        </div>
      </div>
    </div>
  )
}

export default TradingTalk

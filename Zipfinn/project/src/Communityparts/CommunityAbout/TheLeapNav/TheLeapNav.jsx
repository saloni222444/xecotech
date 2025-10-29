import React from 'react'
import { useNavigate } from 'react-router-dom'   // 👈 Import this
import zepfinn from '../../../assets/images/zepfinn.png'
import thumb from '../../../assets/images/thumb.png'
import cup from '../../../assets/images/cup.png'
import user from '../../../assets/images/user.png'
import './TheLeapNav.css'

const TheLeapNav = () => {
  const navigate = useNavigate(); // 👈 Initialize navigation

  const powerSections = [
    {
      icon: thumb,
      title: "Simple and accessible",
      desc: "No real money or brokerage account required, and no hidden terms."
    },
    {
      icon: cup,
      title: "True competition",
      desc: "Challenge other traders and track your performance."
    },
    {
      icon: user,
      title: "Power of community",
      desc: "Learn, practice, and grow together with our global community."
    }
  ];

  // 👇 Function to handle button click
  const handleTakeLeap = () => {
    navigate("/TakeLeapBtn"); // Navigate to /path
  };

  return (
    <div>
      <div className="community-The-Leap-container">
        <div className="community-The-Leap-section">
          <h1>Top challenger</h1>
          <p className='TheLeap-para'>
            Compete risk-free for real-money prizes with the world's largest trading community.
          </p>
          <button className='Take-the-leap-btn' onClick={handleTakeLeap}>
            Take the leap
          </button>
        </div>

        <div className="community-The-Leap-image">
          <img src={zepfinn} alt="The Leap" />
        </div>

        <div className="community-The-leap-simple-true-power-container">
          {powerSections.map((section, index) => (
            <div className="community-The-leap-leap-simple-true-power-sections" key={index}>
              <div className={`community-The-Leap-section-icon-${section.title.split(' ')[0].toLowerCase()}`}>
                <img src={section.icon} alt={section.title} />
              </div>
              <h4>{section.title}</h4>
              <p>{section.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TheLeapNav;

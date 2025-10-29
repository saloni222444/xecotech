import React from 'react'
import { useNavigate } from 'react-router-dom'
import mounten from '../../../assets/images/mounten.png'
import userr from '../../../assets/images/userr.png'
import books from '../../../assets/images/books.png'
import Lock from '../../../assets/images/lock.png'
import lable from '../../../assets/images/lable.png'
import graphs from '../../../assets/video/graphs.mp4'
import graphvideo from '../../../assets/video/graphvideo.mp4'   
import './PineScriptNav.css'

const sectionsData = [
  {
    img: lable,
    title: 'Featured scripts',
    desc: "Explore scripts handpicked by our editors alongside our community's most popular tools.",
    link: '/featured/scripts'
  },
  {
    img: Lock,
    title: 'Open source at heart',
    desc: "Tons of ingenious scripts to learn from — because that's what community is all about.",
    link: '/opensource'
  },
  {
    img: books,
    title: 'Easy-to-follow docs',
    desc: "These manuals help to kickstart your scripting journey and guide you along the way.",
    link: '/docs'
  },
]

const PineScriptNav = () => {
  const navigate = useNavigate(); // 👈 Navigation hook

  const handleNavigation = (path) => {
    navigate(path); // 👈 navigate function
  };

  return (
    <div className="community-PineScript-container">
      <div className="community-PineScript-section">
        <h1>Together in code, powered by Pine.</h1>
        <p className="PineScript-para">
          Where trading meets coding — a worldwide hub of boundary-pushing innovators. 
          Discover, build, and team up to turn your trading intelligence into reality.
        </p>
      </div>

      <div className="community-PineScript-image">
        <video src={graphs} autoPlay loop muted playsInline />  
        <div className='rightvideos'>
          <video src={graphvideo} autoPlay loop muted playsInline /> 
        </div> 
      </div>

      <div className="community-PineScript-fore-section">
        {sectionsData.map((section, idx) => (
          <div className="community-PineScript-sections" key={idx}>
            <img src={section.img} alt={section.title} />
            <h4>
              {/* 👇 Link replaced with function-based navigation */}
              <span
                className="PineScript-sections-link"
                onClick={() => handleNavigation(section.link)}
                style={{ cursor: 'pointer' }}
              >
                {section.title}
              </span>
            </h4>
            <p>{section.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PineScriptNav

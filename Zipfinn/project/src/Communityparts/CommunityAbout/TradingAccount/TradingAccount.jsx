import React, { useState } from 'react'
import ll from '../../../assets/images/ll.jpg'
import './TradingAccount.css'
const TradingAccount = () => {
  
  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing) 
  }

  return (
    <div className="community-followus-container">
      {/* Heading Section */}
      <div className="community-followus-section">
        <h1 className='community-followus-heading'>Follow us</h1>
        <p className='community-followus-para'>
          Subscribe to the official <span>Zepfinn</span> account to get notified of our latest publications.
        </p>
      </div>

      {/* Button Section */}
      <div className="community-followus-Zepfinn-btns">
        <button 
          className='follow-Zepfinn-btns' 
          onClick={handleFollowClick}
        >
          {isFollowing ? "Following ✔" : "Follow Zepfinn Account"}
        </button>
      </div>

      {/* Image Section */}
      <div className="community-followus-image">
        <img src={ll} alt="Follow Zepfinn" />
      </div>
    </div>
  )
}

export default TradingAccount

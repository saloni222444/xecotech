import React, { useState } from 'react';
import './waysToearn.css';

 
import ReferAfriend from './ReferAfriendBtns/ReferAfriend';
import BecomeAPartner from './BecomeApartnerBtns/BecomeApartner';

const WaysToearn = () => {
  const [activeComponent, setActiveComponent] = useState(null); // 'refer' or 'partner'

  const toggleRefer = () => setActiveComponent(prev => (prev === 'refer' ? null : 'refer'));
  const togglePartner = () => setActiveComponent(prev => (prev === 'partner' ? null : 'partner'));

  return (
    <div className="community-sweet-profit-container">
      
      <div className="community-sweet-profit-section">
        <h1 className='community-sweet-profit-heading'>
          Steady steady growth from <span>Zepfinn</span>
        </h1>
        <h1 className='community-sweet-profit-total'>$14M+</h1>
        <p className='community-sweet-profit-para'>
          Received by our users and their friends through our Refer-a-friend and Partner programs
        </p>
      </div>

      <div className="community-sweet-profit-friend-partner-btns">
        <button className='Refer-friend-btns' onClick={toggleRefer}>
          Refer a friend
        </button>
        <button className='Refer-friend-btns' onClick={togglePartner}>
          Become a partner
        </button>

        {/* Only show the component corresponding to the active button */}
        {activeComponent === 'refer' && <ReferAfriend />}
        {activeComponent === 'partner' && <BecomeAPartner/>}
      </div>
    </div>
  );
};

export default WaysToearn;

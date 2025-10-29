import React from 'react'
import './communityPower.css'
import lll from '../../../assets/video/lll.mp4'

const CommunityPower = () => {
    return (
        <div className='body'>
            <div className="community-power-body">

                {/* Text Content */}

                <div className="community-power-container">
                    <div className="community-power-section">
                        <h1>Start your Trading journey wiht wiht <span className='Zepfinn'>Zepfinn</span></h1>
                        <p>The social network for 100M+ globally-minded traders.</p>
                    </div>
                </div>

                {/*   left-right-video   */}
                <div className="community-power-content">
                    <video src={lll} autoPlay loop muted></video>
                </div>
            </div>
        </div>
    )
}

export default CommunityPower

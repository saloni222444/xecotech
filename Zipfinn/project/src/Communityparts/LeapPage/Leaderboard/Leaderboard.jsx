import React from 'react'
import'./Leaderboard.css'
import images from "../../../assets/images/images.jpg"
const Leaderboard = () => {

  const leaderboardData = [
    { id: 1, name: "John Doe", prize: "$6,600", profitPercent: "+11.78%", realizedProfit: "+$111,943.70" },
    { id: 2, name: "Jane Smith", prize: "$4,200", profitPercent: "+9.25%", realizedProfit: "+$89,210.40" },
    { id: 3, name: "Alex Brown", prize: "$3,000", profitPercent: "+7.10%", realizedProfit: "+$56,300.00" },
    { id: 4, name: "Alex Brown", prize: "$3,000", profitPercent: "+7.10%", realizedProfit: "+$56,300.00" },
  ];

  return (
    <div className="Leaderboard-container">
      <div className="Leaderboard-section">
        <h1>Top 5 player</h1>
        <div className="Leaderboard-section-heading">
          <div className="Leaderboard-heading">
            <div className="number-and-profile">
              <p>S. no</p><p>Profile</p>
            </div>
          </div>
          <div className="Leaderboard-heading"><p>One Day Profit</p></div>
          <div className="Leaderboard-heading"><p>Total Profit,%</p></div>
          <div className="Leaderboard-heading-Realized-profit">
            <p>Realized profit, USD</p>
          </div>
        </div>

        {leaderboardData.map((player, index) => (
          <div key={player} className="Leaderboard-section-heading-api">
            <div className="Leaderboard-heading">
              <div className="number-and-profile">
                <p>{index + 1} <img src={images} alt="profile" /> {player.name}</p>
              </div>
            </div>
            <div className="Leaderboard-heading"><p>{player.prize}</p></div>
            <div className="Leaderboard-heading"><p>{player.profitPercent}</p></div>
            <div className="Leaderboard-heading-Realized-profit">
              <p>{player.realizedProfit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Leaderboard;
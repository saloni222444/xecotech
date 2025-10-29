import React from 'react'
import { useState } from 'react';
import scripts from "../../assets/images/scripts.jpg";
import './EasyTOfollow.css'
const EasyToFollow = () => {
  const buttons = [
    {
      label: "Get started",
      className: "EasyToFollow-get-started-btns"
    },
    {
      label: "Explore scripts",
      className: "EasyToFollow-explor-scripts-btns"
    },
  ];


  const versions = [
    {
      id: "v6",
      label: "Version 6"
    },
    {
      id: "v5",
      label: "Version 5"
    },
    {
      id: "v4",
      label: "Version 4"
    },
    {
      id: "v3",
      label: "Version 3"
    },
    {
      id: "v2",
      label: "Version 2"
    },
    {
      id: "v1",
      label: "Version 1"
    },
  ];
  const primerCards = [
    {
      title: "Primer",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex ipsam, doloribus dicta est repellendus?"
    },
    {
      title: "Primer",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex ipsam, doloribus dicta est repellendus?"
    },
    {
      title: "Primer",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex ipsam, doloribus dicta est repellendus?"
    },
    {
      title: "Primer",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex ipsam, doloribus dicta est repellendus?"
    }
  ];
  const [activeButton, setActiveButton] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(versions[0].id);
  return (
    <div>
      <div className="EasyToFollow-container">
        <div className="EasyToFollow-pine-Script-section">
          <h1 className="EasyToFollow-pine-Script-heading">
            Pine Script® User Manual
          </h1>
          <p className='EasyToFollow-pine-Script-para'>Pine Script® explain: Everything you should know.</p>
          <div className="EasyToFollow-pine-Script-btns">
            {buttons.map((btn) => (
              <button
                key={btn}
                className={`${btn.className} ${activeButton === btn ? "active" : ""}`}
                onClick={() => setActiveButton(btn)}
              >
                {btn.label}
              </button>
            ))}
            <select
              className="EasyToFollow-select-btns"
              value={selectedVersion}
              onChange={(e) => setSelectedVersion(e.target.value)}
            >
              {versions.map((ver) => (
                <option key={ver.id} className="select-btn-option" value={ver.id}>
                  {ver.label}
                </option>
              ))}
            </select>
          </div>
          <div className="EasyToFollow-pine-Script-image">
            <img src={scripts} alt="" />
          </div>
        </div>
        <div className="primer-language-concepts-release-btn-section">
          {primerCards.map((card, index) => (
            <button key={index} className="primer-language-concepts-release-card">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </button>
          ))}
        </div>
        <div className="EasyToFollow-footer">
          <hr />
          <div className="EasyToFollow-footer-tag">
             <div className="tags-links"><a href="#">PineQ&Achat</a><a href="#">PineQ&Achat</a><a href="#">PineQ&Achat</a><a href="#">PineQ&Achat</a></div>
             <p>Copyright © 2025 Zepfinn, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EasyToFollow

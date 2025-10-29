import React, { useState } from 'react';
import './ToolBar.css';
import SidebarMenu from './SidebarMenu';
import AlertSidebarMenu from './AlertSidebarMenu'; // Correct import name

const ProfileToolbar = () => {
  const [activeTool, setActiveTool] = useState('base');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAlertsSidebarOpen, setIsAlertsSidebarOpen] = useState(false);

  const toolbarItems = [
    {
      label: "Watchlist, details and news",
      name: "base",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44">
          <path fill="currentColor" d="M28 16H16v1h12v-1ZM28 20H16v1h12v-1ZM16 24h12v1H16v-1Z"></path>
          <path fill="currentColor" fillRule="evenodd" d="m22 30-10 4V12a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v22l-10-4Zm-9 2.52V12h18v20.52l-9-3.6-9 3.6Z"></path>
        </svg>
      )
    },
    {
      label: "Alerts",
      name: "alerts",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44">
          <path fill="currentColor" d="M35 14.66 29.16 9l-.7.72 5.84 5.66.7-.72ZM9 14.66 14.84 9l.7.72-5.84 5.66-.7-.72ZM22 16v7h-5v1h6v-8h-1Z"></path>
          <path fill="currentColor" fillRule="evenodd" d="M22 33a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-1a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path>
        </svg>
      )
    },
    {
      label: "Chats",
      name: "union_chats",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44">
          <path fill="currentColor" fillRule="evenodd" d="M11 14.5a2.5 2.5 0 0 1 2.5-2.5h13a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5H14.3l-.15.15L11 29.29V14.5Zm2.5-3.5a3.5 3.5 0 0 0-3.5 3.5v17.2l.85-.85L14.71 27H19v.5a3.5 3.5 0 0 0 3.5 3.5H29.3l3.86 3.85.85.86V22.5a3.5 3.5 0 0 0-3.5-3.5H30v-4.5a3.5 3.5 0 0 0-3.5-3.5h-13ZM30 20v3.5a3.5 3.5 0 0 1-3.5 3.5H20v.5a2.5 2.5 0 0 0 2.5 2.5H29.7l.15.15L33 33.29V22.5a2.5 2.5 0 0 0-2.5-2.5H30Z"></path>
        </svg>
      )
    },
    {
      label: "Screeners",
      name: "screener-dialog-button",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44" fill="currentColor">
          <g clipPath="url(#a)">
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M22 8a14 14 0 1 0 0 28 14 14 0 0 0 0-28ZM9 22a13 13 0 0 1 22.03-9.35L27.5 16.2a8 8 0 1 0 .68.73l3.55-3.55A13 13 0 1 1 9 22Zm17.79-5.1a7 7 0 1 0 .68.74l-3.62 3.6A2 2 0 0 1 22 24a2 2 0 1 1 1.25-3.56l3.54-3.54Z"></path>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="currentColor" d="M0 0h44v44H0z"></path>
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      label: "Calendars",
      name: "calendar-dialog-button",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44">
          <path fill="currentColor" fillRule="evenodd" d="M15 11h2v4h-2v-4Zm-1 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h8v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V15a3 3 0 0 1 3-3h1v-1Zm4 2h8v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h1a2 2 0 0 1 2 2v4H11v-4c0-1.1.9-2 2-2h1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm-7 7v11c0 1.1.9 2 2 2h18a2 2 0 0 0 2-2V20H11Zm18-9h-2v4h2v-4Z"></path>
        </svg>
      )
    },
    {
      label: "Products",
      name: "products-button",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44">
          <path fill="currentColor" d="M22 5a17 17 0 1 1 0 34 17 17 0 0 1 0-34m-8 22a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm7 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm7 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm-14-7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm7 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm7 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm-14-7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm7 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm7 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"></path>
        </svg>
      )
    },
    {
      label: "Community",
      name: "community-hub-button",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44" fill="none">
          <path fill="currentColor" d="M12 10c-.335 0-.669.008-1 .023v1.002c.331-.017.665-.025 1-.025 11.046 0 20 8.954 20 20 0 .335-.008.669-.025 1h1.002c.015-.331.023-.665.023-1 0-11.598-9.402-21-21-21Z"></path>
          <path fill="currentColor" d="M27 31c0 .336-.011.67-.033 1h-1.002c.23-.33.035-.664.035-1 0-7.732-6.268-14-14-14-.336 0-.67.012-1 .035v-1.002c.33-.022.664-.033 1-.033 8.284 0 15 6.716 15 15Z"></path>
          <path fill="currentColor" d="M21 31c0 .338-.019.672-.055 1h-1.007A8 8 0 0 0 11 23.062v-1.007A9 9 0 0 1 21 31Z"></path>
          <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M15 30a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
        </svg>
      )
    },
    {
      label: "Chat assistant",
      name: "help-button",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44" fill="none">
          <path fill="currentColor" d="M35.165 17.226c.54 1.49.835 3.097.835 4.774 0 7.732-6.268 14-14 14a13.95 13.95 0 0 1-9.185-3.435q.467-.239.854-.585A12.95 12.95 0 0 0 22 35c7.18 0 13-5.82 13-13 0-1.49-.25-2.922-.712-4.255q.466-.219.877-.52M11.713 28.287 14 29.5l-2.287 1.213L10.5 33l-1.213-2.287L7 29.5l2.287-1.213L10.5 26zm-1.686.74-.892.473.892.473.473.892.473-.892.892-.473-.892-.473-.473-.892zM22 26c1.083 0 2 .895 2 2s-.917 2-2 2-2-.895-2-2 .917-2 2-2m0 1c-.537 0-1 .455-1 1s.462 1 1 1 1-.455 1-1-.462-1-1-1m0-19c2.236 0 4.35.524 6.225 1.456q-.346.376-.615.814A12.95 12.95 0 0 0 22 9C14.82 9 9 14.82 9 22c0 1.148.149 2.26.428 3.32a4 4 0 0 0-.892.529A14 14 0 0 1 8 22c0-7.732 6.268-14 14-14m-.115 6c1.282 0 2.5.55 3.286 1.578.518.677.829 1.47.829 2.33a3.68 3.68 0 0 1-1.43 2.91l-1.354 1.046c-.456.352-.716 1.03-.716 1.59V24h-1v-.547c0-.74.264-1.456.745-2.02.111-.13.224-.256.36-.36l1.354-1.047A2.68 2.68 0 0 0 25 17.907c0-.64-.238-1.218-.623-1.72-.599-.783-1.52-1.187-2.492-1.187-.577 0-1.14.173-1.617.496A2.94 2.94 0 0 0 19 17.916v.083h-1v-.083c0-1.289.64-2.525 1.707-3.248A3.9 3.9 0 0 1 21.885 14m12.883-3.768L38 12l-3.232 1.768L33 17l-1.768-3.232L28 12l3.232-1.768L33 7zm-2.8.737L30.085 12l1.885 1.031L33 14.916l1.031-1.885L35.916 12l-1.885-1.031L33 9.084z"></path>
        </svg>
      )
    }
  ];

  const handleToolClick = (toolName) => {
    setActiveTool(toolName);
    
    // Handle sidebar toggles
    if (toolName === 'base') {
      setIsSidebarOpen(!isSidebarOpen);
      setIsAlertsSidebarOpen(false); // Close alerts sidebar
    } else if (toolName === 'alerts') {
      setIsAlertsSidebarOpen(!isAlertsSidebarOpen);
      setIsSidebarOpen(false); // Close base sidebar
    } else {
      // Close both sidebars when other tools are clicked
      setIsSidebarOpen(false);
      setIsAlertsSidebarOpen(false);
    }
    
    console.log(`Tool activated: ${toolName}`);
  };

  const handleKeyDown = (event, toolName) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToolClick(toolName);
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const closeAlertsSidebar = () => {
    setIsAlertsSidebarOpen(false);
  };

  return (
    <div className="content-Z4M3tWHb">
      <div 
        data-mouse-click-auto-blur="true" 
        className="toolbar-S4V6IoxY" 
        data-name="right-toolbar" 
        role="toolbar" 
        aria-orientation="vertical" 
        data-tooltip-show-on-focus="true"
        aria-label="Profile toolbar"
      >
        {/* Top section - first 3 items */}
        {toolbarItems.slice(0, 3).map((item, index) => (
          <ToolbarButton 
            key={item.name} 
            item={item} 
            index={index}
            isActive={activeTool === item.name || 
              (item.name === 'base' && isSidebarOpen) || 
              (item.name === 'alerts' && isAlertsSidebarOpen)}
            onClick={() => handleToolClick(item.name)}
            onKeyDown={(e) => handleKeyDown(e, item.name)}
          />
        ))}
        
        {/* Flexible spacer */}
        <div className="filler-GfsAWtWz" aria-hidden="true"></div>
        
        {/* Middle section - items 4 & 5 */}
        {toolbarItems.slice(3, 5).map((item, index) => (
          <ToolbarButton 
            key={item.name} 
            item={item} 
            index={index + 3}
            isActive={activeTool === item.name}
            onClick={() => handleToolClick(item.name)}
            onKeyDown={(e) => handleKeyDown(e, item.name)}
          />
        ))}
        
        {/* Products button with special styling */}
        <ProductsButton 
          item={toolbarItems[5]} 
          isActive={activeTool === toolbarItems[5].name}
          onClick={() => handleToolClick(toolbarItems[5].name)}
          onKeyDown={(e) => handleKeyDown(e, toolbarItems[5].name)}
        />
        
        {/* Visual separator */}
        <div className="separator-gZVyfVJP" aria-hidden="true"></div>
        
        {/* Bottom section - last 2 items */}
        {toolbarItems.slice(6).map((item, index) => (
          <ToolbarButton 
            key={item.name} 
            item={item} 
            index={index + 6}
            isActive={activeTool === item.name}
            onClick={() => handleToolClick(item.name)}
            onKeyDown={(e) => handleKeyDown(e, item.name)}
          />
        ))}

        {/* Sidebar menu component - controlled by first button */}
        <SidebarMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        {/* Alerts Sidebar menu component - controlled by second button */}
        <AlertSidebarMenu isOpen={isAlertsSidebarOpen} onClose={closeAlertsSidebar} />
      </div>
    </div>
  );
};

const ToolbarButton = ({ item, index, isActive, onClick, onKeyDown }) => (
  <button
    aria-label={item.label}
    aria-pressed={isActive}
    tabIndex={index === 0 ? 0 : -1}
    type="button"
    className={`button-I_wb5FjE button-GwQQdU8S apply-common-tooltip common-tooltip-vertical isInteractive-GwQQdU8S accessible-GwQQdU8S ${isActive ? 'active' : ''}`}
    data-name={item.name}
    data-tooltip={item.label}
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    <span role="img" className="icon-GwQQdU8S" aria-hidden="true">
      {item.icon}
    </span>
  </button>
);

const ProductsButton = ({ item, isActive, onClick, onKeyDown }) => (
  <button 
    type="button" 
    className={`button-pcFY_CU1 common-tooltip-vertical button-merBkM5y apply-common-tooltip accessible-merBkM5y ${isActive ? 'active' : ''}`}
    tabIndex="-1" 
    data-qa-id="products-button" 
    data-tooltip={item.label} 
    aria-label={item.label} 
    aria-haspopup="menu"
    aria-pressed={isActive}
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    <span role="img" className="buttonIcon-pcFY_CU1" aria-hidden="true">
      {item.icon}
    </span>
  </button>
);

export default ProfileToolbar;
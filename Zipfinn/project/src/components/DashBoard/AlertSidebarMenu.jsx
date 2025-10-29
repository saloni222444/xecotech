import React, { useState, useEffect } from 'react';
import './AlertSidebarMenu.css';

const AlertsSidebarMenu = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('list');

  // Close sidebar on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="alerts-sidebar-overlay"
          onClick={handleOverlayClick}
          aria-hidden="true"
        ></div>
      )}
      
      {/* Sidebar */}
      <div 
        className={`alerts-sidebar ${isOpen ? 'alerts-sidebar--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Alerts sidebar"
      >
        {/* Header */}
        <div className="alerts-sidebar__header">
          <div className="alerts-sidebar__tabs">
            <div 
              className="alerts-sidebar__tablist" 
              role="tablist" 
              aria-label="Alerts tabs"
            >
              <button
                role="tab"
                tabIndex="0"
                aria-selected={activeTab === 'list'}
                aria-disabled="false"
                data-name="light-tab-0"
                id="list"
                className={`alerts-sidebar__tab ${activeTab === 'list' ? 'alerts-sidebar__tab--active' : ''}`}
                onClick={() => handleTabClick('list')}
              >
                <span className="alerts-sidebar__tab-content">Alerts</span>
              </button>
              <button
                role="tab"
                tabIndex="-1"
                aria-selected={activeTab === 'log'}
                aria-disabled="false"
                data-name="light-tab-1"
                id="log"
                className={`alerts-sidebar__tab ${activeTab === 'log' ? 'alerts-sidebar__tab--active' : ''}`}
                onClick={() => handleTabClick('log')}
              >
                <span className="alerts-sidebar__tab-content">Log</span>
              </button>
            </div>
          </div>
          
          <button 
            className="alerts-sidebar__close-btn"
            onClick={onClose}
            aria-label="Close alerts sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="alerts-sidebar__content">
          <div 
            id="alerts-tabpanel"
            role="tabpanel"
            aria-labelledby={activeTab}
            className="alerts-sidebar__tabpanel"
          >
            {/* Toolbar */}
            <div className="alerts-sidebar__toolbar">
              <div className="alerts-sidebar__toolbar-left">
                <span className="alerts-sidebar__toolbar-left-slot"></span>
              </div>
              <div className="alerts-sidebar__toolbar-right">
                <button 
                  id="alerts-search-button"
                  className="alerts-sidebar__toolbar-btn"
                  aria-label="Search alerts"
                  data-name="alerts-search-button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="20" height="20" fill="none">
                    <path stroke="currentColor" d="M17.4 17.5a7 7 0 1 0-4.9 2c1.9 0 3.64-.76 4.9-2zm0 0l5.1 5" />
                  </svg>
                </button>
                
                <button 
                  className="alerts-sidebar__toolbar-btn"
                  aria-label="Sort alerts"
                  data-name="alert-sort-button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="20" height="20" fill="none">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 7v13.5M4.5 16.5l4 4 4-4" />
                  </svg>
                </button>
                
                <button 
                  className="alerts-sidebar__toolbar-btn alerts-sidebar__toolbar-btn--settings"
                  aria-label="Alert settings"
                  data-name="alerts-settings-button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" />
                  </svg>
                  <div className="alerts-sidebar__filter-count"></div>
                </button>
              </div>
            </div>

            {/* Empty State */}
            <div className="alerts-sidebar__empty-state">
              <div className="alerts-sidebar__empty-icon createAlert-icon"></div>
              <div className="alerts-sidebar__empty-text">
                Alerts notify you instantly when your conditions are met. To set one up, please open the chart first.
              </div>
              <div className="alerts-sidebar__empty-action">
                <button 
                  tabIndex="0" 
                  className="alerts-sidebar__empty-btn"
                  data-overflow-tooltip-text="Open chart"
                >
                  <span className="alerts-sidebar__empty-btn-content">Open chart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertsSidebarMenu;
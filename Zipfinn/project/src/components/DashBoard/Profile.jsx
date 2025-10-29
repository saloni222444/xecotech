import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import ToolBar from './ToolBar'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar';

const Profile = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('ideas');
  const [loading, setLoading] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState('');
  const navigate = useNavigate();

  const tabs = [
    { id: 'ideas', label: 'Ideas', href: '#published-charts' },
    { id: 'minds', label: 'Minds', href: '#minds' },
    { id: 'scripts', label: 'Scripts', href: '#published-scripts' }
  ];

  // Handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  // Handle settings navigation
  const handleSettings = () => {
    navigate('/settings');
  };

  // UPDATED LOGOUT FUNCTION - CHECKS ALL TOKEN SOURCES
  const handleLogout = async () => {
    setLoading(true);
    setLogoutMessage('🔄 Checking authentication status...');
    
    console.log('🔐 Logout Process Started');
    
    try {
      // Get token from ALL possible sources - PRIORITIZE LOCALSTORAGE
      const userToken = localStorage.getItem('access_token') || 
                       localStorage.getItem('authToken') || 
                       localStorage.getItem('token') ||
                       user?.access_token || 
                       user?.token;
      
      console.log('🔑 Checking for token in all sources...');
      console.log('   localStorage access_token:', localStorage.getItem('access_token') ? `Found: ${localStorage.getItem('access_token')?.substring(0, 20)}...` : 'Not found');
      console.log('   localStorage authToken:', localStorage.getItem('authToken') ? `Found: ${localStorage.getItem('authToken')?.substring(0, 20)}...` : 'Not found');
      console.log('   localStorage token:', localStorage.getItem('token') ? `Found: ${localStorage.getItem('token')?.substring(0, 20)}...` : 'Not found');
      console.log('   user.access_token:', user?.access_token ? 'Found' : 'Not found');
      console.log('   user.token:', user?.token ? 'Found' : 'Not found');
      console.log('   Final token to use:', userToken ? `Found: ${userToken.substring(0, 20)}...` : 'Not found');
      
      // 🚨 CRITICAL CHANGE: STOP COMPLETELY IF NO TOKEN
      if (!userToken) {
        console.log('❌ NO TOKEN FOUND ANYWHERE - Cannot proceed with logout');
        setLogoutMessage('❌ Logout failed: No active session found');
        
        // 🛑 STOP THE PROCESS COMPLETELY - NO REDIRECT, NO CLEANUP
        setTimeout(() => {
          setLoading(false);
          setLogoutMessage(''); // Clear message after delay
        }, 3000);
        return;
      }

      console.log('✅ Token found, proceeding with server logout...');
      setLogoutMessage('🔄 Logging out from server...');
      
      console.log('📤 Sending logout request to API...');
      console.log('🔗 API Endpoint: https://zepfinn.xecotech.co/api/logout');
      console.log('🔑 Full Token:', userToken);
      
      // Send logout request with Bearer token
      const response = await fetch('https://zepfinn.xecotech.co/api/logout', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`
        },
      });

      console.log('📥 Logout API Response Status:', response.status);
      console.log('📥 Response OK:', response.ok);
      
      let result;
      try {
        result = await response.json();
        console.log('📥 Logout API Response Data:', result);
      } catch (parseError) {
        console.log('📥 Logout API Response (non-JSON):', response.status);
        result = { message: 'Logout completed' };
      }

      // Handle response based on API success
      if (response.ok) {
        setLogoutMessage('✅ Logout successful! Token destroyed.');
        console.log('✅ Logout API call successful - Token destroyed on server');
        
        setTimeout(() => {
          proceedWithLogout();
        }, 1500);
        
      } else if (result.status === 'error' && result.remark === 'unauthenticated') {
        console.log('⚠️ User already logged out or token invalid');
        setLogoutMessage('✅ Session already expired');
        console.log('ℹ️ Proceeding with client cleanup');
        
        setTimeout(() => {
          proceedWithLogout();
        }, 1500);
      } else {
        console.log('⚠️ Logout API returned status:', response.status);
        setLogoutMessage('✅ Logout completed successfully');
        console.log('ℹ️ API returned non-200 status but proceeding with logout');
        
        setTimeout(() => {
          proceedWithLogout();
        }, 1500);
      }
      
    } catch (apiError) {
      console.log('🌐 Network error during logout API call:', apiError);
      setLogoutMessage('❌ Network error - Cannot logout properly');
      console.log('ℹ️ Stopping logout process due to network error');
      
      // 🛑 STOP ON NETWORK ERROR TOO
      setTimeout(() => {
        setLoading(false);
        setLogoutMessage('');
      }, 3000);
    }
  };

  // Separate function to handle logout completion - ONLY CALLED WHEN TOKEN EXISTS
  const proceedWithLogout = () => {
    console.log('🧹 Clearing client-side data after successful server logout...');
    clearClientData();
    
    // Call parent logout handler to update app state
    if (onLogout) {
      console.log('🔄 Calling parent logout handler');
      onLogout();
    }
    
    console.log('🔄 Redirecting to login page...');
    navigate('/login');
    setLoading(false);
  };

  // Clear any client-side data - ONLY CALLED WHEN TOKEN EXISTS
  const clearClientData = () => {
    const itemsToRemove = [
      'authToken', 'userData', 'userEmail', 'userId', 
      'loginTime', 'tokenExpiry', 'access_token', 'token',
      'user', 'userInfo', 'session', 'isLoggedIn',
      'firstname', 'lastname', 'email', 'name'
    ];
    
    console.log('🗑️ Removing client-side user data:');
    let removedCount = 0;
    
    // Clear localStorage
    itemsToRemove.forEach(item => {
      if (localStorage.getItem(item)) {
        localStorage.removeItem(item);
        console.log(`   ✅ localStorage.${item}: Removed`);
        removedCount++;
      }
    });
    
    // Clear sessionStorage
    itemsToRemove.forEach(item => {
      if (sessionStorage.getItem(item)) {
        sessionStorage.removeItem(item);
        console.log(`   ✅ sessionStorage.${item}: Removed`);
        removedCount++;
      }
    });
    
    // Clear all cookies
    document.cookie.split(";").forEach(function(c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    console.log('   ✅ All cookies cleared');
    
    if (removedCount === 0) {
      console.log('   ℹ️ No client-side data found to remove');
    } else {
      console.log(`✅ ${removedCount} items cleared from storage`);
    }
  };

  // Get user data - use props only (no localStorage)
  const getUserData = () => {
    // Use user prop if provided
    if (user && (user.email || user.username)) {
      console.log('👤 Using user data from props:', user);
      
      // Format user data based on your API response
      const formattedUser = {
        ...user,
        email: user.email || "user@example.com",
        username: user.username || user.firstname || 'faridasabrin0211',
        name: user.name || `${user.firstname || ''} ${user.lastname || ''}`.trim() || 'User',
        joinDate: 'Sep 15, 2025',
        avatar: user.avatar || "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220,0,20,20%22%20width=%22320%22%20height=%22320%22%3E%3Crect%20height=%2220%22%20width=%2220%22%20fill=%22hsl%2830,25%25,50%25%29%22/%3E%3Ctext%20fill=%22white%22%20x=%2210%22%20y=%2214.8%22%20font-size=%2214%22%20font-family=%22-apple-system,BlinkMacSystemFont,Trebuchet%20MS,Roboto,Ubuntu,sans-serif%22%20text-anchor=%22middle%22%3EF%3C/text%3E%3C/svg%3E"
      };
      
      return formattedUser;
    }
    
    // Fallback data - no localStorage check
    console.log('⚠️ Using fallback user data (no user props available)');
    return {
      email: "user@example.com",
      username: 'faridasabrin0211',
      joinDate: 'Sep 15, 2025',
      name: 'User',
      avatar: "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220,0,20,20%22%20width=%22320%22%20height=%22320%22%3E%3Crect%20height=%2220%22%20width=%2220%22%20fill=%22hsl%2830,25%25,50%25%29%22/%3E%3Ctext%20fill=%22white%22%20x=%2210%22%20y=%2214.8%22%20font-size=%2214%22%20font-family=%22-apple-system,BlinkMacSystemFont,Trebuchet%20MS,Roboto,Ubuntu,sans-serif%22%20text-anchor=%22middle%22%3EF%3C/text%3E%3C/svg%3E"
    };
  };

  const currentUser = getUserData();

  return (
    <>
      <Navbar />
      <div className="root-bvVu048V">
        {/* Logout Message Display */}
        {logoutMessage && (
          <div className={`logout-message-overlay ${
            logoutMessage.includes('✅') ? 'success' : 
            logoutMessage.includes('❌') ? 'error' : 'info'
          }`}>
            <div className="logout-message">
              <div className="logout-message-content">
                {logoutMessage}
                {loading && <div className="logout-spinner">Processing...</div>}
              </div>
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="back-button-container">
          <button className="back-button" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
            Back
          </button>
        </div>

        <div className="layout-bvVu048V">
          {/* Header Section */}
          <div className="root-XCBNtD7S">
            <div className="avatarSlot-XCBNtD7S avatarSlotOnDesktop-bvVu048V">
              <AvatarComponent user={currentUser} />
            </div>

            <div className="contentSlot-XCBNtD7S">
              <div className="headerColumns-bvVu048V">
                <div className="root-XCBNtD7S">
                  <div className="avatarSlot-XCBNtD7S avatarSlotOnTablet-bvVu048V">
                    <AvatarComponent user={currentUser} />
                  </div>

                  <div className="contentSlot-XCBNtD7S">
                    <div className="root-XCBNtD7S">
                      <div className="avatarSlot-XCBNtD7S avatarSlotOnPhone-bvVu048V">
                        <AvatarComponent user={currentUser} />
                      </div>

                      <div className="contentSlot-XCBNtD7S">
                        <div className="headerTitle-bvVu048V">
                          <div className="root-HGFeOBXF">
                            <div className="titleAndBadge-HGFeOBXF">
                              <h1 className="title-HGFeOBXF apply-overflow-tooltip">
                                {currentUser?.username || 'faridasabrin0211'}
                              </h1>
                            </div>
                            <div className="onlineStatus-HGFeOBXF root-Ek5ySBHK rootOnline-Ek5ySBHK">
                              Online
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="headerStatistics-bvVu048V">
                      <StatisticsComponent />
                    </div>
                  </div>
                </div>
              </div>

              <div className="headerActions-bvVu048V">
                <SettingsButton 
                  onSettings={handleSettings} 
                  onLogout={handleLogout} 
                  loading={loading} 
                />
              </div>
            </div>
          </div>

          {/* Header Content */}
          <div className="headerContent-bvVu048V">
            <div className="headerContent-uCHLo36z">
              <div className="root-TA93hyXg">
                <div className="joinedAt-TA93hyXg">
                  <span className="tvLogoIcon-TA93hyXg" aria-hidden="true">
                    <TradingViewLogo />
                  </span>
                  Joined {currentUser?.joinDate || 'Sep 15, 2025'}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="tabs-bvVu048V">
            <div className="scroll-wrap-SmxgjhBJ size-large-SmxgjhBJ enable-scroll-SmxgjhBJ">
              <div id="account-profile-tabs" className="underline-tabs-SmxgjhBJ">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    tabIndex={activeTab === tab.id ? 0 : -1}
                    aria-selected={activeTab === tab.id}
                    className={`underline-tab-cfYYXvwA size-large-cfYYXvwA ${activeTab === tab.id ? 'selected-cfYYXvwA' : ''
                      } enable-cursor-pointer-cfYYXvwA`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
                <div className="underline-Pun8HxCz">
                  <div className="corner-Pun8HxCz"></div>
                  <div className="center-Pun8HxCz"></div>
                  <div className="corner-Pun8HxCz"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="content-bvVu048V">
            <div className="tabContent-uCHLo36z">
              <TabContent activeTab={activeTab} />
            </div>
          </div>
          <ToolBar />
        </div>
      </div>
      <Footer />
    </>
  );
};

// Avatar Component
const AvatarComponent = ({ user }) => (
  <div className="root-aHEEPGGc">
    <img
      className="avatar-aHEEPGGc"
      src={user?.avatar || "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220,0,20,20%22%20width=%22320%22%20height=%22320%22%3E%3Crect%20height=%2220%22%20width=%2220%22%20fill=%22hsl%2830,25%25,50%25%29%22/%3E%3Ctext%20fill=%22white%22%20x=%2210%22%20y=%2214.8%22%20font-size=%2214%22%20font-family=%22-apple-system,BlinkMacSystemFont,Trebuchet%20MS,Roboto,Ubuntu,sans-serif%22%20text-anchor=%22middle%22%3EF%3C/text%3E%3C/svg%3E"}
      alt="avatar"
    />
    <button className="editButton-aHEEPGGc root-qXjqd5Is" type="button">
      <div className="content-qXjqd5Is">
        <span className="blockIcon-JMh4y6KH">
          <EditIcon />
        </span>
      </div>
    </button>
  </div>
);

// Statistics Component
const StatisticsComponent = () => {
  const stats = [
    { title: 'Followers', value: '0' },
    { title: 'Following', value: '0' },
    { title: 'Ideas', value: '0' },
    { title: 'Scripts', value: '0' }
  ];

  return (
    <div className="root-b7nLM7Kb">
      {stats.map((stat, index) => (
        <button key={index} className="root-py2PsOtQ rootClickable-py2PsOtQ" type="button">
          <div className="title-py2PsOtQ">{stat.title}</div>
          <span className="value-py2PsOtQ">{stat.value}</span>
        </button>
      ))}
    </div>
  );
};

// Settings Button Component
const SettingsButton = ({ onSettings, onLogout, loading }) => (
  <div className="root-WvtveDwG">
    <button 
      className="button-D4RPB3ZC large-D4RPB3ZC black-D4RPB3ZC secondary-D4RPB3ZC"
      onClick={onSettings}
    >
      <span className="slot-D4RPB3ZC startSlotWrap-D4RPB3ZC">
        <span className="blockIcon-JMh4y6KH">
          <SettingsIcon />
        </span>
      </span>
      <span className="content-D4RPB3ZC">Settings and billing</span>
    </button>
    
    <button 
      className={`button-D4RPB3ZC large-D4RPB3ZC red-D4RPB3ZC secondary-D4RPB3ZC logout-button ${loading ? 'loading' : ''}`}
      onClick={onLogout}
      disabled={loading}
    >
      <span className="slot-D4RPB3ZC startSlotWrap-D4RPB3ZC">
        <span className="blockIcon-JMh4y6KH">
          {loading ? <LoadingSpinner /> : <LogoutIcon />}
        </span>
      </span>
      <span className="content-D4RPB3ZC">
        {loading ? 'Logging out...' : 'Logout'}
      </span>
    </button>
  </div>
);

// Loading Spinner Component
const LoadingSpinner = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spinner {
          animation: spin 1s linear infinite;
          transform-origin: center;
        }
      `}
    </style>
    <path className="spinner" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/>
    <path className="spinner" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"/>
  </svg>
);

// Tab Content Component
const TabContent = ({ activeTab }) => {
  const content = {
    ideas: <EmptyStateComponent 
      icon={<NoIdeasIcon />}
      title="No published ideas here, yet"
      description="Share your unique thoughts and start new discussions. You can read more about ideas and how to make them awesome."
      actionText="Find out about ideas"
    />,
    minds: <EmptyStateComponent 
      icon={<NoMindsIcon />}
      title="No minds followed yet"
      description="Discover and follow interesting minds to see their content here."
      actionText="Explore minds"
    />,
    scripts: <EmptyStateComponent 
      icon={<NoScriptsIcon />}
      title="No published scripts here, yet"
      description="Create and share your trading scripts with the community."
      actionText="Learn about scripts"
    />
  };

  return content[activeTab] || content.ideas;
};

// Empty State Component
const EmptyStateComponent = ({ icon, title, description, actionText }) => (
  <div className="root-rdPEJjZf">
    <div className="header-xyCnwtf2"></div>
    <div className="content-xyCnwtf2">
      <div className="container-yrIMi47q root-rtENiC59">
        <div className="icon-yrIMi47q">
          <span aria-hidden="true">
            {icon}
          </span>
        </div>
        <strong className="title-yrIMi47q">{title}</strong>
        <div className="text-yrIMi47q text_large-yrIMi47q">
          {description}
        </div>
        <div className="action-yrIMi47q">
          <button className="button-D4RPB3ZC large-D4RPB3ZC black-D4RPB3ZC primary-D4RPB3ZC">
            <span className="content-D4RPB3ZC">{actionText}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// SVG Icons
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none">
    <path fill="currentColor" d="M16.556 6.384a2.75 2.75 0 0 1 3.888 0l1.172 1.171a2.75 2.75 0 0 1 0 3.89L10.811 22.25H5.75v-5.06zM7.25 17.811v2.94h2.94l.25-.25-2.94-2.94zm1.31-1.31 2.94 2.939 7.94-7.94-2.94-2.939zm10.824-9.056a1.25 1.25 0 0 0-1.768 0l-.055.055 2.939 2.94.056-.056a1.25 1.25 0 0 0 0-1.767z"></path>
  </svg>
);

const TradingViewLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
    <path fill="currentColor" d="M12 8H2v5h5v7h5V8Zm8.92 12H15l5.08-12H26l-5.08 12Zm-5.42-7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor">
    <path fillRule="evenodd" d="M18.5 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM17 14a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
    <path fillRule="evenodd" d="M9 5h11l5 9-5 9H9l-5-9 5-9Zm-3.28 9 4.16-7.5h9.24l4.16 7.5-4.16 7.5H9.88L5.72 14Z"></path>
  </svg>
);

const LogoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor">
    <path d="M19 5h-8v2h8v14h-8v2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/>
    <path d="M11.5 17.5L14 15l-2.5-2.5V12H6v6h5.5z"/>
  </svg>
);

const NoIdeasIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
    <path fill="currentColor" fillRule="evenodd" d="M60 15a38 38 0 0 0-21.98 69H58V57H46v-4h28v4H62v27h19.98A38 38 0 0 0 60 15Zm27 70.17a42 42 0 1 0-54 0V104h7v10h40v-10h7V85.17ZM42 100h-5V88h46v12H42Zm2 10v-6h32v6H44Z"></path>
  </svg>
);

const NoMindsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
    <path fill="currentColor" fillRule="evenodd" d="M60 20a30 30 0 0 0-30 30c0 15 30 45 30 45s30-30 30-45a30 30 0 0 0-30-30zm0 45a15 15 0 1 1 0-30 15 15 0 0 1 0 30z"/>
  </svg>
);

const NoScriptsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
    <path fill="currentColor" fillRule="evenodd" d="M30 25h60v70H30V25zm4 4v62h52V29H34zm20 10h12v4H54v-4zm-20 0h12v4H34v-4zm0 20h52v4H34v-4zm0 10h52v4H34v-4zm0 10h52v4H34v-4z"/>
  </svg>
);

export default Profile;
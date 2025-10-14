import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('aararo_user') !== null;
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('aararo_user')) : null;
  const navigate = useNavigate();

  const moreItems = [
    { icon: '📋', name: 'Schemes', path: '/schemes', description: 'Government & Private Schemes' },
    { icon: '💉', name: 'Vaccinations', path: '/vaccinations', description: 'Vaccine Schedule & Tracker' },
    { icon: '🛍️', name: 'Shop', path: '/shop', description: 'Baby Products & Essentials' },
    { icon: '📈', name: 'Child Growth', path: '/child-growth', description: 'Growth Charts & Milestones' },
    { icon: '🏥', name: 'Hospitals', path: '/hospitals', description: 'Find Maternity Hospitals' },
    { icon: '🥗', name: 'Nutrition', path: '/nutrition', description: 'Diet Plans & Recipes' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('aararo_user');
    navigate('/signin');
  };

  const handlePremium = () => {
    navigate('/settings/premium');
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="logo">
              <img 
                src="aararo_logo.png" 
                alt="ஆராரோ 360°" 
                className="logo-image"
              />
              <div className="logo-text">
                <span className="brand-name">ஆராரோ 360°</span>
              </div>
            </Link>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-list">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/monitoring" className="nav-link">Monitoring</Link></li>
                <li><Link to="/elderlyadvice" className="nav-link">ElderlyAdvice</Link></li>
                
                {/* More Dropdown */}
                <li className="nav-dropdown">
                  <button 
                    className={`nav-link dropdown-toggle ${isMoreOpen ? 'active' : ''}`}
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    onMouseEnter={() => setIsMoreOpen(true)}
                  >
                    More
                    <span className="dropdown-arrow">⌄</span>
                  </button>
                  
                  {isMoreOpen && (
                    <div 
                      className="dropdown-menu"
                      onMouseLeave={() => setIsMoreOpen(false)}
                    >
                      <div className="dropdown-header">
                        <h4>Explore More Features</h4>                       
                      </div>
                      <div className="dropdown-grid">
                        {moreItems.map((item, index) => (
                          <Link 
                            key={index}
                            to={item.path}
                            className="dropdown-item"
                            onClick={() => setIsMoreOpen(false)}
                          >
                            <div className="dropdown-icon">{item.icon}</div>
                            <div className="dropdown-content">
                              <span className="dropdown-title">{item.name}</span>
                              <span className="dropdown-desc">{item.description}</span>
                            </div>
                            <span className="dropdown-arrow">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>

                <li>
                  <button className="nav-link premium" onClick={handlePremium}>
                    Premium
                  </button>
                </li>
              </ul>
            </nav>

            <div className="nav-actions">
              {isLoggedIn ? (
                <div className="user-menu">
                  <button className="user-btn">
                    <span>👤</span>
                  </button>
                  <div className="user-dropdown">
                    <div className="user-info">
                      <span>Welcome, {user?.name || 'User'}!</span>
                    </div>
                    <Link to="/settings/profile" className="dropdown-link">
                      <span>⚙️</span>
                      Settings
                    </Link>
                    <button className="logout-btn" onClick={handleLogout}>
                      <span>🚪</span>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/signin" className="login-btn">Sign In</Link>
              )}
              <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
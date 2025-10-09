import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const moreItems = [
    { icon: '📋', name: 'Schemes', path: '/schemes', description: 'Government & Private Schemes' },
    { icon: '💉', name: 'Vaccinations', path: '/vaccinations', description: 'Vaccine Schedule & Tracker' },
    { icon: '👨', name: 'Fathers Role', path: '/fathers-role', description: 'Guide for New Dads' },
    { icon: '🛍️', name: 'Shop', path: '/shop', description: 'Baby Products & Essentials' },
    { icon: '📈', name: 'Child Growth', path: '/child-growth', description: 'Growth Charts & Milestones' },
    { icon: '🏥', name: 'Hospitals', path: '/hospitals', description: 'Find Maternity Hospitals' },
    { icon: '🥗', name: 'Nutrition', path: '/nutrition', description: 'Diet Plans & Recipes' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const handlePremium = () => {
    navigate('/premium');
  };

  return (
    <>
      <header className="header">
  <div className="container">
    <div className="nav-wrapper">
      <Link to="/" className="logo">
        {/* Logo Image */}
        <img 
          src="aararo_logo.png" 
          alt="ஆராரோ 360°" 
          className="logo-image"
        />
        {/* Fallback text logo */}
        <div className="logo-text">
          <span className="brand-name">ஆராரோ 360°</span>
        </div>
      </Link>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-list">
                <li><Link to="/" className="nav-link">Home</Link></li>
                {/* <li><a href="/pregnancy" className="nav-link">Pregnancy</a></li> */}
                <li><Link to="/monitoring" className="nav-link">Monitoring</Link></li>
                <li><Link to="/elderlyadvice" className="nav-link">ElderlyAdvice</Link></li>
                <li><Link to="/community" className="nav-link">Community</Link></li>
                

                
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
              <button className="search-btn">
                <span>🔍</span>
              </button>
              {isLoggedIn ? (
                <div className="user-menu">
                  <button className="user-btn">
                    <span>👤</span>
                  </button>
                  <div className="user-dropdown">
                    <div className="user-info">
                      <span>Welcome, Mother!</span>
                    </div>
                    <button className="logout-btn" onClick={handleLogout}>
                      <span>🚪</span>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  className="login-btn"
                  onClick={() => setIsLoginOpen(true)}
                >
                  Sign In
                </button>
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

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal-overlay" onClick={() => setIsLoginOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Welcome Back</h3>
              <button className="close-btn" onClick={() => setIsLoginOpen(false)}>×</button>
            </div>
            <form className="auth-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <button type="submit" className="submit-btn">Sign In</button>
            </form>
            <div className="auth-footer">
              <p>Don't have an account? <a href="#signup">Sign Up</a></p>
              <a href="#forgot" className="forgot-link">Forgot Password?</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
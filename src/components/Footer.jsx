import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon"><img 
          src="aararo_logo.png" 
          alt="ஆராரோ 360°" 
          className="logo-image"
        /></span>
              <div className="logo-text">
                <span className="brand-name">ஆராரோ 360° </span>
                {/* <span className="brand-subtitle">360°</span> */}
              </div>
            </div>
            <p className="footer-description">
              Your trusted companion in the journey of motherhood, providing comprehensive 
              guidance from pregnancy through the first five years.
            </p>
            {/* <div className="app-badges">
              <button className="app-badge">
                <span>📱</span>
                <div>
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </div>
              </button>
              <button className="app-badge">
                <span>📱</span>
                <div>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </button>
            </div> */}
          </div>

          {/* <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li><a href="#pregnancy-tracker">Pregnancy Tracker</a></li>
              <li><a href="#hospital-finder">Hospital Finder</a></li>
              <li><a href="#baby-development">Baby Development</a></li>
              <li><a href="#lactation-support">Lactation Support</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div>
          <div className="footer-section"> </div>
           <div className="footer-section"> </div> */}

          {/* <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div> */}

          {/* <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#safety">Safety</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
            </ul>
          </div> */}
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Aararo 360. All rights reserved.</p>
            {/* <div className="social-links">
              <a href="#facebook" aria-label="Facebook">📘</a>
              <a href="#instagram" aria-label="Instagram">📷</a>
              <a href="#twitter" aria-label="Twitter">🐦</a>
              <a href="#youtube" aria-label="YouTube">📺</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
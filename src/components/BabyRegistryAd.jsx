import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BabyRegistryAd.css';

const BabyRegistryAd = () => {
  const navigate = useNavigate();

  const handleAdClick = () => {
    navigate('/signup');
  };

  const handleCtaClick = (e) => {
    e.stopPropagation();
    navigate('/signup');
  };

  return (
    <div className="ad-container" onClick={handleAdClick}>
      <div className="ad-label">ADVERTISEMENT</div>
      
      <div className="ad-content">
        <img 
          src="/path-to-your-image/Screenshot 2025-10-10 160552.png" 
          alt="Build your ultimate baby registry with Aarara360"
          className="ad-image"
        />
        
        <div className="ad-text">
          <h2 className="ad-title">Build your ultimate baby registry with Aarara360</h2>
          <p className="ad-description">
            Create the perfect baby registry with all your needs in one place. 
            From nursery essentials to baby gear, we've got you covered.
          </p>
        </div>
        
        <button className="cta-button" onClick={handleCtaClick}>
          Start Your Registry Now
        </button>
      </div>
    </div>
  );
};

export default BabyRegistryAd;
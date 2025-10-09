import React from 'react';
import './HeroSection.css';


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Complete 
              <span className="gradient-text"> Pregnancy & Parenting </span>
              Companion
            </h1>
            <h4 className="hero-description">
              Nurturing Mothers, Growing Futures - Your 5-Year Parenting Companion 
              "From bump to brilliance" Your trusted guide through pregnancy and beyond
            </h4>
         
            <div className="hero-actions">
              <button className="cta-btn primary">
                Start Your Journey 
              </button>
              {/* <button className="cta-btn secondary">
                <span>▶</span>
                Watch Demo
              </button> */}
            </div>
          </div>

          <div className="hero-visual">
            <div className="main-image">
              <img 
                src="pregnantlady2.png"
                alt="Happy pregnant mother"
                className="hero-img"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
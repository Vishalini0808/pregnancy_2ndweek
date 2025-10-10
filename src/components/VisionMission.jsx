import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <div className="decoration decoration-1">👶</div>
      <div className="decoration decoration-2">🌟</div>
      
      <div className="vision-mission-container">
        <div className="section-header">
          <h2>Our Purpose & Promise</h2>
          <p>Driving positive change in maternal and child healthcare through innovation and compassion</p>
        </div>

        <div className="vision-mission-grid">
          <div className="vision-content">
            <div className="content-header">
              <div className="icon-wrapper">
                <span>👁️</span>
              </div>
              <h3>Our Vision</h3>
            </div>
            <p>
              To revolutionize maternal and child healthcare in India by creating an ecosystem where 
              every mother receives <span className="gradient-text-accent">personalized, evidence-based guidance</span> and emotional support 
              throughout her journey from pregnancy to early childhood.
            </p>
            <p>
              We envision a future where technology and compassion work together to eliminate 
              healthcare disparities and ensure every child gets the best possible start in life.
            </p>
          </div>

          <div className="mission-content">
            <div className="content-header">
              <div className="icon-wrapper">
                <span>🎯</span>
              </div>
              <h3>Our Mission</h3>
            </div>
            <p>
              To empower Indian mothers with <span className="gradient-text-accent">accessible, reliable, and comprehensive</span> digital 
              healthcare solutions that simplify pregnancy tracking, child development monitoring, 
              and provide instant access to expert medical guidance.
            </p>
            <p>
              We're committed to bridging the gap between traditional healthcare and modern 
              technology, making quality maternal and child healthcare available to every family.
            </p>
          </div>
        </div>

        {/* <div className="feature-highlights">
          <div className="feature-card">
            <span className="feature-icon">🔬</span>
            <h4>Evidence-Based Approach</h4>
            <p>All our content and recommendations are backed by medical research and developed in consultation with healthcare professionals.</p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">🤝</span>
            <h4>Community Driven</h4>
            <p>Built by parents, for parents. Our platform evolves based on real user experiences and feedback from our growing community.</p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">🌍</span>
            <h4>Accessible to All</h4>
            <p>We believe quality healthcare guidance should be available to every family, regardless of location or economic background.</p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">💡</span>
            <h4>Innovation Focused</h4>
            <p>Continuously improving our technology to provide smarter, more personalized experiences for mothers and families.</p>
          </div>
        </div> */}

        {/* <div className="stats-section">
          <h3>Our Impact in Numbers</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Mothers Supported</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Articles Read</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default VisionMission;
import React from 'react';
import './ParentingGuidelinesBanner.css';

const ParentingGuidelinesBanner = () => {
  const guidelineCards = [
    {
      id: 1,
      icon: '🤰',
      title: 'Pregnancy Guide',
      description: 'Weekly pregnancy tracking, health tips, and expert advice',
      features: ['Week-by-week updates', 'Health monitoring'],
      gradient: 'pregnancy-gradient',
      comingSoon: false
    },
    {
      id: 2,
      icon: '👶',
      title: 'Baby Details & Tracking',
      description: 'Track your baby\'s growth, milestones, and development',
      features: ['Growth charts', 'Milestone tracker', 'Health records'],
      gradient: 'baby-gradient',
      comingSoon: false
    },
    {
      id: 3,
      icon: '📊',
      title: 'My Baby Process',
      description: 'Daily baby care routines and mother health monitoring',
      features: ['Baby cleaning', 'Feeding schedule', 'Mother health'],
      gradient: 'process-gradient',
      comingSoon: false
    },
    {
      id: 4,
      icon: '💖',
      title: 'Baby Care Hub',
      description: 'Complete baby care information',
      features: ['Activity notes', 'Doctor contacts', 'Care tips'],
      gradient: 'care-gradient',
      comingSoon: false
    },
    {
      id: 5,
      icon: '🛍️',
      title: 'Baby & Mother Products',
      description: 'Essential products for baby and mother care',
      features: ['Product reviews', 'Shopping guide', 'Deals & offers'],
      gradient: 'shop-gradient',
      comingSoon: false
    },
    {
      id: 6,
      icon: '👨‍👩‍👧‍👦',
      title: 'Community Support',
      description: 'Connect with other parents and experts',
      features: ['Q&A forum', 'Expert sessions', 'Parent stories'],
      gradient: 'community-gradient',
      comingSoon: true
    }
  ];

  return (
    <section className="parenting-guidelines">
      <div className="container">
        {/* Header Section */}
        <div className="guidelines-header">
         
          <h2>Your Complete Parenting Journey Guide</h2>
          <p>From pregnancy to toddler years - everything you need in one place</p>
        </div>

        {/* Main Content Grid */}
        <div className="guidelines-content">
          {/* Cards Grid */}
          <div className="cards-grid">
            {guidelineCards.map((card) => (
              <div 
                key={card.id} 
                className={`guideline-card ${card.gradient} ${card.comingSoon ? 'coming-soon' : ''}`}
              >
                {card.comingSoon && <div className="coming-soon-badge">Coming Soon</div>}
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="card-features">
                  {card.features.map((feature, index) => (
                    <span key={index} className="feature-tag">✓ {feature}</span>
                  ))}
                </div>
                <button className="card-cta">
                  Explore Now →
                </button>
              </div>
            ))}
          </div>

          
          {/* <div className="advertisement-section"> */}
            {/* <div className="ad-card premium-ad">
              <div className="ad-badge">Premium</div>
              <div className="ad-content">
                <h4>Upgrade to Premium</h4>
                <p>Get personalized doctor consultations and advanced tracking features</p>
                <div className="premium-features">
                  <div className="premium-feature">
                    <span className="feature-icon">👨‍⚕️</span>
                    <span>Doctor Video Consultations</span>
                  </div>
                  <div className="premium-feature">
                    <span className="feature-icon">📈</span>
                    <span>Advanced Growth Analytics</span>
                  </div>
                  <div className="premium-feature">
                    <span className="feature-icon">🔔</span>
                    <span>Priority Support</span>
                  </div>
                </div>
                <button className="premium-cta">
                  Try 7 Days Free
                </button>
                <div className="ad-footer">
                  <span>₹299/month after trial</span>
                </div>
              </div>
            </div> */}

            {/* <div className="ad-card download-ad">
              <div className="ad-content">
                <div className="app-icon">📱</div>
                <h4>Get Our Mobile App</h4>
                <p>Track your parenting journey on the go</p>
                <div className="download-buttons">
                  <button className="download-btn play-store">
                    <span className="store-icon">📥</span>
                    <div className="store-text">
                      <span className="get-on">GET IT ON</span>
                      <span className="store-name">Google Play</span>
                    </div>
                  </button>
                  <button className="download-btn app-store">
                    <span className="store-icon">📥</span>
                    <div className="store-text">
                      <span className="get-on">Download on the</span>
                      <span className="store-name">App Store</span>
                    </div>
                  </button>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>

        {/* Bottom CTA */}
         {/* <div className="ad-badge">ADVERTISEMENT</div>
        <div className="bottom-cta">
           
          <div className="cta-content">
            <h3> Build your complete pregnancy & parenting journey with Aararo 360 </h3>
            <p>Start your stress-free parenting journey with expert guidance</p>
            <button className="primary-cta">
              Start Your Free Journey
            </button>
          </div>
        </div> */}

        <div>
          <img 
          src='advertisement2.png'
          alt='Advertisement-banner'/>
        </div>

      </div>
    </section>
  );
};

export default ParentingGuidelinesBanner;
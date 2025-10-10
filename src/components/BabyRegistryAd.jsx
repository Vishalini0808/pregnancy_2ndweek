// components/BabyRegistryAd.jsx
import React, { useState, useEffect } from 'react';
// import './BabyRegistryAd.css';

const BabyRegistryAd = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-hide after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleStartRegistry = () => {
    // Navigate to registry page or open modal
    console.log('Starting baby registry...');
    // You can replace this with your actual navigation logic
    window.location.href = '/baby-registry';
  };

  const handleLearnMore = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="baby-registry-ad">
      <div className="ad-container">
        {/* Close Button */}
        <button className="ad-close-btn" onClick={handleClose} aria-label="Close ad">
          ×
        </button>

        {/* Ad Content */}
        <div className="ad-content">
          <div className="ad-badge">ADVERTISEMENT</div>
          
          <div className="ad-main">
            <div className="ad-text">
              <h3 className="ad-title">
                Build your ultimate baby
                <span className="ad-highlight"> registry</span>
              </h3>
              <p className="ad-subtitle">with ஆராரோ 360°</p>
            </div>

            <div className="ad-actions">
              <button 
                className="ad-primary-btn"
                onClick={handleStartRegistry}
              >
                Start Your Registry
              </button>
              
              <button 
                className="ad-secondary-btn"
                onClick={handleLearnMore}
              >
                {isExpanded ? 'Show Less' : 'Learn More'}
              </button>
            </div>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="ad-expanded-content">
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">🎁</div>
                  <h4>Curated Products</h4>
                  <p>Expert-picked baby essentials from trusted brands</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">📱</div>
                  <h4>Mobile Management</h4>
                  <p>Manage your registry anytime, anywhere</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">👨‍👩‍👧‍👦</div>
                  <h4>Share Easily</h4>
                  <p>Share with family and friends with one click</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">🎉</div>
                  <h4>Welcome Box</h4>
                  <p>Free welcome box with samples and goodies</p>
                </div>
              </div>
              
              <div className="ad-benefits">
                <h4>Why choose ஆராரோ 360° Registry?</h4>
                <ul>
                  <li>✓ Complete checklist for baby essentials</li>
                  <li>✓ Price comparison across stores</li>
                  <li>✓ Group gifting for big-ticket items</li>
                  <li>✓ 10% completion discount</li>
                  <li>✓ Free shipping on orders over ₹999</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="ad-decoration">
          <div className="decoration-item">🍼</div>
          <div className="decoration-item">🧸</div>
          <div className="decoration-item">👶</div>
        </div>
      </div>
    </div>
  );
};

export default BabyRegistryAd;
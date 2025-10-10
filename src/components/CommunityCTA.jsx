import React, { useState, useEffect } from 'react';
import './CommunityCTA.css';

const CommunityCTA = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const communityCards = [
    {
      id: 1,
      type: "Community",
      icon: "💬",
      title: "Ask Our Community",
      description: "Connect with 10K+ parents and 500+ healthcare experts for real-time support and advice.",
      stats: "10K+ Active Members",
      buttonText: "Join Discussion",
      accentColor:"#6b8cff" 
    },
    {
      id: 2,
      type: "Products",
      icon: "🛍️",
      title: "Baby & Mother Products",
      description: "Curated essentials and trusted products recommended by pediatricians and experienced parents.",
      stats: "500+ Products",
      buttonText: "Explore Shop",
      accentColor: "#6b8cff"
    },
    {
      id: 3,
      type: "Pregnancy",
      icon: "🤰",
      title: "Pregnancy Guide",
      description: "Complete week-by-week tracking with expert guidance and personalized health monitoring.",
      stats: "40 Week Tracker",
      buttonText: "Start Journey",
      accentColor: "#6b8cff"
    },
    {
      id: 4,
      type: "Elderly Advice",
      icon: "👵",
      title: "Traditional Wisdom",
      description: "Time-tested advice from elders combined with modern pediatric recommendations.",
      stats: "Cultural Insights",
      buttonText: "Learn More",
      accentColor: "#6b8cff"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % communityCards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [communityCards.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % communityCards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + communityCards.length) % communityCards.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="community-cta-professional">
      <div className="professional-container">
        {/* Header */}
        {/* <div className="section-header">
          <h2>Your Complete Parenting Companion</h2>
          <p>Access all resources and support for your parenting journey in one place</p>
        </div> */}

        {/* Carousel Container */}
        <div className="professional-carousel">
          {/* Navigation Arrows */}
          <button className="carousel-arrow prev" onClick={prevSlide}>
            ‹
          </button>

          {/* Carousel Track */}
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {communityCards.map((card, index) => (
                <div key={card.id} className="carousel-slide">
                  <div className="professional-card">
                    <div className="card-header">
                      <div className="card-type" style={{ color: card.accentColor }}>
                        {card.type}
                      </div>
                      <div className="card-icon" style={{ backgroundColor: `${card.accentColor}15` }}>
                        {card.icon}
                      </div>
                    </div>
                    
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.description}</p>
                    
                    <div className="card-stats">
                      <span className="stat-badge">{card.stats}</span>
                    </div>

                    <button 
                      className="professional-cta"
                      style={{ 
                        backgroundColor: card.accentColor,
                        boxShadow: `0 4px 15px ${card.accentColor}40`
                      }}
                    >
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow next" onClick={nextSlide}>
            ›
          </button>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators">
          {communityCards.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Quick Access */}
        {/* <div className="quick-access">
          <div className="access-grid">
            {communityCards.map((card, index) => (
              <button
                key={card.id}
                className={`access-item ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                style={{ 
                  borderColor: index === currentIndex ? card.accentColor : 'transparent'
                }}
              >
                <span className="access-icon" style={{ color: card.accentColor }}>
                  {card.icon}
                </span>
                <span className="access-label">{card.type}</span>
              </button>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CommunityCTA;
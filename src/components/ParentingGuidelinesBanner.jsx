import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ParentingGuidelinesBanner.css';

const ParentingGuidelinesBanner = () => {
  const navigate = useNavigate();

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
      title: 'Government Schemes',
      description: 'Explore government schemes that support maternal health and early childhood care',
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
      title: 'Baby Sitting Assistance',
      description: 'Connect with other parents and experts',
      features: ['Baby Care', 'Experienced Persons', 'Trustable'],
      gradient: 'shop-gradient',
      comingSoon: false
    }
  ];

  const handleCardClick = (cardId) => {
    if (cardId === 1) {
      navigate('/pregnancy-guide');
    }

    else if ( cardId === 2) {
      navigate('/monitoring');
    }

    else if ( cardId === 3) {
      navigate('/schemes');
    }

    else if ( cardId === 4) {
      navigate('/elderlyadvice');
    }
    
    else if ( cardId === 5) {
      navigate('/shop');
    }

    else if ( cardId === 6) {
      navigate('/babysittingpage');
    }
    

    // Add navigation for other cards as needed
  };

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
                <button 
                  className="card-cta"
                  onClick={() => handleCardClick(card.id)}
                  disabled={card.comingSoon}
                >
                  {card.comingSoon ? 'Coming Soon' : 'Explore Now →'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* <div>
          <img 
            src='advertisement2.png'
            alt='Advertisement-banner'
          />
        </div> */}
      </div>
    </section>
  );
};

export default ParentingGuidelinesBanner;
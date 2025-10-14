import React from 'react';
import '../../pages/Styles/settings.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Aararo 360°</h1>
        <p>Your trusted companion in the beautiful journey of pregnancy and parenting</p>
      </div>

      <div className="about-hero">
        <div className="hero-content">
          <h2>Empowering Parents, Nurturing Families</h2>
          <p className="hero-description">
            Aararo 360° is more than just an app - it's your personal guide, support system, 
            and companion through every stage of pregnancy and early parenting. We combine 
            traditional wisdom with modern technology to provide comprehensive care for 
            mothers and families.
          </p>
        </div>
        <div className="hero-visual">
          <div className="visual-element">👶</div>
        </div>
      </div>

      <div className="mission-vision">
        <div className="mission">
          <div className="icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To provide accessible, personalized, and culturally sensitive support 
            for expecting mothers and new parents, ensuring every family feels 
            confident and supported throughout their parenting journey.
          </p>
        </div>
        <div className="vision">
          <div className="icon">🔭</div>
          <h3>Our Vision</h3>
          <p>
            A world where every parent has the tools, knowledge, and community 
            support needed to raise healthy, happy children while maintaining 
            their own well-being.
          </p>
        </div>
      </div>

      <div className="features-overview">
        <h2>What Makes Us Different</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">🌍</div>
            <h4>360° Approach</h4>
            <p>Comprehensive care covering physical health, mental wellness, nutrition, and family dynamics</p>
          </div>
          <div className="feature">
            <div className="feature-icon">👵</div>
            <h4>Elderly Wisdom</h4>
            <p>Blending traditional knowledge with evidence-based modern practices</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🤝</div>
            <h4>Community Driven</h4>
            <p>Connect with other parents and share experiences in a supportive environment</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h4>Personalized Insights</h4>
            <p>AI-powered tracking and recommendations tailored to your unique journey</p>
          </div>
        </div>
      </div>

      <div className="team-values">
        <h2>Our Values</h2>
        <div className="values-list">
          <div className="value">
            <strong>Compassion:</strong> We understand that every parenting journey is unique and deserves empathy.
          </div>
          <div className="value">
            <strong>Trust:</strong> Your privacy and data security are our top priorities.
          </div>
          <div className="value">
            <strong>Innovation:</strong> Continuously improving to serve you better with cutting-edge technology.
          </div>
          <div className="value">
            <strong>Inclusion:</strong> Supporting diverse families from all backgrounds and cultures.
          </div>
        </div>
      </div>

      <div className="join-community">
        <h2>Join Our Growing Family</h2>
        <p>
          Thousands of parents trust Aararo 360° for their pregnancy and parenting needs. 
          Become part of our community today and experience the difference comprehensive, 
          compassionate support can make in your parenting journey.
        </p>
        <div className="community-stats">
          <div className="stat">
            <div className="stat-number">50,000+</div>
            <div className="stat-label">Happy Parents</div>
          </div>
          <div className="stat">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
          <div className="stat">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
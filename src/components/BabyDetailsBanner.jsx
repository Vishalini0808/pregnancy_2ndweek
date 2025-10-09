import React, { useState } from 'react';
import './BabyDetailsBanner.css';

const BabyDetailsBanner = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const babyShapes = ['👶', '🐣', '🌟', '🧸', '🚼', '⭐', '💫', '🎀'];

  return (
    <>
      <section className="baby-details-banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <div className="banner-badge">
                <span>✨ Personalized Baby Care</span>
              </div>
              <h2>
                Track Your Little One's 
                <span className="gradient-text"> Amazing Journey</span>
              </h2>
              <p className="banner-description">
                Get personalized development tracking, health monitoring, and expert tips 
                tailored specifically for your baby's age and milestones.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span>Growth Tracking</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💖</span>
                  <span>Health Monitoring</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <span>Personalized Tips</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📅</span>
                  <span>Milestone Alerts</span>
                </div>
              </div>

              <button 
                className="cta-btn primary large"
                onClick={() => setIsFormOpen(true)}
              >
                👶 Give Your Baby Details
              </button>
              
              {/* <p className="cta-note">
                Join 50,000+ parents tracking their baby's development
              </p> */}
            </div>

            <div className="banner-visual">
              <div className="animated-baby">
                <div className="baby-face">
                  <div className="eyes">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                  </div>
                  <div className="mouth"></div>
                  <div className="cheeks">
                    <div className="cheek left"></div>
                    <div className="cheek right"></div>
                  </div>
                </div>
              </div>
              
              <div className="floating-shapes">
                {babyShapes.map((shape, index) => (
                  <div 
                    key={index}
                    className="floating-shape"
                    style={{
                      animationDelay: `${index * 0.5}s`,
                      left: `${20 + (index * 10)}%`,
                      top: `${10 + (index * 8)}%`
                    }}
                  >
                    {shape}
                  </div>
                ))}
              </div>
              
              <div className="growth-chart">
                <div className="chart-bar" style={{ height: '60%' }}>
                  <span>Weight</span>
                </div>
                <div className="chart-bar" style={{ height: '80%' }}>
                  <span>Height</span>
                </div>
                <div className="chart-bar" style={{ height: '70%' }}>
                  <span>Milestones</span>
                </div>
                <div className="chart-bar" style={{ height: '90%' }}>
                  <span>Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baby Details Form Modal */}
      {isFormOpen && (
        <div className="modal-overlay" onClick={() => setIsFormOpen(false)}>
          <div className="baby-form-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Tell Us About Your Little One 👶</h3>
              <button className="close-btn" onClick={() => setIsFormOpen(false)}>×</button>
            </div>
            
            <form className="baby-details-form">
              <div className="form-section">
                <h4>Basic Information</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>Baby's Name</label>
                    <input type="text" placeholder="Enter baby's name" />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Gender</label>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input type="radio" name="gender" value="boy" />
                        <span>👦 Boy</span>
                      </label>
                      <label className="radio-option">
                        <input type="radio" name="gender" value="girl" />
                        <span>👧 Girl</span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Birth Weight (kg)</label>
                    <input type="number" step="0.1" placeholder="e.g., 3.2" />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h4>Current Details</h4>
                <div className="form-row">
                  <div className="form-group">
                    <label>Current Weight (kg)</label>
                    <input type="number" step="0.1" placeholder="Current weight" />
                  </div>
                  <div className="form-group">
                    <label>Current Height (cm)</label>
                    <input type="number" placeholder="Current height" />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h4>Feeding & Health</h4>
                <div className="form-group">
                  <label>Feeding Type</label>
                  <div className="checkbox-group">
                    <label className="checkbox-option">
                      <input type="checkbox" name="feeding" value="breast" />
                      <span>🤱 Breastfeeding</span>
                    </label>
                    <label className="checkbox-option">
                      <input type="checkbox" name="feeding" value="formula" />
                      <span>🍼 Formula</span>
                    </label>
                    <label className="checkbox-option">
                      <input type="checkbox" name="feeding" value="solid" />
                      <span>🥣 Solid Foods</span>
                    </label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Any Health Concerns?</label>
                  <textarea 
                    placeholder="Tell us about any health concerns or special needs..."
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="cta-btn secondary" onClick={() => setIsFormOpen(false)}>
                  Maybe Later
                </button>
                <button type="submit" className="cta-btn primary">
                  Start Tracking Development ✅
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BabyDetailsBanner;
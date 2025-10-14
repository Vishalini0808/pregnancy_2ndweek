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
             
              <h2>
                Track Your Little One's 
                <span className="gradient-text"> Amazing Journey</span>
              </h2>
              {/* <p className="banner-description">
                Get personalized development tracking, health monitoring, and expert tips 
                tailored specifically for your baby's age and milestones.
              </p> */}
              
              <div className="features-grid">
                <div className="feature-card">
                  {/* <div className="feature-icon">📊</div> */}
                  <h4>Growth Tracking</h4>
                  <p>Monitor weight, height, and development milestones</p>
                </div>
                <div className="feature-card">
                  {/* <div className="feature-icon">💖</div> */}
                  <h4>Health Monitoring</h4>
                  <p>Track vaccinations, health checks, and wellbeing</p>
                </div>
                <div className="feature-card">
                  {/* <div className="feature-icon">🎯</div> */}
                  <h4>Personalized Tips</h4>
                  <p>Get advice tailored to your baby's specific needs</p>
                </div>
                <div className="feature-card">
                  {/* <div className="feature-icon">📅</div> */}
                  <h4>Milestone Alerts</h4>
                  <p>Never miss important developmental milestones</p>
                </div>
              </div>

              
            </div>

            <div className="banner-visual">
              <div className="baby-card">
                <div className="baby-avatar">
                  <div className="baby-face">
                    <div className="eyes">
                      <div className="eye left"></div>
                      <div className="eye right"></div>
                    </div>
                    <div className="mouth"></div>
                  </div>
                </div>
                <h3>Your Baby's Journey</h3>
                <p>Start tracking today for personalized insights</p>
                
                {/* <div className="progress-stats">
                  <div className="stat">
                    <span className="stat-value">0%</span>
                    <span className="stat-label">Growth</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">0%</span>
                    <span className="stat-label">Milestones</span>
                  </div>
                </div>
                 */}
               <div className="cta-button-group">
                <button 
                  className="cta-btn primary"
                  onClick={() => setIsFormOpen(true)}
                >
                  👶 Give Your Baby Details
                </button>
              </div>
              </div>
              
              <div className="floating-elements">
                {babyShapes.map((shape, index) => (
                  <div 
                    key={index}
                    className="floating-element"
                    style={{
                      animationDelay: `${index * 0.7}s`,
                      left: `${15 + (index * 10)}%`,
                      top: `${5 + (index * 12)}%`
                    }}
                  >
                    {shape}
                  </div>
                ))}
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
                <h4>👤 Basic Information</h4>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Baby's Name</label>
                    <input type="text" placeholder="Enter baby's name" />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <div className="option-group">
                      <div className="option-item">
                        <input type="radio" name="gender" value="boy" id="boy" />
                        <label htmlFor="boy">👦 Boy</label>
                      </div>
                      <div className="option-item">
                        <input type="radio" name="gender" value="girl" id="girl" />
                        <label htmlFor="girl">👧 Girl</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Birth Weight (kg)</label>
                    <input type="number" step="0.1" placeholder="e.g., 3.2" />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h4>📏 Current Details</h4>
                <div className="form-grid">
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
                <h4>🍼 Feeding & Health</h4>
                <div className="form-group">
                  <label>Feeding Type</label>
                  <div className="option-group">
                    <div className="option-item">
                      <input type="checkbox" name="feeding" value="breast" id="breast" />
                      <label htmlFor="breast">🤱 Breastfeeding</label>
                    </div>
                    <div className="option-item">
                      <input type="checkbox" name="feeding" value="formula" id="formula" />
                      <label htmlFor="formula">🍼 Formula</label>
                    </div>
                    <div className="option-item">
                      <input type="checkbox" name="feeding" value="solid" id="solid" />
                      <label htmlFor="solid">🥣 Solid Foods</label>
                    </div>
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
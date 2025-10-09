import React, { useState } from 'react';
import './Vaccinations.css';

const Vaccinations = () => {
  const [activeTab, setActiveTab] = useState('schedule');

  const vaccineSchedule = [
    {
      age: 'At Birth',
      vaccines: [
        { name: 'BCG', description: 'Tuberculosis protection', mandatory: true },
        { name: 'Hepatitis B - 1st dose', description: 'Hepatitis B protection', mandatory: true },
        { name: 'OPV - 0th dose', description: 'Polio protection', mandatory: true }
      ]
    },
    {
      age: '6 Weeks',
      vaccines: [
        { name: 'DTwP/DTaP - 1st dose', description: 'Diphtheria, Tetanus, Pertussis', mandatory: true },
        { name: 'Hib - 1st dose', description: 'Haemophilus influenzae type B', mandatory: true },
        { name: 'IPV - 1st dose', description: 'Polio protection', mandatory: true },
        { name: 'Hepatitis B - 2nd dose', description: 'Hepatitis B protection', mandatory: true },
        { name: 'Rotavirus - 1st dose', description: 'Rotavirus diarrhea protection', mandatory: false },
        { name: 'PCV - 1st dose', description: 'Pneumococcal disease', mandatory: false }
      ]
    },
    {
      age: '10 Weeks',
      vaccines: [
        { name: 'DTwP/DTaP - 2nd dose', description: 'Diphtheria, Tetanus, Pertussis', mandatory: true },
        { name: 'Hib - 2nd dose', description: 'Haemophilus influenzae type B', mandatory: true },
        { name: 'IPV - 2nd dose', description: 'Polio protection', mandatory: true },
        { name: 'Rotavirus - 2nd dose', description: 'Rotavirus diarrhea protection', mandatory: false },
        { name: 'PCV - 2nd dose', description: 'Pneumococcal disease', mandatory: false }
      ]
    },
    {
      age: '14 Weeks',
      vaccines: [
        { name: 'DTwP/DTaP - 3rd dose', description: 'Diphtheria, Tetanus, Pertussis', mandatory: true },
        { name: 'Hib - 3rd dose', description: 'Haemophilus influenzae type B', mandatory: true },
        { name: 'IPV - 3rd dose', description: 'Polio protection', mandatory: true },
        { name: 'Rotavirus - 3rd dose', description: 'Rotavirus diarrhea protection', mandatory: false },
        { name: 'PCV - 3rd dose', description: 'Pneumococcal disease', mandatory: false }
      ]
    },
    {
      age: '6 Months',
      vaccines: [
        { name: 'Hepatitis B - 3rd dose', description: 'Hepatitis B protection', mandatory: true },
        { name: 'Influenza - 1st dose', description: 'Seasonal flu protection', mandatory: false }
      ]
    },
    {
      age: '9-12 Months',
      vaccines: [
        { name: 'MMR - 1st dose', description: 'Measles, Mumps, Rubella', mandatory: true },
        { name: 'Typhoid Conjugate Vaccine', description: 'Typhoid protection', mandatory: false },
        { name: 'Hepatitis A - 1st dose', description: 'Hepatitis A protection', mandatory: false }
      ]
    }
  ];

  const upcomingVaccines = [
    { name: 'MMR Vaccine', dueDate: '2024-03-15', child: 'Baby Girl', status: 'Upcoming' },
    { name: 'Vitamin A Dose', dueDate: '2024-03-20', child: 'Baby Girl', status: 'Upcoming' },
    { name: 'DPT Booster', dueDate: '2024-04-10', child: 'Baby Girl', status: 'Scheduled' }
  ];

  return (
    <div className="vaccinations-page">
      <div className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Vaccination Schedule & Tracker 💉</h1>
            <p>Complete immunization guide and tracking for your child's health protection</p>
          </div>
        </div>
      </div>

      <div className="vaccinations-content">
        <div className="container">
          <div className="tabs-container">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'schedule' ? 'active' : ''}`}
                onClick={() => setActiveTab('schedule')}
              >
                Vaccine Schedule
              </button>
              <button 
                className={`tab ${activeTab === 'tracker' ? 'active' : ''}`}
                onClick={() => setActiveTab('tracker')}
              >
                My Tracker
              </button>
              <button 
                className={`tab ${activeTab === 'info' ? 'active' : ''}`}
                onClick={() => setActiveTab('info')}
              >
                Vaccine Information
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'schedule' && (
                <div className="schedule-section">
                  <h2>Recommended Vaccination Schedule</h2>
                  <div className="vaccine-timeline">
                    {vaccineSchedule.map((stage, index) => (
                      <div key={index} className="timeline-stage">
                        <div className="stage-header">
                          <div className="stage-age">{stage.age}</div>
                          <div className="stage-marker"></div>
                        </div>
                        <div className="vaccines-list">
                          {stage.vaccines.map((vaccine, vIndex) => (
                            <div key={vIndex} className="vaccine-card">
                              <div className="vaccine-info">
                                <h4>{vaccine.name}</h4>
                                <p>{vaccine.description}</p>
                              </div>
                              <div className="vaccine-meta">
                                <span className={`mandatory ${vaccine.mandatory ? 'yes' : 'no'}`}>
                                  {vaccine.mandatory ? 'Mandatory' : 'Optional'}
                                </span>
                                <button className="reminder-btn">Set Reminder</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'tracker' && (
                <div className="tracker-section">
                  <h2>Your Vaccination Tracker</h2>
                  <div className="tracker-overview">
                    <div className="stat-card">
                      <div className="stat-number">12</div>
                      <div className="stat-label">Vaccines Completed</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">3</div>
                      <div className="stat-label">Upcoming Vaccines</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">0</div>
                      <div className="stat-label">Missed Vaccines</div>
                    </div>
                  </div>

                  <div className="upcoming-vaccines">
                    <h3>Upcoming Vaccinations</h3>
                    <div className="vaccines-grid">
                      {upcomingVaccines.map((vaccine, index) => (
                        <div key={index} className="upcoming-card">
                          <div className="vaccine-details">
                            <h4>{vaccine.name}</h4>
                            <p>Due: {vaccine.dueDate}</p>
                            <span className="child-name">{vaccine.child}</span>
                          </div>
                          <div className="vaccine-actions">
                            <span className={`status ${vaccine.status.toLowerCase()}`}>
                              {vaccine.status}
                            </span>
                            <button className="schedule-btn">Reschedule</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'info' && (
                <div className="info-section">
                  <h2>Vaccine Information & Safety</h2>
                  <div className="info-grid">
                    <div className="info-card">
                      <h3>Why Vaccinate?</h3>
                      <p>Vaccines protect children from serious diseases and complications that can include amputation of an arm or leg, paralysis of limbs, hearing loss, convulsions, brain damage, and death.</p>
                    </div>
                    <div className="info-card">
                      <h3>Vaccine Safety</h3>
                      <p>All vaccines go through comprehensive testing and ongoing monitoring to ensure they are safe and effective for your child.</p>
                    </div>
                    <div className="info-card">
                      <h3>Side Effects</h3>
                      <p>Most side effects are minor and temporary, such as fever or soreness at the injection site. Serious side effects are very rare.</p>
                    </div>
                    <div className="info-card">
                      <h3>Herd Immunity</h3>
                      <p>When most people in a community are vaccinated, the spread of disease slows down or stops, protecting those who cannot be vaccinated.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaccinations;
import React, { useState } from 'react';
import './Hospitals.css';

const Hospitals = () => {
  const [selectedCity, setSelectedCity] = useState('Delhi');
  const [selectedSpecialty, setSelectedSpecialty] = useState('maternity');

  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'];
  
  const specialties = [
    { id: 'maternity', name: 'Maternity & Delivery', icon: '🤰' },
    { id: 'pediatric', name: 'Pediatric Care', icon: '👶' },
    { id: 'fertility', name: 'Fertility Center', icon: '💖' },
    { id: 'neonatal', name: 'Neonatal ICU', icon: '🏥' }
  ];

  const hospitals = [
    {
      id: 1,
      name: 'Apollo Cradle Hospital',
      specialty: 'maternity',
      city: 'Delhi',
      rating: 4.8,
      reviews: 1247,
      distance: '2.5 km',
      features: ['24/7 Emergency', 'NICU Level 3', 'Water Birth', 'Lactation Consultant'],
      doctors: 12,
      beds: 45,
      image: '🏥',
      emergency: true
    },
    {
      id: 2,
      name: 'Fortis La Femme',
      specialty: 'maternity',
      city: 'Delhi',
      rating: 4.7,
      reviews: 892,
      distance: '3.2 km',
      features: ['Advanced NICU', 'Painless Delivery', 'Genetic Counseling', 'Postpartum Care'],
      doctors: 15,
      beds: 60,
      image: '🏥',
      emergency: true
    },
    {
      id: 3,
      name: 'Cloudnine Hospital',
      specialty: 'maternity',
      city: 'Bangalore',
      rating: 4.9,
      reviews: 1567,
      distance: '1.8 km',
      features: ['LDRP Rooms', 'Baby Spa', 'Lactation Support', 'Parenting Classes'],
      doctors: 20,
      beds: 75,
      image: '🏥',
      emergency: true
    },
    {
      id: 4,
      name: 'Kokilaben Hospital',
      specialty: 'pediatric',
      city: 'Mumbai',
      rating: 4.6,
      reviews: 734,
      distance: '4.1 km',
      features: ['Pediatric ICU', 'Vaccination Center', 'Child Development', 'Emergency Care'],
      doctors: 18,
      beds: 50,
      image: '🏥',
      emergency: true
    },
    {
      id: 5,
      name: 'Rainbow Children Hospital',
      specialty: 'pediatric',
      city: 'Chennai',
      rating: 4.7,
      reviews: 623,
      distance: '2.9 km',
      features: ['Neonatal Surgery', 'Vaccination', 'Child Psychology', 'Nutrition Care'],
      doctors: 14,
      beds: 40,
      image: '🏥',
      emergency: true
    }
  ];

  const filteredHospitals = hospitals.filter(hospital => 
    hospital.city === selectedCity && hospital.specialty === selectedSpecialty
  );

  return (
    <div className="hospitals-page">
      <div className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Find Maternity Hospitals 🏥</h1>
            <p>Discover the best hospitals and healthcare facilities for your pregnancy journey</p>
          </div>
        </div>
      </div>

      <div className="hospitals-content">
        <div className="container">
          <div className="filters-section">
            <div className="filter-group">
              <label>Select City:</label>
              <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                className="city-select"
              >
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Specialty:</label>
              <div className="specialty-buttons">
                {specialties.map(specialty => (
                  <button
                    key={specialty.id}
                    className={`specialty-btn ${selectedSpecialty === specialty.id ? 'active' : ''}`}
                    onClick={() => setSelectedSpecialty(specialty.id)}
                  >
                    <span className="specialty-icon">{specialty.icon}</span>
                    {specialty.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hospitals-grid">
            {filteredHospitals.map(hospital => (
              <div key={hospital.id} className="hospital-card">
                <div className="hospital-header">
                  <div className="hospital-image">
                    <span className="hospital-emoji">{hospital.image}</span>
                    {hospital.emergency && <span className="emergency-badge">24/7 Emergency</span>}
                  </div>
                  <div className="hospital-info">
                    <h3 className="hospital-name">{hospital.name}</h3>
                    <div className="hospital-meta">
                      <span className="rating">⭐ {hospital.rating} ({hospital.reviews} reviews)</span>
                      <span className="distance">📍 {hospital.distance} away</span>
                    </div>
                  </div>
                </div>

                <div className="hospital-features">
                  <h4>Key Features:</h4>
                  <div className="features-list">
                    {hospital.features.map((feature, index) => (
                      <span key={index} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>
                </div>

                <div className="hospital-stats">
                  <div className="stat">
                    <span className="stat-number">{hospital.doctors}</span>
                    <span className="stat-label">Doctors</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">{hospital.beds}</span>
                    <span className="stat-label">Beds</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Emergency</span>
                  </div>
                </div>

                <div className="hospital-actions">
                  <button className="primary-btn">Book Appointment</button>
                  <button className="secondary-btn">View Details</button>
                  <button className="icon-btn">📞 Call</button>
                </div>
              </div>
            ))}
          </div>

          <div className="map-section">
            <h2>Hospital Locations Map</h2>
            <div className="map-placeholder">
              <div className="map-content">
                <span className="map-icon">🗺️</span>
                <h3>Interactive Map</h3>
                <p>View hospital locations, get directions, and check real-time availability</p>
                <button className="cta-btn primary">Open Map View</button>
              </div>
            </div>
          </div>

          <div className="emergency-section">
            <div className="emergency-card">
              <div className="emergency-icon">🚨</div>
              <div className="emergency-content">
                <h3>Emergency Services</h3>
                <p>24/7 emergency care for pregnancy complications and delivery</p>
                <div className="emergency-contacts">
                  <button className="emergency-btn">📞 Call Ambulance: 108</button>
                  <button className="emergency-btn">🏥 Nearest Emergency</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BabysittingPage.css';

const DEMO_SITTERS = [
  {
    id: 'priya',
    name: 'Priya Sharma',
    experience: '3 years',
    rating: 4.9,
    bio: 'Experienced with newborns and toddlers. CPR certified.',
    hourlyRate: '₹400/hr',
    available: true,
  },
  {
    id: 'anjali',
    name: 'Anjali Patel',
    experience: '5 years',
    rating: 4.8,
    bio: 'Specializes in school-age children. Arts & crafts enthusiast.',
    hourlyRate: '₹450/hr',
    available: true,
  },
  {
    id: 'meera',
    name: 'Meera Singh',
    experience: '2 years',
    rating: 4.7,
    bio: 'Gentle with infants. Background in early childhood education.',
    hourlyRate: '₹350/hr',
    available: true,
  },
  {
    id: 'kavya',
    name: 'Kavya Reddy',
    experience: '4 years',
    rating: 4.9,
    bio: 'Multi-lingual. Great with special needs children.',
    hourlyRate: '₹500/hr',
    available: false,
  },
];

export default function BabysittingPage() {
  const [booking, setBooking] = useState({
    name: '',
    contact: '',
    date: '',
    time: '',
    duration: '',
    instructions: '',
  });
  const [selectedSitter, setSelectedSitter] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setBooking(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  function validateForm() {
    const newErrors = {};
    if (!booking.name.trim()) newErrors.name = 'Name is required';
    if (!booking.contact.trim()) newErrors.contact = 'Contact info is required';
    if (!booking.date) newErrors.date = 'Date is required';
    if (!booking.time) newErrors.time = 'Time is required';
    if (!booking.duration) newErrors.duration = 'Duration is required';
    if (!selectedSitter) newErrors.sitter = 'Please select a babysitter';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true);
    }
  }

  function handleBookSitter(sitter) {
    setSelectedSitter(sitter);
    setErrors(prev => ({ ...prev, sitter: '' }));
  }

  if (showConfirmation) {
    return (
      <div className="bs-root">
        <div className="bs-confirmation">
          <div className="bs-confirmation-card">
            <h1 className="bs-confirmation-title">✅ Booking Confirmed!</h1>
            <p className="bs-confirmation-text">
              Your babysitting request has been submitted successfully.
            </p>
            <div className="bs-confirmation-details">
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Contact:</strong> {booking.contact}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Duration:</strong> {booking.duration}</p>
              <p><strong>Babysitter:</strong> {selectedSitter.name}</p>
              {booking.instructions && <p><strong>Instructions:</strong> {booking.instructions}</p>}
            </div>
            <div className="bs-confirmation-actions">
              <button className="bs-button" onClick={() => {
                setShowConfirmation(false);
                setBooking({
                  name: '', contact: '', date: '', time: '', duration: '', instructions: '',
                });
                setSelectedSitter(null);
              }}>
                Book Another
              </button>
              <Link to="/" className="bs-link">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bs-root">
      <header className="bs-header">
        <h1 className="bs-title">👶 Babysitting Services</h1>
        <p className="bs-subtitle">Trusted caregivers for your little ones</p>
        <Link to="/" className="bs-back">← Back to Home</Link>
      </header>

      <main className="bs-content">
        <div className="bs-tip">
          <p>💡 Choose your babysitter wisely - review profiles and ratings carefully.</p>
        </div>

        <div className="bs-layout">
          <section className="bs-form-section">
            <h2 className="bs-section-title">Booking Details</h2>
            <form className="bs-form" onSubmit={handleSubmit}>
              <div className="bs-form-grid">
                <div className="bs-field">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={booking.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'bs-input-error' : ''}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="bs-error">{errors.name}</span>}
                </div>

                <div className="bs-field">
                  <label htmlFor="contact">Contact Info *</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={booking.contact}
                    onChange={handleInputChange}
                    className={errors.contact ? 'bs-input-error' : ''}
                    placeholder="Phone number or email"
                  />
                  {errors.contact && <span className="bs-error">{errors.contact}</span>}
                </div>

                <div className="bs-field">
                  <label htmlFor="date">Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={booking.date}
                    onChange={handleInputChange}
                    className={errors.date ? 'bs-input-error' : ''}
                  />
                  {errors.date && <span className="bs-error">{errors.date}</span>}
                </div>

                <div className="bs-field">
                  <label htmlFor="time">Time *</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={booking.time}
                    onChange={handleInputChange}
                    className={errors.time ? 'bs-input-error' : ''}
                  />
                  {errors.time && <span className="bs-error">{errors.time}</span>}
                </div>

                <div className="bs-field">
                  <label htmlFor="duration">Duration *</label>
                  <select
                    id="duration"
                    name="duration"
                    value={booking.duration}
                    onChange={handleInputChange}
                    className={errors.duration ? 'bs-input-error' : ''}
                  >
                    <option value="">Select duration</option>
                    <option value="2 hours">2 hours</option>
                    <option value="4 hours">4 hours</option>
                    <option value="6 hours">6 hours</option>
                    <option value="8 hours">8 hours</option>
                    <option value="Overnight">Overnight</option>
                  </select>
                  {errors.duration && <span className="bs-error">{errors.duration}</span>}
                </div>

                <div className="bs-field bs-field-full">
                  <label htmlFor="instructions">Special Instructions</label>
                  <textarea
                    id="instructions"
                    name="instructions"
                    value={booking.instructions}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Any specific requirements, allergies, or notes for the babysitter..."
                  />
                </div>
              </div>

              {errors.sitter && <span className="bs-error bs-error-block">{errors.sitter}</span>}

              <button type="submit" className="bs-button bs-button-submit">
                Submit Booking Request
              </button>
            </form>
          </section>

          <section className="bs-sitters-section">
            <h2 className="bs-section-title">Available Babysitters</h2>
            <div className="bs-sitters-grid">
              {DEMO_SITTERS.map(sitter => (
<article
  key={sitter.id}
  className={`bs-sitter-card ${selectedSitter?.id === sitter.id ? 'bs-sitter-selected' : ''} ${!sitter.available ? 'bs-sitter-unavailable' : ''}`}
>
                  <div className="bs-sitter-header">
                    <h3 className="bs-sitter-name">{sitter.name}</h3>
                    <div className="bs-sitter-rating">
                      <span className="bs-rating-stars">⭐</span>
                      <span>{sitter.rating}</span>
                    </div>
                  </div>
                  <p className="bs-sitter-experience">{sitter.experience} experience</p>
                  <p className="bs-sitter-bio">{sitter.bio}</p>
                  <div className="bs-sitter-footer">
                    <span className="bs-sitter-rate">{sitter.hourlyRate}</span>
                    {sitter.available ? (
                      <button
                        className="bs-button bs-button-book"
                        onClick={() => handleBookSitter(sitter)}
                        disabled={selectedSitter?.id === sitter.id}
                      >
                        {selectedSitter?.id === sitter.id ? 'Selected' : 'Book Now'}
                      </button>
                    ) : (
                      <span className="bs-sitter-unavailable-text">Unavailable</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
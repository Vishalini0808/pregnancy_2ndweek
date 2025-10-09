import React, { useState } from 'react';
import './ElderlyAdvice.css';

const ElderlyAdvice = () => {
  const [activeCategory, setActiveCategory] = useState('pregnancy');

  const adviceData = {
    pregnancy: [
      {
        title: "Morning Sickness Relief",
        remedy: "Ginger tea with honey and lemon. Chew on fennel seeds after meals.",
        tip: "Grandma's secret: Keep crackers by your bedside and eat one before getting up."
      },
      {
        title: "Back Pain Solution",
        remedy: "Warm sesame oil massage. Practice prenatal yoga daily.",
        tip: "Sleep with a pillow between your knees for better spine alignment."
      },
      {
        title: "Healthy Baby Growth",
        remedy: "Eat a handful of soaked almonds daily. Drink milk with turmeric.",
        tip: "Talk and sing to your baby - they can hear you from 18 weeks!"
      }
    ],
    postpartum: [
      {
        title: "Lactation Boost",
        remedy: "Fenugreek seeds in meals. Drink ajwain water daily.",
        tip: "Stay hydrated and rest well - milk production needs energy!"
      },
      {
        title: "Healing After Delivery",
        remedy: "Sitz bath with neem water. Apply ghee on stitches.",
        tip: "Practice gentle walking to improve circulation and healing."
      },
      {
        title: "Postpartum Nutrition",
        remedy: "Eat ghee-laden meals. Drink badam milk twice daily.",
        tip: "Traditional wisdom: 40 days of special care for complete recovery."
      }
    ],
    babycare: [
      {
        title: "Colic Relief",
        remedy: "Gentle tummy massage with warm mustard oil. Give gripe water.",
        tip: "Hold baby upright after feeding and burp properly."
      },
      {
        title: "Diaper Rash",
        remedy: "Apply coconut oil with turmeric. Use cornstarch powder.",
        tip: "Give diaper-free time daily to let skin breathe."
      },
      {
        title: "Cough & Cold",
        remedy: "Tulsi juice with honey. Steam inhalation with eucalyptus.",
        tip: "Elevate baby's head slightly during sleep for better breathing."
      }
    ],
    general: [
      {
        title: "Immunity Boost",
        remedy: "Chyawanprash daily. Golden milk at bedtime.",
        tip: "Maintain regular sleep schedule for whole family."
      },
      {
        title: "Stress Relief",
        remedy: "Practice pranayama. Listen to calming music.",
        tip: "Share your feelings with other mothers - you're not alone!"
      },
      {
        title: "Healthy Recipes",
        remedy: "Sattvic home-cooked meals. Seasonal fruits and vegetables.",
        tip: "Eat together as a family - builds strong bonds."
      }
    ]
  };

  return (
    <section className="elderly-advice-section">
      <div className="container">
        <div className="section-header">
          <h2>Grandma's Wisdom & Traditional Remedies 👵💫</h2>
          <p>Time-tested home remedies and expert tips from experienced elders</p>
        </div>

        <div className="advice-categories">
          <button 
            className={`category-btn ${activeCategory === 'pregnancy' ? 'active' : ''}`}
            onClick={() => setActiveCategory('pregnancy')}
          >
            🤰 Pregnancy Care
          </button>
          <button 
            className={`category-btn ${activeCategory === 'postpartum' ? 'active' : ''}`}
            onClick={() => setActiveCategory('postpartum')}
          >
            👶 Postpartum Care
          </button>
          <button 
            className={`category-btn ${activeCategory === 'babycare' ? 'active' : ''}`}
            onClick={() => setActiveCategory('babycare')}
          >
            🍼 Baby Care
          </button>
          <button 
            className={`category-btn ${activeCategory === 'general' ? 'active' : ''}`}
            onClick={() => setActiveCategory('general')}
          >
            🌿 General Wellness
          </button>
        </div>

        <div className="advice-grid">
          {adviceData[activeCategory].map((advice, index) => (
            <div key={index} className="advice-card">
              <div className="advice-header">
                <h3>{advice.title}</h3>
                <span className="elder-icon">👵</span>
              </div>
              <div className="remedy-section">
                <h4>Traditional Remedy:</h4>
                <p>{advice.remedy}</p>
              </div>
              <div className="tip-section">
                <h4>Pro Tip:</h4>
                <p>{advice.tip}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="community-cta">
          <h3>Have More Questions? Ask Our Community! 👥</h3>
          <p>Connect with experienced mothers and healthcare experts</p>
          <button className="cta-btn primary">Join Community Discussion</button>
        </div>
      </div>
    </section>
  );
};

export default ElderlyAdvice;
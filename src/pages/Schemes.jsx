import React from 'react';
import './Schemes.css';

const Schemes = () => {
  const schemes = [
    {
      category: "Government Schemes",
      items: [
        {
          name: "Pradhan Mantri Matru Vandana Yojana",
          description: "Financial assistance for pregnant women and lactating mothers",
          eligibility: "First child, age 19+",
          benefit: "₹5,000 in three installments",
          link: "#"
        },
        {
          name: "Janani Suraksha Yojana",
          description: "Safe motherhood intervention under NRHM",
          eligibility: "All pregnant women from BPL families",
          benefit: "Cash assistance for institutional delivery",
          link: "#"
        },
        {
          name: "Maternity Benefit Program",
          description: "Compensation for wage loss during pregnancy",
          eligibility: "Working women in unorganized sector",
          benefit: "₹6,000 per pregnancy",
          link: "#"
        }
      ]
    },
    {
      category: "State Schemes",
      items: [
        {
          name: "Amma Baby Care Kit (Tamil Nadu)",
          description: "Free baby care kit for newborns",
          eligibility: "All mothers delivering in government hospitals",
          benefit: "16 essential baby care items",
          link: "#"
        },
        {
          name: "KCR Kit (Telangana)",
          description: "Comprehensive kit for mother and baby",
          eligibility: "All pregnant women in government hospitals",
          benefit: "Kit worth ₹2,000 + financial aid",
          link: "#"
        }
      ]
    },
    {
      category: "Private Schemes",
      items: [
        {
          name: "Corporate Maternity Benefits",
          description: "Extended maternity leave and benefits",
          eligibility: "Women in private sector",
          benefit: "26 weeks paid leave + healthcare",
          link: "#"
        },
        {
          name: "Insurance Maternity Covers",
          description: "Health insurance with maternity coverage",
          eligibility: "All women with health insurance",
          benefit: "Coverage for delivery and complications",
          link: "#"
        }
      ]
    }
  ];

  return (
    <div className="schemes-page">
      <div className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Government & Private Schemes 📋</h1>
            <p>Discover financial assistance and support programs for mothers and children</p>
          </div>
        </div>
      </div>

      <div className="schemes-content">
        <div className="container">
          <div className="schemes-grid">
            {schemes.map((schemeCategory, index) => (
              <div key={index} className="scheme-category">
                <h2 className="category-title">{schemeCategory.category}</h2>
                <div className="schemes-list">
                  {schemeCategory.items.map((scheme, schemeIndex) => (
                    <div key={schemeIndex} className="scheme-card">
                      <div className="scheme-header">
                        <h3>{scheme.name}</h3>
                        <span className="scheme-badge">New</span>
                      </div>
                      <p className="scheme-description">{scheme.description}</p>
                      <div className="scheme-details">
                        <div className="detail-item">
                          <span className="detail-label">Eligibility:</span>
                          <span className="detail-value">{scheme.eligibility}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Benefit:</span>
                          <span className="detail-value highlight">{scheme.benefit}</span>
                        </div>
                      </div>
                      <div className="scheme-actions">
                        <button className="apply-btn">Apply Now</button>
                        <button className="info-btn">More Info</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="schemes-cta">
            <div className="cta-content">
              <h3>Need Help Applying for Schemes?</h3>
              <p>Our experts can guide you through the application process</p>
              <button className="cta-btn primary">Get Expert Assistance</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schemes;
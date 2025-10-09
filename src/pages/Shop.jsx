import React, { useState } from 'react';
import './Shop.css';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'pregnancy', name: 'Pregnancy Care', icon: '🤰' },
    { id: 'newborn', name: 'Newborn Essentials', icon: '👶' },
    { id: 'feeding', name: 'Feeding', icon: '🍼' },
    { id: 'bathing', name: 'Bathing & Grooming', icon: '🛁' },
    { id: 'toys', name: 'Toys & Learning', icon: '🧸' },
    { id: 'safety', name: 'Safety', icon: '🛡️' }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Pregnancy Pillow',
      price: 2999,
      originalPrice: 3999,
      category: 'pregnancy',
      image: '🛏️',
      rating: 4.8,
      reviews: 1247,
      description: 'Full body support pillow for comfortable sleep during pregnancy',
      features: ['Hypoallergenic', 'Machine washable', '360° support']
    },
    {
      id: 2,
      name: 'Organic Baby Clothes Set',
      price: 1499,
      originalPrice: 1999,
      category: 'newborn',
      image: '👕',
      rating: 4.9,
      reviews: 892,
      description: '5-piece organic cotton clothing set for newborns',
      features: ['100% Organic Cotton', 'Chemical-free', 'Soft seams']
    },
    {
      id: 3,
      name: 'Electric Breast Pump',
      price: 4599,
      originalPrice: 5999,
      category: 'feeding',
      image: '🍼',
      rating: 4.7,
      reviews: 567,
      description: 'Double electric breast pump with multiple settings',
      features: ['Adjustable suction', 'Quiet operation', 'Portable']
    },
    {
      id: 4,
      name: 'Baby Bath Tub',
      price: 1299,
      originalPrice: 1699,
      category: 'bathing',
      image: '🛁',
      rating: 4.6,
      reviews: 423,
      description: 'Anti-slip baby bath tub with temperature indicator',
      features: ['Non-slip surface', 'Temperature sensor', 'Drain plug']
    },
    {
      id: 5,
      name: 'Educational Activity Gym',
      price: 2299,
      originalPrice: 2999,
      category: 'toys',
      image: '🎪',
      rating: 4.8,
      reviews: 334,
      description: 'Multi-sensory activity gym for baby development',
      features: ['Detachable toys', 'Music & lights', 'Machine washable']
    },
    {
      id: 6,
      name: 'Baby Monitor Camera',
      price: 3899,
      originalPrice: 4999,
      category: 'safety',
      image: '📹',
      rating: 4.7,
      reviews: 678,
      description: 'HD video baby monitor with night vision',
      features: ['Night vision', 'Two-way audio', 'Temperature sensor']
    },
    {
      id: 7,
      name: 'Maternity Support Belt',
      price: 899,
      originalPrice: 1299,
      category: 'pregnancy',
      image: '🎗️',
      rating: 4.5,
      reviews: 289,
      description: 'Adjustable support belt for back pain relief',
      features: ['Adjustable fit', 'Breathable material', 'Washable']
    },
    {
      id: 8,
      name: 'Baby Carrier Wrap',
      price: 1799,
      originalPrice: 2299,
      category: 'newborn',
      image: '👶',
      rating: 4.8,
      reviews: 512,
      description: 'Ergonomic baby carrier for hands-free parenting',
      features: ['Multiple positions', 'Weight distributed', 'Easy to use']
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
    // Show notification or update cart count
  };

  return (
    <div className="shop-page">
      <div className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Baby Products & Essentials 🛍️</h1>
            <p>Carefully curated products for pregnancy, newborns, and growing babies</p>
          </div>
        </div>
      </div>

      <div className="shop-content">
        <div className="container">
          <div className="shop-header">
            <div className="categories-filter">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="cart-summary">
              <span className="cart-count">🛒 {cart.length} items</span>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span className="product-emoji">{product.image}</span>
                  <div className="discount-badge">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </div>
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-features">
                    {product.features.map((feature, index) => (
                      <span key={index} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>
                  
                  <div className="product-rating">
                    <span className="stars">⭐ {product.rating}</span>
                    <span className="reviews">({product.reviews} reviews)</span>
                  </div>
                  
                  <div className="product-pricing">
                    <span className="current-price">₹{product.price}</span>
                    <span className="original-price">₹{product.originalPrice}</span>
                  </div>
                  
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="shop-benefits">
            <div className="benefit-card">
              <div className="benefit-icon">🚚</div>
              <h4>Free Shipping</h4>
              <p>On orders above ₹999</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">↩️</div>
              <h4>Easy Returns</h4>
              <p>30-day return policy</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h4>Quality Assured</h4>
              <p>All products tested & certified</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💝</div>
              <h4>Expert Curated</h4>
              <p>Selected by pediatricians</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
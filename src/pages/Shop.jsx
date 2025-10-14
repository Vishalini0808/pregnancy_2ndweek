import React, { useState } from 'react';
import './Shop.css';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'pregnancy', name: 'Pregnancy Care', icon: '🤰' },
    { id: 'maternity', name: 'Maternity Wear', icon: '👚' },
    { id: 'newborn', name: 'Newborn (0-6M)', icon: '👶' },
    { id: 'infant', name: 'Infant (6-12M)', icon: '🧒' },
    { id: 'feeding', name: 'Feeding', icon: '🍼' },
    { id: 'diapering', name: 'Diapering', icon: '🧷' },
    { id: 'bathing', name: 'Bathing & Care', icon: '🛁' },
    { id: 'toys', name: 'Toys & Learning', icon: '🧸' },
    { id: 'safety', name: 'Safety', icon: '🛡️' },
    { id: 'nursery', name: 'Nursery', icon: '🚼' }
  ];

  const products = [
    // Pregnancy & Maternity Products
    {
      id: 1,
      name: 'Premium Full Body Pregnancy Pillow',
      price: 3499,
      originalPrice: 4999,
      category: 'pregnancy',
      image: '🛏️',
      rating: 4.8,
      reviews: 1247,
      description: 'U-shaped full body support pillow for comfortable sleep during pregnancy',
      features: ['Hypoallergenic', 'Machine washable', '360° support'],
      brand: 'MamaCare',
      delivery: 'Free Delivery',
      stock: 45
    },
    {
      id: 2,
      name: 'Maternity Support Belt - Premium',
      price: 1299,
      originalPrice: 1999,
      category: 'pregnancy',
      image: '🎗️',
      rating: 4.5,
      reviews: 892,
      description: 'Adjustable support belt for back pain relief during pregnancy',
      features: ['Adjustable fit', 'Breathable material', 'Washable'],
      brand: 'ComfortMom',
      delivery: 'Free Delivery',
      stock: 78
    },
    {
      id: 3,
      name: 'Designer Maternity Dress Set',
      price: 2599,
      originalPrice: 3599,
      category: 'maternity',
      image: '👗',
      rating: 4.7,
      reviews: 567,
      description: '3-piece elegant maternity dress set for special occasions',
      features: ['Stretchable fabric', 'Premium quality', 'Comfort fit'],
      brand: 'MomStyle',
      delivery: 'Free Delivery',
      stock: 34
    },

    // Newborn & Infant Products
    {
      id: 4,
      name: 'Organic Cotton Baby Clothes Set',
      price: 1899,
      originalPrice: 2499,
      category: 'newborn',
      image: '👕',
      rating: 4.9,
      reviews: 1567,
      description: '7-piece organic cotton clothing set for newborns (0-3 months)',
      features: ['100% Organic Cotton', 'Chemical-free', 'Soft seams'],
      brand: 'PureBaby',
      delivery: 'Free Delivery',
      stock: 120
    },
    {
      id: 5,
      name: 'Premium Baby Carrier - Ergonomic',
      price: 2899,
      originalPrice: 3899,
      category: 'newborn',
      image: '👶',
      rating: 4.8,
      reviews: 834,
      description: 'Ergonomic baby carrier with multiple carrying positions',
      features: ['Hip-healthy design', 'Adjustable straps', 'Machine washable'],
      brand: 'CarryComfort',
      delivery: 'Free Delivery',
      stock: 56
    },
    {
      id: 6,
      name: 'Interactive Baby Play Gym',
      price: 2799,
      originalPrice: 3599,
      category: 'infant',
      image: '🎪',
      rating: 4.7,
      reviews: 445,
      description: 'Multi-sensory activity gym with lights, music & detachable toys',
      features: ['5 detachable toys', 'Music & lights', 'Machine washable mat'],
      brand: 'PlayLearn',
      delivery: 'Free Delivery',
      stock: 89
    },

    // Feeding Products
    {
      id: 7,
      name: 'Electric Breast Pump - Double',
      price: 5599,
      originalPrice: 7999,
      category: 'feeding',
      image: '🍼',
      rating: 4.6,
      reviews: 678,
      description: 'Hospital-grade double electric breast pump with multiple settings',
      features: ['Adjustable suction', 'Quiet operation', 'Portable design'],
      brand: 'MamaExpress',
      delivery: 'Free Delivery',
      stock: 23
    },
    {
      id: 8,
      name: 'Anti-Colic Baby Bottle Set',
      price: 1499,
      originalPrice: 1999,
      category: 'feeding',
      image: '🥛',
      rating: 4.8,
      reviews: 923,
      description: '5-piece anti-colic baby bottle set with natural latch nipple',
      features: ['Anti-colic system', 'BPA Free', 'Easy to clean'],
      brand: 'FeedSafe',
      delivery: 'Free Delivery',
      stock: 156
    },

    // Diapering Products
    {
      id: 9,
      name: 'Premium Diaper Bag - Multipurpose',
      price: 2199,
      originalPrice: 2999,
      category: 'diapering',
      image: '🎒',
      rating: 4.7,
      reviews: 512,
      description: 'Spacious multipurpose diaper bag with insulated pockets',
      features: ['Water-resistant', 'Multiple pockets', 'Insulated bottle holder'],
      brand: 'DadGear',
      delivery: 'Free Delivery',
      stock: 67
    },
    {
      id: 10,
      name: 'Baby Wipes - 99% Water',
      price: 499,
      originalPrice: 699,
      category: 'diapering',
      image: '🧻',
      rating: 4.9,
      reviews: 2341,
      description: 'Hypoallergenic baby wipes with 99% water, gentle on skin',
      features: ['99% water', 'Hypoallergenic', 'Thick & soft'],
      brand: 'PureTouch',
      delivery: 'Free Delivery',
      stock: 289
    },

    // Bathing & Care
    {
      id: 11,
      name: 'Baby Bath Tub with Thermometer',
      price: 1599,
      originalPrice: 2199,
      category: 'bathing',
      image: '🛁',
      rating: 4.6,
      reviews: 423,
      description: 'Anti-slip baby bath tub with built-in temperature indicator',
      features: ['Non-slip surface', 'Temperature sensor', 'Drain plug'],
      brand: 'BathSafe',
      delivery: 'Free Delivery',
      stock: 78
    },
    {
      id: 12,
      name: 'Organic Baby Care Kit',
      price: 1299,
      originalPrice: 1699,
      category: 'bathing',
      image: '🧴',
      rating: 4.8,
      reviews: 667,
      description: 'Complete organic baby care kit with shampoo, oil & lotion',
      features: ['100% natural', 'Dermatologist tested', 'Gentle formula'],
      brand: 'NatureBaby',
      delivery: 'Free Delivery',
      stock: 145
    },

    // Toys & Learning
    {
      id: 13,
      name: 'Educational Activity Cube',
      price: 1899,
      originalPrice: 2499,
      category: 'toys',
      image: '🎲',
      rating: 4.7,
      reviews: 334,
      description: 'Multi-functional activity cube with 6 sides of learning fun',
      features: ['6 activity sides', 'Fine motor skills', 'Colorful design'],
      brand: 'LearnPlay',
      delivery: 'Free Delivery',
      stock: 56
    },
    {
      id: 14,
      name: 'Soft Building Blocks Set',
      price: 899,
      originalPrice: 1299,
      category: 'toys',
      image: '🧱',
      rating: 4.5,
      reviews: 278,
      description: '48-piece soft building blocks set for safe creative play',
      features: ['Soft material', 'Various shapes', 'Easy to clean'],
      brand: 'SoftPlay',
      delivery: 'Free Delivery',
      stock: 189
    },

    // Safety Products
    {
      id: 15,
      name: 'Smart Baby Monitor Camera',
      price: 4899,
      originalPrice: 6499,
      category: 'safety',
      image: '📹',
      rating: 4.7,
      reviews: 892,
      description: 'HD video baby monitor with night vision and two-way audio',
      features: ['Night vision', 'Two-way audio', 'Temperature sensor'],
      brand: 'SafeWatch',
      delivery: 'Free Delivery',
      stock: 34
    },
    {
      id: 16,
      name: 'Baby Proofing Safety Kit',
      price: 1799,
      originalPrice: 2399,
      category: 'safety',
      image: '🛡️',
      rating: 4.6,
      reviews: 445,
      description: 'Complete baby proofing kit with corner guards, outlet covers',
      features: ['12 safety items', 'Easy installation', 'Durable material'],
      brand: 'HomeSafe',
      delivery: 'Free Delivery',
      stock: 89
    },

    // Nursery Products
    {
      id: 17,
      name: 'Convertible Baby Crib',
      price: 12599,
      originalPrice: 15999,
      category: 'nursery',
      image: '🛏️',
      rating: 4.8,
      reviews: 223,
      description: '3-in-1 convertible crib that grows with your baby',
      features: ['Convertible design', 'Solid wood', 'Adjustable height'],
      brand: 'SleepWell',
      delivery: 'Free Delivery',
      stock: 12
    },
    {
      id: 18,
      name: 'Nursery Glider Rocking Chair',
      price: 8999,
      originalPrice: 11999,
      category: 'nursery',
      image: '🪑',
      rating: 4.7,
      reviews: 156,
      description: 'Comfortable glider rocking chair for nursing and bonding',
      features: ['Smooth gliding', 'Padded arms', 'Reclining feature'],
      brand: 'ComfortNurse',
      delivery: 'Free Delivery',
      stock: 8
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
    // You can add toast notification here
  };

  const getCategoryName = (categoryId) => {
    return categories.find(cat => cat.id === categoryId)?.name || '';
  };

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <div className="shop-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Baby & Mother Care Products 🛍️</h1>
            <p>Everything you need for pregnancy, newborns, and growing babies - carefully curated by experts</p>
            <div className="hero-stats">
              <div className="stat">
                <strong>1000+</strong>
                <span>Products</span>
              </div>
              <div className="stat">
                <strong>50+</strong>
                <span>Brands</span>
              </div>
              <div className="stat">
                <strong>1L+</strong>
                <span>Happy Parents</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-content">
        <div className="container">
          {/* Shop Header with Filters */}
          <div className="shop-header">
            <div className="filter-section">
              <div className="categories-filter">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-name">{category.name}</span>
                  </button>
                ))}
              </div>
              
              <div className="sort-filter">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>
            
            <div className="cart-summary">
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{cart.length} items</span>
              <span className="cart-total">
                ₹{cart.reduce((total, item) => total + item.price, 0)}
              </span>
            </div>
          </div>

          {/* Products Count */}
          <div className="products-info">
            <h2>{getCategoryName(activeCategory)}</h2>
            <p>Showing {sortedProducts.length} products</p>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {sortedProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span className="product-emoji">{product.image}</span>
                  <div className="discount-badge">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </div>
                  <div className="brand-tag">{product.brand}</div>
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
                    <div className="rating-stars">
                      {'⭐'.repeat(Math.floor(product.rating))}
                      <span className="rating-value">{product.rating}</span>
                    </div>
                    <span className="reviews">({product.reviews.toLocaleString()} reviews)</span>
                  </div>
                  
                  <div className="delivery-info">
                    <span className="delivery-badge">{product.delivery}</span>
                    <span className="stock-info">{product.stock} in stock</span>
                  </div>
                  
                  <div className="product-pricing">
                    <span className="current-price">₹{product.price.toLocaleString()}</span>
                    <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="savings">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </div>
                  
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    <span className="cart-icon">🛒</span>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Shop Benefits */}
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
            <div className="benefit-card">
              <div className="benefit-icon">🏥</div>
              <h4>Doctor Approved</h4>
              <p>Medically safe products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
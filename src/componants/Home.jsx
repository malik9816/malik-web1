import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to TwinShz</h1>
        <p>Your destination for fresh, organic, and locally-sourced food products.</p>
        <button className="shop-now-btn">Shop Now</button>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Fresh Apples</h3>
            <p>Crisp, juicy organic apples from local farms.</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Whole Grain Bread</h3>
            <p>Healthy, freshly-baked whole grain bread.</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Organic Carrots</h3>
            <p>Crunchy, sweet carrots perfect for any meal.</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        <div className="product-list">
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Fresh Apples</h3>
            <p>Crisp, juicy organic apples from local farms.</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Whole Grain Bread</h3>
            <p>Healthy, freshly-baked whole grain bread.</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Organic Carrots</h3>
            <p>Crunchy, sweet carrots perfect for any meal.</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Whole Grain Bread</h3>
            <p>Healthy, freshly-baked whole grain bread.</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Organic Carrots</h3>
            <p>Crunchy, sweet carrots perfect for any meal.</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        <div className="product-list">
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Fresh Apples</h3>
            <p>Crisp, juicy organic apples from local farms.</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Whole Grain Bread</h3>
            <p>Healthy, freshly-baked whole grain bread.</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Organic Carrots</h3>
            <p>Crunchy, sweet carrots perfect for any meal.</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>At <strong>TwinShz</strong>, we prioritize quality, sustainability, and supporting local farmers. Here's why you should shop with us:</p>
        <ul>
          <li>100% organic and fresh products</li>
          <li>Supporting local farmers and producers</li>
          <li>Eco-friendly packaging</li>
          <li>Fair prices with no compromise on quality</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;

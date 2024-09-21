import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Our Food Products</h2>
      <p>
        Welcome to <strong>TwinShz</strong>, your go-to destination for high-quality, fresh, and healthy food products.
        We specialize in offering a wide range of organic and locally-sourced food items that are perfect for your daily
        meals. Our mission is to promote healthy eating habits by providing natural and unprocessed foods.
      </p>
      <p>
        Whether you're looking for fresh fruits, vegetables, grains, or dairy products, we have it all. Each item is
        carefully selected to ensure the highest standards of freshness and nutritional value. We work closely with
        local farmers and producers to bring you the best seasonal products at fair prices.
      </p>
      <h3>Our Values</h3>
      <ul>
        <li><strong>Quality:</strong> We are committed to delivering the best food products with no compromise on quality.</li>
        <li><strong>Sustainability:</strong> We believe in sourcing our food sustainably to ensure a healthier planet for future generations.</li>
        <li><strong>Community:</strong> Supporting local farmers and producers is at the heart of what we do. By purchasing from us, you're supporting small businesses.</li>
        <li><strong>Freshness:</strong> Our products are delivered fresh, straight from the farm to your kitchen.</li>
      </ul>
      <p>
        Join us on our mission to make healthy food accessible to everyone. We are here to make your grocery shopping
        experience easy, convenient, and enjoyable. Eat better, live better with <strong>TwinShz</strong>.
      </p>
    </div>
  );
}

export default About;

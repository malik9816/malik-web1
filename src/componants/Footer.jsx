import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 TwinShz. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

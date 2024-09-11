import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer-container">
    <div className="footer-section">
      <ul className="footer-links">
        <li><a href="/support">Support</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/legal">Legal</a></li>
      </ul>
    </div>
    
    <div className="footer-section">
      <ul className="footer-links">
        <li><a href="#">PSN Terms of Service</a></li>
        <li><a href="#">Software Usage Terms</a></li>
        <li><a href="#">PS Store Cancellation Policy</a></li>
        <li><a href="#">About Ratings</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <ul className="social-links">
        <li><a href="https://www.facebook.com/playstation" target="_blank" rel="noopener noreferrer" aria-label="PlayStation on Facebook">Facebook</a></li>
        <li><a href="https://www.twitter.com/playstation" target="_blank" rel="noopener noreferrer" aria-label="PlayStation on Twitter">X</a></li>
        <li><a href="https://www.instagram.com/playstation" target="_blank" rel="noopener noreferrer" aria-label="PlayStation on Instagram">Instagram</a></li>
        <li><a href="https://www.youtube.com/playstation" target="_blank" rel="noopener noreferrer" aria-label="PlayStation on YouTube">YouTube</a></li>
      </ul>
    </div>
    <div className="footer-info">
          <p>&copy; 2024 My Interactive Entertainment LLC. All Rights Reserved.</p>
          <p>PlayStation, PlayStation logo, and other marks are trademarks of My Interactive Entertainment Inc.</p>
        </div>
  </footer>
  )
}

export default Footer

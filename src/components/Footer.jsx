import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';
const logo = "/assets/linklogo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1: Logo & Socials */}
        <div className="footer-column logo-section">
          <img src={logo} alt="Linkcode Logo" className="footer-logo" />
          <p className="follow-text">Follow us</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/hashtag/linkcodetechnologies" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/linkcodetechnology/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
            <a href="https://wa.me/919604430489" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/accounts/login/?next=%2Flinkcode_technologies%2F&source=omni_redirect" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          </div>
        </div>

        {/* Column 2: Contact */}
        <div className="footer-column">
          <h3>Contact</h3>
          <a href="https://www.google.com/maps/search/?api=1&query=Barve+Memorial+Complex+Office+No+12+Third+floor+Jangali+Maharaj+Rd+Shivajinagar+Pune+Maharashtra+411005" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Barve Memorial Complex, Office No 12, Third floor, Jangali Maharaj Rd, opposite Panchali Hotel, Shivajinagar, Pune, Maharashtra 411005</p>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@linkcode.in" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-details">
              <p>hr@linkcode.in</p>
              <p>info@linkcode.in</p>
            </div>
          </a>
          <a href="tel:+919604430489" className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p>+91 9604430489</p>
          </a>
        </div>

        {/* Column 3: More Links */}
        <div className="footer-column">
          <h3>More Links</h3>
          <ul>
            <li><Link to="/reviews">Review Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/placements">Placements</Link></li>
          </ul>
        </div>

        {/* Column 4: Stay Updated */}
        <div className="footer-column">
          <h3>Stay Updated</h3>
          <p className="stay-updated-text">Get the latest course updates and career tips</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Copyright © 2026 LinkCode. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const navigationLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: '#', icon: '📱' },
    { label: 'Twitter', href: '#', icon: '🐦' },
    { label: 'Instagram', href: '#', icon: '📷' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Main Info */}
          <div className="footer-section">
            <h3 className="footer-title">Society of Engineering Students</h3>
            <p className="footer-tagline">Empowering future engineers</p>
            <a 
              href="https://www.jkuat.ac.ke/clubs/ses/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Visit our website
            </a>
          </div>

          {/* Navigation Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <nav className="footer-nav">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-nav-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Connect With Us</h4>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} Society of Engineering Students. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
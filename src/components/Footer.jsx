import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h2>About Me</h2>
          <p>
            Passionate frontend developer skilled in React, 
            TailwindCSS, and modern web technologies. 
            I love building interactive and user-friendly applications.
          </p>
        </div>

        <div className="footer-box">
          <h2>Contact</h2>
          <p>+91 93613 23701</p>
          <p>sanjaysam165@gmail.com</p>
          <p>Dharmapuri, Tamil Nadu</p>
        </div>

        <div className="footer-box">
          <h2>Follow Me</h2>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sanjay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className="nav-right">
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </div>
      </nav>
      <h2 style={{ textAlign: 'center', marginTop: '20px', fontSize: '2rem', fontWeight: 'bold' }}>My Projects</h2>
      <div style={{ margin: '40px 0' }}>
        <div style={{ background: '#162354', color: 'white', borderRadius: '16px', boxShadow: '0 4px 16px #0002', padding: '24px', margin: '24px 24px 0 24px', maxWidth: '95%' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', fontSize: '1.4rem' }}>
            <span style={{ color: '#4caf50', fontSize: '2rem', marginRight: '12px' }}>🛡</span> Hate Speech Detection (Data Science)
          </h3>
          <p>A machine learning project to classify social media text into hate speech, offensive, or neutral categories. This helps in monitoring harmful content and creating safer online communities.</p>
          <b>Key Features:</b>
          <ul>
            <li>Data preprocessing (cleaning text, removing stop words, stemming/lemmatization).</li>
            <li>Trained with machine learning algorithms (Logistic Regression, Naive Bayes, SVM).</li>
            <li>Used NLP techniques like TF-IDF and Word Embeddings.</li>
            <li>Achieved high accuracy in detecting hate/offensive language.</li>
            <li>Helps social platforms flag harmful content automatically.</li>
          </ul>
        </div>
        <div style={{ background: '#162354', color: 'white', borderRadius: '16px', boxShadow: '0 4px 16px #0002', padding: '24px', margin: '24px', maxWidth: '95%' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', fontSize: '1.4rem' }}>
            <span style={{ color: '#ffc107', fontSize: '2rem', marginRight: '12px' }}>🛒</span> Wishlist Product Price Comparison (Web Application)
          </h3>
          <p>A responsive web application that allows users to create a wishlist of products and compare prices across multiple e-commerce platforms before making a purchase.</p>
          <b>Key Features:</b>
          <ul>
            <li>User-friendly interface with wishlist creation and management.</li>
            <li>Product search and add-to-wishlist functionality.</li>
            <li>Real-time price comparison across multiple websites (Amazon, Flipkart, etc).</li>
            <li>Responsive design that works across desktop, tablet, and mobile.</li>
            <li>Improves shopping experience by helping users find the best deals easily.</li>
          </ul>
        </div>
      </div>
      <footer class="footer">
    <div class="footer-container">

      
      <div class="footer-box">
        <h2>About Me</h2>
        <p>
          Passionate frontend developer skilled in React, 
          TailwindCSS, and modern web technologies. 
          I love building interactive and user-friendly applications.
        </p>
      </div>

      <div class="footer-box">
        <h2>Contact</h2>
        <p>+91 93613 23701</p>
        <p>sanjaysam165@gmail.com</p>
        <p> Dharmapuri,</p>
      </div>

      <div class="footer-box">
        <h2>Follow Me</h2>
        <a href="#">In</a>
      </div>

    </div>

    <div class="footer-bottom">
      © 2026 sanjay. All rights reserved.
    </div>
  </footer>
    </>
  );
}

export default Projects;

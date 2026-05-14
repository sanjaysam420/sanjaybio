import React from "react";
import Layout from "./components/Layout";

function Projects() {
  return (
    <Layout>
      <div className="project-list">
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', fontWeight: 'bold' }}>My Projects</h2>
        
        <div className="project-card">
          <h3>
            <span>🛡</span> Hate Speech Detection (Data Science)
          </h3>
          <p>A machine learning project to classify social media text into hate speech, offensive, or neutral categories. This helps in monitoring harmful content and creating safer online communities.</p>
          <div style={{ marginTop: '20px' }}>
            <b>Key Features:</b>
            <ul>
              <li>Data preprocessing (cleaning text, removing stop words, stemming/lemmatization).</li>
              <li>Trained with machine learning algorithms (Logistic Regression, Naive Bayes, SVM).</li>
              <li>Used NLP techniques like TF-IDF and Word Embeddings.</li>
              <li>Achieved high accuracy in detecting hate/offensive language.</li>
              <li>Helps social platforms flag harmful content automatically.</li>
            </ul>
          </div>
        </div>

        <div className="project-card">
          <h3>
            <span>🛒</span> Wishlist Product Price Comparison (Web Application)
          </h3>
          <p>A responsive web application that allows users to create a wishlist of products and compare prices across multiple e-commerce platforms before making a purchase.</p>
          <div style={{ marginTop: '20px' }}>
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
      </div>
    </Layout>
  );
}

export default Projects;


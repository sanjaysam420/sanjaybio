import React from "react";
import Layout from "./components/Layout";

function Resume() {
  return (
    <Layout>
      <div className="resume-container">
        <div className="resume-paper">
          <h2>Sanjay</h2>
          <div style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1rem', opacity: 0.8 }}>
            Pennagaram(Tk), Dharmapuri-636701<br />
            <span style={{ color: '#ffd600' }}>+91 93613 23701</span> &nbsp;|&nbsp; 
            <span style={{ color: '#ffd600' }}>sanjaysam165@gmail.com</span>
          </div>
          
          <hr style={{ border: 'none', borderTop: '1px solid #333', margin: '20px 0' }} />

          <div className="resume-section">
            <b>Career Objective</b>
            <p>
              In today's fast job-driven era I improve my programming, communication, and teamwork skills. I want to contribute my knowledge and continue learning while taking an active member for the organization's success.
            </p>
          </div>

          <div className="resume-section">
            <b>Education</b>
            <p>
              B.Sc - Computer Science - AVS College of Arts and Science (2019 - 2022)<br /> 
              Percentage: 85%
            </p>
            <p>
              Higher Secondary Course (2019)<br /> 
              Percentage: 60%
            </p>
            <p>
              Secondary School Certificate (SSC) (2016)<br /> 
              Percentage: 75%
            </p>
          </div>

          <div className="resume-section">
            <b>Technical Skills</b>
            <p>
              React, HTML, CSS, JavaScript, Machine Learning, Python, SQL
            </p>
          </div>

          <div className="resume-section">
            <b>Soft Skills</b>
            <p>
              Problem Solving, Analytical Skills, Time Management, Teamwork, Communication, Leadership
            </p>
          </div>

          <div className="resume-section">
            <b>Projects</b>
            <p>
              <strong>Hate Speech Detection using Data Science</strong><br />
              Used machine learning and data science tools to build a speech classification system.
            </p>
            <p>
              <strong>Wishlist Product Price Comparison</strong><br />
              Built a responsive web application for price comparison across multiple platforms.
            </p>
          </div>

          <div className="resume-section">
            <b>Internships</b>
            <p>
              <strong>DMX Tech Service Pvt. Ltd.</strong> - Machine Learning Intern (Jan 2026 - Apr 2026)
            </p>
          </div>

          <div className="resume-section">
            <b>Certificates</b>
            <p>
              React | Digital Image Processing | Advanced Computer Architecture
            </p>
          </div>

          <div className="resume-section">
            <b>Hobbies / Interests</b>
            <p>
              Mobile Games, Music, Football
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
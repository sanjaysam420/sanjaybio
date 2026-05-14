import React from "react";
import Layout from "./components/Layout";

function About() {
  return (
    <Layout>
      <div className="about-grid">
        <div className="about-text">
          <h2>About Me</h2>
          <p>Hi, I'm <b>Sanjay</b>, a passionate <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>Frontend Developer</span> who enjoys building interactive and user-friendly web applications. I specialize in React, Tailwind CSS, and modern JavaScript frameworks.</p>
          <p>I believe in writing clean, maintainable code and love turning creative ideas into real-world solutions that impact users.</p>
          
          <h2 style={{ marginTop: '32px' }}>My Journey</h2>
          <p>I began my coding journey with HTML, CSS, and JavaScript, and gradually explored advanced frameworks like React. Along the way, I also gained experience in Python and SQL, which gave me a strong understanding of both frontend and backend development.</p>
          <p>My goal is to keep learning and contributing to projects that combine creativity and technology, while constantly improving my problem-solving and design skills.</p>
        </div>

        <div className="courses-list">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Completed Courses</h2>
          <div className="course-item">
            Cloud Computing
            <div style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>Completed</div>
          </div>
          <div className="course-item">
            Advanced Computer Architecture
            <div style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>Completed</div>
          </div>
          <div className="course-item">
            Digital Image Processing
            <div style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>Completed</div>
          </div>
          <div className="course-item">
            Python Programming
            <div style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>Completed</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;


import { Link } from "react-router-dom";

function Resume() {
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
      <div style={{ minHeight: '100vh', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '40px 0' }}>
        <div style={{ background: '#111', color: 'white', borderRadius: '12px', padding: '32px', maxWidth: '600px', width: '100%', margin: '0 auto', boxShadow: '0 4px 32px #0008', border: '1px solid #444' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', marginBottom: '8px', letterSpacing: '1px' }}>Sanjay</h2>
          <div style={{ textAlign: 'center', marginBottom: '16px', fontSize: '1rem' }}>
            pennagaram(Tk), Dharmapur-636701<br />
            <span style={{ color: '#ffd600' }}>+91 93613 23701</span> &nbsp;|&nbsp; <span style={{ color: '#ffd600' }}>sanjaysam165@gmail.com</span> &nbsp;|&nbsp; <a href="#" style={{ color: '#4fc3f7' }}>LinkedIn</a>
          </div>
          <hr style={{ border: '1px solid #333', margin: '16px 0' }} />
          <div style={{ marginBottom: '18px' }}>
            <b style={{ color: '#ff1744' }}>Career Objective</b>
            <div style={{ marginLeft: '12px', marginTop: '4px', fontSize: '0.98rem' }}>
              In today's fast job-driven era I improve my programming, communication, and teamwork skills. I want to contribute my knowledge and continue learning while taking an active member for the organization's success.
            </div>
          </div>
          <div style={{ marginBottom: '18px' }}>
            <b style={{ color: '#ff1744' }}>Education</b>
            <div style={{ marginLeft: '12px', marginTop: '4px', fontSize: '0.98rem' }}>
              B.sc - Computer Science - AVS college of arts and science (2019 - 2022)<br /> Percentage: 85%
              <br />
              high.secondry.course(2019)<br /> Percentage: 60% 
              <br />
              Secondary School Certificate (SSC)(2016)<br /> Percentage: 75% 
            </div>
          </div>
          <div style={{ marginBottom: '18px' }}>
            <b style={{ color: '#ff1744' }}>Technical & Soft Skills</b>
            <div style={{ marginLeft: '12px', marginTop: '4px', fontSize: '0.98rem' }}>
              <span style={{ color: '#ff4081' }}>React</span>,<span style={{ color: '#ff4081' }}>HTML</span>, <span style={{ color: '#ff4081' }}>CSS</span>, <span style={{ color: '#ff4081' }}>JavaScript</span>, <span style={{ color: '#ff4081' }}>Machine Learning</span>, <span style={{ color: '#ff4081' }}>Problem Solving</span>, <span style={{ color: '#ff4081' }}>Analytical Skills</span>, <span style={{ color: '#ff4081' }}>Time Management</span>, <span style={{ color: '#ff4081' }}>Teamwork</span>, <span style={{ color: '#ff4081' }}>Communication</span>, <span style={{ color: '#ff4081' }}>Leadership</span>
            </div>
          </div>
          <div style={{ marginBottom: '18px' }}>
            <b style={{ color: '#ff1744' }}>Projects</b>
            <div style={{ marginLeft: '12px', marginTop: '4px', fontSize: '0.98rem' }}>
              <b>Hate Speech Detection using Data Science</b><br />
              Used machine learning and data science tools to build a speech classification system, detecting the most probable context containing hate, offensive, or neutral content.
              <br /><br />
              <b>Wishlist Product Price Comparison</b><br />
              Built a responsive web application for price comparison of wishlist products across multiple e-commerce platforms, helping users find the best deals efficiently.
            </div>
          </div>
          <div style={{ marginBottom: '18px' }}>
            <b style={{ color: '#ff1744' }}>Internships</b>
            <div style={{ marginLeft: '12px', marginTop: '4px', fontSize: '0.98rem' }}>
              <b>DMX Tech service Pvt. Ltd.</b> - Machine Learning Intern (Jan 2026 - Apr 2026)
              <br />
            </div>
          </div>
          <div style={{ marginBottom: '18px' }}>
            <b style={{ color: '#ff1744' }}>Certificates</b>
            <div style={{ marginLeft: '12px', marginTop: '4px', fontSize: '0.98rem' }}>
              React  &nbsp;|&nbsp; Digital Image Processing &nbsp;|&nbsp; Advance Computer Architecture 
            </div>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <b style={{ color: '#ff1744' }}>Hobbies / Interests</b>
            <div style={{ marginLeft: '12px', marginTop: '4px', fontSize: '0.98rem' }}>
              mobile Game,music, Football
            </div>
          </div>
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

export default Resume;
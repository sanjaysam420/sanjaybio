import { Link } from "react-router-dom";

function About() {
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
      <div style={{ background: '#162354', display: 'flex', justifyContent: 'center', gap: '40px', padding: '40px', }}>
        <div style={{ background: 'white', borderRadius: '16px', padding: '32px', maxWidth: '500px', flex: 1 }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '2rem' }}>About Me</h2>
          <p>Hi, I'm <b>sanjay</b>, a passionate <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>Frontend Developer</span> who enjoys building interactive and user-friendly web applications. I specialize in React, Tailwind CSS, and modern JavaScript frameworks.</p>
          <p>I believe in writing clean, maintainable code and love turning creative ideas into real-world solutions that impact users.</p>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '32px' }}>My Journey</h2>
          <p>I began my coding journey with HTML, CSS, and JavaScript, and gradually explored advanced frameworks like React. Along the way, I also gained experience in Python and SQL, which gave me a strong understanding of both frontend and backend development.</p>
          <p>My goal is to keep learning and contributing to projects that combine creativity and technology, while constantly improving my problem-solving and design skills.</p>
        </div>
        <div style={{ background: '#2b386b', color: 'white', borderRadius: '16px ',padding: '32px', maxWidth: '400px', flex: 1 }}>
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem' }}>Completed Courses</h2>
          <div style={{ background: 'white', color: '#162354', borderRadius: '12px', padding: '16px', margin: '16px 0', fontWeight: 'bold' }}>
            Cloud Computing
            <div style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>Completed </div>
          </div>
          <div style={{ background: 'white', color: '#162354', borderRadius: '12px', padding: '16px', margin: '16px 0', fontWeight: 'bold' }}>
            Advanced Computer Architecture
            <div style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>Completed </div>
          </div>
          <div style={{ background: 'white', color: '#162354', borderRadius: '12px', padding: '16px', margin: '16px 0', fontWeight: 'bold' }}>
            Digital Image Processing
            <div style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>Completed </div>
          </div>
          <div style={{ background: 'white', color: '#162354', borderRadius: '12px', padding: '16px', margin: '16px 0', fontWeight: 'bold' }}>
            Python Programming
            <div style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>Completed</div>
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

export default About;

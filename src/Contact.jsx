import { Link } from "react-router-dom";

function Contact() {
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
      <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'url(https://wallpaperbat.com/img/704149-graph-web-abstract-4k-hd-abstract-4k-wallpaper-image-background-photo-and-picture.jpg) center/cover no-repeat' }}>
        <form style={{ background: 'rgba(10, 20, 40, 0.85)', borderRadius: '16px', padding: '40px', maxWidth: '500px', width: '100%', boxShadow: '0 4px 32px #0005', color: 'white', margin: '40px 0' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', marginBottom: '8px' }}>Contact Me</h2>
          <p style={{ textAlign: 'center', marginBottom: '32px' }}>Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you soon!</p>
          <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '16px', fontSize: '1rem' }} />
          <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '16px', fontSize: '1rem' }} />
          <textarea placeholder="Your Message" rows={5} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '24px', fontSize: '1rem' }} />
          <button type="submit" style={{ width: '100%', background: '#ffd600', color: '#222', fontWeight: 'bold', border: 'none', borderRadius: '6px', padding: '14px', fontSize: '1.1rem', cursor: 'pointer' }}>Send Message</button>
        </form>
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

export default Contact;

import profile from "./assets/sam.jpeg";
import html from "./assets/html.png";
import React from "./assets/React.png";
import css from "./assets/css.png";
import python from "./assets/python.jpg";
import js from "./assets/js.png";
import sql from "./assets/sql.png";
import { Link } from "react-router-dom";
function Sam(){
    return(
        <>
  <nav className="navbar">
    <div className="nav-left">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <a href="#">About</a>
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
    </div>

    <div class="nav-right">
      <Link to="/contact">Contact</Link>
    <Link to="/resume">Resume</Link> 
    </div>
  </nav>

  <section className="hero" >
    <div className="hero-text" >
      <h1>Sanjay </h1>
      <p>Frontend Developer</p>
    </div>

    <div className="hero-img">
      <img src={profile} alt="Profile" />

    </div>
  </section>

<section className="info-section">
  <div className="info-card">
    <h3>AVS COLLEGE OF ARTS AND SCIENCE</h3>
    <p className="degree">BSC- Computer Science </p>
    <p>Percentage: 85%(2019–2022)</p>

 
    <h4>high.secondry.course</h4>
    <p>Percentage: 60% (2019)</p>
    
    <h4>Secondary School Certificate (SSC)</h4>
    <p>Percentage: 75% (2016)</p>
  </div>

  <div className="info-card1">
    <h4>DMX Tech Service Pvt Ltd [AICTE]</h4>
    <p>It is a 4 months internship on <b>MACHINE LEARNING</b>.</p>
    <p className="date">(Jan 2026 – April 2026)</p>
    <h4>DMX Tech Pvt Ltd</h4>
    <p>They specialize in IoT, AI, software and firmware design.</p>
</div>  
</section>
<section className="center-bar">

<h2 class="skills-title">Skills</h2>

<div className="info-bar">
<img src={html} alt="Html" />
<img src={React} alt="React" />
<img src={css} alt="Css" />
<img src={python} alt="Python" />
<img src={js} alt="Js" />
<img src={sql} alt="Sql" />

</div>
</section>
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
export default Sam;
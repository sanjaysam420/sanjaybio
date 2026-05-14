import profile from "./assets/sam.jpeg";
import html from "./assets/html.png";
import reactLogo from "./assets/React.png";
import css from "./assets/css.png";
import python from "./assets/python.jpg";
import js from "./assets/js.png";
import sql from "./assets/sql.png";
import React from "react";
import Layout from "./components/Layout";

function Sam() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-text">
          <h1>Sanjay</h1>
          <p>Frontend Developer</p>
        </div>

        <div className="hero-img">
          <img src={profile} alt="Profile" />
        </div>
      </section>

      <section className="info-section">
        <div className="info-card">
          <h3>AVS COLLEGE OF ARTS AND SCIENCE</h3>
          <p className="degree">BSC- Computer Science</p>
          <p>Percentage: 85% (2019–2022)</p>

          <h4>Higher Secondary Course</h4>
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
        <h2 className="skills-title">Skills</h2>
        <div className="info-bar">
          <img src={html} alt="Html" title="HTML5" />
          <img src={reactLogo} alt="React" title="React" />
          <img src={css} alt="Css" title="CSS3" />
          <img src={python} alt="Python" title="Python" />
          <img src={js} alt="Js" title="JavaScript" />
          <img src={sql} alt="Sql" title="SQL" />
        </div>
      </section>
    </Layout>
  );
}

export default Sam;
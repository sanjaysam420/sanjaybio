import React from "react";
import Layout from "./components/Layout";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
  };

  return (
    <Layout>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <p style={{ textAlign: 'center', marginBottom: '32px', opacity: 0.8 }}>
            Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you soon!
          </p>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </Layout>
  );
}

export default Contact;


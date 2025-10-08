// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Title & Description */}
        <div className="contact-header">
          <h2 className="footer-heading">Get In Touch</h2>
          <p>
            Reach out to the Uganda Gold Development Authority for licensing, investment inquiries, or partnership opportunities.
          </p>
        </div>

        {/* Main Content: Cards + Form */}
        <div className="contact-content">
          {/* Left: Info Cards */}
          <div className="contact-info">
            {/* Office Location */}
            <div className="contact-card">
              {/* 👇 Add this line right at the top */}
              <div className="uganda-flag-stripe"></div>
              <div className="card-icon gold-bg-light">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>Office Location</h4>
              <p>
                Ministry of Energy & Mineral Development<br />
                Amber House, Plot 2-12 Apollo Kaggwa Road<br />
                Kampala, Uganda
              </p>
            </div>

            {/* Email */}
            <div className="contact-card">
              <div className="card-icon gold-bg-light">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Email Us</h4>
              <p>
                <a href="mailto:investments@golduganda.ug">investments@golduganda.ug</a>
                <br />
                <a href="mailto:licensing@golduganda.ug">licensing@golduganda.ug</a>
              </p>
            </div>

            {/* Phone */}
            <div className="contact-card">
              <div className="card-icon gold-bg-light">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h4>Call Us</h4>
              <p>
                <strong>Office:</strong> +256 414 234 567<br />
                <strong>24/7 Hotline:</strong> +256 700 123 456
              </p>
              <p className="working-hours">
                <strong>Working Hours:</strong><br />
                Monday - Friday: 8:00 AM - 6:00 PM EAT<br />
                Weekends: By appointment only
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrapper">
            <div className="form-card">
              <h3>Send Us a Message</h3>
              <form action="#" method="POST">
                <input type="text" name="name" placeholder="Your Name *" required />
                <input type="email" name="email" placeholder="Your Email *" required />
                <input type="text" name="subject" placeholder="Subject *" required />
                <textarea name="message" rows="5" placeholder="Your Message *" required></textarea>
                <button type="submit" className="btn-gold">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// src/components/Contact.jsx
import React from 'react';
import './Cont.css';

const Contacts = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Title & Description */}
        <div className="contact-header">
          <h2 className="section-heading"
          style={{ color: '#FFD700' }} 
          >Get In Touch</h2>
          <p>
            Reach out to the Uganda Gold Development Authority for licensing, investment inquiries, or partnership opportunities.
          </p>
        </div>

        {/* Contact Info Cards Only */}
        <div className="contact-info">
          {/* Office Location */}
          <div className="contact-card">
            <div className="card-icon">
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
            <div className="card-icon">
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
              <strong>Office:</strong> <a href="tel:+256414234567">+256 414 234 567</a><br />
              <strong>24/7 Hotline:</strong> <a href="tel:+256700123456">+256 700 123 456</a>
            </p>
            <p className="working-hours">
              <strong>Working Hours:</strong><br />
              Monday - Friday: 8:00 AM - 6:00 PM EAT<br />
              Weekends: By appointment only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
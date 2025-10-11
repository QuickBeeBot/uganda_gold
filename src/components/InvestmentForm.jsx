// src/components/InvestmentForm.jsx
import React, { useState } from 'react';
import './InvestmentForm.css';

const InvestmentForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you! Your investment interest has been submitted.');
    // Optionally: setIsFormVisible(false); to close after submit
  };

  return (
    <section id="InvestmentPaths" className="investment-section">
      <div className="container">
        {/* Always visible: Header & Description */}
        <div className="form-header">
          <h2 className="section-heading"
          style={{ color: '#FFD700' }} 
          >Express Investment Interest</h2>
          <p>
            Complete this form to receive our detailed investment prospectus and schedule a consultation with our mining experts.
          </p>
        </div>

        {/* Toggle Button — centered, modest size */}
        <div className="form-toggle-container">
          <button
            type="button"
            onClick={toggleForm}
            className="btn-gold toggle-form-btn"
          >
            {isFormVisible ? 'Hide Form' : 'Show Investment Form'}
          </button>
        </div>

        {/* Form — only shown when toggled */}
        {isFormVisible && (
          <div className="form-glass">
            <form onSubmit={handleSubmit} className="form-grid">
              {/* Row 1 */}
              <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Row 2 */}
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label htmlFor="company">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter company name"
                />
              </div>

              {/* Row 3 */}
              <div>
                <label htmlFor="country">Country of Origin</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter country"
                  required
                />
              </div>
              <div>
                <label htmlFor="interest">Primary Interest</label>
                <select id="interest" name="interest" required>
                  <option value="">Select investment type</option>
                  <option value="mining-license">Mining License</option>
                  <option value="joint-venture">Joint Venture</option>
                  <option value="equipment-supply">Equipment Supply</option>
                  <option value="refining-operations">Refining Operations</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Row 4: Legal ID Type + Number */}
              <div>
                <label htmlFor="idType">Government ID Type</label>
                <select id="idType" name="idType" required>
                  <option value="">Select ID type</option>
                  <option value="passport">Passport</option>
                  <option value="national-id">National ID Card</option>
                  <option value="drivers-license">Driver’s License</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="idNumber">ID Number</label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  placeholder="Enter ID number"
                  required
                />
              </div>

              {/* Full-width: Budget */}
              <div className="full">
                <label htmlFor="budget">Investment Budget (USD)</label>
                <select id="budget" name="budget" required>
                  <option value="">Select range</option>
                  <option value="1-10m">$1M - $10M</option>
                  <option value="10-50m">$10M - $50M</option>
                  <option value="50-100m">$50M - $100M</option>
                  <option value="100m+">$100M+</option>
                </select>
              </div>

              {/* Full-width: Objectives */}
              <div className="full">
                <label htmlFor="objectives">Investment Objectives</label>
                <textarea
                  id="objectives"
                  name="objectives"
                  rows="4"
                  placeholder="Tell us about your investment goals..."
                  required
                ></textarea>
              </div>

              {/* Full-width: Document Upload */}
              <div className="full">
                <label htmlFor="legalDocument">Upload Legal Document (Passport / ID)</label>
                <input
                  type="file"
                  id="legalDocument"
                  name="legalDocument"
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                />
                <p className="upload-hint">
                  Accepted formats: PDF, JPG, PNG (Max 10MB)
                </p>
              </div>

              {/* Submit Button */}
              <div className="full submit-container">
                <button type="submit" className="btn-gold">
                  Submit Investment Interest
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default InvestmentForm;
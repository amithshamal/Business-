// src/components/BusinessForm.jsx

import React, { useState } from 'react';

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    'business-address': '',
    'business-type': '',
    'address-line-1': '',
    'address-line-2': '',
    city: '',
    zip: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/business-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data saved successfully!');
        // Optionally, redirect or show a success message
      } else {
        console.error('Error saving data:', response.status);
        // Optionally, show an error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Optionally, show an error message
    }
  };

  return (
    <div className="form-container">
      {/* Progress Steps */}
      <div className="progress-steps-container">
        <div className="progress-steps">
          <div className="step">
            <div className="step-number active">1</div>
          </div>
          <div className="step-line half-active"></div>
          <div className="step">
            <div className="step-number">2</div>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-number">3</div>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-number">4</div>
          </div>
        </div>
      </div>

      {/* Form Header */}
      <div className="form-header">
        <h1>Business structure</h1>
        <p>Digitized collects this information to better<br />understand and serve your business</p>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="business-address">Business address</label>
            <div className="select-wrapper">
              <select
                id="business-address"
                className="form-control-select"
                value={formData['business-address']}
                onChange={handleChange}
              >
                <option value="">Registered business address</option>
                <option value="mailing">Mailing address</option>
                <option value="physical">Physical location</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="business-type">Type</label>
            <div className="select-wrapper">
              <select
                id="business-type"
                className="form-control-select"
                value={formData['business-type']}
                onChange={handleChange}
              >
                <option value="">Type of business</option>
                <option value="sole">Sole Proprietorship</option>
                <option value="llc">LLC</option>
                <option value="corporation">Corporation</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address-line-1">Address</label>
            <input
              type="text"
              id="address-line-1"
              className="form-control"
              placeholder="Address line 1"
              value={formData['address-line-1']}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address-line-2">Address Line 2</label>
            <input
              type="text"
              id="address-line-2"
              className="form-control"
              placeholder="Address line 2"
              value={formData['address-line-2']}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              className="form-control"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              id="zip"
              className="form-control"
              placeholder="Zip"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="btn-container">
          <button type="submit" className="btn-primary">
            Continue <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessForm;

// src/components/BusinessForm.jsx

import React from 'react';

const BusinessForm = () => {
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
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="business-address">Business address</label>
            <div className="select-wrapper">
              <select id="business-address" className="form-control-select">
                <option>Registered business address</option>
                <option>Mailing address</option>
                <option>Physical location</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="business-type">Type</label>
            <div className="select-wrapper">
              <select id="business-type" className="form-control-select">
                <option>Type of business</option>
                <option>Sole Proprietorship</option>
                <option>LLC</option>
                <option>Corporation</option>
                <option>Partnership</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address-line-1">Address</label>
            <input type="text" id="address-line-1" className="form-control" placeholder="Address line 1" />
          </div>
          <div className="form-group">
            <label htmlFor="address-line-2">Address Line 2</label>
            <input type="text" id="address-line-2" className="form-control" placeholder="Address line 2" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" className="form-control" placeholder="City" />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip</label>
            <input type="text" id="zip" className="form-control" placeholder="Zip" />
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

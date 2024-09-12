import React, { useState } from 'react';
import './Home.css';
import './Pricing.css'

const Pricing = () => {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle FAQ
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      // If the clicked FAQ is already open, close it
      setOpenFAQ(null);
    } else {
      // Otherwise, open the clicked FAQ
      setOpenFAQ(index);
    }
  };

  return (
    <div className='about'>
      <div className='about-section'>
        <h2>Our Pricing</h2>
      </div>
      <div className="pricing-container">
        <div className="pricing-card">
          <h3>Silver Pack</h3>
          <h2>$55.55</h2>
          <p>Per month</p>
          <ul>
            <li>Adipiscing elit sed do <span className="checkmark">✔️</span></li>
            <li>Eusmod tempor incididunt ut <span className="checkmark">✔️</span></li>
            <li>Labore et dolore magna <span className="checkmark">✔️</span></li>
          </ul>
          <button>Get Now</button>
        </div>

        <div className="pricing-card highlight">
          <h3>Gold Pack</h3>
          <h2>$75.75</h2>
          <p>Per month</p>
          <ul>
            <li>Adipiscing elit sed do <span className="checkmark">✔️</span></li>
            <li>Eusmod tempor incididunt ut <span className="checkmark">✔️</span></li>
            <li>Labore et dolore magna <span className="checkmark">✔️</span></li>
          </ul>
          <button className="highlight-btn">Get Now</button>
        </div>

        <div className="pricing-card">
          <h3>Bronze Pack</h3>
          <h2>$30.50</h2>
          <p>Per month</p>
          <ul>
            <li>Adipiscing elit sed do <span className="checkmark">✔️</span></li>
            <li>Eusmod tempor incididunt ut <span className="checkmark">✔️</span></li>
            <li>Labore et dolore magna <span className="checkmark">✔️</span></li>
          </ul>
          <button>Get Now</button>
        </div>
      </div>

      <div className="marquee">
        <span>DRIVE A NEW CAR EVERYDAY DRIVE A NEW CAR EVERYDAY DRIVE A NEW CAR EVERYDAY</span>
      </div>

      <div className="faq-container">
        <h1>FAQ</h1>

        <div className="faq-item" onClick={() => toggleFAQ(1)}>
          <h3>What are my options? <span className="plus">{openFAQ === 1 ? '-' : '+'}</span></h3>
          {openFAQ === 1 && (
            <p className="faq-answer">Here you can provide details about different options available.</p>
          )}
        </div>

        <div className="faq-item" onClick={() => toggleFAQ(2)}>
          <h3>Can I switch to a different plan? <span className="plus">{openFAQ === 2 ? '-' : '+'}</span></h3>
          {openFAQ === 2 && (
            <p className="faq-answer">Yes, you can switch plans anytime by contacting our support.</p>
          )}
        </div>

        <div className="faq-item" onClick={() => toggleFAQ(3)}>
          <h3>Do you offer non-disclosure signature? <span className="plus">{openFAQ === 3 ? '-' : '+'}</span></h3>
          {openFAQ === 3 && (
            <p className="faq-answer">Yes, we offer non-disclosure agreements for sensitive projects.</p>
          )}
        </div>

        <div className="faq-item" onClick={() => toggleFAQ(4)}>
          <h3>Do you issue refunds? <span className="plus">{openFAQ === 4 ? '-' : '+'}</span></h3>
          {openFAQ === 4 && (
            <p className="faq-answer">Refunds are issued under certain conditions. Please refer to our policy.</p>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default Pricing;

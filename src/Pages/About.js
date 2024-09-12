import React, { useEffect } from 'react'
import "./Home.css"

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the 'animate' class when the section comes into view
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.2, // 20% of the section is visible before the animation starts
      }
    );

    const section = document.querySelector('#fullServiceSection');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the 'animate' class when the service card comes into view
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.2, // 20% of the card is visible before the animation starts
      }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);
  return (
    <div className='about'>
<div className='about-section'>
  <h2>About Us</h2>
</div>
<div className="full-service-container" id="fullServiceSection">
      <div className="full-service-text">
        <h4>WHAT WE DO</h4>
        <h2>FULL-SERVICE DETAILING FOR CARS</h2>
        <p>Welcome to DetailX!</p>
        <p>
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div className="contact-info">
          <div className="contact-icon">&#9742;</div>
          <p>0 800 555 44 33</p>
        </div>
      </div>
      <div className="full-service-images">
        <img
          className="service-image-top"
          src="\image05-copyright-qrttsc249fufksnytysujtj7etjjpi9jfnvenu6q86.jpg"
          alt="Car Interior"
        />
        <img
          className="service-image-bottom"
          src="\image01-copyright.jpg"
          alt="Car Detailing"
        />
      </div>
    </div>
    <div className="service-cards-container">
      <div className="service-card">
        <div className="service-icon">&#127942;</div> {/* Medal icon */}
        <h3>PREMIUM QUALITY</h3>
        <p>Sed do eiusm od tempor</p>
      </div>
      <div className="service-card">
        <div className="service-icon">&#128221;</div> {/* Clipboard icon */}
        <h3>LICENSE & INSURANCE</h3>
        <p>Sed do eiusm od tempor</p>
      </div>
      <div className="service-card">
        <div className="service-icon">&#128104;&#8205;&#127979;</div> {/* Certified person icon */}
        <h3>CERTIFIED EXPERTS</h3>
        <p>Sed do eiusm od tempor</p>
      </div>
      <div className="service-card">
        <div className="service-icon">&#128663;</div> {/* Car icon */}
        <h3>RANGE OF SERVICE</h3>
        <p>Sed do eiusm od tempor</p>
      </div>
    </div>



    </div>
  )
}

export default About
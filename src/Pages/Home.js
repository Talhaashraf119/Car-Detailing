import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the 'animate' class when the section or card comes into view
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.2, // 20% of the section/card is visible before the animation starts
      }
    );

    // Observe the full-service section and service cards
    const fullServiceSection = document.querySelector('#fullServiceSection');
    const cards = document.querySelectorAll('.service-card');

    if (fullServiceSection) {
      observer.observe(fullServiceSection);
    }

    cards.forEach(card => observer.observe(card));

    return () => {
      // Cleanup: Unobserve when the component is unmounted
      if (fullServiceSection) {
        observer.unobserve(fullServiceSection);
      }
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);
  
  return (
    <>
     
      <div className="hero-container">
        <video className="video-bg" autoPlay loop muted>
          <source src="\6157781-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <p className="subtitle">FULL SERVICE AND EXCELLENT QUALITY</p>
          <h1 className="title">CAR DETAILING</h1>
          <p className="scroll-down">SCROLL DOWN</p>
        </div>
      </div>

      {/* Car Detailing Section */}
      <div className="services-container">
        <div className="service-item">
          <img src="\post29-copyright.jpg" alt="Protection Film" />
          <div className="service-text">
            <h3>PROTECTION FILM</h3>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className="service-item">
          <img src="\post30-copyright.jpg" alt="Steam Cleaning" />
          <div className="service-text">
            <h3>STEAM CLEANING</h3>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className="service-item">
          <img src="\post31-copyright.jpg" alt="Rims & Tires Washing" />
          <div className="service-text">
            <h3>RIMS & TIRES WASHING</h3>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className="service-item">
          <img src="\post32-copyright.jpg" alt="Ceramic Coating" />
          <div className="service-text">
            <h3>CERAMIC COATING</h3>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
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

            {/* Service Cards Section */}
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
      <div class="marquee">
        <span>DRIVE A NEW CAR EVERYDAY DRIVE A NEW CAR EVERYDAY DRIVE A NEW CAR EVERYDAY</span>
    </div>
      {/* <!-- New Section Below the Hero Section --> */}
<section class="cta-section">
  <div class="cta-box left-box">
    <div class="cta-content">
      <h4>GET IN TOUCH</h4>
      <h2>HAVE A PROBLEM?</h2>
      <a href="#" class="cta-btn">BOOK NOW</a>
    </div>
  </div>
  <div class="cta-box right-box">
    <div class="cta-content">
      <h4>CAREERS</h4>
      <h2>WANT TO WORK WITH US?</h2>
      <a href="#" class="cta-btn">CONTACT US</a>
    </div>
  </div>
</section>
<section className="contact-section">
  <div className="contact-container">
    <div className="contact-image">
      {/* Image of the car */}
      <img src="\image16-copyright.jpg" alt="Car image" /> {/* Replace with your car image URL */}
    </div>
    <div className="contact-form">
      <h4>CONTACT US</h4>
      <h2>HAVE QUESTIONS? <br /> GET IN TOUCH!</h2>
      <form action="#" method="post">
        <div className="form-row">
          <div className="form-group">
            <input type="text" placeholder="Name" name="first-name" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" name="last-name" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone" name="phone" required />
          </div>
        </div>
        <div className="form-group full-width">
          <textarea placeholder="Message" name="message" rows={4} required defaultValue={""} />
        </div>
        <button type="submit" className="submit-btn">GET IN TOUCH</button>
      </form>
    </div>
  </div>
</section>





    </>
  );
};

export default Home;

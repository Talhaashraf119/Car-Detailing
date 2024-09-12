import React, { useState } from 'react'
import "./Home.css"
import './Services.css'

const Services = () => {
    const testimonials = [
        {
          name: "Linda Moore",
          role: "Office Manager",
          comment: "Ignissimos ducimus quin blanditiis praesentium voluptatem deleniti atque corrupti quos dolores et quas molestias excepturi, scint occaecatti gnissimos ducimus qui blanditiis praesentium.",
          image: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
          name: "John Doe",
          role: "Senior Developer",
          comment: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecatti. Ducimus qui blanditiis praesentium.",
          image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          name: "Sarah White",
          role: "Product Designer",
          comment: "Scint occaecatti ducimus qui blanditiis praesentium deleniti atque corrupti quos dolores et quas molestias excepturi.",
          image: "https://randomuser.me/api/portraits/women/45.jpg"
        }
      ];
      
     
        const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);
      
        const handleImageClick = (testimonial) => {
          setActiveTestimonial(testimonial);
        };
  return (
    <div className='about'>
        <div className='about-section'>
    <h2>Our Services</h2>

  </div>
  
<div>
  <div className="services-section">
    <h5>WHAT WE DO</h5>
    <h2>REPAIRS, MAINTENANCE AND DETAILING SERVICES, PROVIDED WITH EXPERIENCE, CARE, PRECISION AND EXPERTISE.</h2>
    <p>PETER BOWMAN</p>
    <span>Senior Manager</span>
  </div>
  <div className="container">
    <div className="image">
      <img src="\post29-copyright.jpg" alt="Car Detailing" />
      <img src="\post30-copyright.jpg" alt="Car Seat" />
    </div>
    <div className="content">
      <h3>Creative Approach</h3>
      <h2>Professional Hand Carwash &amp; Express Detailing</h2>
      <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
      <ul>
        <li>Adipiscing elit, sed do eiusmod</li>
        <li>Tempor incididunt</li>
        <li>Labore et dolore magna</li>
      </ul>
      <a href="#">About Us</a>
    </div>
    {/* <div className="side-buttons">
      <a href="#"><img src="https://via.placeholder.com/20" alt="Shop" /></a>
      <a href="#"><img src="https://via.placeholder.com/20" alt="Gallery" /></a>
      <a href="#"><img src="https://via.placeholder.com/20" alt="Contact" /></a>
    </div> */}
  </div>
</div>
<div className="testimonial-container">
      <div className="testimonial-content">
        <span className="quote-icon">❝</span>
        <p>{activeTestimonial.comment}</p>
        <h3>{activeTestimonial.name}</h3>
        <p className="role">{activeTestimonial.role}</p>
      </div>
      
      <div className="testimonial-images">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.name}
            className={`profile-img ${activeTestimonial.name === testimonial.name ? 'active' : ''}`}
            onClick={() => handleImageClick(testimonial)}
          />
        ))}
      </div>
    </div>
</div>
  )
}

export default Services
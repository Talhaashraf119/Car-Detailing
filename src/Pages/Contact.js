import React, { useState } from 'react'
import './contact.css'
import './Home.css'

const Contact = () => {
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
    <h2>Contact Us </h2>

  </div>
 <div className="container">
  <div className="contact-left">
    <h2>Contact Us</h2>
    <h1>HAVE QUESTIONS?<br />GET IN TOUCH!</h1>
    <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
    <ul>
      <li>
        <i className="fas fa-map-marker-alt" />
        785 15h Street, Office 478 Berlin
      </li>
      <li>
        <i className="fas fa-phone" />
        +1 800 555 25 69
      </li>
      <li>
        <i className="fas fa-envelope" />
        info@email.com
      </li>
    </ul>
  </div>
  <div className="contact-right">
    <form>
      <div className="input-box">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className="input-box">
        <input type="text" placeholder="Phone" required />
        <input type="text" placeholder="Subject" required />
      </div>
      <textarea placeholder="How can we help you? Feel free to get in touch!" required defaultValue={""} />
      <div className="form-footer">
        <button type="submit">GET IN TOUCH</button>
        <div className="policy">
          <input type="checkbox" id="policy" required />
          <label htmlFor="policy">I agree with the site's <a href="#">privacy policy</a>.</label>
        </div>
      </div>
    </form>
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

export default Contact
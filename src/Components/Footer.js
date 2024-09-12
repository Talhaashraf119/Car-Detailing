import React from 'react'
import './Comp.css'

const Footer = () => {
  return (
    <><footer class="footer">
    <div class="footer-container">
      {/* <!-- Company Info --> */}
      <div class="footer-column">
        <h3>HELLO, WE ARE DETAILX</h3>
        <p>Our experienced technicians provide quality services for your cars.</p>
      </div>
      
      {/* <!-- Office Info --> */}
      <div class="footer-column">
        <div className='footer-info'>
        <h3>OFFICE</h3>
        <p>Germany — 
          785 15h Street, Office 478
          Berlin, De 81566</p>
        <p><a href="mailto:info@email.com">info@email.com</a></p>
        <p><a href="tel:+18005552569">+1 800 555 25 69</a></p>
        </div>
      </div>
  
      {/* <!-- Navigation Links --> */}
      <div class="footer-column">
        <h3>LINKS</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
  
      {/* <!-- Social Media --> */}
      <div class="footer-column">
        <h3>GET IN TOUCH</h3>
        <ul class="social-media">
          <li><a href="#"><i class="fab fa-facebook-f"></i> Facebook</a></li>
          <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="#"><i class="fab fa-dribbble"></i> Dribbble</a></li>
          <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </div>
    
    {/* <!-- Copyright Info --> */}
    <div class="footer-bottom">
      <p>&copy; AncoraThemes 2024. All rights reserved.</p>
    </div>
  </footer></>
  )
}

export default Footer
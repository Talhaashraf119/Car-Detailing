import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Comp.css';

const Navbar = () => {
  
  useEffect(() => {
    // Collapse the navbar when a link is clicked
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarLinks = document.querySelectorAll('.nav-link');

    navbarLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          // Trigger collapse if the navbar is open (for mobile views)
          const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      });
    });

    // Cleanup the event listeners on component unmount
    return () => {
      navbarLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="logo navbar-brand" to="/">Detail<span>X</span></Link>
          <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto nav-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Our Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

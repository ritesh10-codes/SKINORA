import React from "react";
import "./Dashboard.css";
import Slider from "react-slick";
import { useState } from "react";
function Dashboard() {
    const images = [
        require("../l1.jpeg"),
        require("../l2.jpeg"),
        require("../l3.jpeg"),
        require("../l4.jpeg"),
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };
    //   const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     autoplay: true,
    //     autoplaySpeed: 3000
    //   };
  return (
    
    <div className="container">
      <header className="header">
        <div className="logo">
        <img src={require('../LOGO.jpeg')} alt="Clinic Logo" className="logo-img" />
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/gallery">Gallery</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact us</a>
        </nav>
      </header>
      <section className="image-slider">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <img
          src={images[currentIndex]}
          alt="Slide"
          className="slide-img"
        />
        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </section>

      <section className="book-section">
  <a 
    href="https://docs.google.com/forms/d/e/1FAIpQLSdeBLTcEfCteiqRmEfMukDRP5_RDR7jlrfQQknVp6w3dfzNmw/viewform" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="book-btn">Book Appointment</button>
  </a>
</section>

      {/* <section className="book-section">
        <button className="book-btn">Book Appointment</button>
      </section>

      <section className="book-section">
        <button className="book-btn">Book appoint</button>
      </section> */}

<section className="whats-new">
  <h2 className="whats-new-heading">WHAT’S NEW</h2>
  <div className="updates-grid">
    <div className="update-card">
      <h3>✨ New Laser Hair Removal Treatment</h3>
      <p>We’ve introduced the latest Diode laser for painless hair removal. Book now!</p>
      <span>June 18, 2025</span>
    </div>
    <div className="update-card">
      <h3>💸 Flat 30% Off on Hydrafacial</h3>
      <p>This monsoon, get glowing skin with our Hydrafacial. Offer valid till June 30!</p>
      <span>June 15, 2025</span>
    </div>
    <div className="update-card">
      <h3>📍 Free Skin Checkup Camp</h3>
      <p>Join us on June 25 for a free skin diagnosis and expert consultation.</p>
      <span>June 10, 2025</span>
    </div>
    <div className="update-card">
      <h3>📢 Sunday OPD Now Open</h3>
      <p>Dr. Hemesh Sarode will now be available every Sunday from 10 AM to 2 PM.</p>
      <span>June 5, 2025</span>
    </div>
  </div>
</section>


      <footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h3>About Us</h3>
      <p>
        SKINORA is a trusted dermatology and cosmetology clinic offering expert care for skin, hair, and laser treatments.
      </p>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/services">Services</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdeBLTcEfCteiqRmEfMukDRP5_RDR7jlrfQQknVp6w3dfzNmw/viewform">Book Appointments</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>📍 18 Latitude Mall,Kate Wasti ,Punawale ,Pune</p>
      <p>📞 +91 9764949469</p>
      <p>📧 hdsarode@gmail.com</p>
    </div>

    <div className="footer-section">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐 Facebook</a><br />
        <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a><br />
        <a href="https://wa.me/919082615172" target="_blank" rel="noreferrer">💬 WhatsApp</a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} SKINORA Clinic. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
}

export default Dashboard;

import React from "react";
import "./Services.css";

const services = [
  {
    title: "Common Skin Rashes",
    image: "/s3.jpeg  ",
  },
  {
    title: "Psoriasis",
    image: "/s4.jpeg ",
  },
  {
    title: "Alopecia Areata",
    image: "s5.jpeg ",
  },
  {
    title: "Face  Acne",
    image: "s6.jpeg",
  },
 
  {
    title: "Skin Pigmentation ",
    image: "s7.jpeg ",
  },
  {
    title: "Dandruff",
    image: "s8.jpeg ",
  },
  {
    title: "Hydrafacial",
    image: "s9.jpeg ",
  },
  {
    title: "Laser hair removal",
    image: "s10.jpeg ",
  },
  {
    title: "Hair Fall Treatment",
    image: "s11.jpeg ",
  },
  {
    title: "Chemical peel",
    image: "s12.jpeg ",
  },
  {
    title: "Elctro Cautery Treatment",
    image: "s13.jpeg ",
  },
];

const Services = () => {
  return (
    <div className="services-page">
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
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-img" />
            <h3 className="service-title">{service.title}</h3>
          </div>
        ))}
      </div>
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
};

export default Services;

import React from "react";
import "./Gallery.css"; // Renamed CSS file accordingly

const galleryItems = [
  { title: "Dr. Hemesh Sarode", image: "/g1.png" },
  { title: "Dr. J", image: "/g2.png" },
  { title: "Alopecia Areata", image: "/g5.png" },
  { title: "Face Acne", image: "/g6.png" },
  { title: "Skin Pigmentation", image: "/g7.png" },
  { title: "Dandruff", image: "/g8.png" },
  { title: "Hydrafacial", image: "/g9.png" },
  { title: "Laser Hair Removal", image: "/g10.webp" },
//   { title: "Hair Fall Treatment", image: "/g11.png" },
  { title: "Chemical Peel", image: "/g12.png" },
  { title: "Electro Cautery Treatment", image: "/g13.png" },
  { title: "Electro Cautery Treatment", image: "/g14.png" },
//   { title: "Electro Cautery Treatment", image: "/g15.png" },
  { title: "Electro Cautery Treatment", image: "/g16.png" },
];

const Gallery = () => {
  return (
    
    <div className="gallery-page">
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
      <h2 className="gallery-heading">Treatment Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={item.image.trim()}
            //   alt={item.title}
              className="gallery-img"
            />
            {/* <h3 className="gallery-title">{item.title}</h3> */}
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
            <p>📍 18 Latitude Mall, Kate Wasti, Punawale, Pune</p>
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

export default Gallery;

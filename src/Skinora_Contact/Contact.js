import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    
    <div className="contact-page">
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
      <h2 className="contact-heading">Contact Us</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>📍 Address</h3>
          <p>18 Latitude Mall, Kate Wasti, Punawale, Pune</p>

          <h3>📞 Phone</h3>
          <p>+91 9764949469</p>

          <h3>📧 Email</h3>
          <p>hdsarode@gmail.com</p>

          <h3>🕒 Timings</h3>
          <p>Mon - Sat: 10:00 AM- 12:00 PM  to 5:00 PM - 9:30 PM</p>
        </div>

        <div className="map-container">
          <iframe
            title="clinic-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2255738942285!2d73.74724717401576!3d18.56271128254786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9846b3f78b1%3A0x3a3273e7e56c63b2!2sLatitude%20Mall!5e0!3m2!1sen!2sin!4v1718022763632"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        
      </div>

      {/* Optional: Simple Contact Form */}
      {/* <div className="contact-form-section">
        <h3>Send us a message</h3>
        <form
          action=""
          method="POST"
          target="_blank"
        >
          <input type="text" name="entry.123456" placeholder="Your Name" required />
          <input type="email" name="entry.654321" placeholder="Your Email" required />
          <textarea name="entry.987654" placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div> */}
      <footer className="footer">
  <div className="footer-container">
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

export default Contact;

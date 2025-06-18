import React from "react";
import "./About.css";

const doctors = [
  {
    name: "Dr. Hemesh Sarode",
    specialization: "Dermatologist, Cosmetologist & Trichologist",
    image: "/l5.jpeg",
    description:
      "Dr. Hemesh Sarode specializes in dermatology and cosmetology, with expertise in laser treatments, acne scar therapy, vitiligo surgery, and more. He combines advanced medical knowledge with a patient-first approach.",
  },
  {
    name: "Dr. Jayashree Patil",
    specialization: "Skin & Aesthetic Specialist",
    image: "/l6.jpeg",
    description:
      "Dr. Jayashree Patil is known for her commitment to aesthetic care and non-invasive cosmetic solutions. She provides expert services in PRP, anti-aging treatments, pigmentation, and personalized skincare.",
  },
];

const About = () => {
  return (
    <div className="doctors-page">
      <h2>Our Doctors</h2>
      <div className="doctor-list">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <img src={doc.image} alt={doc.name} className="doctor-img" />
            <div className="doctor-info">
              <h3>{doc.name}</h3>
              <p className="specialization">{doc.specialization}</p>
              <p>{doc.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              SKINORA is a trusted dermatology and cosmetology clinic offering
              expert care for skin, hair, and laser treatments.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdeBLTcEfCteiqRmEfMukDRP5_RDR7jlrfQQknVp6w3dfzNmw/viewform">Book Appointments</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>📍 18 Latitude Mall, Kate Wasti, Punawale, Pune</p>
            <p>📞 +91 90826 15172</p>
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

export default About;

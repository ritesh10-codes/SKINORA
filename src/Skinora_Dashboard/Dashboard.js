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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact us</a>
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
        <button className="book-btn">Book Appointment</button>
      </section>

      <section className="book-section">
        <button className="book-btn">Book Appointment</button>
      </section>

      <section className="book-section">
        <button className="book-btn">Book appoint</button>
      </section>

      <section className="whats-new">WHAT’s NEW</section>

      <footer className="footer">Footer</footer>
    </div>
  );
}

export default Dashboard;

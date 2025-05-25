import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "./School-logo.png"; // Replace with actual logo path
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1a1a1a", color: "#fff", padding: "2rem 1rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Logo and Description */}
        <div style={{ flex: "1 1 250px", marginBottom: "1.5rem" }}>
          <img
            src={logo} // Replace with actual logo path
            alt="Sunrise Public School"
            style={{ width: "150px", marginBottom: "1rem" }}
          />
          <p>
            We, at Sunrise School, ensure high quality education which motivates and empowers our students to be lifelong learners and productive members of society.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 200px", marginBottom: "1.5rem" }}>
          <h4 style={{ marginBottom: "1rem", fontWeight: "bold" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><a href="/home" style={linkStyle}>Home</a></li>
            <li><a href="/about" style={linkStyle}>About us</a></li>
            <li><a href="/admissions" style={linkStyle}>Admission</a></li>
            <li><a href="#download" style={linkStyle}>Download</a></li>
            <li><a href="#gallery" style={linkStyle}>Gallery</a></li>
            <li><a href="#news" style={linkStyle}>News</a></li>
            <li><a href="/contact" style={linkStyle}>Contact us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1 1 250px", marginBottom: "1.5rem" }}>
          <h4 style={{ marginBottom: "1rem", fontWeight: "bold" }}>Contact Us</h4>
          <p>• VF64+H2C, Fattepur, Hirapur, Maharashtra 431007</p>
          <p>• +91 74170 72553</p>
          <p><a href="mailto:sunrisepublicschool@gmail.com" style={linkStyle}>sunrisepublicschool@gmail.com</a></p>
        </div>
      </div>

      {/* Social Links */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaFacebookF /></a>
        <a href="https://wa.me/919811680600" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaWhatsapp /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaInstagram /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaYoutube /></a>
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#aaa" }}>
          © {new Date().getFullYear()} Sunrise Public School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Reusable link and icon styles
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "block",
  marginBottom: "0.5rem",
};

const iconStyle = {
  color: "#fff",
  margin: "0 0.5rem",
  fontSize: "1.5rem",
};

export default Footer;

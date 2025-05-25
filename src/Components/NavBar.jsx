import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./School-logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setShowNav(true); // Scrolling up or near top
      } else {
        setShowNav(false); // Scrolling down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      style={{
        position: "fixed",
        top: showNav ? 0 : "-170px",
        left: 0,
        right: 0,
        transition: "top 0.3s ease-in-out",
        zIndex: 999,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
 // This overrides your original navbar color
      }}
    >
      <div
        className="container"
        role="banner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "1rem 0",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src={logo} alt="Sunrise Public School Logo" style={{ width: "70px" }} />
          <h1 style={{ margin: 0 }}>Sunrise Public School</h1>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4px",
          }}
          className="menu-toggle"
          aria-label="Toggle navigation"
        >
          <span style={{ width: "25px", height: "3px", background: "#333" }}></span>
          <span style={{ width: "25px", height: "3px", background: "#333" }}></span>
          <span style={{ width: "25px", height: "3px", background: "#333" }}></span>
        </button>

        {/* Menu */}
        <nav className={`menu ${isMenuOpen ? "open" : ""}`} aria-label="Primary navigation">
          <ul
            style={{
              listStyleType: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: window.innerWidth <= 768 ? "column" : "row",
              gap: window.innerWidth <= 768 ? "1rem" : "1.5rem",
              alignItems: "center",
              marginTop: window.innerWidth <= 768 ? "1rem" : 0,
            }}
          >
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/why-sunrise" onClick={() => setIsMenuOpen(false)}>Why Sunrise</Link></li>
            <li><Link to="/admissions" onClick={() => setIsMenuOpen(false)}>Admissions</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

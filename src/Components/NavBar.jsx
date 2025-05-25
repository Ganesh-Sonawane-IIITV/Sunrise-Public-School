import React from "react";
import { Link } from "react-router-dom";
import logo from "./School-logo.png"; // Replace this path with the actual logo path

const NavBar = () => {
  return (
    <header>
      <div className="container" role="banner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img 
            src={logo} 
            alt="Sunrise Public School Logo" 
            style={{ height: "auto", width: "70px" }} 
          />
          {/* <h1 style={{ margin: 0 }}>Sunrise Public School</h1> */}
        </div>
        <nav aria-label="Primary navigation">
          <ul style={{ display: "flex", gap: "1rem", listStyleType: "none", margin: 0 }}>
            <li><Link to="/" aria-current="page">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/why-sunrise">Why Sunrise</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

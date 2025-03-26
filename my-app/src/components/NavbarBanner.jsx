import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logoimg from "../asserts/Aurum_Logo.38df8d15.png"
import "../css/NavbarBanner.css";

const NavbarBanner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll event for sticky navbar
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div className="navmain">
      <div className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-container">
         <img className="logoimg" src={logoimg} alt="logo"/>

          {/* Hamburger Toggle */}
          <div
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
              ☰
          </div>

          {/* Menu Items */}
          <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
            <li>Home</li>
            <li>Product & Features</li>
            <li>Contact</li>
            <li>
            <button className="demo-btn">
                Get a Free Demo{" "}
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </button>
              </li>
          </ul>
        </div>
      </div>
</div>
      {/* Banner Section */}
      <header className="banner">
        <div className="banner-content">
          <h1>
            360° Software Solutions for <br /> Your{" "}
            <span className="highlight">JEWELLERY</span> Store
          </h1>
          <p>
            Take Your Jewellery Store To The Next Level With AURUMM - The
            Ultimate Software Suite
          </p>
          <button className="schedule-btn">Schedule A Demo</button>
        </div>
      </header>
    </div>
  );
};

export default NavbarBanner;

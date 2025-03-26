import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../asserts/symbol.2d89ec5c.svg";
import bg2 from "../asserts/ausalesellipse.12571d3a.png";
import bg1 from "../asserts/Ellipse.bc4408b9.png";
import bg3 from "../asserts/aushopellipse.2602e1a6.png";
import "../css/FeatureApp.css";

const FeaturedApps = () => {
  return (
    <section className="featured-apps">
      <h5>FEATURED APPS</h5>
      <h2 className="section-title">AURUMM for Your Jewellery Business</h2>
      <div className="apps-container">
        {/* AU PAY Card */}
        <div className="app-card green">
                              <img className="bg" src={bg1} alt="bg" />
          <div className="app-header">
            <img src={logo} alt="logo" className="title-img"/>
            <h3 className="app-title"> AU PAY</h3>
          </div>
          <p className="app-description">
            An Exclusive Gold Savings Scheme Payment App
          </p>
          <p className="app-details">
            Make gold scheme payments simple and easy for your customers with AU
            Pay - the ultimate jewellery finance partner.
          </p>
         <button className="app-button green-btn">  Get Started{" "}
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></button>
                        </div>

        {/* AU SALES Card */}
        <div className="app-card yellow">
                    <img className="bg" src={bg2} alt="bg" />
          <div className="app-header">
                        <img src={logo} alt="logo" className="title-img"/>
            <h3 className="app-title">AU SALES</h3>
          </div>
          <p className="app-description">
            All-Round Inventory Management Assistant
          </p>
          <p className="app-details">
            If you're looking for a holistic store management solution, then AU
            Sales is the only app you need!
          </p>
 <button className="app-button yellow-btn">  Get Started{" "}
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></button>    
                    </div>

        {/* AU SHOP Card */}
        <div className="app-card blue">
                <img className="bg" src={bg3} alt="bg" />
          <div className="app-header">
                        <img src={logo} alt="logo" className="title-img"/>
            <h3 className="app-title">AU SHOP</h3>
          </div>
          <p className="app-description">
            Give Your Fine Jewellery A Sleek Online Platform!
          </p>
          <p className="app-details">
            Are you ready to give your customers the ultimate online jewellery
            shopping experience? Discover AU Shop and let’s begin!
          </p>
          <button className="app-button blue-btn">  Get Started{" "}
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;

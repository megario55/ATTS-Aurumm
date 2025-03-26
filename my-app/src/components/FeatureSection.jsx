import React from "react";
import "../css/FeatureSection.css";
import featureImage from "../asserts/new_ausale.20a8529c.svg"; // Replace with actual image path

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-content">
        <p className="feature-subtitle">JEWELLERY STORE APP SUITE</p>
        <h2 className="feature-title">
          Simplified Operations, Increased Profits.
        </h2>
        <p className="feature-description">
          AURUMM revolutionizes the way jewellery stores operate, offering
          seamless solutions for gold saving schemes, online sales platforms,
          and inventory management. Streamline operations, increase
          productivity, and double your revenue with our longstanding
          cutting-edge solutions! Welcome to a future of innovation, efficiency,
          and brilliance. <br />
          Welcome to <strong>AURUMM</strong>.
        </p>
      </div>
      <div className="feature-image">
        <img src={featureImage} alt="Software Suite Preview" />
      </div>
    </section>
  );
};

export default FeatureSection;

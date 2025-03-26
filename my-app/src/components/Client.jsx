import React from "react";
import "../css/Client.css";
import starImage from "../asserts/star.e40bcec9.png";

const Client = () => {
  const stats = [
    { value: "50+", label: "Clients" },
    { value: "10K+", label: "Downloads" },
    { value: "72%", label: "Client Revenue Increase" },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div className="stat-box" key={index}>
            <div className="stat-value">
          <span className="stat-number">{stat.value}</span>
          <img src={starImage} alt="Star Icon" className="star-icon" />
          </div>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Client;

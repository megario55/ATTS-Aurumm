import React, { useState } from "react";
import "../css/Sales.css";
import image1 from "../asserts/new_aupay.939fae7c.svg";
import image2 from "../asserts/new_ausale.20a8529c.svg";

function Sales() {
  // Content data for each button
  const contentData = {
    "Au Pay": {
        head:"AU PAY",
      title: "The Golden Gold App",
      description: "We're Making Jewellery Scheme Payments Easier.",
      image: image1,
    },
    "Au Sales": {
      head:"AU SALES",
      title: "Boost Your Sales",
      description: "Manage your sales and customer insights effortlessly.",
      image: image2,
    },
    "Au Shop": {
      head:"AU SHOP",
      title: "Shop Smarter",
      description: "A seamless shopping experience for jewellery lovers.",
      image: image2,
    },
  };

  const [activeButton, setActiveButton] = useState("Au Pay");

  return (
    <div className="App">
  

      {/* Button Group */}
      <div className="button-group">
        {Object.keys(contentData).map((button) => (
          <button
            key={button}
            onClick={() => setActiveButton(button)}
            className={activeButton === button ? "active" : ""}
          >
            {button}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="content-container">
        <div className="image">
          <img src={contentData[activeButton].image} alt={activeButton} />
        </div>
        <div className="text">
        <h5>{contentData[activeButton].head}</h5>
          <h2>{contentData[activeButton].title}</h2>
          <p>{contentData[activeButton].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Sales;

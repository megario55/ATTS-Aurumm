import React from "react";
import "../css/Future.css";
import Icon1 from "../asserts/icon-1.svg"; // Replace with the actual images
import Icon2 from "../asserts/icon-2.svg";
import Icon3 from "../asserts/icon-3.svg";
import Icon4 from "../asserts/icon-4.svg";

function Future() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <div className="header">
        <h3>WE'RE HERE TO HELP</h3>
        <h1>This is The Future of Jewellery Store Management</h1>
      </div>

      {/* Cards Section */}
      <div className="card-container">
        <div className="card">
          <img src={Icon1} alt="All-Round Assistance" />
          <h2>All-Round Assistance</h2>
          <p>
            Crafted for excellence, AURUMM is a premium end-to-end software
            suite that is designed for jewellery stores of all sizes.
          </p>
        </div>
        <div className="card">
          <img src={Icon2} alt="Relationship Management" />
          <h2>Relationship Management</h2>
          <p>
            Stay tuned with your customers and vendors to keep their data safe
            and sound – with AURUMM, anything is possible!
          </p>
        </div>
        <div className="card">
          <img src={Icon3} alt="Technical Support" />
          <h2>Technical Support</h2>
          <p>
            Our dedicated team of professionals are available anytime throughout
            the year to resolve all your queries!
          </p>
        </div>
        <div className="card">
          <img src={Icon4} alt="Stay Ahead" />
          <h2>Stay Ahead</h2>
          <p>
            We're always keeping up with the latest trends and updating our
            platforms – so you'll always have the edge over your competitors!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Future;

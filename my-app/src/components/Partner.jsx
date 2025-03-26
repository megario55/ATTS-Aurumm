import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import animate from "../asserts/featureanimated.16110a81.svg";
import {
  faCloud,
  faPiggyBank,
  faDatabase,
  faFileInvoice,
  faMoneyBillWave,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Partner.css";
import partnerimg from "../asserts/featuresimg.40ecab2c.svg";

function Partner() {
  // Sidebar items with Font Awesome icons and text
  const sidebarItems = [
    { id: 1, icon: faCloud, text: "Cloud Support" },
    { id: 2, icon: faPiggyBank, text: "Savings Scheme Management" },
    { id: 3, icon: faDatabase, text: "Data Management" },
    { id: 4, icon: faFileInvoice, text: "Estimation & Billing" },
    { id: 5, icon: faMoneyBillWave, text: "Cost Management" },
    { id: 6, icon: faChartBar, text: "Reporting & Dashboard" },
  ];

  return (
    <div className="partner">
      <div className="head-partner">
      <div>
   <h5>FEATURES</h5>
  <h2 className="partner-title">Growth with AURUMM:<br/>
Your Partner in Success!</h2>
</div>
<div>
  <img src={animate} alt="animate" className="animate" />
</div>
</div>
   <section className="partner-section">
    <div className="sidebar-partner">
      {sidebarItems.map((item) => (
        <div key={item.id} className="sidebar-item">
          <FontAwesomeIcon icon={item.icon} className="icon" />
          <span className="text">{item.text}</span>
        </div>
      ))}
    </div>
      <div className="partner-image">
        <img src={partnerimg} alt="Software Suite Preview" />
        <p className="partner-text">Go digital and stay ahead with our all-round cloud support services</p>
      </div>
      </section>
     </div>
  );
}


export default Partner;

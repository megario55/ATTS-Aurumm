import React from "react";
import NavbarBanner from "./components/NavbarBanner.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import FeaturedApps from "./components/FeatureApp.jsx";
import Partner from "./components/Partner.jsx";
import Sales from "./components/Sales.jsx";
import Future from "./components/Future.jsx";
import Company from "./components/Company.jsx";
import Footer from "./components/Footer.jsx";
import Client from "./components/Client.jsx";

function App() {
  return (
    <div className="App">
      <NavbarBanner />
      <FeatureSection/>
      <FeaturedApps/>
      <Partner/>
      <Sales/>
      <Future/>
      <Client/>
      <Company/>
      <Footer/>
    </div>
  );
}

export default App;

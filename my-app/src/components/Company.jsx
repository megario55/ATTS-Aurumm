import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Company.css";

import logo1 from "../asserts/client1.a6ce8334.png";
import logo2 from "../asserts/client2.375a298f.png";
import logo3 from "../asserts/client3.bb1326d9.png";
import logo4 from "../asserts/client5.e84cda3c.png";
import logo5 from "../asserts/client2.375a298f.png";

const Carousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000, // Speed for continuous sliding
    slidesToShow: 5, // Number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Ensures smooth movement
    cssEase: "linear",
    arrows: false,
    ltr:true, // Reverse direction if state is "right"
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "70px 20px" }}>
        <h5 className="heading">OUR CLIENTS</h5>
        <h1 className="heading">Brands That Trust Us!</h1>
      <Slider {...settings} className="company-slider">
        <div className="company">
          <div className="cards">
            <img src={logo1} alt="Logo1" className="carousel-image" />
          </div>
        </div>
        <div className="company">
          <div className="cards">
            <img src={logo2} alt="Logo2" className="carousel-image" />
          </div>
        </div>
        <div className="company">
          <div className="cards">
            <img src={logo3} alt="Logo3" className="carousel-image" />
          </div>
        </div>
        <div className="company">
          <div className="cards">
            <img src={logo4} alt="Logo4" className="carousel-image" />
          </div>
        </div>
        <div className="company">
          <div className="cards">
            <img src={logo5} alt="Logo5" className="carousel-image" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

import React from "react";
import "./Honda.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Honda = () => {
  return (
    <div className="honda container">
      <div className="honda-text">
        {/* <h1>Cross Multiple Platform Development Company</h1> */}
        <h1>About Our Business</h1>
        <p>
          As a leading cross-platform development company in India, we offer
          cost-effective cross-platform app development and web development
          services and solutions. Our expertise lies in creating top-notch
          mobile applications that run seamlessly on multiple platforms,
          ensuring a global presence for your business. Our team of experts
          cross-platform app developers is dedicated to building agile,
          innovative, customized, and robust applications tailored to meet your
          unique business needs. We leverage cutting-edge technologies to
          deliver high-quality, user-friendly apps that enhance your business's
          reach and engagement.
          {/* As a cross Multiple platform development company in India, we offer
          cost-effective cross platform app development services and solutions.
          We specialise in creating top-notch mobile applications that run
          seamlessly on multiple platforms, ensuring a global presence for your
          business. Hire our expert cross-platform app developers to build
          agile, innovative, customised, and robust applications tailored to
          your business needs. */}
        </p>
        <button className="btn1"> <Link to="Programs" smooth={true} offset={-260} duration={500}>Explore More <img src={dark_arrow} alt="" /></Link>
           
        </button>
      </div>
    </div>
  );
};

export default Honda;

import React from "react";
import "./About.css";
import about_img from "../../assets/about2.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h2>ABOUT COMPANY</h2>
        <br />
        {/* <h2>Newly growing company</h2> */}
        <p>
          Rebel iTech Solutions helps to convert your ideas into innovation.
          With an experienced team of experts in web and mobile app development
          & testing for Android and iOS applications. Our mission is to provide
          high-quality & user-friendly software solutions to meet our client's
          unique needs.
        </p>
        {/* <p>
          Sakthi iTech Solutions helps to convert your ideas into innovation.
          With an experienced team of experts in web and mobile app development
          & testing for Android and iOS applications. Our mission is to provide
          high-quality & user-friendly software solutions to meet our client's
          unique needs.
        </p> */}
        {/* <p>
          Sakthi iTech Solutions helps to convert your ideas into innovation.
          With an experienced team of experts in web and mobile app development
          & testing for Android and iOS applications. Our mission is to provide
          high-quality & user-friendly software solutions to meet our client's
          unique needs.
        </p> */}
      </div>
    </div>
  );
};

export default About;

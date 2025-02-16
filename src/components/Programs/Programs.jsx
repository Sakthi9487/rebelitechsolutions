import React from "react";
import "./Programs.css";
import program_1 from "../../assets/webapp1.png";
import program_2 from "../../assets/Android app1.png";
import program_3 from "../../assets/IOS logo.png";
import program_icon_1 from "../../assets/web-dev.png";
import program_icon_2 from "../../assets/apk.png";
import program_icon_3 from "../../assets/app-store.png";

const Programs = () => {
  return (
    <div className='Programs'>
      <div className="Program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Web Application</p>
        </div>
      </div>
      <div className="Program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Android Application</p>
        </div>
      </div>
      <div className="Program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>iOS Application</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;

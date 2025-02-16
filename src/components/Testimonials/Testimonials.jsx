import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
// import user_1 from "../../assets/user-1.png";
// import user_2 from "../../assets/user-2.png";
// import user_3 from "../../assets/user-3.png";
// import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_1} alt="" /> */}
                <div>
                  <h1>Innovative Strategies</h1>
                  {/* <span>London</span> */}
                </div>
              </div>
              <h3>
                We understand that every business is unique. That's why we offer
                custom-designed solutions that align with your specific goals
                and needs, ensuring that your corporate space reflects your
                vision while optimizing productivity.
              </h3>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_2} alt="" /> */}
                <div>
                  <h1>Expert Execution</h1>
                  {/* <span>USA</span> */}
                </div>
              </div>
              <h3>
                As a forward-thinking startup, we leverage the latest technology
                to deliver seamless, efficient solutions. From smart office
                setups to advanced communication tools, we ensure your corporate
                environment is ahead of the curve.
              </h3>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_3} alt="" /> */}
                <div>
                  <h1>Results-Driven Approach</h1>
                  {/* <span>Africa</span> */}
                </div>
              </div>
              <h3>
                Our team is dedicated to providing exceptional customer service
                at every stage of your project. From initial consultation to
                post-implementation support, we work closely with you to ensure
                complete satisfaction and a smooth experience.
              </h3>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_4} alt="" /> */}
                <div>
                  <h1>Cloud Security</h1>
                  {/* <span>canada</span> */}
                </div>
              </div>
              <h3>
                We understand that data security is a top priority. Our cloud
                infrastructure is built with industry-leading security measures,
                including encryption, multi-factor authentication, to ensure
                that your business data is safe, compliant, and protected from
                threats.
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

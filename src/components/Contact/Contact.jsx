import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/linkedin_logo.jpeg";
// import twitter from '../../assets/twitter.png'
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsapp.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "591748ed-bfa1-4a29-9f5d-8a3279fbeeb0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find out contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          Company.Connect with us today, we would help you to build the next
          gene software solutions for your business needs. Please fill in the
          form and our representative will get back to you.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />{" "}
            <a
              href="https://mail.google.com/mail/u/2/#inbox?compose=CllgCJqTgCcfwnjDBSgcjzBBvCjwkjLSfNtcBRGfCMKTzKlRCkxbcNptKSTHrgwSPCtGjCBWJgV"
              target="blank"
            >
              rebelitechsolutions@gmail.com
            </a>
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" /> +91 96007-32973
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" /> Village high road,
            Sholinganallur, <br />
            Chennai - 600119 INDIA
          </li>
          <li>
            {" "}
            <img src={instagram} alt="" />{" "}
            <a href="https://www.instagram.com/rebel_itech_solutions?igsh=MWF0eDl4ZDlseGV5Zg%3D%3D" target="blank">
              Instagram
            </a>
          </li>
          <li>
            {" "}
            <img src={facebook} alt="" />
            <a href="https://www.linkedin.com/in/rebel-itech-solutions-864158351/" target="blank">
              Linkedin
            </a>
          </li>
          {/* <li>
            {" "}
            <img src={twitter} alt="" /> sakthi200597@gmail.com
          </li> */}
          <li>
            {" "}
            <img src={youtube} alt="" />
            <a href="https://youtube.com/@rebelitechsolutions?si=Iq8KXNf0Gp3UPN3Z" target="blank">
              YouTube
            </a>
          </li>
          <li>
            {" "}
            <img src={whatsapp} alt="" />
            <a href="https://web.whatsapp.com/" target="blank">
              Whatsapp
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Email ID</label>
          <input
            type="Email"
            name="email"
            placeholder="Enter your Email id"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write Your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="Submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;

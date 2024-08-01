import React from "react";
import About_Image from "../assets/images/About.JPG";
import "../assets/style/./About.css";

const About = () => {
  return (
    <div className="about-container container text-dark">
      <section className="about-section">
        <div className="about-image">
          <img src={About_Image} alt="Founder" />
        </div>
        <div className="about-content">
          <h1 className="about-title">
            Hello!
            <br />
            I'm SahiRam Dukiya.
          </h1>
          <p className="about-text">
            I am Sahiram Dukiya, a dedicated Software Developer from Nagaur,
            Rajasthan. I am a recent graduate of IIT Kharagpur, class of 2025,
            where I honed my skills and deepened my knowledge in software
            development. With a strong foundation in technology and a passion
            for innovation, I am eager to contribute my expertise to dynamic and
            challenging projects.
          </p>
          <div className="mt-5" style={{ listStyle: "none" }}>
            <li>
              <p>
                <i className="fa fa-envelope"> </i> sahiramdukiya76@gmail.com
              </p>
            </li>
            <li>
              <p>
                <i className="fa fa-phone"></i> +91-7073805485
              </p>
            </li>
            <li>
              <p>
                <i className="fa fa-github"> </i>
                <a
                  className="text-decoration-none text-dark"
                  href="https://github.com/kingCoder1234"
                  target="_blank"
                >
                  {" "}
                  Github
                </a>
              </p>
            </li>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

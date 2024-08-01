// src/components/Home.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/Home.css";
import My_Pic from "../assets/images/About.JPG";

const Home = () => {
  return (
    <div
      className="container-fluid text-center py-5"
      style={{ background: "#f8f9fa" }}
    >
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-8 mx-auto text-area-style">
          <h1 className="display-4">
            I'm <span className="text-danger">SahiRam Dukiya</span>
          </h1>
          <p className="lead text-muted text-muted-style">
            I am Sahiram Dukiya, a Software Developer and Web Developer based in
            India, with a keen interest in global opportunities. As a versatile
            professional, I am passionate about leveraging my skills to tackle
            innovative projects and contribute to impactful solutions worldwide.
          </p>
          <a
            href="https://drive.google.com/file/d/13NI5g8ZIHpFCELIuInmKBpCm-8hjMPC5/view?usp=drive_link"
            className="btn btn-danger btn-lg mr-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=13NI5g8ZIHpFCELIuInmKBpCm-8hjMPC5"
            className="btn btn-secondary btn-lg"
          >
            Download CV
          </a>
        </div>
        <div className="col-lg-6 col-md-4 mx-auto">
          <img
            src={My_Pic}
            alt="SahiRam Dukiya"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

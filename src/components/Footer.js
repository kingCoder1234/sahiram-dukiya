import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row className="justify-content-center mb-3">
          <Col xs="auto">
            <a
              href="https://www.facebook.com/sahiram.dukiya.547"
              className="footer-icon"
              target="_blank"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="https://www.instagram.com/the_blue_spects_guy_23"
              className="footer-icon"
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </Col>
          <Col xs="auto">
            <a
              href="https://x.com/SahiramDu14155?t=uoZVNKZCOh5-shk0M-gl2&s=09"
              className="footer-icon"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col xs="auto">
            <a href="/" className="footer-link">
              Info
            </a>
          </Col>
          <Col xs="auto">
            <a href="/" className="footer-link">
              Support
            </a>
          </Col>
          <Col xs="auto">
            <a href="/" className="footer-link">
              Marketing
            </a>
          </Col>
          <Col xs="auto">
            <a href="/" className="footer-link">
              Terms of Use
            </a>
          </Col>
          <Col xs="auto">
            <a href="/" className="footer-link">
              Privacy Policy
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <p className="footer-text">© 2024 Sahiram Dukiya____</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

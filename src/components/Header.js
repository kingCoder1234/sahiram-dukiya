import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/Header.css";
import my_logo from "../assets/images/logo.png";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={my_logo}
            alt="My Portfolio"
            className="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className={pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/skills"
              className={pathname === "/skills" ? "active" : ""}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/experience"
              className={pathname === "/experience" ? "active" : ""}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/achievements"
              className={pathname === "/achievements" ? "active" : ""}
            >
              Achievements
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

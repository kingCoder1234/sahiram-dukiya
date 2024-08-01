import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/./Projects.css";
import project1_img from "../assets/images/project1.png";
import project4_img from "../assets/images/project4.png";

const projects = [
  {
    id: 1,
    title: "E-commerce	Project	|	ReactJs	Jan.	2024-March-2024",
    description:
      "Developed a responsive e-commerce web application utilizing React.js and integrating with API to fetch product data dynamically. Utilized Higher Order Components to encapsulate product and cart functionalities, ensuring code modularity and scalability. Implemented user-centric cart system allowing for effortless addition, quantity adjustment, removal, and checkout functionalities. Designed intuitive header navigation for enhanced user experience and efficient exploration of platform sections.",
    imgSrc: `${project1_img}`,
    link: "https://github.com/kingCoder1234/myshophere",
  },
  {
    id: 2,
    title: "Bakery	Shop	Management	System	|	C++	Dec	2021	-	Dec	2021	",
    description:
      "Developed a bakery management system with a login/registration feature using C++ STL with the implementation of OOPs. Application lists all the items that contain the string entered by the user as a subsequence in ascending serial order numbers As a result, it displays the products selected by the user.",
    imgSrc: "https://via.placeholder.com/300",
    link: "https://github.com/kingCoder1234/Bakery-Shop-Management-System-main",
  },
  {
    id: 3,
    title: "Development	of	Vote	Casting	System	|	Python	Mar	2022	-	Mar	2022",
    description:
      "Designed an online system to cast votes using an email-based OTP verification system and implemented it using python. Used python modules like datetime (to vote in a certain time frame), random (to generate OTP), and smtplib (to send mail). Implemented a feature to cast the vote in a certain period and the user can also make a request to get mail of his vote details.",
    imgSrc: "https://via.placeholder.com/300",
    link: "https://github.com/kingCoder1234/VotingSystemThroughOTP-main",
  },
  {
    id: 4,
    title: "Employee Manage_Task master",
    imgSrc: `${project4_img}`,
    description:
      " Designed an online system to cast votes using an email-based OTP verification system and implemented it using python. Used python modules like datetime (to vote in a certain time frame), random (to generate OTP), and smtplib (to send mail). Implemented a feature to cast the vote in a certain period and the user can also make a request to get mail of his vote details",
    link: "https://github.com/kingCoder1234/Employee-Manage-Task-master",
  },
];

const Projects = () => {
  return (
    <Container className="projects my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project) => (
          <Col md={4} sm={6} key={project.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={project.imgSrc}
                alt={project.title}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button
                  variant="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;

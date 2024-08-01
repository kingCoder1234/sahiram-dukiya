import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/Experience.css";

const experiences = [
  {
    title: "React js Intern",
    company: "Sarvika Technologies, Jaipur",
    dates: "May 2023 - July 2023",
    description: [
      "Completed a valuable internship that lasted for 2 months and involved working with a team of 15 people to develop software.",
      "Developed an e-commerce frontend using React JS and JavaScript, ensuring a smooth experience throughout the process.",
      "As part of a micro-frontend development project, implemented personalised page links within a console application.",
      "Obtained extensive training in JavaScript, React.js, Redux, Webpack, and i18next for front-end web development.",
    ],
  },
];

const Experience = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Experience</h2>
      <Row>
        {experiences.map((experience, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="experience-card">
              <Card.Body>
                <Card.Title>{experience.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {experience.company}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {experience.dates}
                </Card.Subtitle>
                <Card.Text as="ul">
                  {experience.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;

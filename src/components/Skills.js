import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/Skills.css";

import jsImage from "../assets/images/javascript.png";
import reactImage from "../assets/images/react.png";
import nodeImage from "../assets/images/node.png";
import htmlCssImage from "../assets/images/html-css.png";
import mongodbImage from "../assets/images/mongodb.png";
import gitImage from "../assets/images/git.png";
import c_c from "../assets/images/c_c++.png";
import express from "../assets/images/express.png";
import dsa from "../assets/images/dsa.png";

const Techskills = [
  { name: "C/C++", description: "Solid understanding of algorithms and data structures, experienced with C/C++.", image: c_c },
  { name: "Data Structures & Algorithms", description: "Strong problem-solving skills, proficient in data structures and algorithms.", image: dsa },
  { name: "HTML & CSS", description: "Strong foundation in HTML5 and modern CSS (Flexbox, Grid).", image: htmlCssImage },
  { name: "JavaScript", description: "Experienced with ES6+, frameworks like React and Node.js.", image: jsImage },
  { name: "React", description: "Proficient in building SPA using React and related technologies.", image: reactImage },
  { name: "Node.js", description: "Skilled in backend development using Node.js and Express.", image: nodeImage },
  { name: "MongoDB", description: "Experienced with NoSQL databases, especially MongoDB.", image: mongodbImage },
  { name: "Express", description: "Efficient in building RESTful APIs using Express.js.", image: express },
  { name: "Git", description: "Proficient in version control using Git and GitHub.", image: gitImage },
];

const Skills = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">My Tech Skills</h2>
      <Row>
        {Techskills.map((skill, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="skill-card">
              <Card.Img variant="top" src={skill.image} alt={skill.name} className="skill-image" />
              <Card.Body>
                <Card.Title>{skill.name}</Card.Title>
                <Card.Text>{skill.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;

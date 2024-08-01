import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const achievements = [
  {
    title: "Silver medal in Hockey Team",
    description:
      "Part of the Silver medal Team of IIT Kharagpur in the Hockey in the Udagosh Tournament conducted by IIT Kanpur in 2022.",
    date: "Octomber 2022",
  },
  {
    title: "Cleared IIT JEE Exam",
    description:
      "Successfully cleared the IIT JEE exam, one of the most challenging engineering entrance exams in India.",
    date: "2020",
  },
  {
    title: "Volunteered at NSS",
    description:
      "Taught basics of English, Maths, and Science to underprivileged kids in the Firozpura village for 2 months.",
    date: "2018 - 2020",
  },
];
const PORs = [
  {
    title: "Public	Relation	Head	at	Rajasthan	Cultural	Association	|	IIT	Kharagpur",
    description:
      "Provided academic guidance and support to incoming freshmen, aiding their transition to college life and coursework management while offering insights into effective time management and study techniques. Delivered assistance for extracurricular activities and academics.",
    date: "(Nov	22	-	Apr	23	)",
  },
  {
    title:
      "Secretary	Sports	and	Games|	Lal	Bahadur	Shastri	Hall	of	Residence	|	IIT	Kharagpur",
    description:
      "Led a student body of ~1800 undergraduate and postgraduate students in Hockey Inter Hall Championship 2021-22 events. Implemented a budget of INR 95,000 for the sportsmanship of the Hockey team of Lal Bahadur Sashtri Hall of Residence.",
    date: "(Nov	21	-	Apr	22	)",
  },
  {
    title:
      " Captain	of	the	Hockey	Team|	Lal	Bahadur	Shastri	Hall	of	Residence	|	IIT	Kharagpur",
    description:
      "Led confidently the Hockey Team to victory in the General Championship Tournament, IIT Kharagpur, 2024. Demonstrated leadership, strategic planning, and teamwork skills throughout the tournament.",
    date: "(Jan	4	-	Apr	24)",
  },
];

const Achievements = () => {
  return (
    <Container className="my-5">
      <div>
        <h2 className="text-center mb-4">Achievements</h2>
        <Row>
          {achievements.map((achievement, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{achievement.title}</Card.Title>
                  <Card.Text>{achievement.description}</Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Date: {achievement.date}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="mt-5">
        <h2 className="text-center mb-4">Possition of Responsibilities</h2>
        <Row>
          {PORs.map((achievement, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{achievement.title}</Card.Title>
                  <Card.Text>{achievement.description}</Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Date: {achievement.date}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Achievements;

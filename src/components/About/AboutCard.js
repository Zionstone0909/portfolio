import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I have extensive experience across the full software development lifecycle, working on frontend, backend, and full-stack projects. On the frontend, I design and implement responsive, user-friendly interfaces using modern frameworks to ensure seamless user experiences. On the backend, I build robust server-side systems, including APIs, databases, and authentication flows, optimized for scalability and reliability. I am equally comfortable delivering end-to-end solutions, integrating frontend and backend to create efficient, maintainable applications.
            <br />
            <br />
            I specialize in automation using <span className="purple">GoHighLevel</span>, creating workflows that streamline client management, sales tracking, and marketing operations, saving time, reducing errors, and improving operational efficiency. My approach combines clean code, scalable architecture, and practical automation, ensuring every project I work on is high-performing, reliable, and solves real-world problems.
            <br />
            <br />
            I thrive on projects that require flexibility and problem-solving, whether it's frontend-only tasks, backend challenges, full-stack integration, or workflow automation, and I continually leverage emerging technologies to deliver measurable value.
          </p>

          <h5 style={{ color: "#d1b3ff", marginTop: "20px", marginBottom: "15px" }}>
            Interests &amp; Passions:
          </h5>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Engaging in social services
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and exploring new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Strive to build things that make a meaningful difference in the world!" 💡
          </p>
          <footer className="blockquote-footer">Akanni Hannah Ibukun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

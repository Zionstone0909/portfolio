import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const techStack = {
    "Front-End": ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Redux", "Zustand", "Tailwind CSS", "Bootstrap", "Material UI", "React-Bootstrap", "Styled Components"],
    "Back-End": ["Node.js", "Express.js", "Nest.js", "Django", "Flask", "Ruby on Rails"],
    "Database": ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
    "DevOps & Deployment": ["Git", "GitHub", "GitLab", "Docker", "Docker Compose", "Netlify", "Vercel", "Heroku", "AWS"],
    "Testing & Quality": ["Jest", "React Testing Library", "Cypress", "ESLint", "Prettier"],
    "Tools & Utilities": ["Figma", "Photoshop", "Canva", "Postman", "VS Code", "npm"]
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row style={{ minHeight: "50vh", alignItems: "center", justifyContent: "center" }}>
            <Col md={10} style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
              <h1 style={{ paddingBottom: 8, fontSize: "3.2rem" }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name" style={{ marginBottom: 8, fontSize: "2.4rem" }}>
                I'm <strong className="main-name">Akanni Hannah Ibukun</strong>
              </h1>

              <p style={{ maxWidth: 900, margin: "0.5rem auto 1rem", fontSize: "1.05rem", color: "#e9e6f7" }}>
                Full-stack engineer building reliable, scalable applications — frontend, backend, and workflow automation (GoHighLevel). I deliver end-to-end solutions with clean code, pragmatic architecture, and measurable impact.
              </p>

              <div style={{ padding: "0 1rem", textAlign: "center" }}>
                <Type />
              </div>

              <div style={{ marginTop: 40, maxWidth: 1000, margin: "40px auto 0" }}>
                <h2 style={{ fontSize: "2rem", color: "#d1b3ff", marginBottom: 30, fontWeight: 600 }}>
                  Tech Stack
                </h2>
                <Row>
                  {Object.entries(techStack).map(([category, techs]) => (
                    <Col md={6} lg={4} key={category} style={{ marginBottom: 30 }}>
                      <div style={{
                        background: "rgba(199,112,240,0.08)",
                        border: "1px solid rgba(199,112,240,0.3)",
                        borderRadius: 12,
                        padding: 20
                      }}>
                        <h5 style={{ color: "#c770f0", marginBottom: 15, fontWeight: 600, fontSize: "1.1rem" }}>
                          {category}
                        </h5>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                          {techs.map((tech) => (
                            <span
                              key={tech}
                              style={{
                                background: "rgba(199,112,240,0.15)",
                                color: "#d1b3ff",
                                padding: "6px 12px",
                                borderRadius: 16,
                                fontSize: "0.85rem",
                                fontWeight: 500,
                                border: "1px solid rgba(199,112,240,0.3)"
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

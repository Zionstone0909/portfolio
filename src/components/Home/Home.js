import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const allTechs = [
    { name: "HTML5", col: 1 },
    { name: "CSS3", col: 1 },
    { name: "JavaScript (ES6+)", col: 2 },
    { name: "React.js", col: 1 },
    { name: "Next.js", col: 1 },
    { name: "Redux", col: 1 },
    { name: "Zustand", col: 1 },
    { name: "Tailwind CSS", col: 1 },
    { name: "Bootstrap", col: 1 },
    { name: "Material UI", col: 1 },
    { name: "React-Bootstrap", col: 2 },
    { name: "Styled Components", col: 2 },
    { name: "Node.js", col: 1 },
    { name: "Express.js", col: 1 },
    { name: "Nest.js", col: 1 },
    { name: "Django", col: 1 },
    { name: "Flask", col: 1 },
    { name: "Ruby on Rails", col: 2 },
    { name: "PostgreSQL", col: 1 },
    { name: "MySQL", col: 1 },
    { name: "MongoDB", col: 1 },
    { name: "Firebase", col: 1 },
    { name: "Redis", col: 1 },
    { name: "Git", col: 1 },
    { name: "GitHub", col: 1 },
    { name: "GitLab", col: 1 },
    { name: "Docker", col: 1 },
    { name: "Docker Compose", col: 2 },
    { name: "Netlify", col: 1 },
    { name: "Vercel", col: 1 },
    { name: "Heroku", col: 1 },
    { name: "AWS", col: 1 },
    { name: "Jest", col: 1 },
    { name: "React Testing Library", col: 2 },
    { name: "Cypress", col: 1 },
    { name: "ESLint", col: 1 },
    { name: "Prettier", col: 1 },
    { name: "Figma", col: 1 },
    { name: "Photoshop", col: 1 },
    { name: "Canva", col: 1 },
    { name: "Postman", col: 1 },
    { name: "VS Code", col: 1 },
    { name: "npm", col: 1 }
  ];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="home-hero" style={{ minHeight: "50vh", alignItems: "center", justifyContent: "center" }}>
            <Col md={10} xs={12} className="home-hero-content" style={{ textAlign: "center", position: "relative", zIndex: 10, padding: "0 1rem" }}>
              <h1 className="heading home-greeting" style={{ paddingBottom: 8 }}>
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name home-title" style={{ marginBottom: 8 }}>
                I'm <strong className="main-name">Akanni Hannah Ibukun</strong>
              </h1>

              <p className="home-description" style={{ maxWidth: 900, margin: "0.5rem auto 1rem", color: "#e9e6f7" }}>
                Full-stack engineer building reliable, scalable applications  frontend, backend, and workflow automation. I deliver end-to-end solutions with clean code, pragmatic architecture, and measurable impact.
              </p>

              <div className="typewriter-container" style={{ padding: "0 1rem", textAlign: "center", marginBottom: "2rem" }}>
                <Type />
              </div>

              <div className="tech-stack-section" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1rem" }}>
                <div className="tech-grid" style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                  gap: 12,
                  width: "100%"
                }}>
                  {allTechs.map((tech) => (
                    <div
                      key={tech.name}
                      style={{
                        gridColumn: `span ${Math.min(tech.col, 2)}`,
                        background: "linear-gradient(135deg, rgba(199,112,240,0.15) 0%, rgba(199,112,240,0.08) 100%)",
                        border: "1.5px solid rgba(199,112,240,0.4)",
                        borderRadius: 10,
                        padding: tech.col === 2 ? "16px 12px" : "12px 10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        color: "#d1b3ff",
                        fontSize: tech.col === 2 ? "0.95rem" : "0.85rem",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 2px 8px rgba(199,112,240,0.1)"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(199,112,240,0.25) 0%, rgba(199,112,240,0.15) 100%)";
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = "0 5px 15px rgba(199,112,240,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(199,112,240,0.15) 0%, rgba(199,112,240,0.08) 100%)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(199,112,240,0.1)";
                      }}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const location = useLocation();

  const buttons = [
    { label: "View Resume", href: "#resume" },
    { label: "Explore Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (e, href) => {
    // Prevent default anchor behavior
    e.preventDefault();
    
    // Extract section id from href
    const sectionId = href.replace("#", "");
    
    // Try to scroll to the section on current page
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isActive = (href) => {
    const sectionId = href.replace("#", "");
    return location.pathname === "/" + sectionId || location.pathname === sectionId;
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

              <div style={{ marginTop: 18, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 10 }}>
                {buttons.map((btn) => (
                  <Button
                    key={btn.href}
                    href={btn.href}
                    onClick={(e) => scrollToSection(e, btn.href)}
                    className={isActive(btn.href) ? "btn-active" : ""}
                    variant={isActive(btn.href) ? "primary" : "outline-light"}
                    style={{
                      minWidth: 140,
                      fontWeight: isActive(btn.href) ? "600" : "500",
                      transition: "all 0.3s ease",
                      pointerEvents: "auto",
                      cursor: "pointer"
                    }}
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>

              <div style={{ marginTop: 18, display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                {[
                  "React", "Next.js", "Node.js", "TypeScript", "Postgres", "MongoDB", "Docker", "GoHighLevel"
                ].map((tech) => (
                  <span key={tech} style={{ background: "rgba(199,112,240,0.12)", color: "#d1b3ff", padding: "6px 10px", borderRadius: 20, fontSize: "0.9rem" }}>{tech}</span>
                ))}
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
                      

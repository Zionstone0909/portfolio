import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAndroidstudio,
  SiIntellijidea,
  SiFigma,
  SiAdobephotoshop,
  SiCoreldraw,
  SiLinux,
  SiUbuntu,
  SiApachetomcat,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* IDEs */}
      <Col xs={4} md={2} className="tech-icons"><SiAndroidstudio /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiIntellijidea /></Col>

      {/* Design Tools */}
      <Col xs={4} md={2} className="tech-icons"><SiFigma /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobephotoshop /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCoreldraw /></Col>
      
      {/* Platforms */}
      <Col xs={4} md={2} className="tech-icons"><SiLinux /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiUbuntu /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApachetomcat /></Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col>
    </Row>
  );
}

export default Toolstack;
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhp,
  DiCss3,
  DiHtml5,
  DiDocker,
} from "react-icons/di";
import {
  SiSpringboot,
  SiFlutter,
  SiKotlin,
  SiDart,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiPostgresql,
  SiPostman,
  SiAmazon,
  SiGooglecloud,
  SiGithub,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { MdAutoAwesome } from "react-icons/md";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Languages */}
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTypescript /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPhp /></Col>
      <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKotlin /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDart /></Col>

      {/* Frameworks & Libraries */}
      <Col xs={4} md={2} className="tech-icons"><SiSpringboot /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFlutter /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>

      {/* API & Testing */}
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>

      {/* Cloud & Infrastructure */}
      <Col xs={4} md={2} className="tech-icons"><SiAmazon /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGooglecloud /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiDocker /></Col>

      {/* Web Basics */}
      <Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>

      {/* Automation & Workflow */}
      <Col xs={4} md={2} className="tech-icons" title="GoHighLevel CRM & Automation"><MdAutoAwesome /></Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col>
    </Row>
  );
}

export default Techstack;
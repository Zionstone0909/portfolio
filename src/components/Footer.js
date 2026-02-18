import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Akanni H.A</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} CN</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Zionstone0909"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:hannahakanni7@gmail.com"
                style={{ color: "white" }}
                title="Email"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/23409030585841"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

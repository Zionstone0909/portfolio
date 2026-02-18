import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", subject: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // validation
    if (!form.name.trim()) return alert("Please enter your name.");
    if (!form.email.trim() || !validEmail(form.email)) return alert("Please enter a valid email.");
    if (!form.message.trim()) return alert("Please enter a message.");

    const subject = encodeURIComponent(form.subject || `Contact from ${form.name}`);
    const bodyLines = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      "",
      `Message:\n${form.message}`,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:hannahakanni7@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <Container fluid className="resume-section">
      <Row style={{ justifyContent: "center", padding: "40px 0" }}>
        <Col md={8}>
          <h2 style={{ color: "#d1b3ff", marginBottom: 12 }}>Send us a message</h2>
          <p style={{ color: "#c9c3db", marginBottom: 20 }}>Please feel free to send us any questions, inquire about projects, feedback or suggestions you might have.</p>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" value={form.name} onChange={handleChange} placeholder="Name" />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label>Company</Form.Label>
                <Form.Control name="company" value={form.company} onChange={handleChange} placeholder="Company" />
              </Col>
            </Row>

            <Row>
              <Col md={6} className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" value={form.email} onChange={handleChange} placeholder="Email" />
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={6} name="message" value={form.message} onChange={handleChange} placeholder="Message" />
            </Form.Group>

            <div style={{ textAlign: "center", marginTop: 12 }}>
              <Button variant="primary" type="submit" style={{ minWidth: 160 }}>Send</Button>
            </div>
          </Form>

          <div style={{ marginTop: 24, color: "white" }}>
            <p style={{ marginBottom: 6 }}>
              <AiOutlineMail />&nbsp; <a href="mailto:hannahakanni7@gmail.com" style={{ color: "#c770f0" }}>hannahakanni7@gmail.com</a>
            </p>
            <p style={{ marginBottom: 6 }}>
              <FaWhatsapp />&nbsp; <a href="https://wa.me/23409030585841" style={{ color: "#c770f0" }} target="_blank" rel="noreferrer">+234 903 058 5841</a>
            </p>
            <p>
              <AiFillGithub />&nbsp; <a href="https://github.com/Zionstone0909" target="_blank" rel="noreferrer" style={{ color: "#c770f0" }}>github.com/Zionstone0909</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

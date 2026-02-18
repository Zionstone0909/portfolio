import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!validEmail(form.email)) newErrors.email = "Invalid email address.";
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Prepare email content for mailto
    const subject = encodeURIComponent(form.subject);
    const bodyLines = [
      `Name: ${form.name}`,
      `Company: ${form.company || "N/A"}`,
      `Phone: ${form.phone || "N/A"}`,
      `Email: ${form.email}`,
      "",
      `Message:`,
      form.message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));

    // Open email client with pre-filled information
    try {
      window.location.href = `mailto:hannahakanni7@gmail.com?subject=${subject}&body=${body}`;

      // Show success message after a brief delay
      setTimeout(() => {
        setSubmitted(true);
        setForm({
          name: "",
          company: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
        setIsSubmitting(false);

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 500);
    } catch (error) {
      setErrors({ submit: "An error occurred. Please try again." });
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="resume-section" id="contact">
      <Row style={{ justifyContent: "center", padding: "40px 20px" }}>
        <Col md={8}>
          <h2 style={{ color: "#d1b3ff", marginBottom: 12, fontSize: "2.5rem" }}>
            Send us a message
          </h2>
          <p style={{ color: "#c9c3db", marginBottom: 30, fontSize: "1.1rem" }}>
            Please feel free to send us any questions, contact us, feedback, or suggestions you might have.
          </p>

          {submitted && (
            <Alert
              variant="success"
              style={{
                marginBottom: 24,
                backgroundColor: "rgba(40, 167, 69, 0.1)",
                borderColor: "#28a745",
                color: "#d1b3ff",
              }}
            >
              <h5 style={{ marginBottom: 8, color: "#28a745" }}>✓ Thank you! Your message has been sent.</h5>
              <p style={{ marginBottom: 0, fontSize: "0.95rem" }}>
                I'll get back to you as soon as possible. In the meantime, feel free to reach out via email or WhatsApp.
              </p>
            </Alert>
          )}

          {errors.submit && (
            <Alert variant="danger" style={{ marginBottom: 24 }}>
              {errors.submit}
            </Alert>
          )}

          <Form onSubmit={handleSubmit} noValidate>
            {/* Name & Company */}
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label style={{ color: "#d1b3ff", fontWeight: 500 }}>
                  Name <span style={{ color: "#ff6b6b" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  isInvalid={!!errors.name}
                />
                {errors.name && (
                  <Form.Control.Feedback type="invalid" style={{ display: "block", color: "#ff6b6b", marginTop: 4 }}>
                    {errors.name}
                  </Form.Control.Feedback>
                )}
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label style={{ color: "#d1b3ff", fontWeight: 500 }}>
                  Company <span style={{ color: "#999", fontSize: "0.85em" }}>(optional)</span>
                </Form.Label>
                <Form.Control
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company"
                />
              </Col>
            </Row>

            {/* Phone & Email */}
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label style={{ color: "#d1b3ff", fontWeight: 500 }}>
                  Phone <span style={{ color: "#999", fontSize: "0.85em" }}>(optional)</span>
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label style={{ color: "#d1b3ff", fontWeight: 500 }}>
                  Email <span style={{ color: "#ff6b6b" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  isInvalid={!!errors.email}
                />
                {errors.email && (
                  <Form.Control.Feedback type="invalid" style={{ display: "block", color: "#ff6b6b", marginTop: 4 }}>
                    {errors.email}
                  </Form.Control.Feedback>
                )}
              </Col>
            </Row>

            {/* Subject */}
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#d1b3ff", fontWeight: 500 }}>
                Subject <span style={{ color: "#ff6b6b" }}>*</span>
              </Form.Label>
              <Form.Control
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                isInvalid={!!errors.subject}
              />
              {errors.subject && (
                <Form.Control.Feedback type="invalid" style={{ display: "block", color: "#ff6b6b", marginTop: 4 }}>
                  {errors.subject}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            {/* Message */}
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#d1b3ff", fontWeight: 500 }}>
                Message <span style={{ color: "#ff6b6b" }}>*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here..."
                isInvalid={!!errors.message}
              />
              {errors.message && (
                <Form.Control.Feedback type="invalid" style={{ display: "block", color: "#ff6b6b", marginTop: 4 }}>
                  {errors.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <div style={{ textAlign: "center", marginTop: 24 }}>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </Form>

          {/* Direct contact links */}
          <div style={{ marginTop: 40, paddingTop: 30, borderTop: "1px solid rgba(199, 112, 240, 0.2)" }}>
            <p style={{ color: "#c9c3db", marginBottom: 16, fontSize: "1rem", fontWeight: 500 }}>
              Or reach out directly:
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <div>
                <AiOutlineMail style={{ marginRight: 8, color: "#c770f0" }} />
                <a href="mailto:hannahakanni7@gmail.com" style={{ color: "#c770f0" }}>
                  hannahakanni7@gmail.com
                </a>
              </div>
              <div>
                <FaWhatsapp style={{ marginRight: 8, color: "#c770f0" }} />
                <a href="https://wa.me/23409030585841" style={{ color: "#c770f0" }} target="_blank" rel="noreferrer">
                  +234 903 058 5841
                </a>
              </div>
              <div>
                <AiFillGithub style={{ marginRight: 8, color: "#c770f0" }} />
                <a href="https://github.com/Zionstone0909" target="_blank" rel="noreferrer" style={{ color: "#c770f0" }}>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

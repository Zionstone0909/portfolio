import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";

import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function Home2() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function ContactForm() {
    function handleChange(e) {
      const { name, value } = e.target;
      setForm((f) => ({ ...f, [name]: value }));
    }

    function handleSubmit(e) {
      e.preventDefault();
      // basic validation
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        alert("Please fill your name, email and message before sending.");
        return;
      }
      const subject = encodeURIComponent(`Contact from ${form.name || "Portfolio"}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
      window.location.href = `mailto:hannahakanni7@gmail.com?subject=${subject}&body=${body}`;
    }

    return (
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" style={{ flex: 1, padding: 8, borderRadius: 4 }} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" style={{ flex: 1, padding: 8, borderRadius: 4 }} />
        </div>
        <div>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows={4} style={{ width: "100%", padding: 8, borderRadius: 4 }} />
        </div>
        <div style={{ marginTop: 8, textAlign: "center" }}>
          <button type="submit" className="btn btn-primary" style={{ minWidth: 120 }}>Send</button>
        </div>
      </form>
    );
  }
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi! I'm <b className="purple">Akanni Hannah Ibukun</b>, a passionate full-stack developer with 5 years of experience building modern, responsive, and scalable applications. I work across the frontend, backend, and full-stack, creating intuitive user interfaces, robust server systems, and seamless end-to-end solutions.

I also specialize in automation using GoHighLevel, designing workflows that streamline client management, sales tracking, and marketing operations—helping businesses save time and improve efficiency.

Outside of tech, I enjoy playing games, engaging in social services, and exploring new places. My personal motto:
"Strive to build things that make a meaningful difference in the world!" 💡
              <br />
              <br />
              I am fluent in <i><b className="purple">TypeScript, JavaScript, React, Next.js, Node.js, PostgreSQL, MERN Stack, Flutter, Kotlin, and Java, with hands-on experience building full-stack web and mobile applications and implementing automation workflows. I am also comfortable working with REST APIs, authentication systems, and cloud integrations, enabling me to deliver scalable, efficient, and reliable solutions.</b></i>.
              <br />
              <br />
              My interests include creating innovative and valuable <i><b className="purple">technologies and products</b></i>, 
              especially in <i><b className="purple">Web & Mobile App Development</b></i>.
              <br />
              <br />
              I am constantly seeking opportunities to grow my skills, explore new frameworks, and contribute to meaningful projects. 
              I particularly enjoy developing products using <b className="purple">MERN Stack, Flutter, React Native, Kotlin</b> and 
              <i><b className="purple"> modern JavaScript libraries and frameworks</b></i> like 
              <i><b className="purple"> React.js and Next.js</b></i>.
              <br />
              <br />
              Outside of coding, I enjoy keeping up with tech trends, collaborating with fellow developers 🤝, and bringing creative ideas to life.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Zionstone0909"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hannahakanni7@gmail.com"
                  className="icon-colour home-social-icons"
                  title="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/23409030585841"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>

            {/* Contact form (opens mail client) */}
            <div style={{ marginTop: 20, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
              <ContactForm />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import {  pdfjs } from "react-pdf";
import laptopImg from "../../Assets/resume.png";
import resumePDF from "../../Assets/Frontend Developer.pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function ResumeNew() {
  // const [width, setWidth] = useState(1200);
  // // const [error, setError] = useState(false);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  const pdf = resumePDF;

  return (
    <div>
      <Container fluid className="resume-section" id="resume">
        <Particle />
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}

        {/* <Row className="resume" style={{ justifyContent: "center" }}>
          {error ? (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <p>
                Click 👇 to download           
                               
                
              </p>
            </div>
          ) : (
            <Document
              file={pdf}
              className="d-flex justify-content-center"
              onLoadError={() => setError(true)}
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          )}
        </Row> */}
        <Row style={{ justifyContent: "center", padding: "5px" }}>
          <Col
            md={5}
            style={{ paddingTop: "5px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; View & Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <div style={{ textAlign: "center", paddingBottom: "30px" }}>
      <h1 className="project-heading">
        Days I <strong className="purple">Code</strong>
      </h1>
      <Row className="justify-content-center">
        <Col md="auto">
          <GitHubCalendar
            username="ChaminduWn"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Github;

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Tech Enthusiast / Explorer",
          "Frontend Developer",
          "Backend Developer",
          "Full Stack Developer",
          "Mobile Developer",
          "DevOps / Cloud Engineer",
          "Automation Specialist",
          "Software Architect",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

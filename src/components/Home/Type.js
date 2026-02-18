import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Tech Enthusiast / Explorer",
          "Frontend Developer — React / Next.js",
          "Backend Developer — Node.js / REST APIs",
          "Full Stack Developer — MERN & TypeScript",
          "Mobile Developer — Flutter / Kotlin",
          "DevOps / Cloud Engineer",
          "Automation Specialist — GoHighLevel",
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

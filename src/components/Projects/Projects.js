import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project images
import jirehfishes from "../../Assets/jirehfishes.png";
import foritizon from "../../Assets/foritizon.png";
import carental from "../../Assets/Projects/car.png";
import bizzup from "../../Assets/Projects/bizz.png";
import Eventz from "../../Assets/Projects/event.png";
import Wres from "../../Assets/Projects/WN Resturants.png";
import Mres from "../../Assets/Projects/Resturant mobile.png";
import dreamz from "../../Assets/Projects/wed.png";
import Qr from "../../Assets/Projects/qr scanner.png";
import travel from "../../Assets/Projects/travel.png";
import treasurer from "../../Assets/Projects/treeasurer hunter.png";
import flight from "../../Assets/Projects/flight app.png";
import note from "../../Assets/Projects/noteapp.png";
import cal from "../../Assets/Projects/cal5.jpg";
import gymsys from "../../Assets/Projects/gym.png";

function Projects() {
  // Project data in an array with tags (web / mobile)
  const projects = [
    {
      imgPath: note,
      title: "Note App",
      description: "Android application built with Kotlin that helps users manage tasks efficiently. It allows creating, editing, and deleting tasks, setting reminders with alarms, and includes a Pomodoro-style focus timer to boost productivity. Built using ConstraintLayout, RecyclerView, and CardView, it leverages SharedPreferences for state management and AlarmManager for notifications, ensuring a smooth and user-friendly experience on Android devices.",
      ghLink: "https://github.com/Zionstone0909/Note-App-main",
      type: "mobile",
    },
    
    {
      imgPath: Eventz,
      title: "Event.lk",
      description: "Online event management platform for businesses, built with Java, JSP-Servlets, HTML, CSS, JavaScript, and MySQL. Hosted on a Tomcat server and following the MVC architecture, it allows users to register, create events, and browse responsive event listings. The platform combines a user-friendly interface with dynamic interactivity, simplifying event planning and participation.",
      ghLink: "https://github.com/Zionstone0909/Event.lk",
      type: "web",
    },
    {
      imgPath: jirehfishes,
      title: "Jireh Fishes",
      description: "Jireh Fishes – Authentication Web Application. A web application where admin staff and auditors can securely log in to manage operations, record sales, and add new items to inventory. Features role-based access control, real-time data updates, and a user-friendly interface for efficient management. Built with TypeScript, React/Next.js, Node.js, REST APIs, Authentication mechanisms, and PostgreSQL/MongoDB database.",
      ghLink: "https://github.com/Zionstone0909/jireh-fishes-tracker",
      type: "web",
    },
    {
      imgPath: foritizon,
      title: "Fortizon Digital Solution",
      description: "Android web app developed using GoHighLevel that enables businesses to automate marketing, manage customer relationships, and streamline workflows. The platform features customizable campaigns, real-time analytics, automated follow-ups, and an intuitive dashboard. With easy-to-use automation tools and a centralized system for tracking leads and performance, it delivers an engaging and efficient digital experience for business users.",
      ghLink: "https://fortizondigitals.com/",
      type: "web",
    },
    
    {
      imgPath: carental,
      title: "Car Rental App",
      description: "A Flutter-based mobile application for renting premium cars, integrated with Firebase Firestore for real-time data management. The app features a luxurious and responsive UI, structured with BLoC architecture, and supports cross-platform deployment on Android, iOS, and Web.",
      ghLink: "https://github.com/Zionstone0909/Car-Rental",
      type: "mobile",
    },
    {
      imgPath: bizzup,
      title: "BizzSup",
      description:
        "BizzSup is an online customer support system for businesses, developed using PHP, HTML, CSS, JavaScript, and MySQL, hosted locally via XAMPP. The platform features a user-friendly interface with dynamic interactions, allowing businesses to manage customer inquiries efficiently. Built with clean PHP backend scripts, styled with external CSS, and enhanced with JavaScript, BizzSup provides a visually appealing and functional solution for online customer support.",
      ghLink: "https://github.com/Zionstone0909/BizzSup",
      type: "web",
    },
    {
      imgPath: Wres,
      title: "WN Restaurant - Web App",
      description: "A restaurant management system built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and styled with Tailwind CSS. This application provides a seamless experience for customers and management alike, supporting menu browsing, ordering, payments, and user management functionalities.",
      ghLink: "https://github.com/Zionstone0909/Restaurant/tree/main",
      type: "web",
    },
    {
      imgPath: Mres,
      title: "WN Restaurant - Mobile App",
      description: "React Native application built with Expo Go, serving as the user-facing counterpart to the web app. It allows users to browse food items, manage their cart, make payments, and update profiles, all connected to a Node.js/Express backend with MongoDB. Designed for Android, it ensures seamless cross-platform access to user data while keeping admin functionalities exclusive to the web version.",
      ghLink: "https://github.com/Zionstone0909/Resturant-main",
      type: "mobile",
    },
    {
      imgPath: dreamz,
      title: "FairyTalePlanner - Wedding Planning System",
      description: "FairyTalePlanner is a MERN-based wedding planning platform that connects couples with vendors to make wedding planning effortless and enjoyable. Built with React, Node.js, Express, MongoDB, and styled with Tailwind CSS, it features a budget tracker, interactive Google Maps API for venues and services, and admin-approved listings to ensure high-quality experiences.",
      ghLink: "https://github.com/Zionstone0909/Fairy-Tale-Planner",
      type: "web",
    },
    {
      imgPath: Qr,
      title: "WN QR - QR Code Scanner",
      description: "Flutter based mobile application that allows users to scan and generate QR codes with ease. The app supports various types of QR codes, including text, URLs, and contact information. It also provides features like sharing QR codes, saving scanned contact information, and opening URLs directly from the app.",
      ghLink: "https://github.com/Zionstone0909/Qr-Scanner-Flutter",
      type: "mobile",
    },
    {
      imgPath: travel,
      title: "Travel Management Learning Platform",
      description: "Spring Boot and React.js based web application that blends travel planning with interactive learning and community features. Users can plan trips, join or create travel groups, chat in real time via Spring WebSocket, and share experiences through blog-style posts with likes and comments. The platform also includes quizzes to make learning engaging and social. Built with Spring Boot, React.js, MongoDB, Firebase, and JavaScript, it provides a modern, scalable solution for collaborative travel and knowledge sharing",
      ghLink: "https://github.com/Zionstone0909/Travel-Management-Learning-Platform",
      type: "web",
    },
    {
      imgPath: treasurer,
      title: "Treasurer Hunter",
      description: "Python based game built using the Turtle graphics library, where players navigate a maze to collect eggs while avoiding enemies. Featuring arrow-key controls, interactive obstacles, and a scoring system, the game challenges players’ strategy and reflexes. Classes manage walls, player movement, enemies, and collectible eggs, providing a structured and engaging gameplay experience.",
      ghLink: "https://github.com/Zionstone0909/GAMES",
      type: "web",
    },
    {
      imgPath: flight,
      title: "Flight Booking Website",
      description: "Travel Booking Website is a responsive platform built with React.js and TailwindCSS that allows users to search flights, book tickets, and follow a step-by-step guide for the booking process. Featuring user authentication, a modern UI with animations, and integration with the Amadeus API, it provides a seamless experience across desktop and mobile devices.",
      ghLink: "https://github.com/Zionstone0909/Flight-App",
      type: "web",
    },
    {
      imgPath: cal,
      title: "Calculator App",
      description: "Android application built with Kotlin that performs basic arithmetic operations with a clean and intuitive interface. It supports addition, subtraction, multiplication, division, modulus, and decimal calculations, along with parentheses for complex expressions. The app includes error handling for invalid inputs and a clear button for convenience, using TableLayout, LinearLayout, and TextView for the UI and mxparser for expression evaluation",
      ghLink: "https://github.com/Zionstone0909/Android-Calculator-App",
      type: "mobile",
    },
    {
      imgPath: gymsys,
      title: "Gym Management System",
      description: "MERN stack application that streamlines gym operations by managing members, schedules, staff, subscriptions, finances, inventory, and supplements. It also provides personalized coaching features to enhance member engagement and support business growth. Built with React, Node.js, Express, MongoDB, Tailwind CSS, Redux, and integrated with Firebase and Material UI, the system delivers a modern, responsive, and efficient gym management solution.",
      ghLink: "https://github.com/Zionstone0909/gym-management-system-",
      type: "web",
    },
  ];

  // State for search and filter
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter logic
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || project.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on — filter by type or search by name.
        </p>

        {/* 🔍 Search + Filter */}
        <div className="project-filters" style={{ position: "relative", zIndex: 10 }}>
          <Form.Control
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ position: "relative", zIndex: 10 }}
          />
          <div className="filter-buttons" style={{ position: "relative", zIndex: 10 }}>
            <button
              className={filter === "all" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("all")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              All
            </button>
            <button
              className={filter === "web" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("web")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              Web
            </button>
            <button
              className={filter === "mobile" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("mobile")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              Mobile
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
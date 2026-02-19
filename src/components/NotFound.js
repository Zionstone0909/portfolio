import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-heading">Page Not Found</h2>
        <p className="not-found-text">
          Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
        </p>
        <button
          className="not-found-btn"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
        <p className="not-found-redirect">
          Redirecting to home in 5 seconds...
        </p>
      </div>
    </div>
  );
}

export default NotFound;

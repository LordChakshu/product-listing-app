import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./404.module.css"; // optional CSS module

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={() => navigate("/")} className={styles.homeButton}>
        Go to Home
      </button>
    </div>
  );
};

export default Error404;

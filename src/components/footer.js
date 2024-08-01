import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div style={{ textAlign: "center", padding: "10px" }}>
        &copy; 2024 Intercov. All Right Reserved.
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex" }}>
          <li style={{ margin: "0 10px" }}>
            <a href="https://wa.me/4831169068" target="_blank" rel="noopener noreferrer"
               style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
              <i className="fab fa-whatsapp" style={{ fontSize: "24px", marginRight: "8px" }}></i>
              <span style={{ fontSize: "16px" }}>WhatsApp</span>
            </a>
          </li>
        </ul>
      </div>
      {
        showTopBtn && (
          <div style={{ textAlign: "center", cursor: "pointer" }} onClick={goTop}>
            <i className="fas fa-arrow-up" style={{ fontSize: "24px" }}></i>
          </div>
        )
      }
    </Container>
  );
}

export default AppFooter;

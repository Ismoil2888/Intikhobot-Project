import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import logo from "../styles/iconapp.png";

function Home() {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate("/sections");
    };

  return (
    <div className="main-container">
      <div className="home-header">
        <h2>Интихоботи вакилони халқ - 2024</h2>
      </div>
      {/* Title */}
      <h1 className="title">Интихоботи вакилони халқ - 2024</h1>

      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Buttons */}
      <div className="buttons-container">
      <button className="button" onClick={handleNavigate}>
          МАЪЛУМОТ
      </button>
        <button className="button">ЗАБОНИ БАРНОМА</button>
        <button className="button">ДАР БОРАИ МО</button>
      </div>
    </div>
  );
}

export default Home;
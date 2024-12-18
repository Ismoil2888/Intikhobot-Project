import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import logo from "../styles/logointikhobot.png";
import parlament from "../styles/parlament.png";

function Home() {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate("/sections");
    };

  return (
    <div className="main-container">
      <div className="home-header">
        <img src={parlament} alt="" className="parlament-background" />
      </div>
      {/* Title */}
      <h1 className="title">Интихоботи вакилони халқ - 2025</h1>

      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Buttons */}
      <div className="buttons-container">
        <button className="button">ЗАБОНИ БАРНОМА</button>
      <button className="button" onClick={handleNavigate}>
          МАЪЛУМОТ
      </button>
        <button className="button">ДАР БОРАИ МО</button>
      </div>
    </div>
  );
}

export default Home;
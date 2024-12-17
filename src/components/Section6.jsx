import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Sections.css";
import { FaChevronLeft } from "react-icons/fa";

function Section6() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const goBack = () => {
    // Активируем анимацию выхода
    setIsExiting(true);

    // После завершения анимации выполняем навигацию
    setTimeout(() => {
      navigate(-1);
    }, 200); // Длительность совпадает с анимацией CSS
  };

  return (
    <div className={`info-container ${isExiting ? "fade-out" : "slide-in"}`}>
      <div className="header">
        <FaChevronLeft onClick={goBack} className="back-button" />
        <h2 className="header-title">Порядок участия международных наблюдателей на выборах</h2>
      </div>
      <ul className="info-list">
        <Link to="/"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>О выборах Маджлиси Оли Республики Таджикистан</li></Link>
        <li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>О выборах депутатов в местные Маджлисы народных депутатов</li>
        <li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Выборы депутатов в джамоатах</li>
        <li>Дигар маводхо</li>
        <li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Порядок участия национальных наблюдателей на выборах</li>
        <li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Порядок участия СМИ на выборах</li>
        <li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Порядок участия международных наблюдателей на выборах</li>
      </ul>
    </div>
  );
}

export default Section6;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Sections.css";
import { FaChevronLeft } from "react-icons/fa";

function Sections() {
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
        <h2 className="header-title">Маълумот</h2>
      </div>
      <ul className="info-list">
        <Link to="/section1"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>О выборах Маджлиси Оли Республики Таджикистан</li></Link>
        <Link to="/section2"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>О выборах депутатов в местные Маджлисы народных депутатов</li></Link>
        <Link to="/section3"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Выборы депутатов в джамоатах</li></Link>
        <li>Дигар маводхо</li>
        <Link to="/section4"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Порядок участия национальных наблюдателей на выборах</li></Link>
        <Link to="/section5"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Порядок участия СМИ на выборах</li></Link>
        <Link to="/section6"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Порядок участия международных наблюдателей на выборах</li></Link>
      </ul>
    </div>
  );
}

export default Sections;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Sections.css";
import { FaChevronLeft } from "react-icons/fa";

function Section1() {
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
        <h2 className="header-title">О выборах Маджлиси Оли Республики Таджикистан</h2>
      </div> 44
      <ul className="info-list">
        <Link to="/section1page1"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Общие информация</li></Link>
        <Link to="/section1page2"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Общая положения</li></Link>
        <li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Избирательные комиссии</li>
        <li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Избирательные округ и участки</li>
        <li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Списки избирателей</li>
        <Link to="/section4"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Выдвижение, регистрация и гарантии деятельности кандидатов</li></Link>
        <Link to="/section5"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Организация и порядок голосования</li></Link>
        <Link to="/section6"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Определение результатов выборов</li></Link>
      </ul>
    </div>
  );
}

export default Section1;
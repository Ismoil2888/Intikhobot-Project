import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Sections.css";
import { FaChevronLeft } from "react-icons/fa";

function SectionPage1() {
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
        <h2 className="header-title">Общая информация</h2>
      </div>
      <div className="info-list-oi" style={{textAlign: "center"}}>
        <h2>КОНСТИТУЦИОННЫЙ ЗАКОН РЕСПУБЛИКИ ТАДЖИКИСТАН</h2>
         <h2 style={{marginTop: "25px"}}>О ВЫБОРАХ МАДЖЛИСИ ОЛИ РЕСПУБЛИКИ ТАДЖИКИСТАН</h2>
<p style={{marginTop: "25px"}}>
(Ахбори Маджлиси Оли Республики Таджикистан, 1999г., № 12, ст. 296, 2004г., № 7, ст.451; 2007г., №5, ст.352; 2008 г., №10, ст.797; 2012 г., №8, ст.811; 2014 г., №3, ст.140, №7, ч.1, ст.382; 2017г., №7-8, ст.562; 2018г., №2, ст.61; №9 – 10, ст.581; 2019 г., №7, ст.460)
</p>
      </div>

      <div className="background-flag"></div>
    </div>
  );
}

export default SectionPage1;
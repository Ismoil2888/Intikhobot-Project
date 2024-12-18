// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/Sections.css";
// import { FaChevronLeft } from "react-icons/fa";

// function AllSections() {
//   const navigate = useNavigate();
//   const [isExiting, setIsExiting] = useState(false);

//   const goBack = () => {
//     // Активируем анимацию выхода
//     setIsExiting(true);

//     // После завершения анимации выполняем навигацию
//     setTimeout(() => {
//       navigate(-1);
//     }, 200); // Длительность совпадает с анимацией CSS
//   };

//   return (
//     <div className={`info-container ${isExiting ? "fade-out" : "slide-in"}`}>
//       <div className="header">
//         <FaChevronLeft onClick={goBack} className="back-button" />
//         <h2 className="header-title">Маълумот</h2>
//       </div>
//       <ul className="info-list">
//         <Link to="/section1"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>О выборах Маджлиси Оли Республики Таджикистан</li></Link>
//         <Link to="/section2"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>О выборах депутатов в местные Маджлисы народных депутатов</li></Link>
//         <Link to="/section3"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Выборы депутатов в джамоатах</li></Link>
//         <li>Дигар маводхо</li>
//         <Link to="/section4"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Порядок участия национальных наблюдателей на выборах</li></Link>
//         <Link to="/section5"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Порядок участия СМИ на выборах</li></Link>
//         <Link to="/section6"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>Порядок участия международных наблюдателей на выборах</li></Link>
//       </ul>
//     </div>
//   );
// }

// export default AllSections;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Sections.css";
import { FaChevronLeft } from "react-icons/fa";

function AllSections() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const goBack = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate(-1);
    }, 200);
  };

  return (
    <div className={`info-container ${isExiting ? "fade-out" : "slide-in"}`}>
      {/* Заголовок */}
      <div className="top-header">
        <h3 className="main-title">
          ҚОНУНИ КОНСТИТУТСИОНИ ҶУМҲУРИИ ТОҶИКИСТОН ДАР БОРАИ ИНТИХОБОТИ ВАКИЛОН БА
          МАҶЛИСҲОИ МАХАЛЛИИ ВАКИЛОНИ ХАЛҚ
        </h3>
      </div>

      {/* Кнопка назад */}
      <div className="header">
        <FaChevronLeft onClick={goBack} className="back-button" />
      </div>

      {/* Список */}
      <ul className="info-list-all-section">
         <Link to="/section1"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>О ВЫБОРАХ МАДЖЛИСИ ОЛИ РЕСПУБЛИКИ ТАДЖИКИСТАН</li></Link>
         <Link to="/section2"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>О ВЫБОРАХ ДЕПУТАТОВ В МЕСТНЫЕ МАДЖЛИСЫ НАРОДНЫХ ДЕПУТАТОВ</li></Link>
         <Link to="/section3"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>ВЫБОРЫ ДЕПУТАТОВ В ДЖАМОАТАХ</li></Link>
         <li>ДИГАР МАВОДХО</li>
         <Link to="/section4"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>ПОРЯДОК УЧАСТИЯ НАЦИОНАЛЬНЫХ НАБЛЮДАТЕЛЕЙ НА ВЫБОРАХ</li></Link>
         <Link to="/section5"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>ПОРЯДОК УЧАСТИЯ СМИ НА ВЫБОРАХ</li></Link>
         <Link to="/section6"><li style={{fontWeight: "bold", fontSize: "17px", color: "rgb(50, 50, 50)"}}>ПОРЯДОК УЧАСТИЯ МЕЖДУНАРОДНЫХ НАБЛЮДАТЕЛЕЙ НА ВЫБОРАХ</li></Link>
      </ul>

      {/* Флаг на фоне */}
      <div className="background-flag"></div>
    </div>
  );
}

export default AllSections;
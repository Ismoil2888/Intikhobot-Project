import React from "react";
import "./Zagruzka.css";
import appIcon from "../assets/images/appbasiclogo.png";

const Zagruzka = () => {
  return (
    <div className="app-container">
      <div className="app-header">
         <img src={appIcon} alt="App Icon" className="app-icon" />
        <div className="app-info">
          <h1>Интихоботи Вакилони Халк - 2025</h1>
          <p>Описание вашего приложения. Оно делает жизнь проще и лучше.</p>
        </div>
      </div>
      <div className="app-buttons">
        <button
          className="download-button new-devices"
          onClick={() =>
            (window.location.href = "/apk-files/app-arm64-v8a.apk")
          }
        >
          Установить (новые устройства)
        </button>
        <button
          className="download-button old-devices"
          onClick={() =>
            (window.location.href = "/apk-files/app-armeabi-v7a.apk")
          }
        >
          Установить (старые устройства)
        </button>
      </div>
      <div className="app-footer">
        <p>Версия: 1.10 | Размер: 25 MB</p>
        <p>&copy; 2025 Парлумони Чумхурии Точикистон. Все права защищены.</p>
      </div>
    </div>
  );
};

export default Zagruzka;
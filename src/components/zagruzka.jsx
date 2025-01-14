// import React from "react";
// import "./Zagruzka.css";
// import appIcon from "../assets/images/appbasiclogo.png";

// const Zagruzka = () => {
//   return (
//     <div className="app-container">
//       <div className="app-header">
//          <img src={appIcon} alt="App Icon" className="app-icon" />
//         <div className="app-info">
//           <h1>Интихоботи Вакилони Халк - 2025</h1>
//           <p>Описание вашего приложения. Оно делает жизнь проще и лучше.</p>
//         </div>
//       </div>
//       <div className="app-buttons">
//         <button
//           className="download-button new-devices"
//           onClick={() =>
//             (window.location.href = "/apk-files/app-arm64-v8a.apk")
//           }
//         >
//           Установить (новые устройства)
//         </button>
//         <button
//           className="download-button old-devices"
//           onClick={() =>
//             (window.location.href = "/apk-files/app-armeabi-v7a.apk")
//           }
//         >
//           Установить (старые устройства)
//         </button>
//       </div>
//       <div className="app-footer">
//         <p>Версия: 1.10 | Размер: 25 MB</p>
//         <p>&copy; 2025 Парлумони Чумхурии Точикистон. Все права защищены.</p>
//       </div>
//     </div>
//   );
// };

// export default Zagruzka;

import React from "react";

const Zagruzka = () => {
  const handleDownload = () => {
    // Ссылка на файл в папке public
    const apkFileUrl = `${process.env.PUBLIC_URL}/apk-files/app-arm64-v8a.apk`;

    // Создаем временную ссылку для скачивания
    const link = document.createElement("a");
    link.href = apkFileUrl;
    link.download = "app-arm64-v8a.apk"; // Имя файла для сохранения
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Скачать APK
    </button>
  );
};

export default Zagruzka;
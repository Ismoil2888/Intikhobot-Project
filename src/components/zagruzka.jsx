// import React from "react";

// const Zagruzka = () => {
//   const handleDownload = () => {
//     // Ссылка на файл в папке public
//     const apkFileUrl = `${process.env.PUBLIC_URL}/apk-files/app-arm64-v8a.apk`;

//     // Создаем временную ссылку для скачивания
//     const link = document.createElement("a");
//     link.href = apkFileUrl;
//     link.download = "app-arm64-v8a.apk"; // Имя файла для сохранения
//     link.click();
//   };

//   return (
//     <button
//       onClick={handleDownload}
//       style={{
//         padding: "10px 20px",
//         fontSize: "16px",
//         backgroundColor: "#4CAF50",
//         color: "#fff",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//       }}
//     >
//       Скачать APK
//     </button>
//   );
// };

// export default Zagruzka;









import React, { useState } from "react";
import "./Zagruzka.css";

const AppInstallPage = () => {
  const [downloads, setDownloads] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [loading, setLoading] = useState(true);
  const screenshots = [
    `${process.env.PUBLIC_URL}/images/Screenshot1.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot2.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot3.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot4.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot5.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot6.jpg`,
  ];

  const handleDownload = (fileName) => {
    const apkFileUrl = `${process.env.PUBLIC_URL}/apk-files/${fileName}`;
    const link = document.createElement("a");
    link.href = apkFileUrl;
    link.download = fileName;
    link.click();
    setDownloads((prev) => prev + 1);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Roboto', sans-serif",
        padding: "20px",
        textAlign: "center",
        overflowX: "hidden",
      }}
    >
      {/* Иконка приложения */}
      <div style={{display: "flex", alignItems: "center"}}>
      <div
        style={{
          width: "140px",
          height: "140px",
          backgroundColor: loading ? "#ddd" : "transparent",
          borderRadius: "20px",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/appbasiclogo.png`}
          alt="Иконка приложения"
          onLoad={() => setLoading(false)}
          style={{
            display: loading ? "none" : "block",
            width: "130px",
            height: "110px",
            borderRadius: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
      <h1 style={{ fontSize: "25px", color: "#333", marginBottom: "20px"}}>
        Интихоботи вакилони халқ - 2025
      </h1>
      </div>

      <p
        style={{
          fontSize: "14px",
          color: "#888",
          fontStyle: "italic",
        }}
      >
        Барнома {downloads} маротиба насб карда шудааст.
      </p>
      <p
        style={{
          fontSize: "14px",
          color: "#555",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        Андозаи барнома: <strong>26 MB</strong>
      </p>

      {/* Кнопки для скачивания */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <button
          onClick={() => handleDownload("app-arm64-v8a.apk")}
          style={{
            width: "335px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#234eda",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#234eda")}
        >
          Насб кардан
        </button>
        {/* <button
          onClick={() => handleDownload("app-armeabi-v7a.apk")}
          style={{
            width: "155px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#2196F3",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e88e5")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#2196F3")}
        >
          Насб кардан
        </button> */}
      </div>

      {/* Скриншоты приложения */}
      <div
        style={{
          maxWidth: "350px",
          display: "flex",
          overflowX: "auto",
          gap: "15px",
          marginBottom: "20px",
          marginLeft: "30px",
          paddingLeft: "70px",
          paddingRight: "90px",
          paddingBottom: "10px",
        }} className="screens"
      >
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              width: "120px",
              height: "240px",
              borderRadius: "10px",
              backgroundColor: loading ? "#ddd" : "transparent",
              position: "relative",
            }}
          >
            <img
              src={screenshot}
              alt={`Скриншот ${index + 1}`}
              onLoad={() => setLoading(false)}
              onClick={() => openModal(screenshot)}
              style={{
                display: loading ? "none" : "block",
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        ))}
      </div>
 
 <div style={{textAlign: "left"}}>
<h2>Тавсиф:</h2>
      <p style={{ fontSize: "16px", color: "#666", marginTop: "10px" }}>
        Барнома барои интихоботи вакилони халқ соли 2025. Насб кунед ва аз
        имконоти муфиди он истифода баред!
      </p>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Полный скриншот"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
          />
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "24px",
              color: "#fff",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default AppInstallPage;
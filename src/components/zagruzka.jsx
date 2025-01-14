import React, { useState } from "react";
import "./Zagruzka.css";

const AppInstallPage = () => {
  const [downloads, setDownloads] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpenn, setIsModalOpenn] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const openModall = (content) => {
    setModalContent(content);
    setIsModalOpenn(true);
  };

  const closeModall = () => {
    setIsModalOpenn(false);
  };

  return (
    <div>
   {/* Шапка с меню */}
   <header
   style={{
     position: "fixed",
     top: 0,
     left: 0,
     width: "100%",
     height: "60px",
     backgroundColor: "#234eda",
     color: "#fff",
     display: "flex",
     alignItems: "center",
     justifyContent: "space-between",
     padding: "0 20px",
     zIndex: 1000,
   }}
 >
   <h2 style={{ marginLeft: 70 }}>Интихоботи 2025</h2>
   <button
     onClick={() => setIsSidebarOpen(!isSidebarOpen)}
     style={{
       backgroundColor: "transparent",
       border: "none",
       color: "#fff",
       fontSize: "24px",
       cursor: "pointer",
       position: "absolute",
     }}
   >
     ☰
   </button>
 </header>

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
        marginTop: "55px",
        textAlign: "center",
        overflowX: "hidden",
      }}
    >

            {/* Боковое меню */}
            <aside
        style={{
          position: "fixed",
          top: 0,
          left: isSidebarOpen ? 0 : "-400px",
          width: "300px",
          height: "100%",
          backgroundColor: "#fff",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
          transition: "left 0.3s ease",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ margin: 0, color: "#234eda" }}>Интихоботи 2025</h3>
        </div>
        <button
          onClick={() =>
            openModall(
              <>
                <h3>Приложение для старых устройств</h3>
                <p style={{marginTop: "15px"}}>
                  Это версия приложения предназначена для устройств с версиями Android
                  4.4 и выше. Оно оптимизировано для более ранних устройств,
                  обеспечивая стабильную работу.
                </p>
                <button
                  onClick={() => handleDownload("app-armeabi-v7a.apk")}
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#2196F3",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Скачать APK (armeabi-v7a)
                </button>
              </>
            )
          }
          style={{
            backgroundColor: "transparent",
            border: "none",
            textAlign: "left",
            padding: "10px 0",
            cursor: "pointer",
            color: "#234eda",
          }}
        >
          Приложение для старых устройств
        </button>
        <button
          onClick={() =>
            openModall(
              <>
                <h3>Инструкция по установке</h3>
                <p>
                  Чтобы установить приложение, скачайте APK-файл и откройте его
                  нажав на "Подробнее" и там будет файл приложения. При необходимости в настройках дайте разрешение на установку
                  приложений из неизвестных источников и начнеётся установка приложения на ваше устройство.
                </p>
              </>
            )
          }
          style={{
            backgroundColor: "transparent",
            border: "none",
            textAlign: "left",
            padding: "10px 0",
            cursor: "pointer",
            color: "#234eda",
          }}
        >
          Инструкция установки
        </button>
      </aside>

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

           {/* Модальное окно */}
           {isModalOpenn && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "500px",
              width: "90%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
            }}
          >
            {modalContent}
            <button
              onClick={closeModall}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#234eda",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default AppInstallPage;
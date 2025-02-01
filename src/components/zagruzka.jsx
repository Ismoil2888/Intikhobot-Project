import React, { useState, useEffect } from "react";
import { database } from "../firebase/firebase";
import { ref, get, runTransaction } from "firebase/database";
import "./Zagruzka.css";

const AppInstallPage = () => {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [visitCount, setVisitCount] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentArray, setCurrentArray] = useState([]);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartTarget, setTouchStartTarget] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState("");
  const [language, setLanguage] = useState("tj");
  const screenshots = [
    `${process.env.PUBLIC_URL}/images/Screenshot1.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot2.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot3.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot4.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot5.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot6.jpg`,
  ];

  const screenshotsMenu = [
    `${process.env.PUBLIC_URL}/images/Screenshot_d1.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot_d2.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot_d3.png`,
    `${process.env.PUBLIC_URL}/images/Screenshot_d4.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot_d5.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot_d6.jpg`,
    `${process.env.PUBLIC_URL}/images/Screenshot_d7.jpg`,
  ];


  useEffect(() => {
    // Получение текущего значения загрузок из Firebase
    const downloadsRef = ref(database, "downloads");
    get(downloadsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setDownloads(data.count || 0);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  const handleDownload = (fileName) => {
    const lastDownloadTime = localStorage.getItem("lastDownloadTime");
    const currentTime = Date.now();

    if (lastDownloadTime && currentTime - lastDownloadTime < 24 * 60 * 60 * 1000) {
      showNotificationError(
        language === "tj"
          ? "Шумо аллакай барномаро насб кардед. Такрор кардани насб баъд аз 24 соат имконпазир аст."
          : "Вы уже скачали приложение. Повторная загрузка возможна через 24 часа."
      );
      return;
    }

    localStorage.setItem("lastDownloadTime", currentTime);

    setIsDownloading(true);
    setProgress(0);

    const apkFileUrl = `${process.env.PUBLIC_URL}/apk-files/${fileName}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apkFileUrl, true);
    xhr.responseType = "blob";

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        setProgress(percentComplete);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], { type: "application/vnd.android.package-archive" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();

        showNotification(language === "tj"
          ? "Як лаҳза"
          : "Минуту"
        );

        setProgress(100);
        setIsDownloading(false);
        setDownloadComplete(true);
      } else {
        alert("Ошибка при загрузке файла");
        setIsDownloading(false);
      }
    };

    xhr.onerror = () => {
      showNotificationError("Ошибка при соединении");
      setIsDownloading(false);
    };

    xhr.send();

    const downloadsRef = ref(database, "downloads");

    runTransaction(downloadsRef, (currentData) => {
      if (currentData === null) {
        return { count: 1 };
      }
      return { count: currentData.count + 1 };
    })
      .then(() => {
        console.log("Количество скачиваний успешно обновлено.");
        setDownloads((prev) => prev + 1);
      })
      .catch((error) => {
        console.error("Ошибка транзакции:", error);
      });
  };

  const handleViewFile = () => {
    const apkFileUrl = `${process.env.PUBLIC_URL}/apk-files/intikhobot-2025_arm64-v8a.apk`;
    window.open(apkFileUrl, '_blank');
  };

  // Устанавливаем язык из localStorage при загрузке страницы
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Обработчик переключения языка
  const toggleLanguage = () => {
    const newLanguage = language === "tj" ? "ru" : "tj";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const openModal = (array, index) => {
    setCurrentArray(array);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTouchStart = (e) => {
    // Сохраняем начальную точку касания
    setTouchStartX(e.touches[0].clientX);

    // Проверяем, существует ли e.target и является ли он элементом DOM
    if (e.target instanceof HTMLElement) {
      setTouchStartTarget(e.target);
    } else {
      setTouchStartTarget(null); // Если e.target недействителен
    }
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    // Диагностика для отладки
    console.log("Touch started on:", touchStartTarget);
    console.log("Touch deltaX:", deltaX);

    // Проверяем, если свайп происходит внутри элемента с классом "no-close-swipe"
    if (
      isSidebarOpen &&
      touchStartTarget &&
      touchStartTarget.closest &&
      touchStartTarget.closest(".no-close-swipe")
    ) {
      console.log("Swipe detected inside no-close-swipe element. Aborting menu close.");
      return; // Если внутри элемента с классом "no-close-swipe", не закрываем меню
    }

    if (isSidebarOpen) {
      // Логика для закрытия бокового меню
      if (deltaX > 50) {
        setIsSidebarOpen(false);
        setTouchStartX(null);
        console.log("Sidebar closed via swipe.");
        return;
      }
    } else {
      // Логика для перелистывания изображений
      if (deltaX > 50) {
        goToNext();
        setTouchStartX(null);
        console.log("Next image.");
      } else if (deltaX < -50) {
        goToPrev();
        setTouchStartX(null);
        console.log("Previous image.");
      }
    }
  };

  // Пример вызовов goToNext и goToPrev
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentArray.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentArray.length - 1 : prevIndex - 1
    );
  };

  const openMenuModal = (content) => {
    setModalContent(content);
    setIsMenuModalOpen(true);
  };

  const closeMenuModal = () => {
    setIsMenuModalOpen(false);
  };

  useEffect(() => {
    const visitRef = ref(database, "visitCount");
    get(visitRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setVisitCount(snapshot.val().count || 0);
        }
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  const handleVisit = () => {
    const visitRef = ref(database, "visitCount");
    runTransaction(visitRef, (currentData) => {
      if (currentData === null) {
        return { count: 1 };
      }
      return { count: currentData.count + 1 };
    })
      .then(() => {
        setVisitCount((prev) => prev + 1);
        window.location.href = "https://ismoil2888.github.io/Intikhobot-App-IOS/";
      })
      .catch((error) => {
        console.error("Ошибка транзакции:", error);
      });
  };

  // Функция для успешных уведомлений
  const showNotification = (message) => {
    setNotificationType("success");
    setNotification(message);
    setTimeout(() => {
      setNotification("");
      setNotificationType("");
    }, 15000);
  };

  // Функция для нейтральных уведомлений
  const showNotificationNeutral = (message) => {
    setNotificationType("neutral");
    setNotification(message);
    setTimeout(() => {
      setNotification("");
      setNotificationType("");
    }, 15000);
  };

  // Функция для ошибочных уведомлений
  const showNotificationError = (message) => {
    setNotificationType("error");
    setNotification(message);
    setTimeout(() => {
      setNotification("");
      setNotificationType("");
    }, 5000);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
      showNotification("Агар шумо iPhone-ро истифода баред, менюи кунҷи чапи болоии сомонаро кушоед");
  }, []);
  

  return (
    <div onContextMenu={handleContextMenu}>
      {notification && (
        <div className={`notification ${notificationType}`}>
          {notification}
        </div>
      )}
      {/* Шапка с меню */}
      <header style={styles.header}>
        <h2 style={{ marginLeft: 70 }}>{language === "tj" ? "Интихоботи 2025" : "Выборы 2025"}</h2>
        <button style={styles.headerMenuButton}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          ☰
        </button>
        <button
          style={styles.languageButton}
          onClick={toggleLanguage}
        >
          {language === "tj" ? "ru" : "tj"}
        </button>
      </header>

      <div style={styles.Main}>

        {/* Боковое меню */}
        <aside
          onTouchStart={handleTouchStart} // Добавляем обработчики для меню
          onTouchMove={handleTouchMove}
          style={{
            position: "fixed",
            top: 0,
            left: isSidebarOpen ? 0 : "-450px",
            width: "390px",
            height: "100%",
            backgroundColor: "#fff",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
            transition: "left 0.3s ease",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            paddingTop: "75px",
          }}
        >
          <button
            onClick={() =>
              openMenuModal(
                <>
                  <h3>  {language === "tj"
                    ? `Барнома барои дастгоҳҳои кӯҳна`
                    : `Приложение для старых устройств`}</h3>
                  <p style={{ marginTop: "15px" }}>
                    {language === "tj"
                      ? `Ин версияи барнома барои дастгоҳҳои дорои версияҳои Android пешбинӣ шудааст
                  4.4 ва баландтар. Он барои дастгоҳҳои кӯҳна оптимизатсия шудааст,
                  таъмини кори муътадил.`
                      : `Это версия приложения предназначена для устройств с версиями Android
                  4.4 и выше. Оно оптимизировано для более ранних устройств,
                  обеспечивая стабильную работу.`}
                  </p>
                  <button style={styles.downloadButton2}
                    onClick={() => handleDownload("intikhobot-2025_armeabi-v7a.apk")}>
                    {language === "tj"
                      ? `Насб кардан`
                      : `Скачать APK`}
                  </button>
                </>
              )
            }
            style={styles.buttonWindow1}>
            {language === "tj"
              ? `Барнома барои дастгоҳҳои кӯҳна`
              : `Приложение для старых устройств`}
          </button>
          <button
            onClick={() =>
              openMenuModal(
                <>
                  <h3>
                    {language === "tj"
                      ? `Дастурҳо оид ба насб`
                      : `Инструкция по установке`}
                  </h3>
                  <p>
                    {language === "tj"
                      ? ` Барои насб кардани барнома, файли APK-ро зеркашӣ кунед ва онро кушоед,  
              бо пахш кардани "Подробнее...", ки дар он ҷо файли барнома хоҳад буд. Агар лозим бошад, дар танзимоти дастгоҳатон ба насби барномаҳо аз манбаъҳои номаълум иҷозат диҳед, ва насби барнома дар дастгоҳи шумо оғоз меёбад.`
                      : ` Чтобы установить приложение, скачайте APK-файл и откройте его,
              нажав на "Подробнее...", где будет файл приложения. При необходимости в настройках дайте разрешение на установку
              приложений из неизвестных источников и начнется установка приложения на ваше устройство.`}
                  </p>
                  <div style={styles.screensBlockMenu} className="screensmenu no-close-swipe">
                    {screenshotsMenu.map((screenshot, index) => (
                      <div
                        key={index}
                        style={{
                          flexShrink: 0,
                          width: "70px",
                          height: "90px",
                          borderRadius: "10px",
                          backgroundColor: loading ? "#ddd" : "transparent",
                          position: "relative",
                        }} className="no-close-swipe"
                      >
                        <img
                          key={index}
                          src={screenshot}
                          alt={`Скриншот ${index + 1}`}
                          style={{ width: "50px", cursor: "pointer" }}
                          onClick={() => openModal(screenshotsMenu, index)}
                          className="no-close-swipe"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )
            }
            style={styles.buttonWindow2}
          >
            {language === "tj" ? `Дастурҳо оид ба насб` : `Инструкция по установке`}
          </button>

          <button
            onClick={() =>
              openMenuModal(
                <>
                  <h3>Для пользователей iPhone</h3>
                  <p style={{marginTop: "10px"}}>
        {language === "tj" ? "Количество посещений: " : "Число посещений: "}
        {visitCount}
      </p>
      <button style={styles.downloadButton2} onClick={handleVisit}>
        {language === "tj" ? "Дароед" : "Войдите"}
      </button>
                </>
              )
            }
            style={styles.buttonWindow3}>
            {language === "tj"
              ? `Барои корбарони iPhone`
              : `Для пользователей iPhone`}
          </button>
        </aside>

        {/* Иконка приложения */}
        <div style={{ display: "flex", alignItems: "center" }}>
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
          <h1 style={{ fontSize: "25px", color: "#333", marginBottom: "20px" }}>
            {language === "tj"
              ? `Замимаи мобилӣ: Интихоботи вакилони халқ - 2025`
              : `Выборы народных депутатов - 2025`}
          </h1>
        </div>

        <p style={styles.numberDownloads}>
          {language === "tj"
            ? `Барнома ${downloads} маротиба насб карда шудааст.`
            : `Количество скачиваний ${downloads} раз.`}
        </p>
        <p style={styles.appSize}>
          {language === "tj" ? "Андозаи барнома:" : "Размер приложения:"} <strong>26 MB</strong>
        </p>

        {/* Кнопкa для скачивания */}
        <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
          <button style={styles.downloadButton1}
            onClick={() => handleDownload("intikhobot-2025_arm64-v8a.apk")}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#234eda")}
          >
            {language === "tj" ? "Насб кардан " : "Скачать приложения"}
          </button>
        </div>

        {isDownloading && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              padding: '20px',
              width: '400px',
              textAlign: 'center'
            }}>
              <p style={{ marginBottom: '10px', fontSize: '16px', color: '#333' }}>
                {language === "tj" ? "Дар ҳоли зеркашӣ..." : "Загрузка..."}
              </p>
              <progress value={progress} max="100" style={{ width: '100%', marginBottom: '10px' }}></progress>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{progress}%</p>
            </div>
          </div>
        )}

        {downloadComplete && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }} onClick={() => setDownloadComplete(false)}>
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              padding: '20px',
              width: '400px',
              textAlign: 'center',
              position: 'relative'
            }}>
              <button
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  color: '#666'
                }}
                onClick={() => setDownloadComplete(false)}
              >
                &times;
              </button>
              <p style={{ marginBottom: '15px', fontSize: '16px', color: '#333' }}>
                {language === "tj"
                  ? "Файл барнома зеркашӣ шуд, ҳоло онро дар дастгоҳ насб кунед. Шумо метавонед тарзи насб кардани барномаро дар дастурҳо бинед, дастурҳо дар меню тарафи чапи болои сомона ҷойгир аст."
                  : "Файл приложения загружен, теперь установите его на устройство. Как установить программу можно посмотреть в инструкции, инструкция находится в меню слева вверху сайта."}
              </p>
              <button
                style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                onClick={handleViewFile}
              >
                {language === "tj" ? "Насб кардан ба дастгоҳ" : "Установить на устройство"}
              </button>
            </div>
          </div>
        )}

        {/* Скриншоты приложения */}
        <div style={styles.screensBlock} className="screens">
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
                key={index}
                src={screenshot}
                alt={`Скриншот ${index + 1}`}
                onLoad={() => setLoading(false)}
                onClick={() => openModal(screenshots, index)}
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

        <div style={{ textAlign: "left" }}>
          <h2>{language === "tj" ? "Тавсиф:" : "Описание:"}</h2>
          <h2 style={{ fontSize: "17px", color: "#646161" }}>{language === "tj" ? "Замимаи мобилӣ барои интихоботи вакилони халқ соли 2025." : "Программа выборов народных депутатов 2025 года."}</h2>
          <p style={{ fontSize: "16px", color: "#666" }}>
            {language === "tj" ? "Ин барнома барои таъмини равшанӣ ва дастрасӣ ба раванди интихобот барои ҳамаи шаҳрвандон офарида шудааст. Аз навсозиҳо бохабар бошед, то ки ба интихоботи соли 2025 пурра омода бошед!" : "Программа выборов народных депутатов 2025 года. Приложение создано для того, чтобы сделать процесс выборов прозрачным и доступным каждому. Следите за обновлениями, чтобы быть полностью подготовленным к выборам 2025 года!"}
          </p>
        </div>

        {isModalOpen && (
          <div
            style={styles.windowScreensMenu}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onClick={closeModal}
          >
            <img
              src={currentArray[currentIndex]}
              alt={`Полный скриншот`}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
              }}
            />
            <button
              style={styles.closeButton1}
              onClick={closeMenuModal}
            >
              ✕
            </button>
          </div>
        )}


        {isMenuModalOpen && (
          <div style={styles.windowMenu} className="no-close-swipe">
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                maxWidth: "500px",
                width: "90%",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
              }} className="no-close-swipe">
              {modalContent}
              <div></div>
              <button style={styles.closeButton2} onClick={closeMenuModal}>Закрыть</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  header: {
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
  },
  headerMenuButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    position: "absolute",
  },
  languageButton: {
    position: "absolute",
    top: "15px",
    right: "60px",
    fontSize: "24px",
    background: "transparent",
    border: "none",
    color: "white",
  },
  Main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    fontFamily: "'Roboto', sans-serif",
    padding: "20px",
    marginTop: "55px",
    textAlign: "center",
    overflowX: "hidden",
  },
  downloadButton2: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonWindow1: {
    backgroundColor: "transparent",
    border: "none",
    textAlign: "left",
    padding: "10px 0",
    cursor: "pointer",
    color: "#234eda",
    fontSize: "18px",
    fontWeight: "bold",
  },
  buttonWindow2: {
    backgroundColor: "transparent",
    border: "none",
    textAlign: "left",
    padding: "10px 0",
    cursor: "pointer",
    color: "#234eda",
    fontSize: "18px",
    fontWeight: "bold",
  },
  buttonWindow3: {
    backgroundColor: "transparent",
    border: "none",
    textAlign: "left",
    padding: "10px 0",
    cursor: "pointer",
    color: "#234eda",
    fontSize: "18px",
    fontWeight: "bold",
  },
  numberDownloads: {
    fontSize: "14px",
    color: "#888",
    fontStyle: "italic",
  },
  appSize: {
    fontSize: "14px",
    color: "#555",
    marginTop: "10px",
    marginBottom: "20px",
  },
  downloadButton1: {
    width: "335px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#234eda",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  screensBlock: {
    maxWidth: "350px",
    display: "flex",
    overflowX: "auto",
    gap: "15px",
    marginBottom: "20px",
    marginLeft: "30px",
    paddingLeft: "70px",
    paddingRight: "90px",
    paddingBottom: "10px",
  },
  windowScreens: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  windowScreensMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  closeButton1: {
    position: "absolute",
    top: "20px",
    right: "20px",
    fontSize: "24px",
    color: "#fff",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  windowMenu: {
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
  },
  closeButton2: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#234eda",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  screensBlockMenu: {
    maxWidth: "350px",
    display: "flex",
    overflowX: "auto",
    gap: "15px",
    marginBottom: "20px",
    // paddingBottom: "10px",
    padding: "25px",
  },
}

export default AppInstallPage;
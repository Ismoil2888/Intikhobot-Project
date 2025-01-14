import React, { useState } from "react";
import platform from "platform";

const Zagruzka = () => {
  const [arch, setArch] = useState(null); // Хранение архитектуры устройства
  const [error, setError] = useState(null); // Хранение ошибок, если возникнут

  const downloadApp = () => {
    setError(null); // Сбрасываем ошибку перед началом
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    try {
      // Проверяем платформу
      const os = platform.os;
      if (os.family === "Android") {
        // Определяем архитектуру
        const is64Bit = userAgent.includes("arm64") || userAgent.includes("aarch64");
        const selectedArch = is64Bit ? "arm64-v8a" : "armeabi-v7a";
        setArch(selectedArch); // Устанавливаем архитектуру в состояние

        // Выбираем нужный APK
        const apkFile = is64Bit
          ? "/apk-files/app-arm64-v8a.apk"
          : "/apk-files/app-armeabi-v7a.apk";

        // Начинаем загрузку файла
        window.location.href = apkFile;
      } else {
        setError("Ваше устройство не поддерживается для загрузки приложения.");
      }
    } catch (e) {
      setError("Произошла ошибка при определении устройства.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Загрузка приложения</h1>
      <button onClick={downloadApp}>Установить</button>
      {arch && <p>У вас архитектура: {arch}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Zagruzka;
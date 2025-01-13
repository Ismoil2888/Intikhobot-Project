import React from "react";
import platform from "platform";

const Zagruzka = () => {
  const downloadApp = () => {
    const os = platform.os;
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (os.family === "Android") {
      // Определение архитектуры
      const is64Bit = userAgent.includes("arm64");

      const apkFile = is64Bit
        ? "/apk-files/app-arm64-v8a.apk"
        : "/apk-files/app-armeabi-v7a.apk";

      // Перенаправление на файл
      window.location.href = apkFile;
    } else if (os.family === "iOS") {
      // Переход в App Store для iOS
      window.location.href = "https://apps.apple.com/your-app-link";
    } else {
      alert("Ваше устройство не поддерживается для загрузки приложения.");
    }
  };

  return (
    <div>
      <h1>Загрузка приложения</h1>
      <button onClick={downloadApp}>Скачать приложение</button>
    </div>
  );
};

export default Zagruzka;
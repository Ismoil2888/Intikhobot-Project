import React from 'react';
import { isAndroid, isIOS, osVersion } from 'react-device-detect';

const apkFiles = {
  arm64: '/apk-files/app-arm64-v8a.apk',
  armeabi: '/apk-files/app-armeabi-v7a.apk',
  x86: '/apk-files/app-x86.apk',
  x86_64: '/apk-files/app-x86_64.apk',
};

function Zagruzka() {
  const handleDownload = () => {
    if (!isAndroid) {
      alert('К сожалению, APK файлы доступны только для Android устройств.');
      return;
    }

    // Логика определения архитектуры устройства
    const architecture = detectArchitecture();

    if (apkFiles[architecture]) {
      const apkUrl = apkFiles[architecture];
      alert(`Ваше устройство совместимо с версией: ${architecture}. Скачивание началось.`);
      window.location.href = apkUrl; // Скачивание APK
    } else {
      alert('Не удалось определить подходящую версию APK для вашего устройства.');
    }
  };

  const detectArchitecture = () => {
    const userAgent = navigator.userAgent || '';
    if (userAgent.includes('arm64') || userAgent.includes('aarch64')) {
      return 'arm64';
    } else if (userAgent.includes('armeabi')) {
      return 'armeabi';
    } else if (userAgent.includes('x86_64')) {
      return 'x86_64';
    } else if (userAgent.includes('x86')) {
      return 'x86';
    }
    return null;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Скачать APK</h1>
      <p>
        Нажмите на кнопку ниже, чтобы скачать подходящий APK для вашего устройства.
        <br />
        {isAndroid && <strong>Определена ОС: Android {osVersion}</strong>}
        {!isAndroid && <strong>Определите устройство: не Android</strong>}
      </p>
      <button
        onClick={handleDownload}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        Скачать APK
      </button>
    </div>
  );
}

export default Zagruzka;
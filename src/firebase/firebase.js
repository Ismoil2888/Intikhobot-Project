import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyARPnOA3Sozlw7fZ98hWcNvmA5SHm-yi10",
  authDomain: "intikhobot.firebaseapp.com",
  databaseURL: "https://intikhobot-default-rtdb.firebaseio.com",
  projectId: "intikhobot",
  storageBucket: "intikhobot.firebasestorage.app",
  messagingSenderId: "463419082417",
  appId: "1:463419082417:web:efa72a300bc6aa6a378490",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, get, update };
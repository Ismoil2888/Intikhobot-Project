import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotfoundPage from "./components/NotfoundPage";
import Zagruzka from "./components/zagruzka";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Zagruzka />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
}

export default App;
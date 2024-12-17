import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Sections from "./components/Sections";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sections" element={<Sections />} />
    </Routes>
  );
}

export default App;
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Sections from "./components/Sections";
import Section1 from "./components/Section1";
import Section1Page1 from "./components/Section1Page1";
import Section1Page2 from "./components/Section1Page2";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sections" element={<Sections />} />
      <Route path="/section1" element={<Section1 />} />
      <Route path="/section1page1" element={<Section1Page1 />} />
      <Route path="/section1page2" element={<Section1Page2 />} />
      <Route path="/section2" element={<Section2 />} />
      <Route path="/section3" element={<Section3 />} />
      <Route path="/section4" element={<Section4 />} />
      <Route path="/section5" element={<Section5 />} />
      <Route path="/section6" element={<Section6 />} />
    </Routes>
  );
}

export default App;
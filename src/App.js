// App.js
import './App.scss';
import React, { useState } from "react";
import Pages from "./components/pages/pages";
import Main from "./components/main/main";
import About from "./components/pages/aboutme";
import Footer from "./components/footer/footer";
import Sidebar from "./components/others/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [sidebar, setsidebar] = useState(true);

  return (
    <Router>
      <div className="App">
        {sidebar && <Sidebar sidebar={sidebar} setsidebar={setsidebar} />}
        <Routes>
          <Route path="/" element={<Main sidebar={sidebar} setsidebar={setsidebar} />} />
          <Route path="/projects" element={<Pages />} />
          <Route path="/aboutme" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// App.js
import './App.scss';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./components/pages/project";
import Main from "./components/main/main";
import About from "./components/pages/aboutme";
import Footer from "./components/footer/footer";
import ScrollToTop from './components/others/scrolltotop';
import Sidebar from "./components/others/sidebar";

function App() {
  const [sidebar, setsidebar] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {sidebar && <Sidebar sidebar={sidebar} setsidebar={setsidebar} />}
        <Routes>
          <Route path="/" element={<Main sidebar={sidebar} setsidebar={setsidebar} />} />
          <Route path="/projects" element={<Pages />} />
          <Route path="/aboutme" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

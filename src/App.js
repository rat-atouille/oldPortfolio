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
import Designs from "./components/pages/designs";

function App() {
  const [sidebar, setsidebar] = useState(true);

  return (
    <Router basename="/portfolio">
      <ScrollToTop />
      <div className="App">
        <Sidebar sidebar={sidebar} setsidebar={setsidebar} />
        <Routes>
          <Route path="/" element={<Main sidebar={sidebar} setsidebar={setsidebar} />} />
          <Route path="/projects" element={<Pages />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/designs" element={<Designs />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

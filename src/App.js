import './App.scss';
import React from "react";
import Pages from "./components/pages/pages";
import Main from "./components/main/main";
import About from "./components/pages/aboutme";
import Footer from "./components/footer/footer";
import Sidebar from "./components/others/sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Pages />} />
          <Route path="/aboutme" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

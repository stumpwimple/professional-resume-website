import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NameTag from "./components/NameTag";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import "./App.css";

// Other pages
import Bio from "./components/Bio";
import Professional from "./components/Professional";
import Portfolio from "./components/Portfolio";
import Hobby from "./components/Hobby";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <NameTag />
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/professional-resume-website/home"
            element={<HomePage />}
          />
          <Route path="/professional-resume-website/bio" element={<Bio />} />
          <Route
            path="/professional-resume-website/professional"
            element={<Professional />}
          />
          <Route
            path="/professional-resume-website/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/professional-resume-website/hobby"
            element={<Hobby />}
          />
          <Route
            path="/professional-resume-website/contact"
            element={<Contact />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

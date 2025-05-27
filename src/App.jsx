import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import React from "react";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-primary via-dark to-accent">
        <header className="p-6 text-center text-4xl font-bold">
          Angelina Lapin Portfolio
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        <footer className="p-4 text-center">© 2025 Angelina Lapin</footer>
      </div>
    </Router>
  );
}

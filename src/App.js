import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Service />} />
        <Route path="/" element={<Portfolio />} />
        <Route path="/" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

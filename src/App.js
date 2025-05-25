import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import WhySunrise from "./Components/WhySunrise";
import AdmissionsPage from "./Components/AdmissionsPage";
import ContactPage from "./Components/ContactPage";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-sunrise" element={<WhySunrise />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;

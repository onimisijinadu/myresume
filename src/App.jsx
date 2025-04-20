import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Service from "./components/services";
import Footer from "./components/footer";
import Backtotop from "./components/backtotop";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Service />
      <Footer />
      <Backtotop />
      {/* Uncomment the following lines to enable routing */}
      {/* <Routes>
        <Route path="/" element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="footer" element={<Footer />} />
      </Routes> */}
    </div>
  );
}

export default App;

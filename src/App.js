import React from "react";
import "./App.sass";
import "normalize.css";
import Header from "./components/sections/Header";
import MainContent from "./components/sections/MainContent";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="wrap">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

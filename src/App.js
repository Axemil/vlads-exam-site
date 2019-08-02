import React from "react";
import "./App.sass";
import "normalize.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

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

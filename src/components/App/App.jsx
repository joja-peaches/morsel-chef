import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import ForkLanding from "../ForkLanding/ForkLanding";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import HungryModal from "../HungryModal/HungryModal";

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const handleEnterClick = () => {
    setActiveModal("hungry");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const enterSite = () => {
    setHasEntered(true);
    closeActiveModal();
  };

  return (
    // <BrowserRouter>
    <div className="app">
      <ForkLanding
        hasEntered={hasEntered}
        handleEnterClick={handleEnterClick}
      />
      <Header />
      {/* <Main /> */}
      <Footer />
      <HungryModal
        enterSite={enterSite}
        isOpen={activeModal === "hungry"}
        onClose={closeActiveModal}
      />
    </div>
    // </BrowserRouter>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import ForkLanding from "../ForkLanding/ForkLanding";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Services from "../Services/Services";
import Menu from "../Menu/Menu";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Footer from "../Footer/Footer";
import HungryModal from "../HungryModal/HungryModal";
import HamburgerModal from "../HamburgerModal/HamburgerModal";

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
    <div className="app">
      <ForkLanding
        hasEntered={hasEntered}
        handleEnterClick={handleEnterClick}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <HungryModal
        enterSite={enterSite}
        isOpen={activeModal === "hungry"}
        onClose={closeActiveModal}
      />
      <HamburgerModal />
    </div>
  );
}

export default App;

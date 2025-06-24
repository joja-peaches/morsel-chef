import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ForkLanding from "../ForkLanding/ForkLanding";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import "./App.css";

function App() {
  const [isEntered, setIsEntered] = useState(false);

  const enterSite = () => {
    setIsEntered(true);
  }

  return (
    // <BrowserRouter>
      <div className="app">
        <ForkLanding 
          setIsEntered={setIsEntered}
        />
        <Header />
        {/* <Main /> */}
        <Footer />
      </div>
    // </BrowserRouter>
  );
}

export default App;

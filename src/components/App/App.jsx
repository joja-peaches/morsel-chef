import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <BrowserRouter>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    // </BrowserRouter>
  );
}

export default App;

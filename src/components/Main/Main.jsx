import { useRef, useEffect } from "react";
import "./Main.css";
import portrait from "../../assets/images/megan-best-chef-milwaukee.jpg";

function Main() {

  return (
    <main className="main">
      <div className="main__container">
        <section className="main__container__text">
          <h1 className="main__container__text-heading">Megan is a chef.</h1>
          <h2 className="main__container__text-welcome">Welcome to Morsel.</h2>
          <p className="main__container__text-blurb">
            The personal chef service crafted and created by Chef Megan. This
            business was formed from years of education, experience, and hard
            work. And with this dedication to her craft, Megan is able to bring
            Morsel home to your kitchen.
          </p>
        </section>
        <img src={portrait} className="main__image" alt="Chef Megan looking into the camera surrounded by meals in tupperware"/>
      </div>
    </main>
  );
}

export default Main;

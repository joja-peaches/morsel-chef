import { useRef, useEffect } from "react";
import "./Main.css";

function Main() {
  const mainContainer = useRef(null);
  const currentIndex = useRef(0);
  const frontLayer = useRef(null);
  const backLayer = useRef(null);

  const images = [
    'url("/src/assets/images/rice-pilaf-morsel-chef-milwaukee.jpg")',
    'url("/src/assets/images/prepped-meal-by-morsel-chef-megan.jpg")',
    'url("/src/assets/images/pork-chop-plated-milwaukee.jpg")',
    'url("/src/assets/images/pork-chop-raw-prep-morsel-chef.jpg")',
  ];

  function cycleBackground() {
    if (mainContainer.current && frontLayer.current && backLayer.current) {
      currentIndex.current = (currentIndex.current + 1) % images.length;
      backLayer.current.style.backgroundImage = images[currentIndex.current];
      backLayer.current.style.opacity = "1";
      frontLayer.current.style.opacity = "0";

      setTimeout(() => {
        if (frontLayer.current && backLayer.current) {
          frontLayer.current.style.backgroundImage =
            backLayer.current.style.backgroundImage;
          frontLayer.current.style.opacity = "1";
        }
      }, 2000);
    }
  }

  useEffect(() => {
    if (mainContainer.current && frontLayer.current && backLayer.current) {
      mainContainer.current.style.position = "relative";
      frontLayer.current.style.transition = "opacity 1s ease-in-out";
      backLayer.current.style.transition = "opacity 1s ease-in-out";
      backLayer.current.style.opacity = "1";
      frontLayer.current.style.backgroundImage = images[0];
      frontLayer.current.style.opacity = "1";

      const intervalId = setInterval(cycleBackground, 3000);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <main className="main" ref={mainContainer}>
      <div ref={frontLayer} className="main__background-layer-front"></div>
      <div ref={backLayer} className="main__background-layer-back"></div>
      <div className="main__background-layer-join"></div>
      <div className="main__container">
        <section className="main__container__text">
          <h1 className="main__container__text-heading">Weclome to Morsel</h1>
          <p className="main__container__text-welcome">
            The personal chef service crafted and created by Chef Megan. This
            business was formed from years of education, experience, and hard
            work. And with this dedication to her craft, Megan is able to bring
            Morsel home to your kitchen.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Main;

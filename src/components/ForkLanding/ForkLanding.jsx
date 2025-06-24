import { useRef, useEffect } from "react";
import "./ForkLanding.css";
import fork from "../../assets/branding/morsel-fork-logo-large.svg";

function ForkLanding({ setIsEntered }) {
  const landingContainer = useRef(null);
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
    if (landingContainer.current && frontLayer.current && backLayer.current) {
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
    if (landingContainer.current && frontLayer.current && backLayer.current) {
      landingContainer.current.style.position = "relative";
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
    <div className="landing" ref={landingContainer}>
      <img src={fork} alt="Morsel Chef Fork Logo" className="landing__fork" />
      <div ref={frontLayer} className="landing__background-layer-front"></div>
      <div ref={backLayer} className="landing__background-layer-back"></div>
      <div className="landing__enter-container">
        <button className="landing__enter-button">Enter</button>
      </div>
    </div>
  );
}

export default ForkLanding;

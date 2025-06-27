import ReactDOM from "react-dom";
import { useRef } from "react";

import "./HungryModal.css";
import useModalClose from "../../hooks/useModalClose";

function HungryModal({ enterSite, isOpen, onClose }) {
  const modalRef = useRef(null);
  useModalClose(isOpen, onClose, modalRef);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div ref={modalRef} className={`modal ${isOpen ? "modal_open" : ""}`}>
      <h2 className="modal__title">Are you feeling hungry?</h2>
      <p className="modal__text">
        You must have an appetite to view the contents on this page.
      </p>
      <button
        className="modal__button modal__button_type_yes"
        onClick={enterSite}
      >
        Yes, needing a snack
      </button>
      <button className="modal__button modal__button_type_no" onClick={onClose}>
        No, just ate!
      </button>
    </div>,
    document.body
  );
}

export default HungryModal;

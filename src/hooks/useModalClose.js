import { useEffect } from "react";

function useModalClose(isOpen, onClose, modalRef) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleOverlay = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
        console.log(modalRef);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleOverlay);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOverlay);
    };
  }, [isOpen, onClose, modalRef]);
}

export default useModalClose;

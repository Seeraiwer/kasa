import { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const iconClass = `fa-solid fa-chevron-down ${!isOpen ? "up" : ""}`;

  return (
    <div className="collapse">
      <div className="collapse__header">
        <span className="collapse__title">{title}</span>

        <button
          className="collapse__button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Réduire la section" : "Déplier la section"}
        >
          <i className={iconClass}></i>
        </button>
      </div>

      <div
        className={`collapse__content ${
          isOpen ? "collapse__content--open" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapse;

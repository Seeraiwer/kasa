import { useState } from "react";
import "./Collapse.scss";

/**
 * Composant Collapse — permet d’afficher une section repliable avec un titre et un contenu.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre affiché dans l’en-tête.
 * @param {React.ReactNode} props.children - Le contenu affiché lorsqu'on déplie la section.
 *
 * @returns {JSX.Element} Une section repliable avec animation.
 */
function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  // Classe conditionnelle pour l’icône de rotation
  const iconClass = `fa-solid fa-chevron-down ${!isOpen ? "up" : ""}`;

  return (
    <div className="collapse">
      <div className="collapse__header">
        {/* Titre visible */}
        <span className="collapse__title">{title}</span>

        {/* Bouton de repli/affichage */}
        <button
          className="collapse__button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Réduire la section" : "Déplier la section"}
        >
          <i className={iconClass}></i>
        </button>
      </div>

      {/* Contenu affiché uniquement si ouvert */}
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

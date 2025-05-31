// Import du hook useState pour gérer l'état local (ouvert/fermé)
import { useState } from "react";

// Import des styles associés au composant
import "./Collapse.scss";

/**
 * Composant Collapse
 *
 * Ce composant permet d'afficher une section repliable avec un titre
 * et un contenu caché ou visible selon l'état.
 *
 * Props :
 * @param {string} title - Le titre affiché dans l'en-tête du collapse
 * @param {ReactNode} children - Le contenu à afficher/masquer
 */
function Collapse({ title, children }) {
  // État local : indique si le contenu est ouvert (true) ou fermé (false)
  const [isOpen, setIsOpen] = useState(false);

  // Détermine la classe de l'icône fléchée (rotation selon l'état)
  const iconClass = `fa-solid fa-chevron-down ${!isOpen ? "up" : ""}`;

  return (
    <div className="collapse">
      {/* En-tête avec le titre et le bouton d’ouverture/fermeture */}
      <div className="collapse__header">
        <span className="collapse__title">{title}</span>

        {/* Bouton cliquable pour inverser l'état (ouvrir/fermer) */}
        <button
          className="collapse__button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Réduire la section" : "Déplier la section"}
        >
          <i className={iconClass}></i>
        </button>
      </div>

      {/* Contenu repliable (visible uniquement si isOpen = true) */}
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

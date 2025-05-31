// Import de StrictMode pour activer les vérifications supplémentaires en développement
import { StrictMode } from "react";

// Import de la méthode de création du root React 18
import { createRoot } from "react-dom/client";

// Import du composant racine (ici renommé "App", mais c’est en fait ton Router)
import App from "./Router.jsx"; // Composant racine de l'application (contient les routes)

/**
 * Point d'entrée principal de l'application React.
 * On cible la div HTML ayant l'id "root", puis on y injecte notre application React.
 * StrictMode permet de détecter les erreurs potentielles durant le développement.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

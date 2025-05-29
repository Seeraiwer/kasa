import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Router.jsx"; // Composant racine de l'application

/**
 * Point d'entrée principal de l'application React.

 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

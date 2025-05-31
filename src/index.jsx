// Import des modules React nécessaires pour le rendu
import React from "react";
import ReactDOM from "react-dom/client";

// Import du système de routage React Router
import { RouterProvider } from "react-router-dom";

// Import du fichier de configuration des routes
import Router from "./Router.jsx";        // Contient toutes les routes de l'application

// Import du fichier de styles globaux (polices, resets, couleurs, etc.)
import "./index.scss";                    

/**
 * Point d’entrée principal de l’application React
 * Ce code injecte le composant racine dans la balise <div id="root"> du HTML
 * et initialise le routeur pour permettre la navigation entre les pages.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Active les vérifications supplémentaires en mode développement */}
    {/* Fournit le routeur configuré à l’ensemble de l’application */}
    <RouterProvider router={Router} />
  </React.StrictMode>
);

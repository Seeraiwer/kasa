import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./Router.jsx";        // Configuration de toutes les routes
import "./index.scss";                    // Fichier de styles globaux

// Point d’entrée principal de l’application React
// Injecte l’application dans la div #root du fichier index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Fournit le routeur global à toute l’application */}
    <RouterProvider router={Router} />
  </React.StrictMode>
);

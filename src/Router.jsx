/**
 * Composant Router — définit la structure de navigation de l'application.
 * Les routes principales sont encapsulées dans le Layout (Header + Footer + .spacer).
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import du layout commun à toutes les pages (Header + Footer)
import Layout from "./components/Layout/Layout.jsx";

// Import des pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Lodgment from "./pages/Lodgment/Lodgment.jsx";
import Error404 from "./pages/Error404/Error404.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Toutes les routes enfant utilisent le Layout par défaut */}
        <Route element={<Layout />}>
          {/* Page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Page "À propos" */}
          <Route path="/about" element={<About />} />

          {/* Page de détail logement avec paramètre dynamique :id */}
          <Route path="/logement/:id" element={<Lodgment />} />

          {/* Page d'erreur personnalisée */}
          <Route path="/404" element={<Error404 />} />
        </Route>

        {/* Catch-all : redirection automatique vers /404 pour toute URL inconnue */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

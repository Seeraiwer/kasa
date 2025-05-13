import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Lodgment from "./pages/Lodgment/Lodgment.jsx";
import Error404 from "./pages/Error404/Error404.jsx";

/**
 * Composant Router — structure principale de navigation de l'application.
 *
 * Fournit l'encapsulation globale via BrowserRouter,
 * affiche Header et Footer sur toutes les pages,
 * et définit les routes avec gestion des erreurs.
 */
function Router() {
  return (
    <BrowserRouter>
      {/* Header affiché sur toutes les pages */}
      <Header />

      {/* Conteneur central avec les routes */}
      <div className="spacer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Lodgment />} />

          {/* Redirections d'erreur */}
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>

      {/* Footer affiché sur toutes les pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default Router;

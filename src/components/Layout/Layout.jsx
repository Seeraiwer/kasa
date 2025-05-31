// Importation des composants principaux
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

// Importation du fichier de styles spécifique au layout général
import "./Layout.scss";

/**
 * Composant Layout
 *
 * Structure globale de la page :
 * - En-tête (Header)
 * - Contenu principal (Outlet)
 * - Pied de page (Footer)
 *
 * Le composant <Outlet /> sert de point d'injection
 * pour les composants enfants selon la route active.
 */
function Layout() {
  return (
    <div className="layout">
      {/* En-tête du site, présent sur toutes les pages */}
      <Header />

      {/* Contenu spécifique à chaque page, injecté par React Router */}
      <main className="main">
        <Outlet />
      </main>

      {/* Pied de page, commun à toutes les pages */}
      <Footer />
    </div>
  );
}

export default Layout;

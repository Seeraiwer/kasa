import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

/**
 * Composant Layout — structure globale de toutes les pages :
 * contient Header + Footer + conteneur centré (.spacer) où
 * s'affichent les pages dynamiquement via <Outlet />.
 */
function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="spacer">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}


export default Layout;

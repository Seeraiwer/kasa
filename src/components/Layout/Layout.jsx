import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header className="header">
        <div className="spacer header__content">
          <Header />
        </div>
      </header>

      <main>
        <div className="spacer">
          <Outlet />
        </div>
      </main>

      <footer>
        <div className="spacer">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default Layout;

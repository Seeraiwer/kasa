import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

function Layout() {
  return (
    <div className="layout">
      <Header />

      <main className="main">
        <div className="spacer">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;

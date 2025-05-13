import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Lodgment from "./pages/Lodgment/Lodgment.jsx";
import Error404 from "./pages/Error404/Error404.jsx";

/**
 * Composant Router — définit la structure de navigation de l'application.
 * Les routes principales sont encapsulées dans le Layout (Header + Footer + .spacer).
 */
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout partagé pour toutes les pages "standard" */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Lodgment />} />
        </Route>

        {/* Pages spéciales hors layout */}
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

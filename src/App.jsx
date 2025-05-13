import "./App.scss";         // Import global des styles de l'application
import Router from "./Router.jsx"; // Composant de routage principal (avec toutes les routes)

/**
 * Composant racine de l'application — encapsule le système de routing.
 *
 * @returns {JSX.Element} L'application avec gestion de la navigation.
 */
function App() {
  return <Router />;
}

export default App;

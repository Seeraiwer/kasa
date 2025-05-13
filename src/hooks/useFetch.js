import { useEffect, useState } from "react";
import { useRefSync } from "./useRefSync.js";

/**
 * Hook personnalisé pour effectuer des requêtes HTTP avec `fetch`
 * et gérer les états `loading`, `data`, et `error`.
 *
 * @param {string} url - L’URL de la ressource à charger.
 * @param {Object} [options] - Options facultatives de la requête (ex: headers).
 *
 * @returns {Object} - Un objet contenant :
 *   - {boolean} loading - Indique si la requête est en cours.
 *   - {any} data - Données JSON retournées ou null.
 *   - {Error|null} error - Erreur capturée en cas d’échec.
 *   - {Function} setData - Permet de modifier manuellement les données.
 */
export function useFetch(url, options) {
  const [loading, setLoading] = useState(true);     // État de chargement
  const [data, setData] = useState(null);           // Données récupérées
  const [error, setError] = useState(null);         // Objet d’erreur éventuel

  // Ref synchronisée pour conserver les options entre les renders
  const optionsRef = useRefSync(options);

  useEffect(() => {
    setLoading(true);

    fetch(url, {
      ...optionsRef.current,
      headers: {
        Accept: "application/json; charset=UTF-8",
        ...optionsRef.current?.headers,
      },
    })
      .then(async (response) => {
        // Gère les erreurs HTTP explicites (ex: 404, 500)
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`HTTP ${response.status} – ${response.statusText}\n${text}`);
        }
        return response.json();
      })
      .then((json) => {
        setData(json); // Données récupérées avec succès
      })
      .catch((e) => {
        setError(e);   // Capture l’erreur
        setData(null); // Réinitialise les données en cas d’erreur
      })
      .finally(() => {
        setLoading(false); // Fin du cycle de requête
      });
  }, [url]);

  return {
    loading,
    data,
    error,
    setData,
  };
}

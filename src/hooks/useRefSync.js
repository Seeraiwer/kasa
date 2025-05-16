import { useRef } from "react";

/**
 * Hook personnalisé qui crée une `ref` toujours synchronisée avec la dernière valeur fournie.
 *
 * @param {any} data - La donnée à suivre en continu.
 * @returns {React.MutableRefObject<any>} - Une référence synchronisée avec la donnée.
 */
export function useRefSync(data) {
  const dataRef = useRef(data);     // Crée une ref initialisée avec la valeur
  dataRef.current = data;           // Met à jour la valeur à chaque render
  return dataRef;                   // Renvoie la ref synchronisée
}

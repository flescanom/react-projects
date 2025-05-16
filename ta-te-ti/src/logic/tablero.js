import { COMB_GANADORES } from "../constants";

export const verificarGanador = (tableroAVerificar) => {
  // Revisamos todas las combinaciones ganadoras
  for (const combo of COMB_GANADORES) {
    const [a, b, c] = combo;
    if (
      tableroAVerificar[a] &&
      tableroAVerificar[a] === tableroAVerificar[b] &&
      tableroAVerificar[a] === tableroAVerificar[c]
    ) {
      return tableroAVerificar[a];
    }
  }
  // Si no hay ganador
  return null;
};

export const verificarJuegoTerminado = (tablero) => {
  return tablero.every((cuadrado) => cuadrado != null);
};

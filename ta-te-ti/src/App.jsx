import { useState } from "react";

// Componentes
import Cuadrado from "./components/Cuadrado";
import GanadorModal from "./components/GanadorModal";
import Tablero from "./components/Tablero";

// Logica
import { verificarGanador, verificarJuegoTerminado } from "./logic/tablero";

// Constantes
import { TURNO } from "./constants";

// Externos
import confetti from "canvas-confetti";

function App() {
  const [tablero, setTablero] = useState(() => {
    const tableroDesdeStorage = localStorage.getItem("tablero");
    if(tableroDesdeStorage) return JSON.parse(tableroDesdeStorage)
    return Array(9).fill(null)
  });
  const [turno, setTurno] = useState(() => {
    const turnoDesdeStorage = localStorage.getItem("turno");
    if(turnoDesdeStorage) return JSON.parse(turnoDesdeStorage)
    return TURNO.X;
  });
  const [ganador, setGanador] = useState(null);

  const actualizarTablero = (indice) => {
    // Actualizando el tablero
    const nuevoTablero = [...tablero];
    if (nuevoTablero[indice] || ganador) {
      return;
    }
    nuevoTablero[indice] = turno;
    setTablero(nuevoTablero);

    // Actualizando el turno
    const nuevoTurno = turno === TURNO.X ? TURNO.O : TURNO.X;
    setTurno(nuevoTurno);

    // Guardar juego
    localStorage.setItem('tablero', JSON.stringify(nuevoTablero));
    localStorage.setItem('turno', JSON.stringify(nuevoTurno));

    // Revisar si hay un ganador
    const nuevoGandor = verificarGanador(nuevoTablero);
    if (nuevoGandor) {
      confetti();
      setGanador(nuevoGandor);
    } else if(verificarJuegoTerminado(nuevoTablero)) {
      setGanador(false);
    }
     
  };

  const reiniciarJuego = () => {
    setTablero(Array(9).fill(null));
    setTurno(TURNO.X);
    setGanador(null);

    localStorage.removeItem("tablero");
    localStorage.removeItem("turno");
  };

  return (
    <main className="board">

      <h1>Ta Te Ti</h1>
      <button onClick={reiniciarJuego}>Reiniciar juego</button>

      <section className="game">
        <Tablero tablero={tablero} actualizarTablero={actualizarTablero} />
      </section>

      <section className="turn">
        <Cuadrado isSelected={turno === TURNO.X}>{TURNO.X}</Cuadrado>
        <Cuadrado isSelected={turno === TURNO.O}>{TURNO.O}</Cuadrado>
      </section>

      <GanadorModal ganador={ganador} reiniciarJuego={reiniciarJuego} />

    </main>
  );
}

export default App;

import Cuadrado from "./Cuadrado";

const GanadorModal = ({ ganador, reiniciarJuego }) => {
  if (ganador === null) return null;

  const ganadorTexto = ganador === false ? "Empate" : "Gano:";

  return (
    <section className="winner">
      <div className="text">
        <h2>{ganadorTexto}</h2>

        <header className="win">
          {ganador && <Cuadrado>{ganador}</Cuadrado>}
        </header>

        <footer>
          <button onClick={reiniciarJuego}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
};
export default GanadorModal;

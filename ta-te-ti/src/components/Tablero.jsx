import Cuadrado from "./Cuadrado";

const Tablero = ({ tablero, actualizarTablero }) => {
  return (
    <>
      {tablero.map((cuadrado, indice) => {
        return (
          <Cuadrado key={indice} indice={indice} actTablero={actualizarTablero}>
            {cuadrado}
          </Cuadrado>
        );
      })}
    </>
  );
};

export default Tablero;

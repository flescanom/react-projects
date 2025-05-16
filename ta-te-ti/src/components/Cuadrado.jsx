const Cuadrado = ({ children, isSelected, actTablero, indice }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const manejadorClick = () => {
    actTablero(indice);
  };

  return (
    <div className={className} onClick={manejadorClick}>
      {children}
    </div>
  );
};
export default Cuadrado;

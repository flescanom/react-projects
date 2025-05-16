const Tabla = ({ data }) => {
  return (
    <>
      <table className="table-auto">
        <thead className="bg-blue-300">
          <tr className="border-2 border-black">
            <th>ID</th>
            <th>TITULO</th>
            <th>AÑO</th>
            <th>TIPO</th>
          </tr>
        </thead>

        <tbody className="border-2 border-black">
          {data.map((peli) => (
            <tr key={peli.imdbID}>
              <td>{peli.imdbID}</td>
              <td>{peli.Title}</td>
              <td>{peli.Year}</td>
              <td>{peli.Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Tabla;

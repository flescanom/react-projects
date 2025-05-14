import { FaTimes } from "react-icons/fa";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { useCallback, useState } from "react";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({search});
    }, 300),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    let newSearch = "";
    if (event.target.value != " ") {
      newSearch = event.target.value;
      setSearch(newSearch);
    } else {
      setSearch("");
    }
    debouncedGetMovies(newSearch);
  };

  const handleClearInput = () => {
    setSearch("");
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscardor de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div
            className="input_content"
            style={{ position: "relative", display: "inline-block" }}
          >
            <input
              id="input_movie"
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Spiderman, Avenger, Matrix..."
              style={{ paddingRight: "25px" }}
            />
            {search && (
              <div>
                <FaTimes
                  className="clear-button"
                  style={{
                    position: "absolute",
                    top: "45%",
                    right: "15px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    padding: "2px",
                    borderRadius: "5px",
                  }}
                  onClick={handleClearInput}
                />
              </div>
            )}
          </div>
          <button type="submit" disabled={!search}>
            Buscar
          </button>
          <input onClick={handleSort} type="checkbox" name="sort" id="sort" />
          <label htmlFor="sort">Ordenar</label>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Loading...</p> : null}
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;

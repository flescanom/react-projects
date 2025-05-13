import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies } = useMovies( {search} );
  
  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  };

  const handleChange = (event) => { 
    const newSearch = event.target.value;   
    setSearch(newSearch);
  }

  return (
    <div className="page">
      <header>
        <h1>Buscardor de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            id="input_movie"
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Spiderman, Avenger, Matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;

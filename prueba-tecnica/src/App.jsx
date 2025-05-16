import { useEffect, useState } from "react";
import Entrada from "./components/Entrada";
import Figura from "./components/Figura";
import Tabla from "./components/Tabla";
import Titulo from "./components/Titulo";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?i=tt3896198&apikey=6afdcada&s=spiderman")
      .then((response) => {        
        setData(response.data.Search);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const updateTitle = (newTitle) => {
    console.log(`Se actualiza el titulo a ${newTitle}`);
    setTitle(newTitle);
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="flex gap-10 flex-col justify-center items-center">
      <Titulo title={title} />
      <Figura />
      <Tabla data={data} />
      <Entrada updateText={updateTitle} />
    </main>
  );
}

export default App;

import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

function App() {
  const { randomFact, refreshFact } = useCatFact();
  const { catImage } = useCatImage(randomFact);

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <div>
      <button onClick={handleClick}>Get new fact</button>
      {randomFact && <p>The random cat fact: "{randomFact}"</p>}
      {catImage && (
        <img
          style={{ width: "300px" }}
          src={catImage}
          alt="Random cat image from API"
        />
      )}
    </div>
  );
}

export default App;

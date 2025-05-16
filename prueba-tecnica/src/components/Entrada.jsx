import { useState } from "react";

const Entrada = ( {updateText} ) => {
  const [text, setText] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setLocalStorage();
    updateText(text);
  }

  const handleChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  }

  const setLocalStorage = () => {
    localStorage.setItem("text", JSON.stringify(text));
  }

  return (
    <form className="bg-gray-400 p-2 flex gap-3">
      <input
        className="bg-gray-300 ps-1 rounded-md"
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="fede..."
      />
      <button
        className="bg-blue-200 rounded-md p-1 hover:bg-blue-300 hover:cursor-pointer"
        onClick={handleClick}
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
};
export default Entrada;

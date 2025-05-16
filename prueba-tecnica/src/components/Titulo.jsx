import { useEffect, useState } from "react";

const Titulo = ( {title} ) => {
  const [savedValue, setSavedValue] = useState(() => {
    const saved = localStorage.getItem("text");
    if(saved) return JSON.parse(saved);
    return "";
  });

  useEffect(() => {

    if(savedValue != title) {
        setSavedValue(JSON.parse(localStorage.getItem("text")))
    }

  }, [savedValue, title]);

  return <div>{savedValue}</div>;
};
export default Titulo;

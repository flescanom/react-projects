import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouse = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    if (enabled) {
      window.addEventListener("mousemove", handleMouse);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [enabled]);

  useEffect(() => {
  
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      document.body.classList.remove("no-cursor");
    }

  }, [enabled])
  

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.9,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 30,
          height: 30,
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      />
      <button
        onClick={() => {
          setEnabled(!enabled);
        }}
      >
        {`${enabled ? "Desactivar" : "Activar"} seguimiento`}
      </button>
    </>
  );
}

export default App;

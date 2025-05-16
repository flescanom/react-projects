import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export const useCatFact = () => {
  const [randomFact, setRandomFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => {
      setRandomFact(newFact);
    });
  };

  useEffect(refreshFact, []);

  return { randomFact, refreshFact };
};

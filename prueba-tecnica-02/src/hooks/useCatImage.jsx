import { useEffect, useState } from "react";

const URL_CATS = "https://cataas.com/cat/says";

export const useCatImage = (fact) => {
  const [catImage, setCatImage] = useState();

  useEffect(() => {
    // with async await
    const fetchImage = async () => {
      if (!fact) {
        return;
      }
      try {
        const firstWordFact = fact.split(" ")[0];
        const response = await fetch(`${URL_CATS}/${firstWordFact}?json=true`);
        if (!response) {
          throw new Error("Error in the request");
        }
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage().then((data) => {
      if (data) {
        const { url } = data;
        setCatImage(url);
      }
    });
  }, [fact]);

  return { catImage };
};

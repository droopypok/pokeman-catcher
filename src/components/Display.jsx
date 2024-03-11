import React, { useEffect, useState } from "react";

const Display = () => {
  // states
  const [pokemonMatch, setPokemonMatch] = useState([]);
  const [pokemonSprite, setPokemonSprite] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);

  // random ID for all pokemon list
  const randomPokemonID = Math.floor(Math.random() * 1025);

  const getPokemon = async (signal) => {
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + randomPokemonID + "/",
        {
          signal,
        }
      );
      if (res.ok) {
        const data = await res.json();
        setPokemonMatch(data); //pokemon whole array
        setPokemonSprite(data.sprites.front_default); //pokemon sprite front
        data.types.map((items) => {
          //to get types (NOT WORKING - to iterate through both types)
          setPokemonType(items.type.name);
        });
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getPokemon(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <img src={pokemonSprite} />
      <p>{pokemonMatch.name}</p>
      <p>{pokemonType}</p>

      {/* used to map through types and get the types */}
    </>
  );
};

export default Display;

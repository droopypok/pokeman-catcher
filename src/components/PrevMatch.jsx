import React from "react";

const PrevMatch = (props) => {
  return (
    <div>
      {/* img of liked pokemons to be taken from Display // LIFTING STATE */}
      <img src={props.matchedPokemon.pokemonSprite} alt="" />
      <p>
        {props.matchedPokemon.pokemonName} {props.matchedPokemon.pokemonType}
      </p>
      {/* maybe if want to can add the types but not important*/}
    </div>
  );
};

export default PrevMatch;

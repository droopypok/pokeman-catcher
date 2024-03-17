import React, { useEffect, useRef, useState } from "react";
import PrevMatch from "./PrevMatch";
import UserSelectModal from "./UserSelectModal";
import ExistingUserSelect from "./ExistingUserSelect";
import styles from "./Display.module.css";

const Display = () => {
  // states for match screen
  const [pokemonMatch, setPokemonMatch] = useState([]);
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonSprite, setPokemonSprite] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [matchedPokemon, setMatchedPokemon] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
  const [profileDoneLoading, setProfileDoneLoading] = useState(false);
  const [apiDoneLoading, setApiDoneLoading] = useState(false);

  const [showModal, setShowModal] = useState(true);
  const [existingUser, setExistingUser] = useState();

  // random ID for all pokemon list
  const randomPokemonID = Math.floor(Math.random() * 1025);

  // Function for like button
  // the reason why we use unshift - so it pushes it infront instead of behind
  // COMPLETED
  const match = () => {
    const matchedData = { pokemonName, pokemonSprite, pokemonType };
    matchedPokemon.unshift(matchedData);
    console.log(matchedData);

    // after it hits the length of 6, it will start removing the last recent match
    if (matchedPokemon.length === 6) {
      console.log("this if statement is running");
      matchedPokemon.splice(5, 1);
      console.log(matchedPokemon);
    }

    getPokemon();
  };

  // Function for NOPE button
  // COMPLETED
  const rejected = () => {
    console.log("This pokemon is REJECTED");
    getPokemon();
  };

  //Getting a new pokemon from API
  //COMPLETED
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
        setPokemonName(data.name);
        setApiDoneLoading(true);

        const types = data.types.map((items) => {
          return items.type.name;
        });
        setPokemonType(types.join(" "));
        // setPokemonType(types.join(" ")); // this is so that you can join it in an array
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  //getting user profile
  const getProfileInfo = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appilxsJRs69yeTn9/Table%201",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer patxD0v1jlSvjLqBV.f5a593a9bcdb6d61fb435b81e34641d5d7c5b1b73f10c0ab0054a00606e44fe0",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setUserProfile(data.records);
        setProfileDoneLoading(true);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  // EZPZ ON-LOAD completed
  useEffect(() => {
    getPokemon();
    getProfileInfo();
    setExistingUser(sessionStorage.getItem("isUser"));
  }, []);

  return (
    <div className={styles.container}>
      {showModal && !existingUser && (
        <UserSelectModal
          setShowModal={setShowModal}
          existingUser={setExistingUser}
        ></UserSelectModal>
      )}

      {/* this is the basic display for the match screen */}
      {profileDoneLoading && apiDoneLoading && (
        <div className={styles.profileInfo}>
          <h3>Welcome User</h3>
          <ExistingUserSelect userProfile={userProfile}></ExistingUserSelect>
        </div>
      )}

      <h3>POKEMON MATCH</h3>
      <img src={pokemonSprite} />
      <p>{pokemonName}</p>
      <p>{pokemonType}</p>

      {/* this is the button for liked and DIE */}
      <br />
      <br />
      <h3>BUTTONS</h3>
      <img
        src="https://p1.hiclipart.com/preview/881/990/395/pikachu-crying-pokemon-pikachu-png-clipart.jpg"
        alt="RUN AWAY button"
        width="100"
        onClick={() => {
          rejected(); // button onClick works
        }}
      />
      <img
        src="https://www.serebii.net/itemdex/sprites/sv/masterball.png"
        alt="Masterball Like Button "
        width="100"
        onClick={() => {
          match(); // button onClick works
        }}
      />

      {/* requires map to map through the stored pokemon matches */}
      <br />
      <br />
      <h3>POKEMON PREV MATCHES</h3>
      {matchedPokemon.map((item, idx) => {
        return <PrevMatch matchedPokemon={item} key={idx}></PrevMatch>;
      })}
    </div>
  );
};

export default Display;

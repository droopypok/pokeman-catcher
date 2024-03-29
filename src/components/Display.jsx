import React, { useEffect, useState } from "react";
import PrevMatch from "./PrevMatch";
import UserSelectModal from "./UserSelectModal";
import ExistingUserSelect from "./ExistingUserSelect";
import styles from "./Display.module.css";

const Display = () => {
  // states for match screen±
  const [pokemonMatch, setPokemonMatch] = useState([]);
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonSprite, setPokemonSprite] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [matchedPokemon, setMatchedPokemon] = useState([]);
  const [userProfile, setUserProfile] = useState([]);

  // for modal
  const [showModal, setShowModal] = useState(true);
  const [existingUser, setExistingUser] = useState();

  //for loading
  const [profileDoneLoading, setProfileDoneLoading] = useState(false);
  const [apiDoneLoading, setApiDoneLoading] = useState(false);

  //for randompokemongenerator
  const [selectedType, setSelectedType] = useState("");
  const [randomPokemon, setRandomPokemon] = useState("");

  // Function for like button
  const match = () => {
    const matchedData = { pokemonName, pokemonSprite, pokemonType };
    matchedPokemon.unshift(matchedData);

    // after it hits the length of 6, it will start removing the last recent match
    if (matchedPokemon.length === 6) {
      matchedPokemon.splice(5, 1);
    }

    getPokemonType();
  };

  // Function for NOPE button
  const rejected = () => {
    getPokemonType();
  };

  // Getting a new pokemon from API
  const getPokemon = async (signal) => {
    try {
      const res = await fetch(randomPokemon, {
        signal,
      });
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

  const getPokemonType = async (signal) => {
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/type/" + selectedType,
        {
          signal,
        }
      );
      if (res.ok) {
        const data = await res.json();
        const randomLength = Math.floor(Math.random() * data.pokemon.length); //pokemon whole array
        setRandomPokemon(data.pokemon[randomLength].pokemon.url);

        // setPokemonType(types.join(" ")); // this is so that you can join it in an array
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  const getUserType = (type) => {
    return setSelectedType(type);
  };

  //getting user profile from airtable
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
    getProfileInfo();
    setExistingUser(sessionStorage.getItem("isUser")); //store in session storage
  }, []);

  // once profile changes, looks for new pokemon type matching user type
  useEffect(() => {
    getPokemonType();
  }, [selectedType]);

  // once state change fetches pokemon
  useEffect(() => {
    getPokemon();
  }, [randomPokemon]);

  return (
    <>
      <div className={styles.container}>
        {showModal && !existingUser && (
          <UserSelectModal
            setShowModal={setShowModal}
            existingUser={setExistingUser}
          ></UserSelectModal>
        )}

        <div className={styles.topContainer}>
          {profileDoneLoading && (
            <div className={styles.profileInfo}>
              <ExistingUserSelect
                userProfile={userProfile}
                getUserType={getUserType}
                profileDoneLoading={profileDoneLoading}
              ></ExistingUserSelect>
            </div>
          )}

          {/* this is the basic display for the match screen */}

          <div className={styles.matchScreen}>
            <div className={styles.matchScreenContainer}>
              <div className={styles.matchInfo}>
                <img
                  className={styles.pokemonSprite}
                  src={pokemonSprite}
                  width="300"
                />
                <h3>{pokemonName}</h3>
                <h3>{pokemonType}</h3>
              </div>
              {/* this is the button for liked and DIE */}
              <div className={styles.buttons}>
                <img
                  className={styles.runaway}
                  src="../ProfilePictures/runaway.png"
                  alt="RUN AWAY button"
                  onClick={() => {
                    rejected(); // button onClick works
                  }}
                />
                <img
                  className={styles.match}
                  src="../ProfilePictures/masterball.png"
                  alt="Masterball Like Button "
                  onClick={() => {
                    match(); // button onClick works
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* requires map to map through the stored pokemon matches */}
        <div className={styles.prevMatchDiv}>
          <div className={styles.prevMatchContainer}>
            <div className={styles.prevMatchHeading}>
              <h3>PREV MATCHES</h3>
            </div>
            <div className={styles.prevMatch}>
              {matchedPokemon.map((item, idx) => {
                return <PrevMatch matchedPokemon={item} key={idx}></PrevMatch>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;

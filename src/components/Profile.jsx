import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";

const Profile = () => {
  const [ppSrc, setPpSrc] = useState("../ProfilePictures/AshPP.png");
  const [name, setName] = useState(""); // used for displaying name data
  const [region, setRegion] = useState("Kanto");
  const [selectType, setSelectType] = useState("");

  const nameRef = useRef(""); // used to store name data first

  const splitTypes = selectType.toString();
  console.log(splitTypes);

  // name Fn
  const username = (e) => {
    e.preventDefault();
    setName(nameRef.current.value);
    nameRef.current.value = "";
  };

  // profile picture Fn
  const handlePPChange = () => {
    const pp = document.getElementById("profilePicture");
    console.log(pp.value);
    return setPpSrc(pp.value);
  };

  // region select Fn
  const handleRegionChange = () => {
    const region = document.getElementById("regionSelect");
    console.log(region.value);
    return setRegion(region.value);
  };

  // type select Fn for img - WORKING
  const handleTypeSelect = (e) => {
    if (e.target.alt !== undefined) {
      return setSelectType(e.target.alt);
    }
  };

  //fetch POST API from AirTable to SUBMIT new profile -- WORKING
  const handleSubmit = async () => {
    const res = await fetch(
      "https://api.airtable.com/v0/appilxsJRs69yeTn9/Table%201",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer patxD0v1jlSvjLqBV.f5a593a9bcdb6d61fb435b81e34641d5d7c5b1b73f10c0ab0054a00606e44fe0",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                name: name,
                pic: ppSrc,
                region: region,
                type: splitTypes,
              },
            },
          ],
        }),
      }
    );
    if (res.ok) {
      console.log("Successfully inputted data!");
    }
  };

  const navigate = useNavigate();
  // submit button to submit everything to airtable
  const handleSubmitButton = (e) => {
    if (name && ppSrc && region && splitTypes) {
      e.preventDefault();
      handleSubmit();
      navigate("/");
    } else {
      alert("You are missing a required field");
    }
  };

  return (
    <div className={styles.container}>
      {/* to enter username -- WORKING */}
      <div className={styles.name}>
        <h1 className={styles.title}>Enter your name</h1>
        <form onSubmit={username}>
          <input
            className={styles.inputName}
            type="text"
            ref={nameRef}
            placeholder="Enter your name"
            required
          />
          <button className={styles.inputName} type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* this is the dropdown to select avatar -- WORKING */}
      <div className={styles.avatar}>
        <h1 className={styles.title}>
          Select your character:{" "}
          <span>
            <h1 className={styles.title}>{name}</h1>
          </span>{" "}
        </h1>
        <img src={ppSrc} alt="" height="300px" />
        <form>
          <select
            className={styles.selectAvatar}
            id="profilePicture"
            onChange={() => {
              handlePPChange();
            }}
            value={ppSrc}
          >
            <option value="../ProfilePictures/AshPP.png">Ash</option>
            <option value="../ProfilePictures/MistyPP.png">Misty</option>
            <option value="../ProfilePictures/BrockPP.jpeg">Brock</option>
            <option value="../ProfilePictures/JamesPP.jpg">James</option>
            <option value="../ProfilePictures/JessiePP.png">Jessie</option>
          </select>
        </form>
      </div>

      {/* selecting region --- WORKING */}
      <div className={styles.region}>
        <h1 className={styles.title}>Select your region:</h1>
        <h1 className={styles.title}>{region}</h1>
        <form>
          <select
            className={styles.selectAvatar}
            id="regionSelect"
            onChange={() => {
              handleRegionChange();
            }}
          >
            <option value="Kanto">Kanto</option>
            <option value="Johto">Johto</option>
            <option value="Hoenn">Hoenn</option>
            <option value="Sinnoh">Sinnoh</option>
            <option value="Alola">Alola</option>
          </select>
        </form>
      </div>

      {/* selecting pokeMAN types currently working // Might change to buttons to press instead for UI */}
      <div className={styles.type}>
        <h1 className={styles.title}>
          Select your preferred PokeMAN type: <br />
          <span className={styles.title}>{selectType}</span>
        </h1>

        <div className={styles.typeImg} onClick={handleTypeSelect}>
          <div>
            <img src="../pokemonTypes/Normal.png" alt="normal" />
            <img src="../pokemonTypes/Fire.png" alt="fire" />
            <img src="../pokemonTypes/Water.png" alt="water" />
            <img src="../pokemonTypes/Electric.png" alt="electric" />
            <img src="../pokemonTypes/Grass.png" alt="grass" />
            <img src="../pokemonTypes/Ice.png" alt="ice" />
            <img src="../pokemonTypes/Fighting.png" alt="fighting" />
            <img src="../pokemonTypes/Poison.png" alt="poison" />
            <img src="../pokemonTypes/Ground.png" alt="ground" />
          </div>
          <div>
            <img src="../pokemonTypes/Flying.png" alt="flying" />
            <img src="../pokemonTypes/Psychic.png" alt="psychic" />
            <img src="../pokemonTypes/Bug.png" alt="bug" />
            <img src="../pokemonTypes/Rock.png" alt="rock" />
            <img src="../pokemonTypes/Ghost.png" alt="ghost" />
            <img src="../pokemonTypes/Dragon.png" alt="dragon" />
            <img src="../pokemonTypes/Dark.png" alt="dark" />
            <img src="../pokemonTypes/Steel.png" alt="steel" />
            <img src="../pokemonTypes/Fairy.png" alt="fairy" />
          </div>
        </div>
      </div>
      <div>
        <button className={styles.button} onClick={handleSubmitButton}>
          Create Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;

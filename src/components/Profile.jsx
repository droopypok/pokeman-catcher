import React, { useRef, useState } from "react";

const Profile = () => {
  const [ppSrc, setPpSrc] = useState("../ProfilePictures/AshPP.png");
  const [name, setName] = useState(""); // used for displaying name data
  const [region, setRegion] = useState("");
  const [selectType, setSelectType] = useState([]);

  const nameRef = useRef(""); // used to store name data first

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

  // type select Fn for img
  const handleTypeSelect = (e) => {
    const storedType = [...selectType, e.target.alt];
    if (
      selectType.includes(e.target.alt) &&
      selectType.includes !== undefined
    ) {
      alert("You have already selected this type you idiot");
    } else if (e.target.alt !== undefined) {
      setSelectType(storedType);
    }
    console.log(selectType.join(" "));
  };

  // // type select Fn for select
  // const handleTypeSelect = () => {
  //   const type = document.getElementById("typeSelect");
  //   const storedType = [...selectType, type.value];
  //   setSelectType(storedType);
  //   console.log(selectType.join(" "));
  // };

  return (
    <div>
      {/* to enter username -- WORKING */}
      <h3>Enter your name</h3>
      <form onSubmit={username}>
        <input type="text" ref={nameRef} placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>

      {/* this is the dropdown to select avatar -- WORKING */}
      <h2>
        Select your character:{" "}
        <span>
          <h1>{name}</h1>
        </span>{" "}
      </h2>
      <img src={ppSrc} alt="" height="300px" />
      <form>
        <select
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

      {/* selecting region --- WORKING */}
      <h3>Select your region:</h3>
      <h2>{region}</h2>
      <form>
        <select
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

      {/* selecting pokeMAN types currently working // Might change to buttons to press instead for UI */}
      {/* need to add the ability to remove types that selected wrongly  */}
      <h3>
        Select your preferred PokeMAN type: <span>{selectType}</span>
      </h3>

      <div id="dick" onClick={handleTypeSelect}>
        <img src="../pokemonTypes/Normal.png" alt="normal" />
        <img src="../pokemonTypes/Fire.png" alt="fire" />
        <img src="../pokemonTypes/Water.png" alt="water" />
        <img src="../pokemonTypes/Electric.png" alt="electric" />
        <img src="../pokemonTypes/Grass.png" alt="grass" />
        <img src="../pokemonTypes/Ice.png" alt="ice" />
        <img src="../pokemonTypes/Fighting.png" alt="fighting" />
        <img src="../pokemonTypes/Poison.png" alt="poison" />
        <img src="../pokemonTypes/Ground.png" alt="ground" />
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

      {/* <form>
        <h3>{selectType.join(" ")}</h3>
        <select id="typeSelect" onChange={handleTypeSelect}>
          <option value="Normal">Normal</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Electric">Electric</option>
          <option value="Grass">Grass</option>
          <option value="Ice">Ice</option>
          <option value="Fighting">Fighting</option>
          <option value="Poison">Poison</option>
          <option value="Ground">Ground</option>
          <option value="Flying">Flying</option>
          <option value="Psychic">Psychic</option>
          <option value="Bug">Bug</option>
          <option value="Rock">Rock</option>
          <option value="Ghost">Ghost</option>
          <option value="Dragon">Dragon</option>
          <option value="Dark">Dark</option>
          <option value="Steel">Steel</option>
          <option value="Fairy">Fairy</option>
        </select>
      </form> */}
    </div>
  );
};

export default Profile;

import React, { useRef, useState } from "react";

const Profile = () => {
  const [ppSrc, setPpSrc] = useState("../ProfilePictures/AshPP.png");
  const [region, setRegion] = useState("");

  const nameRef = useRef("");

  // name fn
  const username = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    nameRef.current.value = "";
  };

  // profile picture fn
  const handlePPChange = () => {
    const pp = document.getElementById("profilePicture");
    console.log(pp.value);
    return setPpSrc(pp.value);
  };

  const handleRegionChange = () => {
    const region = document.getElementById("regionSelect");
    console.log(region.value);
    return setRegion(region.value);
  };

  return (
    <div>
      {/* to enter username -- WORKING */}
      <h3>Enter your name</h3>
      <form onSubmit={username}>
        <input type="text" placeholder="Enter your name" ref={nameRef} />
        <button type="submit">Submit</button>
      </form>

      {/* this is the dropdown to select avatar -- WORKING */}
      <h1>Select your character:</h1>
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

      <h3>Select your preferred PokeMAN type: </h3>
      <form>
        <select id="typeSelect">
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
      </form>
    </div>
  );
};

export default Profile;

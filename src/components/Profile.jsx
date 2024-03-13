import React from "react";

const Profile = () => {
  const pp = document.getElementById("profilePicture");
  const handlePPChange = () => {
    return pp.value;
  };

  return (
    <div>
      <img src={handlePPChange} alt="" height="100" width="100" />
      <select
        id="profilePicture"
        onChange={() => {
          console.log(pp.value);
        }}
        defaultValue="Ash"
      >
        <option value="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png">
          Ash
        </option>
        <option value="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cc3b548b-5a7d-4cc1-bb9a-8055970d2965/dbuds4g-e57b1e94-bf9f-4491-8278-79216e1e368a.png/v1/fit/w_768,h_576/misty_render_by_ashleytheskitty_dbuds4g-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvY2MzYjU0OGItNWE3ZC00Y2MxLWJiOWEtODA1NTk3MGQyOTY1XC9kYnVkczRnLWU1N2IxZTk0LWJmOWYtNDQ5MS04Mjc4LTc5MjE2ZTFlMzY4YS5wbmciLCJ3aWR0aCI6Ijw9NzY4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zN_F9KaX8LzVOpJKG7fO0I-I4XTMctpzkTQ8Ysu2Yus">
          Misty
        </option>
        <option value="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/000157ae-9e27-48d7-a724-cd69a543573f/dfv15o9-ce2d4aa6-3858-4472-bc8d-adf231893609.jpg/v1/fit/w_600,h_600,q_70,strp/brock__pokemon_by_retratosanime_dfv15o9-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvMDAwMTU3YWUtOWUyNy00OGQ3LWE3MjQtY2Q2OWE1NDM1NzNmXC9kZnYxNW85LWNlMmQ0YWE2LTM4NTgtNDQ3Mi1iYzhkLWFkZjIzMTg5MzYwOS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0._yjVRKYUEhiu5hQm2O-RTHVwuMPRNJDz4VxDxCEmVWQ">
          Brock
        </option>
        <option value="https://s1.zerochan.net/Kojirou.%28Pok%C3%A9mon%29.600.3064059.jpg">
          James
        </option>
        <option value="https://d.furaffinity.net/art/imposterdude/1610951885/1610951885.imposterdude_jessie_2.png">
          Jessie
        </option>
      </select>
    </div>
  );
};

export default Profile;

import React from "react";

const ProfileInfo = (props) => {
  const displayDataset = props.userProfile[props.selectedUser];

  return (
    <div>
      <img src={displayDataset.fields.pic} alt="" height="200px" />
      <h2>{displayDataset.fields.name || "Stranger"}</h2>
      <h2>{displayDataset.fields.region || "Mystery Dungeon"}</h2>
      <h2>{displayDataset.fields.type || "All"}</h2>
    </div>
  );
};

export default ProfileInfo;

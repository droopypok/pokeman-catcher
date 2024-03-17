import React from "react";

const ProfileInfo = (props) => {
  const displayDataset = props.userProfile[props.selectedUser];

  props.getUserType(displayDataset.fields.type);
  // if (props.profileDoneLoading && props.apiDoneLoading) {
  //   console.log("loaded");
  //   props.getSelectedUserType(displayDataset.fields.type);
  // }

  return (
    <div>
      <img src={displayDataset.fields.pic} alt="" height="200px" />
      <h4>{displayDataset.fields.name || "Stranger"}</h4>
      <h4>{displayDataset.fields.region || "Mystery Dungeon"}</h4>
      <h4>{displayDataset.fields.type}</h4>
    </div>
  );
};

export default ProfileInfo;

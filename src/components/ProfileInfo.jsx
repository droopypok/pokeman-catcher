import React from "react";
import styles from "./Profile.module.css";

const ProfileInfo = (props) => {
  const displayDataset = props.userProfile[props.selectedUser];
  props.getUserType(displayDataset.fields.type);

  return (
    <div>
      <img
        className={styles.userAvatar}
        src={displayDataset.fields.pic}
        alt=""
        height="200px"
      />
      <h4>{displayDataset.fields.name}</h4>
      <h4>{displayDataset.fields.region}</h4>
      <h4>{displayDataset.fields.type}</h4>
    </div>
  );
};

export default ProfileInfo;

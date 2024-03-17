import React, { useState } from "react";
import styles from "./Modal.module.css";
import ProfileInfo from "./ProfileInfo";

const ExistingUserSelect = (props) => {
  const [selectedUser, setSelectedUser] = useState(0);

  const removeModal = () => {
    return props.getModal(false);
  };

  const profileID = document.getElementById("profileSelect");

  return (
    <div>
      <label className={styles.existing}>
        Select Existing User Profile
        <select
          id="profileSelect"
          onChange={() => {
            setSelectedUser(profileID.value);
          }}
        >
          {props.userProfile.map((items, idx) => {
            return (
              <option key={idx} value={idx} width="1000px">
                {items.fields.name}
              </option>
            );
          })}
        </select>
      </label>
      <ProfileInfo
        selectedUser={selectedUser}
        userProfile={props.userProfile}
      ></ProfileInfo>
    </div>
  );
};

export default ExistingUserSelect;

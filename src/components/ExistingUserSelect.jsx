import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import styles from "./ExistingUserSelect.module.css";

const ExistingUserSelect = (props) => {
  const [selectedUser, setSelectedUser] = useState(0);
  const profileID = document.getElementById("profileSelect");

  return (
    <>
      <label className={styles.existing}>
        <span className={styles.selectLabel}>Select Existing Profiles:</span>
        <br />
        <select
          className={styles.userSelect}
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

      {props.profileDoneLoading && (
        <ProfileInfo
          selectedUser={selectedUser}
          userProfile={props.userProfile}
          getUserType={props.getUserType}
          profileDoneLoading={props.profileDoneLoading}
        ></ProfileInfo>
      )}
    </>
  );
};

export default ExistingUserSelect;

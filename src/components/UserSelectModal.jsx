import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
import styles from "./Modal.module.css";
import { Link, useNavigate } from "react-router-dom";

const OverLay = (props) => {
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
        setProfile(data.records);
        setIsLoading(true);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    getProfileInfo();
  }, []);

  const removeModal = () => {
    return props.setShowModal(false);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.heading}>
          <h1>Welcome to</h1>
          <img src="../ProfilePictures/pokeman.png" alt="pokeman logo" />
        </div>
        <div className={styles.container}>
          <div>
            <button
              className={styles.newUser}
              onClick={() => navigate("/profile")}
            ></button>
          </div>
          <div>
            <label className={styles.existing}>
              Select Existing User Profile
              <select onChange={removeModal}>
                {isLoading &&
                  profile.map((items, idx) => {
                    return (
                      <option
                        key={idx}
                        value={items.fields.name}
                        width="1000px"
                      >
                        {items.fields.name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserSelectModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay setShowModal={props.setShowModal} />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UserSelectModal;

import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const OverLay = (props) => {
  const navigate = useNavigate(); // to navigate to profile

  const removeModal = () => {
    props.setShowModal(false);
    sessionStorage.setItem("isUser", "true");
  };

  const createNewUser = () => {
    navigate("/profile");
    sessionStorage.setItem("isUser", "true");
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.heading}>
          <h1>Welcome to</h1>
          <img src="../ProfilePictures/pokeman.png" alt="" />
        </div>
        <div className={styles.container}>
          <div className={styles.button}>
            <button className={styles.newUser} onClick={() => createNewUser()}>
              Create New User
            </button>
            <button
              className={styles.newUser}
              onClick={() => {
                removeModal();
              }}
            >
              Existing User
            </button>
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
        <OverLay
          setShowModal={props.setShowModal}
          existingUser={props.existingUser}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UserSelectModal;

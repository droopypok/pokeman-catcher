import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const OverLay = (props) => {
  const navigate = useNavigate();

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
            >
              Create New User
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
        <OverLay getModal={props.getModal} />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UserSelectModal;

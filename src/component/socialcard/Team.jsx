import React from "react";
import styles from "./socialcard.module.css";

const Team = () => {
  return (
    <div className={styles.team}>
      <h1>Team</h1>
      <div className={styles.users}>
        <div className={styles.profilePicture}>
          <img src="./avatar.png" alt="" />
        </div>
        <div className={styles.usersInfo}>
          <p>Rohan Srivastava</p>
          <div>
            <img src="./msg.png" width="21px" height="21px" alt="" />
            <img src="./phone.png" width="21px" height="21px" alt="" />
          </div>{" "}
        </div>
      </div>
      <div className={styles.users}>
        <div className={styles.profilePicture}>
          <img src="./avatar.png" alt="" />
        </div>
        <div className={styles.usersInfo}>
          <p>Piyush Joshi</p>
          <div>
            <img src="./msg.png" width="21px" height="21px" alt="" />
            <img src="./phone.png" width="21px" height="21px" alt="" />
          </div>{" "}
        </div>
      </div>
      <div className={styles.users}>
        <div className={styles.profilePicture}>
          <img src="./avatar.png" alt="" />
        </div>
        <div className={styles.usersInfo}>
          <p>Sreeja Maheshwari</p>
          <div>
            <img src="./msg.png" width="21px" height="21px" alt="" />
            <img src="./phone.png" width="21px" height="21px" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.users}>
        <div className={styles.profilePicture}>
          <img src="./avatar.png" alt="" />
        </div>
        <div className={styles.usersInfo}>
          <p>Neha Trivedi</p>
          <div>
            <img src="./msg.png" width="21px" height="21px" alt="" />
            <img src="./phone.png" width="21px" height="21px" alt="" />
          </div>{" "}
        </div>
      </div>
      <button className={styles.memberButton}>ADD Member</button>
    </div>
  );
};

export default Team;

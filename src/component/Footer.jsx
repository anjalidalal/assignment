import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.todo}>
        <h1>To-Do</h1>
        <div className={styles.checkbox}>
          {" "}
          <input type="checkbox" checked />
          <label>Call Rohan</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" checked />
          <label>Call Rohan</label>
        </div>
        <div className={styles.checkbox}>
          {" "}
          <input type="checkbox" checked />
          <label>Fix navbar bug issues</label>
        </div>
        <button className={styles.taskButton}>Add Task</button>
      </div>
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
    </div>
  );
};

export default Footer;
